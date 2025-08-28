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
    <div className="w-full min-h-screen relative">
      {/* Scrollable content container */}
      <div className="relative z-10 w-full min-h-screen">
        <div className={`max-w-4xl mx-auto p-8 ${className}`}>
          {/* Header section with MIMIR branding and title */}
          <motion.div
            className="flex items-center justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.1,
            }}
          >
            <MimirHeader size="lg" />
          </motion.div>

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
