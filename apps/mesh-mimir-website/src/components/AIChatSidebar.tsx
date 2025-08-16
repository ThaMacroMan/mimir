import { useState, useRef, useEffect, useCallback } from "react";
import { Send, BookOpen, MessageSquare, Link, X } from "lucide-react";
import { MetallicCardanoLogo } from "./MetallicCardanoLogo";
import { useSidebarPersistence } from "../hooks/useSidebarPersistence";
import { usePersona } from "../contexts/PersonaContext";
import { LearnerPersona } from "../types/personas";

interface ResourceSidebarProps {
  width?: number;
  height?: number;
  onWidthChange?: (width: number) => void;
  onHeightChange?: (height: number) => void;
}

type TabType = "resources" | "ai-chat";

// Collapsed width constant
const COLLAPSED_WIDTH = 48;

// Define different resources based on persona
const getPersonaResources = (persona: LearnerPersona | null) => {
  switch (persona) {
    case "brand-new-to-ai":
      return [
        {
          title: "ChatGPT Guide",
          description: "Learn how to use ChatGPT for beginners",
          url: "/docs/chatgpt-guide",
          type: "guide",
        },
        {
          title: "AI Basics",
          description: "Understanding artificial intelligence fundamentals",
          url: "/docs/ai-basics",
          type: "guide",
        },
        {
          title: "Blockchain Basics",
          description: "Simple explanations of blockchain technology",
          url: "/docs/blockchain-basics",
          type: "guide",
        },
        {
          title: "Cardano Explained",
          description: "Learn about Cardano in simple terms",
          url: "/docs/cardano-explained",
          type: "guide",
        },
        {
          title: "Safety Guide",
          description: "How to stay safe while learning blockchain",
          url: "/docs/safety-guide",
          type: "guide",
        },
        {
          title: "Simple Examples",
          description: "Easy-to-follow project examples",
          url: "/docs/example-content",
          type: "examples",
        },
        {
          title: "Help & Support",
          description: "Get help when you're stuck",
          url: "/docs/help",
          type: "support",
        },
      ];

    case "ai-user":
      return [
        {
          title: "Cursor Setup",
          description: "Set up Cursor IDE for AI-powered development",
          url: "/docs/ai-tools/cursor-setup",
          type: "tool",
        },
        {
          title: "Windsurf Integration",
          description: "Connect Windsurf for enhanced AI capabilities",
          url: "/docs/ai-tools/windsurf-setup",
          type: "tool",
        },
        {
          title: "Advanced Prompts",
          description: "Learn to write better AI prompts for better results",
          url: "/docs/advanced-prompts",
          type: "guide",
        },
        {
          title: "AI Best Practices",
          description: "Best practices for AI-assisted development",
          url: "/docs/ai-best-practices",
          type: "guide",
        },
        {
          title: "Blockfrost API",
          description: "Cardano blockchain data and analytics",
          url: "https://blockfrost.io/",
          type: "api",
        },
        {
          title: "DexHunter",
          description: "Cardano DEX aggregator and analytics",
          url: "https://dexhunter.io/",
          type: "tool",
        },
        {
          title: "Taptools",
          description: "Cardano portfolio tracking and analytics",
          url: "https://taptools.io/",
          type: "tool",
        },
      ];

    case "ai-power-user":
      return [
        {
          title: "MCP Integration",
          description: "Model Context Protocol for advanced AI workflows",
          url: "/docs/mcp-integration",
          type: "tool",
        },
        {
          title: "Custom AI Models",
          description: "Fine-tune and deploy custom AI models for development",
          url: "/docs/custom-models",
          type: "tool",
        },
        {
          title: "AI Automation",
          description: "Build automated AI-powered development pipelines",
          url: "/docs/ai-automation",
          type: "tool",
        },
        {
          title: "Cardano Developer Portal",
          description: "Learn about Cardano development and tools",
          url: "https://developers.cardano.org/",
          type: "portal",
        },
        {
          title: "Plutus Documentation",
          description: "Official Plutus smart contract documentation",
          url: "https://docs.cardano.org/plutus/",
          type: "docs",
        },
        {
          title: "Advanced APIs",
          description: "Complex Cardano ecosystem API integrations",
          url: "/docs/advanced-apis",
          type: "api",
        },
        {
          title: "Performance Optimization",
          description: "Optimize your Cardano applications for production",
          url: "/docs/performance",
          type: "guide",
        },
        {
          title: "Security Best Practices",
          description: "Advanced security practices for Cardano development",
          url: "/docs/security",
          type: "guide",
        },
      ];

    default:
      // Default resources for when no persona is selected
      return [
        {
          title: "Mesh MCP",
          description: "Model Context Protocol for MeshJS development tools",
          url: "https://meshjs.dev/mcp",
          type: "tool",
        },
        {
          title: "Mesh Documentation",
          description: "Official MeshJS documentation and API reference",
          url: "https://meshjs-docs.vercel.app/",
          type: "docs",
        },
        {
          title: "Project Ideas",
          description: "Inspiration and starter templates for Cardano projects",
          url: "https://meshjs.dev/projects",
          type: "ideas",
        },
        {
          title: "Cardano Developer Portal",
          description: "Learn about Cardano development and tools",
          url: "https://developers.cardano.org/",
          type: "portal",
        },
        {
          title: "Blockfrost API",
          description: "Cardano blockchain data and analytics",
          url: "https://blockfrost.io/",
          type: "api",
        },
        {
          title: "DexHunter",
          description: "Cardano DEX aggregator and analytics",
          url: "https://dexhunter.io/",
          type: "tool",
        },
        {
          title: "Taptools",
          description: "Cardano portfolio tracking and analytics",
          url: "https://taptools.io/",
          type: "tool",
        },
      ];
  }
};

