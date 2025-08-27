import React from "react";
import { motion } from "framer-motion";
import FluidBackground from "../shared/Background/FluidBackground";
import { MimirHeader } from "../shared/Logo";
import { usePersona } from "../../contexts/PersonaContext";

interface DocTemplateProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function DocTemplate({
  title,
  children,
  className = "",
}: DocTemplateProps) {
  const { selectedPersona } = usePersona();

  return (
    <div className="w-full min-h-screen cardano-gradient-bg fixed inset-0">
      {/* Fluid Cardano logos background */}
      <FluidBackground persona={selectedPersona} />

      {/* Scrollable content container */}
      <div className="relative z-10 w-full h-full overflow-y-auto">
        <motion.div
          className={`max-w-4xl mx-auto p-8 ${className}`}
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          {/* Header section with MIMIR branding and title */}
          <motion.div
            className="flex items-center justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <MimirHeader size="lg" />
            <h1 className="text-4xl font-mono font-bold text-text-primary">
              {title}
            </h1>
          </motion.div>
          {children}
        </motion.div>
      </div>
    </div>
  );
}
