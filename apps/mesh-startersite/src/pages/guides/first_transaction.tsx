import Head from "next/head";
import { motion } from "framer-motion";
import {
  DollarSign,
  Code,
  CheckCircle,
  ArrowRight,
  Clock,
  Zap,
  Bot,
  Play,
} from "lucide-react";
import ContentLayout from "../../components/ContentLayout";
import ContentSection from "../../components/ContentSection";

const steps = [
  {
    title: "Setup Your Environment",
    description: "Install and configure your development tools",
    icon: <Code className="w-6 h-6" />,
    time: "5 min",
  },
  {
    title: "Create Your First Transaction",
    description: "Build and send your first ADA transaction",
    icon: <DollarSign className="w-6 h-6" />,
    time: "10 min",
  },
  {
    title: "Test and Verify",
    description: "Check your transaction on the blockchain",
    icon: <CheckCircle className="w-6 h-6" />,
    time: "5 min",
  },
];

const prerequisites = [
  "Basic computer literacy",
  "A modern web browser",
  "Curiosity and willingness to learn",
  "No programming experience required",
];

export default function FirstTransactionGuide() {
  return (
    <ContentLayout
      title="Send Your First ADA"
      subtitle="Move some ADA around and feel like a blockchain wizard. Copy, paste, done!"
    >
      <Head>
        <title>First Transaction | Mimir</title>
        <meta
          name="description"
          content="Learn how to send your first ADA transaction on Cardano with AI assistance."
        />
      </Head>

      {/* Hero Section */}
      <ContentSection
        layout="hero"
        cards={[
          {
            title: "Ready to Send Your First ADA?",
            description:
              "This guide will walk you through creating and sending your first Cardano transaction. Perfect for beginners!",
            icon: <DollarSign className="w-12 h-12" />,
            href: "#start",
          },
        ]}
        className="mb-16"
      />

      {/* Prerequisites */}
      <ContentSection
        title="What You'll Need"
        subtitle="Everything you need to complete this guide"
        layout="text"
        className="mb-16"
      >
        <div className="bg-gradient-to-br from-surface/60 to-background/60 border border-primary/20 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-primary mb-4">
            Prerequisites
          </h3>
          <ul className="space-y-3">
            {prerequisites.map((prerequisite, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-text-secondary"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{prerequisite}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </ContentSection>

      {/* Steps Overview */}
      <ContentSection
        title="What You'll Build"
        subtitle="Follow these steps to complete your first transaction"
        cards={steps.map(step => ({
          title: step.title,
          description: step.description,
          icon: step.icon,
          className: "relative",
        }))}
        layout="cards"
        className="mb-16"
      />

      {/* Detailed Steps */}
      <ContentSection
        title="Step-by-Step Guide"
        subtitle="Detailed walkthrough of each step"
        layout="text"
        className="mb-16"
      >
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-surface/60 to-background/60 border border-primary/20 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/20 text-primary rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  {step.title}
                </h3>
                <div className="flex items-center gap-2 ml-auto">
                  <Clock className="w-4 h-4 text-text-secondary" />
                  <span className="text-sm text-text-secondary">
                    {step.time}
                  </span>
                </div>
              </div>
              <div className="space-y-4 text-text-secondary">
                <p>
                  {step.description} This step will guide you through the
                  process with AI assistance.
                </p>
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Bot className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      AI Tip
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary">
                    Use the AI chat in the sidebar if you need help with any of
                    these steps!
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      {/* Start Building CTA */}
      <ContentSection
        title="Ready to Start?"
        subtitle="Begin building your first Cardano transaction"
        layout="text"
        className="mb-16"
      >
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold text-primary mb-4">
            Let's Build Your First Transaction
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            You're ready to create your first Cardano transaction! This guide
            will walk you through every step with AI assistance to make sure you
            succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#start"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Building
              <Play className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="/docs/ai-tools"
              className="inline-flex items-center gap-2 px-6 py-3 bg-surface/60 border border-primary/20 text-primary rounded-xl font-semibold hover:bg-surface/80 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Setup AI Tools First
              <Zap className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </ContentSection>

      {/* What's Next */}
      <ContentSection
        title="What's Next?"
        subtitle="Continue your Cardano development journey"
        layout="text"
        className="mb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-surface/60 to-background/60 border border-primary/20 rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold text-primary mb-3">
              Create Your First NFT
            </h3>
            <p className="text-text-secondary mb-4">
              Turn your photos into digital collectibles. No art skills needed,
              just follow along!
            </p>
            <motion.a
              href="/guides/nft-collection"
              className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-200"
              whileHover={{ x: 5 }}
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-surface/60 to-background/60 border border-primary/20 rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold text-primary mb-3">
              Build a Token Swapper
            </h3>
            <p className="text-text-secondary mb-4">
              Create your own mini exchange. Sounds fancy, but AI makes it
              simple!
            </p>
            <motion.a
              href="/guides/token-swap"
              className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-200"
              whileHover={{ x: 5 }}
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </ContentSection>
    </ContentLayout>
  );
}
