import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { ReactNode, useEffect, useState, useRef } from "react";
import Sidebar from "./Sidebar";
import AIChatSidebar from "./AIChatSidebar";
import { Terminal } from "./magicui/terminal";

interface BreadcrumbItem {
  label: string;
  href: string;
  icon?: string;
}

interface NextStepItem {
  title: string;
  description: string;
  href: string;
  icon: string;
  primary?: boolean;
}

// Reading progress indicator
function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(latest => {
      setShowScrollToTop(latest > 0.1);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-emerald-400 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollToTop ? 1 : 0,
          scale: showScrollToTop ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-surface border border-border rounded-full shadow-md/20 text-primary transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 z-40"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        aria-label="Scroll to top"
      >
        {/* Use a heroicon chevron-up for consistency */}
        <svg
          className="w-7 h-7 mx-auto"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </motion.button>
    </>
  );
}

function Breadcrumb() {
  const router = useRouter();
  const path = router.asPath;

  // Define breadcrumb mappings for better UX
  const breadcrumbMap: Record<string, BreadcrumbItem[]> = {
    "/": [{ label: "Home", href: "/", icon: "🏠" }],
    "/docs": [
      { label: "Home", href: "/", icon: "🏠" },
      { label: "Learn", href: "/docs", icon: "📚" },
    ],
    "/docs/ai-tools": [
      { label: "Home", href: "/", icon: "🏠" },
      { label: "Learn", href: "/docs", icon: "📚" },
      {
        label: "AI Revolution",
        href: "/docs/ai-tools",
        icon: "🤖",
      },
    ],
    "/guides": [
      { label: "Home", href: "/", icon: "🏠" },
      { label: "Build", href: "/guides", icon: "🚀" },
    ],
    "/guides/first_transaction": [
      { label: "Home", href: "/", icon: "🏠" },
      { label: "Build", href: "/guides", icon: "🚀" },
      {
        label: "First Transaction",
        href: "/guides/first_transaction",
        icon: "💰",
      },
    ],
  };

  const breadcrumbs = breadcrumbMap[path] || [
    { label: "Home", href: "/", icon: "🏠" },
  ];

  // Don't show breadcrumbs on home page
  if (path === "/") return null;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800/50 border-b border-gray-700/50 px-6 py-3"
    >
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && <span className="text-text-secondary mx-2">→</span>}
              {index === breadcrumbs.length - 1 ? (
                <span className="flex items-center gap-2 text-primary font-medium">
                  <span>{item.icon}</span>
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
                >
                  <span>{item.icon}</span>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </motion.nav>
  );
}

