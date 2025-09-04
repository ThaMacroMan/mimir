import React from "react";
import { motion } from "framer-motion";
import { MimirHeader } from "../shared/Logo";

interface DocTemplateProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function DocTemplate({
  title: _title, // Prefix with underscore to indicate it's intentionally unused
  children,
  className = "",
}: DocTemplateProps) {
  return (
    <div className="w-full h-screen flex flex-col relative">
      {/* Fixed header section with MIMIR branding */}
      <motion.div
        className="flex items-center justify-center gap-6 py-6 flex-shrink-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.1,
        }}
      >
      </motion.div>

      {/* Scrollable content container that uses remaining space */}
      <div className="flex-1 overflow-y-auto">
        <div
          className={`w-full max-w-none px-4 sm:px-6 lg:px-8 pb-8 ${className}`}
        >
          {/* Content with improved typography and staggered animation */}
          <motion.div
            className="mdx-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.1,
            }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
