import { useState, useEffect, useCallback } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ScrollNavigationProps {
  containerRef?: React.RefObject<HTMLElement>;
  className?: string;
  style?: React.CSSProperties;
  aiChatWidth?: number;
}

export default function ScrollNavigation({
  containerRef,
  aiChatWidth = 260,
}: ScrollNavigationProps) {
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const checkScrollPosition = useCallback(() => {
    if (!containerRef?.current) return;

    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    const isAtTop = scrollTop <= 0;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
    const hasScrollableContent = scrollHeight > clientHeight;

    // Show arrows based on scroll position and content availability
    setShowUpArrow(hasScrollableContent && !isAtTop);
    setShowDownArrow(hasScrollableContent && !isAtBottom);
  }, [containerRef]);

  const scrollTo = useCallback(
    (direction: "up" | "down") => {
      if (!containerRef?.current) return;

      setIsScrolling(true);
      const container = containerRef.current;
      const scrollAmount = container.clientHeight * 0.8; // Scroll 80% of viewport height

      const targetScrollTop =
        direction === "up"
          ? Math.max(0, container.scrollTop - scrollAmount)
          : Math.min(
              container.scrollHeight - container.clientHeight,
              container.scrollTop + scrollAmount
            );

      container.scrollTo({
        top: targetScrollTop,
        behavior: "smooth",
      });

      // Reset scrolling state after animation
      setTimeout(() => setIsScrolling(false), 500);
    },
    [containerRef]
  );

  // Check scroll position on mount and when container changes
  useEffect(() => {
    checkScrollPosition();

    const container = containerRef?.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      return () => container.removeEventListener("scroll", checkScrollPosition);
    }
  }, [containerRef, checkScrollPosition]);

  // Also check on window resize
  useEffect(() => {
    const handleResize = () => {
      setTimeout(checkScrollPosition, 100); // Small delay to ensure layout is updated
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [checkScrollPosition]);

  // Calculate position for navigation buttons
  const calculateButtonPosition = useCallback(() => {
    // When sidebar is collapsed (48px), buttons should be at 64px from right edge
    // When sidebar is expanded, buttons should be at sidebar width + 16px from right edge
    // This ensures buttons are always visible and not covered by the sidebar
    return aiChatWidth + 16; // 16px margin from the sidebar
  }, [aiChatWidth]);

  // Force re-render when aiChatWidth changes to ensure smooth position updates
  const [buttonPosition, setButtonPosition] = useState(
    calculateButtonPosition()
  );

  useEffect(() => {
    setButtonPosition(calculateButtonPosition());
  }, [calculateButtonPosition]);

  return (
    <>
      <AnimatePresence>
        {/* Top button */}
        {showUpArrow && (
          <motion.div
            className="fixed top-20 w-14 h-14 bg-surface/80 border border-primary/30 rounded-full flex items-center justify-center text-primary z-50 shadow-xl backdrop-blur-md cursor-pointer"
            style={{
              right: `${buttonPosition}px`,
              opacity: isScrolling ? 0.5 : 1,
              pointerEvents: isScrolling ? "none" : "auto",
              transition: "right 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -2, 0] }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1, x: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => !isScrolling && scrollTo("up")}
            transition={{
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 0.2 },
            }}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.div>
        )}

        {/* Bottom button */}
        {showDownArrow && (
          <motion.div
            className="fixed bottom-20 w-14 h-14 bg-surface/80 border border-primary/30 rounded-full flex items-center justify-center text-primary z-50 shadow-xl backdrop-blur-md cursor-pointer"
            style={{
              right: `${buttonPosition}px`,
              opacity: isScrolling ? 0.5 : 1,
              pointerEvents: isScrolling ? "none" : "auto",
              transition: "right 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, 2, 0] }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1, x: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => !isScrolling && scrollTo("down")}
            transition={{
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 0.2 },
            }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
