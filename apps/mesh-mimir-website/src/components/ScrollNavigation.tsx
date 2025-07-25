import { useState, useEffect, useCallback } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ScrollNavigationProps {
  containerRef?: React.RefObject<HTMLElement>;
  className?: string;
  style?: React.CSSProperties;
  aiChatWidth?: number;
  centerOffset?: number; // Add centerOffset prop
}

export default function ScrollNavigation({
  containerRef,
  className = "",
  style,
  aiChatWidth = 320,
  centerOffset = 0, // Default to 0
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

  // Calculate parabolic curve positions dynamically using the same logic as AI chat sidebar
  const calculateCurvePosition = useCallback(
    (yPosition: number) => {
      const maxWidth =
        typeof window !== "undefined" ? window.innerWidth / 2 : 600;
      const height =
        typeof window !== "undefined" ? window.innerHeight - 100 : 600;

      const amplitudeFactor = Math.max(
        0.12,
        ((aiChatWidth - 120) / (maxWidth - 120)) * 0.5
      );
      const minContentWidth = Math.max(100, aiChatWidth * 0.4);
      const maxClipAmount = aiChatWidth - minContentWidth;

      // Use the same centerOffset as the AI chat sidebar
      const adjustedCenter = height / 2 + centerOffset;
      const distanceFromCenter = yPosition - adjustedCenter;
      const normalizedDistance = distanceFromCenter / (height / 2);
      const easedDistance = Math.pow(Math.abs(normalizedDistance), 1.2);
      const rawCurveOutset = aiChatWidth * amplitudeFactor * easedDistance;
      const curveOutset = Math.min(rawCurveOutset, maxClipAmount);

      return aiChatWidth - curveOutset;
    },
    [aiChatWidth, centerOffset]
  );

  return (
    <>
      <AnimatePresence>
        {/* Top button - dynamically positioned on the curve */}
        {showUpArrow && (
          <motion.div
            className="fixed top-20 w-14 h-14 bg-surface/80 border border-primary/30 rounded-full flex items-center justify-center text-primary z-50 shadow-xl backdrop-blur-md cursor-pointer"
            style={{
              right: `${calculateCurvePosition(100) + 4}px`, // 100px from top
              opacity: isScrolling ? 0.5 : 1,
              pointerEvents: isScrolling ? "none" : "auto",
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

        {/* Bottom button - dynamically positioned on the curve */}
        {showDownArrow && (
          <motion.div
            className="fixed bottom-20 w-14 h-14 bg-surface/80 border border-primary/30 rounded-full flex items-center justify-center text-primary z-50 shadow-xl backdrop-blur-md cursor-pointer"
            style={{
              right: `${calculateCurvePosition(window.innerHeight - 100) + 4}px`, // 100px from bottom
              opacity: isScrolling ? 0.5 : 1,
              pointerEvents: isScrolling ? "none" : "auto",
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
