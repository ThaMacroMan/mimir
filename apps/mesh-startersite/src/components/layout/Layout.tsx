import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useEffect, useState, useRef } from "react";
import Sidebar from "./Sidebar/Sidebar";
import ResourceSidebar from "./Sidebar/AIChatSidebar";
import ScrollNavigation from "./ScrollNavigation";
import PageTransition from "./PageTransition";
import { Terminal } from "../magicui/terminal";
import { resetAllSidebarStates } from "../../utils/sidebarUtils";
import { useRouter } from "next/router";

export default function Layout({ children }: { children: ReactNode }) {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalHeight, setTerminalHeight] = useState(420);
  const [terminalDragging, setTerminalDragging] = useState(false);
  const [footerDragging, setFooterDragging] = useState(false);
  const [aiChatWidth, setAiChatWidth] = useState(48);

  // Handle AI chat sidebar width changes smoothly
  const handleAiChatWidthChange = (newWidth: number) => {
    setAiChatWidth(newWidth);
  };
  const dragStartY = useRef<number | null>(null);
  const dragStartHeight = useRef<number | null>(null);
  const mainContentRef = useRef<HTMLElement>(null);
  const minTerminalHeight = 120;
  const maxTerminalHeight = 600;
  const router = useRouter();

  // Update AI chat sidebar CSS variables
  useEffect(() => {
    const aiChatTotalSpace = aiChatWidth + 16; // 16px margin from right edge

    // Set CSS custom properties for terminal
    document.body.style.setProperty("--terminal-left", "0px");
    document.body.style.setProperty(
      "--terminal-right",
      `${aiChatTotalSpace}px`
    );

    // Set CSS custom properties for main content area
    document.body.style.setProperty("--ai-chat-width", `${aiChatWidth}px`);
  }, [aiChatWidth]);

  // Add effect to set --terminal-height CSS variable on body for scrollable main
  useEffect(() => {
    document.body.style.setProperty(
      "--terminal-height",
      terminalOpen ? `${terminalHeight}px` : "0px"
    );
  }, [terminalHeight, terminalOpen]);

  // Add keyboard navigation for scrolling and debugging
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!mainContentRef.current) return;

      // Only handle if not typing in an input
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.contentEditable === "true"
      ) {
        return;
      }

      const container = mainContentRef.current;
      const scrollAmount = container.clientHeight * 0.8;

      switch (e.key) {
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          container.scrollTo({
            top: Math.max(0, container.scrollTop - scrollAmount),
            behavior: "smooth",
          });
          break;
        case "ArrowDown":
        case "PageDown":
          e.preventDefault();
          container.scrollTo({
            top: Math.min(
              container.scrollHeight - container.clientHeight,
              container.scrollTop + scrollAmount
            ),
            behavior: "smooth",
          });
          break;
        case "Home":
          e.preventDefault();
          container.scrollTo({ top: 0, behavior: "smooth" });
          break;
        case "End":
          e.preventDefault();
          container.scrollTo({
            top: container.scrollHeight - container.clientHeight,
            behavior: "smooth",
          });
          break;
        case "r":
          // Reset sidebar states when Ctrl+R is pressed
          if (e.ctrlKey) {
            e.preventDefault();
            resetAllSidebarStates();
            window.location.reload();
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
    <div className="flex flex-col h-screen overflow-hidden cardano-gradient-bg">
      {/* Fluid Cardano logos background - covers entire viewport */}
      {/* <FluidBackground persona={selectedPersona} /> */}

      {/* <ReadingProgress /> */}
      {/* <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div> */}
      <div className="flex flex-1 flex-row h-screen">
        {/* Desktop Sidebar - Hidden on mobile */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        <main
          ref={mainContentRef}
          className="flex-1 transition-all duration-300 overflow-hidden md:overflow-auto md:px-4 pt-12 md:pt-0 pb-12 md:pb-0"
          style={{
            height: "100vh",
            minWidth: "320px",
          }}
        >
          <div className="w-full min-h-full">
            <PageTransition className="h-full">{children}</PageTransition>
          </div>
        </main>

        {/* Desktop Resource Sidebar - Hidden on mobile */}
        <div className="hidden md:block">
          <ResourceSidebar
            width={aiChatWidth}
            onWidthChange={handleAiChatWidthChange}
          />
        </div>
      </div>

      {/* Mobile Sidebars - Only render on mobile */}
      <div className="md:hidden">
        <Sidebar />
        <ResourceSidebar
          width={aiChatWidth}
          onWidthChange={handleAiChatWidthChange}
        />
      </div>

      {/* Custom Scroll Navigation - moved outside flex container */}
      {router.pathname !== "/" && (
        <div className="hidden md:block">
          <ScrollNavigation
            containerRef={mainContentRef}
            aiChatWidth={aiChatWidth + 32} // Account for both sidebars + padding (16px + 16px)
          />
        </div>
      )}
      {/* <div className="fixed bottom-0 left-0 right-0 z-50">
        <Footer
          onTerminalClick={() => setTerminalOpen(v => !v)}
          onFooterDrag={e => {
            setFooterDragging(true);
            dragStartY.current = e.clientY;
            dragStartHeight.current = terminalHeight;
          }}
        />
      </div> */}
      <AnimatePresence>
        {terminalOpen && (
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed z-[100] pointer-events-none"
            style={{
              left: "0px",
              right: "0px",
              height: terminalHeight,
              bottom: "0px", // No footer anymore
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
