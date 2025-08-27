import { motion } from "framer-motion";
import FluidBackground from "../components/shared/Background/FluidBackground";
import MimirHero from "../components/features/Persona/MimirHero";
import PersonaSelector from "../components/features/Persona/PersonaSelector";
import BentoGrid from "../components/features/Bento/BentoGrid";
import CommunitySection from "../components/features/Community/CommunitySection";
import ClickCounter from "../components/features/ClickCounter/ClickCounter";
import { usePersona } from "../contexts/PersonaContext";

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

export default function Home() {
  const { selectedPersona, setSelectedPersona } = usePersona();

  return (
    <div className="w-full h-screen cardano-gradient-bg fixed inset-0">
      {/* Fluid Cardano logos background */}
      <FluidBackground persona={selectedPersona} />

      {/* Scrollable content container */}
      <div className="relative z-10 w-full h-full overflow-y-auto">
        {/* Hero Section */}
        <motion.section
          className="text-center mb-8 mt-4 px-6 w-full relative z-10"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <MimirHero />
        </motion.section>

        {/* Persona Selector - positioned right after the hero description */}
        <motion.section
          className="mb-8 w-full relative z-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp}>
            <PersonaSelector
              onPersonaSelect={setSelectedPersona}
              selectedPersona={selectedPersona}
            />
          </motion.div>
        </motion.section>

        {/* Magic Bento Grid */}
        <motion.section
          className="mb-8 w-full relative z-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <BentoGrid />
        </motion.section>

        {/* Community Section */}
        <motion.section
          className="mb-16 w-full relative z-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <CommunitySection />
        </motion.section>

        {/* Click Counter Section */}
        <motion.section
          className="mb-16 w-full relative z-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="container mx-auto px-6">
            <motion.div className="flex justify-center" variants={fadeInUp}>
              <ClickCounter />
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