export default function ResourceSidebar({
  width: externalWidth,
  height: externalHeight,
  onWidthChange,
  onHeightChange,
}: ResourceSidebarProps) {
  const { selectedPersona } = usePersona();
  const resources = getPersonaResources(selectedPersona);

  // Initialize persistence hook
  const {
    state: persistedState,
    updateState: updatePersistedState,
    isLoaded: isPersistedStateLoaded,
  } = useSidebarPersistence({
    sidebarId: "ai-chat-sidebar",
    defaultState: {
      collapsed: true,
      width: externalWidth || COLLAPSED_WIDTH,
      height: externalHeight || 800,
      top: 16,
      activeTab: "resources",
    },
  });

  const [collapsed, setCollapsed] = useState(persistedState.collapsed);
  const [width, setWidth] = useState(persistedState.width);
  const [animatingWidth, setAnimatingWidth] = useState(persistedState.width); // For smooth transitions
  const [height, setHeight] = useState(persistedState.height); // Start with fallback, will be updated on client
  const [top, setTop] = useState(persistedState.top); // Vertical position of sidebar
  const [dragging, setDragging] = useState(false);
  const [draggingVertical, setDraggingVertical] = useState(false);
  const [draggingPosition, setDraggingPosition] = useState(false);
  const [maxWidth, setMaxWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth / 2 : 600
  );
  const [maxHeight, setMaxHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight - 32 : 800
  );
  const [isClient, setIsClient] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>(
    (persistedState.activeTab as TabType) || "resources"
  );
  const sidebarRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);
  const dragStartWidth = useRef<number | null>(null);
  const dragStartY = useRef<number | null>(null);
  const dragStartHeight = useRef<number | null>(null);
  const dragStartTop = useRef<number | null>(null);

  // Animation states
  const [isAnimating, setIsAnimating] = useState(false);

  // Get persona-specific welcome messages
  const getWelcomeMessages = (persona: LearnerPersona | null) => {
    switch (persona) {
      case "brand-new-to-ai":
        return [
          {
            from: "ai",
            text: "Hi! I'm here to help you learn about AI and blockchain. Don't worry if you're new to this - I'll guide you step by step!",
          },
          {
            from: "user",
            text: "I'm completely new to AI. Where should I start?",
          },
          {
            from: "ai",
            text: "Great question! Let's start with the basics. I recommend beginning with ChatGPT - it's the most user-friendly AI tool. Would you like me to explain what AI is first, or should we jump right into trying ChatGPT?",
          },
        ];
      case "ai-user":
        return [
          {
            from: "ai",
            text: "Welcome back! I'm here to help you level up your AI skills and build more complex Cardano projects. What would you like to work on today?",
          },
          {
            from: "user",
            text: "I want to set up Cursor for better AI development",
          },
          {
            from: "ai",
            text: "Excellent choice! Cursor is a powerful AI-powered IDE. I can help you set it up and show you some advanced features. Would you like to start with the basic setup, or do you have any specific questions about Cursor's AI capabilities?",
          },
        ];
      case "ai-power-user":
        return [
          {
            from: "ai",
            text: "Hello! I'm ready to help you push the boundaries of AI-assisted development. What advanced AI techniques or complex Cardano development are you working on?",
          },
          {
            from: "user",
            text: "I want to integrate MCP for advanced AI workflows",
          },
          {
            from: "ai",
            text: "Perfect! Model Context Protocol (MCP) is cutting-edge for AI development. I can help you set up custom MCP servers, integrate with advanced AI models, and create sophisticated development pipelines. What specific MCP functionality are you looking to implement?",
          },
        ];
      default:
        return [
          {
            from: "ai",
            text: "Hi! I'm your AI coding buddy. Ask me anything!",
          },
          { from: "user", text: "How do I send a Cardano transaction?" },
          { from: "ai", text: "Great question! Here's a quick guide..." },
        ];
    }
  };

  const [messages, setMessages] = useState(() =>
    getWelcomeMessages(selectedPersona)
  );

  // Update messages when persona changes
  useEffect(() => {
    setMessages(getWelcomeMessages(selectedPersona));
  }, [selectedPersona]);

  // Update internal state when external props change
  useEffect(() => {
    if (externalWidth !== undefined) {
      setWidth(externalWidth);
    }
  }, [externalWidth]);

  useEffect(() => {
    if (externalHeight !== undefined) {
      setHeight(externalHeight);
    }
  }, [externalHeight]);

  // Notify parent of changes
  const updateWidth = useCallback(
    (newWidth: number) => {
      setWidth(newWidth);
      setAnimatingWidth(newWidth);
      onWidthChange?.(newWidth);
    },
    [onWidthChange]
  );

  const updateHeight = useCallback(
    (newHeight: number) => {
      setHeight(newHeight);
      onHeightChange?.(newHeight);
    },
    [onHeightChange]
  );

  // Create refs for all messages upfront to avoid conditional hooks
  const messageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);
  const prevMessagesLength = useRef(messages.length);

  // Sync with persisted state when it loads
  useEffect(() => {
    if (isPersistedStateLoaded) {
      setCollapsed(persistedState.collapsed);
      setWidth(persistedState.width);
      setAnimatingWidth(persistedState.width);
      setHeight(persistedState.height);
      setTop(Math.max(16, persistedState.top));
      if (persistedState.activeTab) {
        setActiveTab(persistedState.activeTab as TabType);
      }
    }
  }, [isPersistedStateLoaded, persistedState]);

  // Set client-side flag and update maxWidth on window resize
  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      const newMaxWidth = window.innerWidth / 2;
      const newMaxHeight = window.innerHeight - 32;
      setMaxWidth(newMaxWidth);
      setMaxHeight(newMaxHeight);
      setWidth(w => Math.min(w, newMaxWidth));
      // Always set to full height on initial load and resize (unless external height is provided)
      if (!externalHeight) {
        setHeight(newMaxHeight);
      }
    };
    handleResize(); // Call immediately
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [externalHeight]);

  // Only scroll to bottom when a new message is added
  useEffect(() => {
    if (messages.length > prevMessagesLength.current) {
      setTimeout(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    prevMessagesLength.current = messages.length;
  }, [messages.length]);

  // Handle click to expand when collapsed
  const handleCollapsedClick = () => {
    if (collapsed) {
      setIsAnimating(true);
      setCollapsed(false);
      setWidth(260); // Expand to default width
      setAnimatingWidth(260);
      updatePersistedState({ collapsed: false, width: 260 });
      // Reset animation state after transition
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  // Ensure proper scroll position on initial load
  useEffect(() => {
    if (messages.length > 0 && !collapsed && activeTab === "ai-chat") {
      setTimeout(() => {
        const chatContainer = document.querySelector(".chat-scroll");
        if (chatContainer) {
          chatContainer.scrollTop = chatContainer.scrollHeight;
        }
      }, 200);
    }
  }, [collapsed, activeTab, messages.length]);

  // Ensure first message is always visible on load
  useEffect(() => {
    if (messages.length > 0 && !collapsed && activeTab === "ai-chat") {
      const chatContainer = document.querySelector(".chat-scroll");
      if (chatContainer) {
        chatContainer.scrollTop = 0;
      }
    }
  }, [collapsed, activeTab, messages.length]);

  useEffect(() => {
    if (!dragging && !draggingVertical && !draggingPosition) return;
    let animationFrameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
        // Handle horizontal dragging for width
        if (
          dragging &&
          dragStartX.current !== null &&
          dragStartWidth.current !== null &&
          sidebarRef.current
        ) {
          const delta = dragStartX.current - e.clientX;
          const newWidth = Math.min(
            Math.max(dragStartWidth.current + delta, COLLAPSED_WIDTH),
            maxWidth
          );
          updateWidth(newWidth);
          const newCollapsed = newWidth <= COLLAPSED_WIDTH;
          setCollapsed(newCollapsed);
          updatePersistedState({ width: newWidth, collapsed: newCollapsed });
        }

        // Handle vertical dragging for height (bottom handle only)
        if (
          draggingVertical &&
          dragStartY.current !== null &&
          dragStartHeight.current !== null
        ) {
          const deltaY = e.clientY - dragStartY.current;

          // Bottom handle: height increases as we drag down, decreases as we drag up
          const newHeight = Math.min(
            Math.max(dragStartHeight.current + deltaY, 200), // Minimum height of 200px
            maxHeight
          );

          // Prevent expanding off-screen by adjusting top position if needed
          const maxAllowedHeight = window.innerHeight - top - 16; // 16px margin from bottom
          if (newHeight > maxAllowedHeight) {
            const adjustedHeight = maxAllowedHeight;
            const adjustedTop = Math.max(
              16,
              window.innerHeight - adjustedHeight - 16
            );
            setTop(adjustedTop);
            updateHeight(adjustedHeight);
          } else {
            updateHeight(newHeight);
            updatePersistedState({ height: newHeight });
          }
        }

        // Handle position dragging (moving the entire sidebar up/down)
        if (
          draggingPosition &&
          dragStartY.current !== null &&
          dragStartTop.current !== null
        ) {
          const deltaY = e.clientY - dragStartY.current;
          const newTop = Math.min(
            Math.max(dragStartTop.current + deltaY, 16), // Minimum top position
            window.innerHeight - height - 16 // Maximum top position (keep sidebar in view)
          );
          setTop(newTop);
          updatePersistedState({ top: newTop });
        }
      });
    };
    const handleMouseUp = () => {
      setDragging(false);
      setDraggingVertical(false);
      setDraggingPosition(false);
      dragStartX.current = null;
      dragStartWidth.current = null;
      dragStartY.current = null;
      dragStartHeight.current = null;
      dragStartTop.current = null;

      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [
    dragging,
    draggingVertical,
    draggingPosition,
    maxWidth,
    maxHeight,
    height,
    top,
    updateHeight,
    updatePersistedState,
    updateWidth,
  ]);

  return (
    <div
      style={{
        position: "fixed",
        right: "16px",
        top: `${top}px`,
        width: collapsed ? COLLAPSED_WIDTH : width,
        height: height,
        zIndex: 40,
      }}
    >
      <aside
        ref={sidebarRef}
        style={
          {
            width: animatingWidth,
            minWidth: collapsed ? 0 : 120,
            maxWidth: collapsed ? COLLAPSED_WIDTH : maxWidth,
            transition:
              dragging || draggingVertical
                ? "none"
                : "width 0.6s cubic-bezier(0.4, 0, 0.2, 1), height 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            height: height,
            top: 0,
            bottom: 0,
            position: "absolute",
            right: 0,
            zIndex: 40,
            "--resource-sidebar-width": `${animatingWidth}px`,
          } as React.CSSProperties & { "--resource-sidebar-width": string }
        }
        className={`bg-surface/30 backdrop-blur-md flex flex-col shadow-2xl rounded-3xl overflow-hidden isolate transition-all duration-500 ease-out ${
          collapsed ? "cursor-pointer" : ""
        } ${isAnimating ? "animate-pulse" : ""}`}
        aria-label="Resource sidebar"
        onClick={collapsed ? handleCollapsedClick : undefined}
        title={collapsed ? "Click to expand" : ""}
      >
        {/* Horizontal Drag Handle */}
        <div
          className={`absolute left-0 top-0 h-full w-1 cursor-ew-resize z-50 group ${dragging ? "bg-primary" : "bg-transparent hover:bg-primary/30"}`}
          onMouseDown={e => {
            if (e.button === 0) {
              setDragging(true);
              dragStartX.current = e.clientX;
              dragStartWidth.current = width;
              e.preventDefault();
              e.stopPropagation();
            }
          }}
        />

        {/* Vertical Drag Handle (bottom only) */}
        <div
          className={`absolute left-0 bottom-0 w-full h-1 cursor-ns-resize z-50 group ${draggingVertical ? "bg-primary" : "bg-transparent hover:bg-primary/30"}`}
          onMouseDown={e => {
            if (e.button === 0) {
              setDraggingVertical(true);
              dragStartY.current = e.clientY;
              dragStartHeight.current = height;
              e.preventDefault();
              e.stopPropagation();
            }
          }}
        />

        {/* Collapsed state: show both icons at top */}
        {collapsed ? (
          <div className="flex flex-col items-center justify-center gap-8 h-full px-2">
            <button
              onClick={() => {
                setIsAnimating(true);
                setCollapsed(false);
                setWidth(260);
                setAnimatingWidth(260);
                updatePersistedState({
                  collapsed: false,
                  width: 260,
                  activeTab: "resources",
                });
                setActiveTab("resources");
                setTimeout(() => setIsAnimating(false), 600);
              }}
              onMouseDown={e => e.stopPropagation()}
              className="text-primary hover:text-primary-hover transition-all duration-300 ease-out cursor-pointer hover:scale-105"
            >
              <Link className="w-5 h-5" />
            </button>
            <button
              onClick={() => {
                setIsAnimating(true);
                setCollapsed(false);
                setWidth(260);
                setAnimatingWidth(260);
                updatePersistedState({
                  collapsed: false,
                  width: 260,
                  activeTab: "ai-chat",
                });
                setActiveTab("ai-chat");
                setTimeout(() => setIsAnimating(false), 600);
              }}
              onMouseDown={e => e.stopPropagation()}
              className="text-primary hover:text-primary-hover transition-all duration-300 ease-out cursor-pointer hover:scale-105"
            >
              <MessageSquare className="w-5 h-5" />
            </button>
          </div>
        ) : !isClient ? (
          // Loading state while client-side calculations are being set up
          <div className="flex flex-col items-center justify-center flex-1">
            <BookOpen className="w-5 h-5 text-primary" />
          </div>
        ) : (
          <>
            {/* Sidebar Title */}
            <div
              className={`border-b border-border px-4 py-3 bg-surface-elevated rounded-t-3xl transition-all duration-300 ease-out ${collapsed ? "opacity-0 pointer-events-none h-0 overflow-hidden" : "opacity-100"}`}
            >
              <div
                className="flex items-center justify-between cursor-move"
                onMouseDown={e => {
                  if (e.button === 0) {
                    setDraggingPosition(true);
                    dragStartY.current = e.clientY;
                    dragStartTop.current = top;
                    e.preventDefault();
                    e.stopPropagation();
                  }
                }}
              >
                <div className="flex items-center gap-2">
                  <MetallicCardanoLogo size={24} className="flex-shrink-0" />
                  <span className="font-display font-semibold text-text-primary text-sm">
                    RESOURCES & AI CHAT
                  </span>
                </div>
                <button
                  onClick={() => {
                    setCollapsed(true);
                    setWidth(COLLAPSED_WIDTH);
                    updatePersistedState({
                      collapsed: true,
                      width: COLLAPSED_WIDTH,
                    });
                  }}
                  onMouseDown={e => e.stopPropagation()}
                  className="p-1 rounded-full hover:bg-surface/50 text-text-secondary hover:text-primary transition-colors duration-200"
                  title="Collapse sidebar"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-border/30 bg-surface-elevated/20">
              <button
                onClick={() => {
                  setActiveTab("resources");
                  updatePersistedState({ activeTab: "resources" });
                }}
                onMouseDown={e => e.stopPropagation()}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium transition-all duration-200 ${
                  activeTab === "resources"
                    ? "text-primary bg-primary/10 border-b-2 border-primary"
                    : "text-text-secondary hover:text-primary hover:bg-surface-elevated/50"
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Resources</span>
              </button>
              <button
                onClick={() => {
                  setActiveTab("ai-chat");
                  updatePersistedState({ activeTab: "ai-chat" });
                }}
                onMouseDown={e => e.stopPropagation()}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium transition-all duration-200 ${
                  activeTab === "ai-chat"
                    ? "text-primary bg-primary/10 border-b-2 border-primary"
                    : "text-text-secondary hover:text-primary hover:bg-surface-elevated/50"
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>AI Chat</span>
              </button>
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-hidden">
              {activeTab === "resources" ? (
                /* Resources Tab */
                <div className="h-full overflow-y-auto p-4 space-y-3">
                  {resources.map((resource, idx) => (
                    <a
                      key={idx}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 rounded-lg bg-surface-elevated/50 hover:bg-surface-elevated border border-border/30 hover:border-primary/30 transition-all duration-200 group"
                      onMouseDown={e => e.stopPropagation()}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-text-primary text-sm mb-1 group-hover:text-primary transition-colors">
                            {resource.title}
                          </h4>
                          <p className="text-text-secondary text-xs leading-relaxed">
                            {resource.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                /* AI Chat Tab */
                <div className="h-full flex flex-col bg-surface/20 backdrop-blur-sm min-w-0 overflow-hidden">
                  <div
                    className="w-full h-full overflow-y-auto flex flex-col gap-1 py-1 min-w-0 chat-scroll"
                    style={{
                      paddingTop: "8px",
                      paddingBottom: "24px",
                      marginTop: "0px",
                      width: "100%",
                      maxWidth: "100%",
                      height: "100%",
                    }}
                  >
                    {messages.map((msg, idx) => {
                      // Calculate message style based on available width
                      const availableWidth = width - 32;
                      let fontSize = "12px";
                      let padding = 12;

                      if (availableWidth < 150) {
                        fontSize = "10px";
                        padding = 8;
                      } else if (availableWidth < 200) {
                        fontSize = "11px";
                        padding = 10;
                      } else if (availableWidth > 300) {
                        fontSize = "14px";
                        padding = 16;
                      }

                      return (
                        <div
                          ref={el => {
                            messageRefs.current[idx] = el;
                          }}
                          key={idx}
                          className={`w-fit rounded-lg shadow-sm transition-all duration-300 ${
                            msg.from === "ai"
                              ? "bg-surface-elevated text-text-primary self-start"
                              : "bg-primary/20 text-primary self-end ml-auto"
                          }`}
                          style={{
                            wordBreak: "break-word",
                            padding: `${padding}px`,
                            fontSize: fontSize,
                            opacity: 1,
                            marginLeft: msg.from === "user" ? "auto" : "8px",
                            marginRight: msg.from === "ai" ? "auto" : "8px",
                            minWidth: "60px",
                            width: "fit-content",
                            maxWidth: `${Math.min(availableWidth - 16, 400)}px`,
                          }}
                        >
                          <div
                            className="font-mono text-text-muted mb-1 truncate"
                            style={{
                              fontSize: `${parseInt(fontSize) - 2}px`,
                            }}
                          >
                            {msg.from === "ai" ? "AI" : "You"}
                          </div>
                          <div className="break-words whitespace-pre-wrap">
                            {msg.text}
                          </div>
                        </div>
                      );
                    })}
                    <div ref={chatEndRef} />
                    <div className="h-12" />
                    <div className="h-12" />
                  </div>
                </div>
              )}
            </div>

            {/* Input Box - Only show for AI Chat tab */}
            {activeTab === "ai-chat" && (
              <form
                className="w-full flex items-center gap-2 p-1 bg-surface-elevated rounded-lg mt-1 min-w-0 flex-shrink-0 sticky bottom-0 z-10 rounded-b-lg"
                onSubmit={e => {
                  e.preventDefault();
                  if (input.trim()) {
                    setMessages([...messages, { from: "user", text: input }]);
                    setInput("");
                  }
                }}
                style={{
                  fontSize:
                    width < 150 ? "10px" : width < 200 ? "11px" : "12px",
                  padding: width < 150 ? "2px" : width < 200 ? "3px" : "4px",
                  height: width < 150 ? "24px" : width < 200 ? "28px" : "32px",
                  width: "100%",
                  maxWidth: "100%",
                  position: "absolute",
                  bottom: "8px",
                  left: "8px",
                  right: "8px",
                  zIndex: 20,
                }}
              >
                <input
                  type="text"
                  className="flex-1 bg-transparent text-text-primary border-none focus:outline-none focus:ring-0 font-mono placeholder:text-text-muted min-w-0"
                  placeholder={
                    width < 150
                      ? "..."
                      : width < 200
                        ? "Ask..."
                        : "Ask me anything..."
                  }
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onMouseDown={e => e.stopPropagation()}
                  disabled={collapsed}
                  style={{
                    minWidth:
                      width < 150 ? "15px" : width < 200 ? "20px" : "30px",
                    fontSize: "inherit",
                    flex: 1,
                    maxWidth: "calc(100% - 50px)", // Reserve space for send button
                  }}
                />
                <button
                  type="submit"
                  className="rounded bg-primary text-background font-semibold hover:bg-primary-hover transition-all duration-200 font-mono disabled:opacity-50 flex items-center gap-1 flex-shrink-0"
                  disabled={!input.trim()}
                  onMouseDown={e => e.stopPropagation()}
                  style={{
                    padding:
                      width < 150
                        ? "2px 3px"
                        : width < 200
                          ? "3px 4px"
                          : "4px 6px",
                    fontSize: "inherit",
                    minWidth: "40px", // Guarantee minimum send button width
                    flexShrink: 0,
                    width: "40px", // Fixed width for send button
                  }}
                >
                  <Send
                    className={
                      width < 150
                        ? "w-2 h-2"
                        : width < 200
                          ? "w-2.5 h-2.5"
                          : "w-3 h-3"
                    }
                  />
                  <span className="hidden sm:inline">Send</span>
                </button>
              </form>
            )}
          </>
        )}
      </aside>
    </div>
  );
}
