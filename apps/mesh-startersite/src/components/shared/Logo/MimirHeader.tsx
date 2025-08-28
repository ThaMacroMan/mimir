"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { MetallicCardanoLogo } from "./MetallicCardanoLogo";

interface MimirHeaderProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function MimirHeader({
  size = "md",
  className = "",
}: MimirHeaderProps) {
  const router = useRouter();

  const sizeClasses = {
    sm: {
      logo: 24,
      text: "text-lg",
      gap: "gap-1",
      padding: "p-1",
    },
    md: {
      logo: 32,
      text: "text-2xl",
      gap: "gap-1",
      padding: "p-1",
    },
    lg: {
      logo: 52,
      text: "text-3xl",
      gap: "gap-2",
      padding: "p-1",
    },
  };

  const { logo, text, gap, padding } = sizeClasses[size];

  const handleClick = () => {
    router.push("/");
  };

  return (
    <motion.div
      className={`inline-flex items-center justify-center ${gap} ${padding} from-primary/10 to-secondary/10 border border-primary/20 rounded-full backdrop-blur-sm shadow-2xl cursor-pointer hover:from-primary/20 hover:to-secondary/20 hover:border-primary/30 transition-all duration-200 ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label="Go to home page"
    >
      <MetallicCardanoLogo size={logo} />
      <span
        className={`font-display font-extrabold tracking-widest text-primary drop-shadow-lg ${text}`}
      >
        MIMIR
      </span>
    </motion.div>
  );
}
