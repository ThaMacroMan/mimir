import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export default function PageTransition({
  children,
  className = "",
}: PageTransitionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.75,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth motion
        delay: 0.1, // Slightly longer delay for better visual flow
      }}
    >
      {children}
    </motion.div>
  );
}
