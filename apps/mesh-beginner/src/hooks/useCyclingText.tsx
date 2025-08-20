import React, { useState, useEffect, ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CyclingTextProps {
  className?: string;
}

export function useCyclingText(
  texts: string[],
  intervalMs: number = 3000
): { currentText: string; CyclingText: React.ComponentType<CyclingTextProps> } {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % texts.length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [texts.length, intervalMs]);

  const CyclingText = ({ className }: CyclingTextProps): ReactElement => (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={`${texts[currentIndex]}-${currentIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className={className}
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );

  return { currentText: texts[currentIndex], CyclingText };
}
