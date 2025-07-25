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
    <div className="w-full h-screen dynamic-gradient-bg fixed inset-0">
      <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

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
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-full text-sm text-text-secondary mb-8"
            variants={fadeInUp}
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="font-mono">MIMIR v1.0.0</span>
          </motion.div>

          <motion.h1
            className="fluid-heading font-black tracking-tight mb-6 gradient-text font-display"
            variants={fadeInUp}
          >
            BECOME A BUILDER
          </motion.h1>

          <motion.p
            className="fluid-text text-text-secondary mb-8 leading-relaxed font-light w-full"
            variants={fadeInUp}
          >
            <span className="text-primary font-semibold">Anyone</span> can build
            on Cardano.
            <br />
            Get started with Mimir and learn how to build fast with AI.
          </motion.p>

          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-surface border border-border rounded-lg text-text-secondary mb-12"
            variants={fadeInUp}
          >
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm">
              No programming skills required
            </span>
            <Sparkles className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.section>

        {/* Persona Cards */}
        <motion.section
          className="mb-12 px-6 w-full relative z-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="fluid-grid gap-4 sm:gap-6 w-full">
            {[
              {
                title: "Never Touched Code",
                description:
                  "No programming syntax. No complex concepts. Just build.",
                icon: <GraduationCap className="w-8 h-8" />,
                color: "border-accent",
              },
              {
                title: "Creative Professional",
                description:
                  "Your vision + AI's skills = amazing blockchain projects.",
                icon: <Palette className="w-8 h-8" />,
                color: "border-secondary",
              },
              {
                title: "Business Owner",
                description:
                  "Turn business ideas into blockchain solutions—no devs needed.",
                icon: <Briefcase className="w-8 h-8" />,
                color: "border-accent",
              },
              {
                title: "Curious Teenager",
                description:
                  "Start building the future. No computer science degree required.",
                icon: <Rocket className="w-8 h-8" />,
                color: "border-secondary",
              },
            ].map((persona, index) => (
              <motion.div
                key={persona.title}
                className="wireframe-card wireframe-card-hover p-4 sm:p-6 lg:p-8 text-center group h-full"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-primary mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-200">
                  {persona.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-primary font-display">
                  {persona.title}
                </h3>
                <p className="text-text-secondary leading-relaxed font-light text-sm sm:text-base">
                  {persona.description}
                </p>

                {/* Wireframe-style accent line */}
                <div
                  className={`mt-4 sm:mt-6 h-px bg-gradient-to-r from-transparent via-${persona.color} to-transparent opacity-50`}
                ></div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="text-center mb-16 px-6 w-full relative z-10"
          variants={fadeInUp}
        >
          <motion.div
            className="flex flex-col items-center gap-6 w-full"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.a
              href="/docs/ai-tools"
              className="wireframe-button-primary px-8 sm:px-12 py-4 text-base sm:text-lg font-bold font-display"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              START BUILDING NOW
            </motion.a>

            <div className="flex items-center gap-2 sm:gap-4 text-text-muted text-xs sm:text-sm font-mono">
              <span>→</span>
              <span>Press Enter to continue</span>
              <span>←</span>
            </div>
          </motion.div>
        </motion.section>

        {/* Feature Grid */}
        <motion.section
          className="mb-16 px-6 w-full relative z-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="w-full">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-primary font-display"
              variants={fadeInUp}
            >
              Why Choose Mimir?
            </motion.h2>

            <div className="fluid-grid gap-4 sm:gap-6 w-full">
              {[
                {
                  title: "AI-Powered",
                  description:
                    "Advanced AI tools that understand your intent and generate production-ready code.",
                  icon: <Bot className="w-8 h-8" />,
                },
                {
                  title: "Zero Learning Curve",
                  description:
                    "Start building immediately. No prior programming knowledge required.",
                  icon: <Zap className="w-8 h-8" />,
                },
                {
                  title: "Cardano Native",
                  description:
                    "Built specifically for Cardano blockchain with native integration.",
                  icon: <LinkIcon className="w-8 h-8" />,
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="wireframe-card p-4 sm:p-6 text-center h-full"
                  variants={fadeInUp}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-primary mb-3 sm:mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-primary font-display">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
