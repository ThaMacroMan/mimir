"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  Bot,
  Zap,
  Link as LinkIcon,
  GraduationCap,
  Palette,
  Briefcase,
  Rocket,
  BookOpen,
  Code,
  Users,
  Globe,
  GitBranch,
  Target,
  Video,
} from "lucide-react";

interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  href?: string;
  isHero?: boolean;
  isChat?: boolean;
  isLearning?: boolean;
}

const bentoItems: BentoItem[] = [
  // Hero Section - Large featured area
  {
    title: "Become a Builder",
    description:
      "Transform from beginner to Cardano developer with AI-powered tools. No programming experience required.",
    icon: <Sparkles className="w-8 h-8" />,
    className: "md:col-span-2 md:row-span-2",
    href: "/docs/ai-tools",
    isHero: true,
  },
  // Project-Based Learning
  {
    title: "PBL: Project-Based Learning",
    description:
      "Learn by building real Cardano projects. Hands-on experience with AI assistance throughout your journey.",
    icon: <Target className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-3",
    href: "/docs/pbl",
    isChat: true,
  },
  // AI Tools Setup
  {
    title: "AI Tools Setup",
    description:
      "Cursor • Windsurf • ChatGPT • MCP Integration • Mnemos Utilities",
    icon: <Rocket className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-2",
    href: "/docs/ai-tools",
    isLearning: true,
  },
  // First Cardano Project
  {
    title: "First Project",
    description:
      "Build your first 'hello-world' Cardano transaction with AI assistance.",
    icon: <Code className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1",
    href: "/docs/first-project",
  },
  // GitHub Workflow
  {
    title: "GitHub Workflow",
    description:
      "Learn branches, PRs, CI checks, and collaborative development practices.",
    icon: <GitBranch className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1",
    href: "/docs/github-workflow",
  },
  // Cardano APIs
  {
    title: "Cardano APIs",
    description: "Blockfrost • Taptools • Charlie3 • DexHunter • On-chain data",
    icon: <LinkIcon className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1",
    href: "/docs/apis",
  },
  // Practice Workflow
  {
    title: "Practice Workflow",
    description:
      "Goal-oriented, provable practice with incentives for completion.",
    icon: <Target className="w-6 h-6" />,
    href: "/docs/practice",
  },
  // Live Coding
  {
    title: "Live Coding",
    description:
      "Watch recorded sessions and interactive classes on Mesh YouTube.",
    icon: <Video className="w-6 h-6" />,
    href: "/docs/live-coding",
  },
  // Community
  {
    title: "Community",
    description:
      "Join the Mesh Discord community for support and collaboration.",
    icon: <Users className="w-6 h-6" />,
    className: "md:col-span-2",
    href: "/community",
  },
];

export default function MagicBento() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInView, setIsMouseInView] = useState(false);
  const [cardPositions, setCardPositions] = useState<
    Array<{
      x: number;
      y: number;
      width: number;
      height: number;
    }>
  >([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsMouseInView(true);
    const handleMouseLeave = () => setIsMouseInView(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Update card positions when component mounts or window resizes
  useEffect(() => {
    const updateCardPositions = () => {
      const positions = cardRefs.current.map(ref => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          return {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
            width: rect.width,
            height: rect.height,
          };
        }
        return { x: 0, y: 0, width: 0, height: 0 };
      });
      setCardPositions(positions);
    };

    // Initial update
    updateCardPositions();

    // Update on window resize
    window.addEventListener("resize", updateCardPositions);
    return () => window.removeEventListener("resize", updateCardPositions);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-4">
      {/* Mimir Badge - positioned lower */}
      <motion.div
        className="flex justify-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full text-sm text-primary backdrop-blur-sm shadow-lg">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/50"></div>
          <span className="font-mono font-semibold tracking-wider">
            MIMIR v1.0.0
          </span>
          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[140px]">
        {bentoItems.map((item, index) => {
          const cardPosition = cardPositions[index] || {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
          };

          // Calculate distance from mouse to card center
          const distance = Math.sqrt(
            Math.pow(mousePosition.x - cardPosition.x, 2) +
              Math.pow(mousePosition.y - cardPosition.y, 2)
          );

          // Calculate repulsion force (stronger when closer)
          const maxDistance = 150; // Reduced for more responsive effect
          const repulsionStrength = Math.max(
            0,
            (maxDistance - distance) / maxDistance
          );
          const repulsionForce = repulsionStrength * 25; // Increased push distance

          // Calculate direction from mouse to card
          const angle = Math.atan2(
            cardPosition.y - mousePosition.y,
            cardPosition.x - mousePosition.x
          );
          const pushX = Math.cos(angle) * repulsionForce;
          const pushY = Math.sin(angle) * repulsionForce;

          return (
            <motion.div
              ref={el => {
                cardRefs.current[index] = el;
              }}
              key={item.title}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-surface/60 to-background/60 border border-primary/20 backdrop-blur-sm ${item.className || ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{
                x: isMouseInView && distance < maxDistance ? pushX : 0,
                y: isMouseInView && distance < maxDistance ? pushY : 0,
                rotate:
                  isMouseInView && distance < maxDistance ? 0 : [0, 0.5, 0],
              }}
              transition={{
                duration:
                  isMouseInView && distance < maxDistance
                    ? 0.1
                    : 4 + index * 0.5,
                repeat: isMouseInView && distance < maxDistance ? 0 : Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay:
                  isMouseInView && distance < maxDistance ? 0 : index * 0.1,
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10 h-full p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`text-primary ${item.isHero ? "text-2xl" : ""}`}
                    >
                      {item.icon}
                    </div>
                    <h3
                      className={`font-bold text-primary group-hover:text-secondary transition-colors duration-300 ${
                        item.isHero ? "text-4xl md:text-5xl" : "text-xl"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <p
                    className={`text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300 ${
                      item.isHero ? "text-lg" : "text-sm"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="mt-4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Interactive overlay */}
              {item.href && (
                <motion.a
                  href={item.href}
                  className="absolute inset-0 z-20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
