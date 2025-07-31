import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MousePointer,
  Zap,
  Trophy,
  RotateCcw,
  Users,
  Crown,
  Medal,
  Clock,
  Edit3,
  Save,
  X,
} from "lucide-react";
import ClickSpark from "./ClickSpark";

interface LeaderboardEntry {
  userId: string;
  username: string;
  clicks: number;
  lastClick: string;
  joinedAt: string;
  customName?: string;
}

interface ClickCounterProps {
  initialCount?: number;
  className?: string;
  showMilestones?: boolean;
  milestoneValues?: number[];
  persistData?: boolean;
  storageKey?: string;
}

const ClickCounter: React.FC<ClickCounterProps> = ({
  className = "",
  persistData = true,
  storageKey = "mimir-leaderboard",
}) => {
  const [currentUser, setCurrentUser] = useState<LeaderboardEntry | null>(null);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [sessionClicks, setSessionClicks] = useState(0);
  const [_showLeaderboard, _setShowLeaderboard] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [customName, setCustomName] = useState("");
  const [clicksThisHour, setClicksThisHour] = useState(0);
  const [hourResetTime, setHourResetTime] = useState<Date | null>(null);

  // Generate or retrieve unique user ID
  const getUserId = (): string => {
    if (typeof window === "undefined") return "";

    let userId = localStorage.getItem("mimir-user-id");
    if (!userId) {
      userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem("mimir-user-id", userId);
    }
    return userId;
  };

  // Generate username from user ID
  const generateUsername = (userId: string): string => {
    const adjectives = [
      "Swift",
      "Bold",
      "Clever",
      "Bright",
      "Sharp",
      "Quick",
      "Smart",
      "Wise",
    ];
    const nouns = [
      "Builder",
      "Coder",
      "Hacker",
      "Dev",
      "Creator",
      "Maker",
      "Artist",
      "Genius",
    ];

    const hash = userId.split("").reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);

    const adjective = adjectives[Math.abs(hash) % adjectives.length];
    const noun = nouns[Math.abs(hash >> 8) % nouns.length];
    const number = (Math.abs(hash >> 16) % 999) + 1;

    return `${adjective}${noun}${number}`;
  };

  // Check and update hourly click limit
  const checkHourlyLimit = (): boolean => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentDate = now.getDate();

    const storedHourData = localStorage.getItem("mimir-hourly-clicks");
    if (storedHourData) {
      const { hour, date, clicks } = JSON.parse(storedHourData);

      // If it's a new hour or new day, reset the counter
      if (hour !== currentHour || date !== currentDate) {
        const newHourData = {
          hour: currentHour,
          date: currentDate,
          clicks: 0,
        };
        localStorage.setItem(
          "mimir-hourly-clicks",
          JSON.stringify(newHourData)
        );
        setClicksThisHour(0);
        setHourResetTime(
          new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate(),
            now.getHours() + 1,
            0,
            0
          )
        );
        return true;
      } else {
        setClicksThisHour(clicks);
        const nextHour = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          now.getHours() + 1,
          0,
          0
        );
        setHourResetTime(nextHour);
        return clicks < 100;
      }
    } else {
      // First time, initialize
      const newHourData = {
        hour: currentHour,
        date: currentDate,
        clicks: 0,
      };
      localStorage.setItem("mimir-hourly-clicks", JSON.stringify(newHourData));
      setClicksThisHour(0);
      const nextHour = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        now.getHours() + 1,
        0,
        0
      );
      setHourResetTime(nextHour);
      return true;
    }
  };

  // Update hourly click count
  const updateHourlyClicks = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentDate = now.getDate();

    const storedHourData = localStorage.getItem("mimir-hourly-clicks");
    if (storedHourData) {
      const { clicks } = JSON.parse(storedHourData);
      const newClicks = clicks + 1;

      const newHourData = {
        hour: currentHour,
        date: currentDate,
        clicks: newClicks,
      };
      localStorage.setItem("mimir-hourly-clicks", JSON.stringify(newHourData));
      setClicksThisHour(newClicks);
    }
  };

  // Load leaderboard data
  useEffect(() => {
    if (persistData && typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(storageKey);
        if (saved) {
          const data = JSON.parse(saved);
          setLeaderboard(data.leaderboard || []);
        }
      } catch (error) {
        console.warn("Failed to load leaderboard data:", error);
      }
    }
  }, [persistData, storageKey]);

  // Initialize current user and check hourly limit
  useEffect(() => {
    const userId = getUserId();
    const username = generateUsername(userId);

    // Load custom name if exists
    const savedCustomName = localStorage.getItem("mimir-custom-name");
    if (savedCustomName) {
      setCustomName(savedCustomName);
    }

    // Check hourly limit
    checkHourlyLimit();

    // Find existing user or create new one
    const existingUser = leaderboard.find(entry => entry.userId === userId);
    if (existingUser) {
      setCurrentUser(existingUser);
    } else {
      const newUser: LeaderboardEntry = {
        userId,
        username,
        clicks: 0,
        lastClick: new Date().toISOString(),
        joinedAt: new Date().toISOString(),
        customName: savedCustomName || undefined,
      };
      setCurrentUser(newUser);
    }
  }, [leaderboard]);

  // Save leaderboard data
  useEffect(() => {
    if (
      persistData &&
      typeof window !== "undefined" &&
      leaderboard.length > 0
    ) {
      try {
        localStorage.setItem(
          storageKey,
          JSON.stringify({
            leaderboard,
            lastUpdated: new Date().toISOString(),
          })
        );
      } catch (error) {
        console.warn("Failed to save leaderboard data:", error);
      }
    }
  }, [leaderboard, persistData, storageKey]);

  const handleClick = useCallback(() => {
    if (!currentUser) return;

    // Check hourly limit
    if (!checkHourlyLimit()) {
      return; // Click limit reached
    }

    const newClicks = currentUser.clicks + 1;
    const newSessionClicks = sessionClicks + 1;

    // Update hourly click count
    updateHourlyClicks();

    const updatedUser: LeaderboardEntry = {
      ...currentUser,
      clicks: newClicks,
      lastClick: new Date().toISOString(),
      customName: customName || undefined,
    };

    setCurrentUser(updatedUser);
    setSessionClicks(newSessionClicks);

    // Update leaderboard
    setLeaderboard(prev => {
      const existingIndex = prev.findIndex(
        entry => entry.userId === currentUser.userId
      );
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = updatedUser;
        return updated.sort((a, b) => b.clicks - a.clicks);
      } else {
        return [...prev, updatedUser].sort((a, b) => b.clicks - a.clicks);
      }
    });
  }, [currentUser, sessionClicks, customName]);

  const handleReset = useCallback(() => {
    if (!currentUser) return;

    const resetUser: LeaderboardEntry = {
      ...currentUser,
      clicks: 0,
      lastClick: new Date().toISOString(),
    };

    setCurrentUser(resetUser);
    setSessionClicks(0);

    // Update leaderboard
    setLeaderboard(prev => {
      const existingIndex = prev.findIndex(
        entry => entry.userId === currentUser.userId
      );
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = resetUser;
        return updated.sort((a, b) => b.clicks - a.clicks);
      }
      return prev;
    });
  }, [currentUser]);

  const handleSaveCustomName = () => {
    if (customName.trim()) {
      localStorage.setItem("mimir-custom-name", customName.trim());
      setIsEditingName(false);

      // Update current user with custom name
      if (currentUser) {
        const updatedUser = {
          ...currentUser,
          customName: customName.trim(),
        };
        setCurrentUser(updatedUser);

        // Update leaderboard
        setLeaderboard(prev => {
          const existingIndex = prev.findIndex(
            entry => entry.userId === currentUser.userId
          );
          if (existingIndex >= 0) {
            const updated = [...prev];
            updated[existingIndex] = updatedUser;
            return updated;
          }
          return prev;
        });
      }
    }
  };

  const getCountDisplay = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  const getCountColor = (count: number) => {
    if (count >= 1000) return "text-yellow-400";
    if (count >= 500) return "text-orange-400";
    if (count >= 100) return "text-red-400";
    if (count >= 50) return "text-purple-400";
    if (count >= 10) return "text-blue-400";
    return "text-primary";
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-4 h-4 text-yellow-400" />;
      case 2:
        return <Medal className="w-4 h-4 text-gray-300" />;
      case 3:
        return <Medal className="w-4 h-4 text-orange-500" />;
      default:
        return (
          <span className="text-xs font-bold text-text-secondary">#{rank}</span>
        );
    }
  };

  const formatTimeUntilReset = () => {
    if (!hourResetTime) return "";
    const now = new Date();
    const diff = hourResetTime.getTime() - now.getTime();
    const minutes = Math.floor(diff / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  if (!currentUser) {
    return <div className="text-center text-text-secondary">Loading...</div>;
  }

  const displayName = currentUser.customName || currentUser.username;
  const canClick = clicksThisHour < 100;

  return (
    <div className={`relative ${className}`}>
      {/* Main Layout - Leaderboard on left, Clicker on right */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Leaderboard Section - Left Side */}
        <div className="w-full lg:w-1/2">
          <div className="bg-surface/60 backdrop-blur-sm border border-border/30 rounded-lg p-4">
            <h3 className="text-center text-sm font-bold text-primary mb-3">
              Lock-in Leaderboard
            </h3>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {leaderboard.slice(0, 10).map((entry, index) => {
                const rank = index + 1;
                const isCurrentUser = entry.userId === currentUser.userId;
                const displayName = entry.customName || entry.username;

                return (
                  <motion.div
                    key={entry.userId}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center justify-between p-2 rounded-lg ${
                      isCurrentUser
                        ? "bg-primary/20 border border-primary/30"
                        : "bg-surface/40"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {getRankIcon(rank)}
                      <span
                        className={`text-sm font-medium ${
                          isCurrentUser ? "text-primary" : "text-text-primary"
                        }`}
                      >
                        {displayName}
                      </span>
                      {isCurrentUser && (
                        <span className="text-xs text-primary">(You)</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-text-secondary">
                        {getCountDisplay(entry.clicks)}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Clicker Section - Right Side */}
        <div className="w-full lg:w-1/2">
          {/* Main Counter */}
          <ClickSpark
            sparkColor="#0ea5e9"
            sparkSize={8}
            sparkRadius={20}
            sparkCount={6}
            duration={600}
            extraScale={1.2}
          >
            <motion.div
              className={`relative select-none ${canClick ? "cursor-pointer" : "cursor-not-allowed"}`}
              onClick={canClick ? handleClick : undefined}
              whileHover={canClick ? { scale: 1.05 } : {}}
              whileTap={canClick ? { scale: 0.95 } : {}}
            >
              <div
                className={`bg-surface/80 backdrop-blur-md border border-border/50 rounded-2xl p-8 shadow-xl transition-all duration-300 ${
                  canClick
                    ? "hover:shadow-2xl hover:border-primary/30"
                    : "opacity-60"
                }`}
              >
                <div className="text-center space-y-4">
                  {/* User Info */}
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <p className="text-text-secondary text-sm font-medium">
                        {displayName}
                      </p>
                      <motion.button
                        onClick={e => {
                          e.stopPropagation();
                          setIsEditingName(true);
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-primary hover:text-secondary transition-colors"
                      >
                        <Edit3 className="w-3 h-3" />
                      </motion.button>
                    </div>
                    <p className="text-text-muted text-xs">
                      Locked in since{" "}
                      {new Date(currentUser.joinedAt).toLocaleDateString()}
                    </p>
                  </div>

                  {/* Hourly Limit Display */}
                  <div className="flex items-center justify-center gap-2 text-xs text-text-secondary">
                    <Clock className="w-3 h-3" />
                    <span>{clicksThisHour}/100 clicks this hour</span>
                    {!canClick && hourResetTime && (
                      <span className="text-orange-400">
                        (Reset in {formatTimeUntilReset()})
                      </span>
                    )}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="flex justify-center"
                    animate={{ rotate: currentUser.clicks % 2 === 0 ? 0 : 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MousePointer
                      className={`w-8 h-8 ${canClick ? "text-primary" : "text-text-muted"}`}
                    />
                  </motion.div>

                  {/* Counter Display */}
                  <div className="space-y-2">
                    <motion.div
                      key={currentUser.clicks}
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`text-4xl md:text-6xl font-bold ${getCountColor(currentUser.clicks)} transition-colors duration-300`}
                    >
                      {getCountDisplay(currentUser.clicks)}
                    </motion.div>

                    <p className="text-text-secondary text-sm font-medium">
                      Clicks
                    </p>
                  </div>

                  {/* Click Prompt */}
                  <motion.div
                    className={`text-xs ${canClick ? "text-text-muted" : "text-orange-400"}`}
                    animate={canClick ? { opacity: [0.5, 1, 0.5] } : {}}
                    transition={{
                      duration: 2,
                      repeat: canClick ? Infinity : 0,
                    }}
                  >
                    {canClick ? "Click to lock in!" : "Hourly limit reached!"}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </ClickSpark>

          {/* Stats Display */}
          {currentUser.clicks > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-center"
            >
              <div className="bg-surface/60 backdrop-blur-sm border border-border/30 rounded-lg p-3">
                <div className="flex items-center justify-center gap-4 text-xs text-text-secondary flex-wrap">
                  <div className="flex items-center gap-1">
                    <Zap className="w-3 h-3 text-primary" />
                    <span>Session: {sessionClicks}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Trophy className="w-3 h-3 text-yellow-400" />
                    <span>
                      Rank: #
                      {leaderboard.findIndex(
                        entry => entry.userId === currentUser.userId
                      ) + 1}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-blue-400" />
                    <span>Total Users: {leaderboard.length}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Reset Button */}
          {currentUser.clicks > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 text-center"
            >
              <motion.button
                onClick={handleReset}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-surface/40 hover:bg-surface/60 border border-border/30 hover:border-primary/30 rounded-lg px-4 py-2 text-xs text-text-secondary hover:text-primary transition-all duration-200 flex items-center gap-2 mx-auto"
              >
                <RotateCcw className="w-3 h-3" />
                Reset Counter
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Custom Name Editor */}
      <AnimatePresence>
        {isEditingName && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute inset-0 bg-surface/90 backdrop-blur-sm rounded-2xl flex items-center justify-center z-50"
          >
            <div className="bg-surface border border-primary/30 rounded-lg p-4 w-64">
              <h3 className="text-sm font-bold text-primary mb-3 text-center">
                Set Your Name
              </h3>
              <input
                type="text"
                value={customName}
                onChange={e => setCustomName(e.target.value)}
                placeholder="Enter your name..."
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-text-primary text-sm focus:outline-none focus:border-primary"
                maxLength={20}
                autoFocus
              />
              <div className="flex gap-2 mt-3">
                <motion.button
                  onClick={handleSaveCustomName}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-primary hover:bg-primary/80 text-background px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1"
                >
                  <Save className="w-3 h-3" />
                  Save
                </motion.button>
                <motion.button
                  onClick={() => {
                    setIsEditingName(false);
                    setCustomName(currentUser.customName || "");
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-surface hover:bg-surface/80 border border-border text-text-secondary px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1"
                >
                  <X className="w-3 h-3" />
                  Cancel
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClickCounter;
