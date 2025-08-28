import { ReactNode } from "react";
import { motion } from "framer-motion";
import FluidBackground from "../shared/Background/FluidBackground";
import { usePersona } from "../../contexts/PersonaContext";

interface ContentLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  showBreadcrumbs?: boolean;
  className?: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ContentLayout({
  children,
  title,
  subtitle,
  className = "",
}: ContentLayoutProps) {
  const { selectedPersona } = usePersona();

  return (
    <div className="w-full h-screen cardano-gradient-bg fixed inset-0">
      {/* Fluid Cardano logos background */}
      <FluidBackground persona={selectedPersona} />

      {/* Scrollable content container */}
      <div className="relative z-10 w-full h-full overflow-y-auto">
        {/* Header Section */}
        {(title || subtitle) && (
          <motion.section
            className="text-center mb-16 mt-8 px-6 w-full relative z-10"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
              {title && (
                <h1 className="text-2xl md:text-4xl font-display font-extrabold text-primary mb-4 tracking-tight">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="text-lg md:text-xl text-text-secondary font-display font-medium max-w-3xl mx-auto leading-relaxed">
                  {subtitle}
                </p>
              )}
            </motion.div>
          </motion.section>
        )}

        {/* Main Content Section */}
        <motion.section
          className={`mb-16 w-full relative z-10 ${className}`}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp}>{children}</motion.div>
        </motion.section>
      </div>
    </div>
  );
}
