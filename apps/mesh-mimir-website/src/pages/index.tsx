import Head from "next/head";
import { CardanoWallet } from "@meshsdk/react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Rocket,
  Sparkles,
  Bot,
  Zap,
  Link as LinkIcon,
  User,
  Briefcase,
  Palette,
  GraduationCap,
} from "lucide-react";
import FluidBackground from "../components/FluidBackground";
import { MetallicCardanoLogo } from "../components/MetallicCardanoLogo";
import MagicBento from "../components/MagicBento";
import ClickCounter from "../components/ClickCounter";

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
  return (
    <div className="w-full h-screen cardano-gradient-bg fixed inset-0">
      {/* Fluid Cardano logos background */}
      <FluidBackground />

      <Head>
        <title>Mimir | Anyone Can Build on Cardano</title>
        <meta
          name="description"
          content="You don't need to be a programmer. Just describe what you want to build and AI will help create it for you. Start building on Cardano today."
        />
      </Head>

      {/* Scrollable content container */}
      <div className="relative z-10 w-full h-full overflow-y-auto">
        {/* Hero Section */}
        <motion.section
          className="text-center mb-16 mt-16 px-6 w-full relative z-10"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        ></motion.section>

        {/* Magic Bento Grid */}
        <motion.section
          className="mb-16 w-full relative z-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <MagicBento />
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
              <ClickCounter
                initialCount={0}
                showMilestones={true}
                milestoneValues={[10, 25, 50, 100, 250, 500, 1000]}
                persistData={true}
                storageKey="mimir-v1-click-counter"
              />
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
