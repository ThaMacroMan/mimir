import React from "react";
import { motion } from "framer-motion";

interface SlideWrapperProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export default function SlideWrapper({
  children,
  className = "",
  animate = true,
}: SlideWrapperProps) {
  const slideVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const content = (
    <div className={`w-full h-full p-8 ${className}`}>{children}</div>
  );

  if (animate) {
    return (
      <motion.div
        variants={slideVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full h-full"
      >
        {content}
      </motion.div>
    );
  }

  return content;
}