function NextSteps() {
  const router = useRouter();
  const path = router.asPath;

  // Define next steps for each page
  const nextStepsMap: Record<string, NextStepItem[]> = {
    "/": [
      {
        title: "Start Learning",
        description: "Understand how AI is changing development",
        href: "/docs/ai-tools",
        icon: "🤖",
      },
      {
        title: "Jump Right In",
        description: "Set up your tools and build your first app",
        href: "/docs/getting-started-with-ai-tools",
        icon: "🚀",
        primary: true,
      },
    ],
    "/docs": [
      {
        title: "Set Up Your Tools",
        description: "Get Cursor installed and build your first app",
        href: "/docs/getting-started-with-ai-tools",
        icon: "🚀",
        primary: true,
      },
      {
        title: "Start Building",
        description: "Try our step-by-step projects",
        href: "/guides",
        icon: "🏗️",
      },
    ],
    "/docs/ai-tools": [
      {
        title: "Get Set Up",
        description: "Download the tools and build your first app",
        href: "/docs/getting-started-with-ai-tools",
        icon: "🚀",
        primary: true,
      },
      {
        title: "Join Community",
        description: "Connect with other AI developers",
        href: "https://discord.gg/meshjs",
        icon: "💬",
      },
    ],
    "/docs/getting-started-with-ai-tools": [
      {
        title: "Send Your First Transaction",
        description: "Build a real DApp and move ADA around",
        href: "/guides/first_transaction",
        icon: "💰",
        primary: true,
      },
      {
        title: "Explore More Projects",
        description: "See what else you can build",
        href: "/guides",
        icon: "🎯",
      },
    ],
    "/guides": [
      {
        title: "Send Your First Transaction",
        description: "Perfect first project - move ADA around",
        href: "/guides/first_transaction",
        icon: "💰",
        primary: true,
      },
      {
        title: "Need Setup Help?",
        description: "Make sure your tools are ready",
        href: "/docs/getting-started-with-ai-tools",
        icon: "🔧",
      },
    ],
    "/guides/first_transaction": [
      {
        title: "Share Your Success",
        description: "Show off your first transaction in our community",
        href: "https://discord.gg/meshjs",
        icon: "🎉",
        primary: true,
      },
      {
        title: "Build More Projects",
        description: "Try creating NFTs or token swaps",
        href: "/guides",
        icon: "🚀",
      },
    ],
  };

  const nextSteps = nextStepsMap[path];

  if (!nextSteps) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-20 mb-10"
    >
      <div className="bg-gradient-to-r from-surface/50 to-background/50 border border-border rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-6 text-center">🎯 What's Next?</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {nextSteps.map((step, _index) => (
            <motion.div
              key={step.href}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={step.href}
                target={step.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  step.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`block p-6 rounded-xl border transition-all duration-300 ${
                  step.primary
                    ? "bg-gradient-to-r from-primary/10 to-secondary/10 border-primary hover:from-primary/20 hover:to-secondary/20"
                    : "bg-surface/50 border-border hover:bg-surface/80"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{step.icon}</div>
                  <div className="flex-1">
                    <h4
                      className={`text-lg font-semibold mb-2 ${
                        step.primary ? "text-primary" : "text-text-primary"
                      }`}
                    >
                      {step.title}
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="text-text-secondary">→</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalHeight, setTerminalHeight] = useState(420);
  const [terminalDragging, setTerminalDragging] = useState(false);
  const [footerDragging, setFooterDragging] = useState(false);
  const [aiChatWidth, setAiChatWidth] = useState(320);
  const dragStartY = useRef<number | null>(null);
  const dragStartHeight = useRef<number | null>(null);
  const minTerminalHeight = 120;
  const maxTerminalHeight = 600;

  // Calculate parabolic clip-path for main content to utilize sidebar curve space
  const generateMainContentClipPath = (aiChatWidth: number, height: number) => {
    // Amplitude factor - increases with width for more dramatic curve
    const amplitudeFactor = Math.max(0.1, (aiChatWidth - 56) / (600 - 56));

    // Generate points for the parabolic curve that mirrors the sidebar
    const points = [];
    const numPoints = 20;

    for (let i = 0; i <= numPoints; i++) {
      const y = (i / numPoints) * height;
      // Mirror the sidebar's parabolic curve
      const normalizedY = (y - height / 2) / (height / 2); // -1 to 1
      const curveOutset =
        aiChatWidth * amplitudeFactor * normalizedY * normalizedY;
      const x = aiChatWidth - curveOutset; // Mirror the curve

      points.push(`${x}px ${y}px`);
    }

    // Add the right edge points to close the shape
    for (let i = numPoints; i >= 0; i--) {
      const y = (i / numPoints) * height;
      points.push(`100% ${y}px`);
    }

    return `polygon(0px 0px, ${points.join(", ")}, 100% 100%, 0px 100%)`;
  };

  // Get current AI chat width for clip-path calculation
  const getCurrentAiChatWidth = () => {
    if (typeof window === "undefined") return 320;
    const aiChatWidth = getComputedStyle(document.body).getPropertyValue(
      "--ai-chat-width"
    );
    return parseInt(aiChatWidth) || 320;
  };

  // Update CSS custom properties on the body for positioning
  useEffect(() => {
    const updateSidebarPositions = () => {
      const sidebarWidth =
        document
          .querySelector('nav[aria-label="Sidebar navigation"]')
          ?.getBoundingClientRect().width || 260;
      const aiChatWidth =
        document
          .querySelector('aside[aria-label="AI Chat sidebar"]')
          ?.getBoundingClientRect().width || 320;

      // Set CSS custom properties for terminal
      document.body.style.setProperty("--terminal-left", `${sidebarWidth}px`);
      document.body.style.setProperty("--terminal-right", `${aiChatWidth}px`);

      // Set CSS custom properties for main content area
      document.body.style.setProperty("--sidebar-width", `${sidebarWidth}px`);
      document.body.style.setProperty("--ai-chat-width", `${aiChatWidth}px`);

      // Update state for clip-path calculation
      setAiChatWidth(aiChatWidth);
    };

    updateSidebarPositions();

    // Update on resize
    window.addEventListener("resize", updateSidebarPositions);

    // Use MutationObserver to watch for sidebar width changes
    const observer = new MutationObserver(updateSidebarPositions);
    const sidebar = document.querySelector(
      'nav[aria-label="Sidebar navigation"]'
    );
    const aiChat = document.querySelector(
      'aside[aria-label="AI Chat sidebar"]'
    );

    if (sidebar)
      observer.observe(sidebar, {
        attributes: true,
        attributeFilter: ["style"],
      });
    if (aiChat)
      observer.observe(aiChat, {
        attributes: true,
        attributeFilter: ["style"],
      });

    return () => {
      window.removeEventListener("resize", updateSidebarPositions);
      observer.disconnect();
    };
  }, []);

  // Add effect to set --terminal-height CSS variable on body for scrollable main
  useEffect(() => {
    document.body.style.setProperty(
      "--terminal-height",
      terminalOpen ? `${terminalHeight}px` : "0px"
    );
  }, [terminalHeight, terminalOpen]);

  // Handle terminal dragging
  useEffect(() => {
    if (!terminalDragging && !footerDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (dragStartY.current !== null && dragStartHeight.current !== null) {
        const deltaY = dragStartY.current - e.clientY;
        // Calculate max height to prevent terminal from going below footer
        const viewportHeight = window.innerHeight;
        const headerHeight = 64; // header height
        const footerHeight = 36; // footer height
        const maxAllowedHeight =
          viewportHeight - headerHeight - footerHeight - 32; // 32px margin
        const constrainedMaxHeight = Math.min(
          maxTerminalHeight,
          maxAllowedHeight
        );

        // For footer dragging, start from 0 and track drag position
        if (footerDragging) {
          const newHeight = Math.max(0, Math.min(constrainedMaxHeight, deltaY));
          setTerminalHeight(newHeight);
          // Open terminal if dragged more than a few pixels
          if (newHeight > 20 && !terminalOpen) {
            setTerminalOpen(true);
          }
        } else {
          // For terminal dragging, use normal resize logic
          const newHeight = Math.max(
            minTerminalHeight,
            Math.min(constrainedMaxHeight, dragStartHeight.current + deltaY)
          );
          setTerminalHeight(newHeight);
        }
      }
    };

    const handleMouseUp = () => {
      // Close terminal if dragged below minimum height
      if (terminalHeight < minTerminalHeight + 20) {
        setTerminalOpen(false);
        setTerminalHeight(360); // Reset to default
      }

      setTerminalDragging(false);
      setFooterDragging(false);
      dragStartY.current = null;
      dragStartHeight.current = null;
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [terminalDragging, footerDragging, terminalHeight, terminalOpen]);

  return (
    <div className="flex flex-col min-h-screen h-screen bg-background overflow-hidden">
      <ReadingProgress />
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <div className="flex flex-1 flex-row min-h-0">
        <Sidebar />
        <main
          className="flex-1 min-h-0 overflow-auto px-0 max-w-none mx-0 bg-center-bg rounded-2xl shadow-xl"
          style={{
            maxHeight: `calc(100vh - 64px - 36px - var(--terminal-height, 0px))`,
            marginTop: "80px", // Account for fixed header + extra spacing
            marginLeft: "var(--sidebar-width, 260px)",
            marginRight: "0px", // No right margin - content flows into parabolic space
            width: "calc(100vw - var(--sidebar-width, 260px))", // Full width minus sidebar
          }}
        >
          {children}
        </main>
        <AIChatSidebar />
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <Footer
          onTerminalClick={() => setTerminalOpen(v => !v)}
          onFooterDrag={e => {
            setFooterDragging(true);
            dragStartY.current = e.clientY;
            dragStartHeight.current = terminalHeight;
          }}
        />
      </div>
      <AnimatePresence>
        {terminalOpen && (
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed z-[100] pointer-events-none"
            style={{
              left: "var(--terminal-left, 260px)",
              right: "var(--terminal-right, 320px)",
              height: terminalHeight,
              bottom: "36px", // footer height
            }}
          >
            <div className="pointer-events-auto w-full h-full relative">
              {/* Drag handle at top */}
              <div
                className="absolute top-0 left-0 right-0 h-1 cursor-ns-resize bg-border hover:bg-primary/50 transition-colors"
                onMouseDown={e => {
                  setTerminalDragging(true);
                  dragStartY.current = e.clientY;
                  dragStartHeight.current = terminalHeight;
                  e.preventDefault();
                }}
              />
              <Terminal>
                {/* Example content, replace with real terminal logic later */}$
                echo "Welcome to the Mimir Terminal!"
              </Terminal>
              <button
                onClick={() => setTerminalOpen(false)}
                className="absolute top-2 right-2 bg-surface border border-border rounded-full px-3 py-1 text-xs text-text-secondary hover:text-primary hover:bg-background transition"
                aria-label="Close terminal"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
