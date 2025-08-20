import { motion } from "framer-motion";

interface PressEnterToContinueProps {
  className?: string;
}

export default function PressEnterToContinue({
  className = "",
}: PressEnterToContinueProps) {
  return (
    <motion.div
      className={`flex items-center gap-3 sm:gap-4 text-text-muted text-xs sm:text-sm font-mono bg-surface/50 px-4 py-2 rounded-full border border-border/50 ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <span className="text-primary">→</span>
      <span>Press Enter to continue</span>
      <span className="text-primary">←</span>
    </motion.div>
  );
}
