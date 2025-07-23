import Head from "next/head";
import { CardanoWallet } from "@meshsdk/react";
import { motion } from "framer-motion";

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
    <>
      <Head>
        <title>Mnemos | Anyone Can Build on Cardano</title>
        <meta
          name="description"
          content="You don't need to be a programmer. Just describe what you want to build and AI will help create it for you. Start building on Cardano today."
        />
      </Head>

      {/* Hero Section */}
      <motion.section
        className="text-center mb-16 mt-16"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-montserrat uppercase"
          variants={fadeInUp}
        >
          Become a Builder
        </motion.h1>

        <motion.p
          className="max-w-3xl mx-auto text-2xl md:text-3xl text-text-secondary mb-12 leading-relaxed font-light"
          variants={fadeInUp}
        >
          <strong className="text-primary">Anyone</strong> can build on Cardano.
          <br />
          Get started with Mnemos and learn how to build fast with AI.
          <br />
          <br />
          <strong className="text-primary">
            ✨ No programming required ✨
          </strong>
        </motion.p>
      </motion.section>

      {/* Anyone Can Build */}
      <motion.section
        className="mb-12"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {[
            {
              title: "Never Touched Code",
              description:
                "No programming syntax. No complex concepts. Just build.",
              icon: "🌱",
            },
            {
              title: "Creative Professional",
              description:
                "Your vision + AI's skills = amazing blockchain projects.",
              icon: "🎨",
            },
            {
              title: "Business Owner",
              description:
                "Turn business ideas into blockchain solutions—no devs needed.",
              icon: "💼",
            },
            {
              title: "Curious Teenager",
              description:
                "Start building the future. No computer science degree required.",
              icon: "🚀",
            },
          ].map(persona => (
            <motion.div
              key={persona.title}
              className="bg-surface border border-border rounded-xl shadow-md/20 p-6 text-center transition-transform duration-200 hover:scale-[1.03] focus-within:scale-[1.03] focus-within:ring-2 focus-within:ring-primary/50 outline-none"
              variants={fadeInUp}
              whileHover={{ scale: 1.03, y: -2 }}
              tabIndex={0}
            >
              <div className="text-5xl mb-4" aria-hidden="true">
                {persona.icon}
              </div>
              <h3 className="text-2xl font-extrabold mb-2 text-primary">
                {persona.title}
              </h3>
              <p className="text-base text-text-secondary leading-relaxed">
                {persona.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.div
        className="flex flex-col md:flex-row justify-center gap-4 mt-12 mb-8"
        variants={fadeInUp}
      >
        <motion.a
          href="/docs/ai-tools"
          className="px-10 py-5 bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary rounded-2xl font-bold text-2xl transition-all duration-300 shadow-2xl hover:shadow-primary/25 font-montserrat uppercase"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Building Now
        </motion.a>
      </motion.div>
    </>
  );
}
