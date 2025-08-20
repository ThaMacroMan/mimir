import Head from "next/head";
import { motion } from "framer-motion";
import {
  Rocket,
  Zap,
  CheckCircle,
  ArrowRight,
  Download,
  Settings,
  Play,
} from "lucide-react";
import ContentLayout from "../../components/ContentLayout";
import ContentSection from "../../components/ContentSection";

export default function GettingStartedGuide() {
  const setupSteps = [
    {
      title: "Install Cursor",
      description: "Download and install Cursor IDE for AI-powered development",
      icon: <Download className="w-6 h-6" />,
      href: "https://cursor.sh",
    },
    {
      title: "Configure AI Tools",
      description:
        "Set up your AI assistants and connect your development environment",
      icon: <Settings className="w-6 h-6" />,
      href: "/docs/ai-tools",
      primary: true,
    },
    {
      title: "Start Building",
      description: "Create your first Cardano project with AI assistance",
      icon: <Play className="w-6 h-6" />,
      href: "/guides/first_transaction",
    },
  ];

  const prerequisites = [
    "Basic computer literacy",
    "A modern web browser",
    "Curiosity and willingness to learn",
    "No programming experience required",
  ];

  return (
    <ContentLayout
      title="Getting Started with Mimir"
      subtitle="Your complete guide to becoming a Cardano developer with AI assistance"
    >
      <Head>
        <title>Getting Started | Mimir</title>
        <meta
          name="description"
          content="Learn how to get started with Cardano development using Mimir's AI-powered tools and guides."
        />
      </Head>

      {/* Hero Section */}
      <ContentSection
        layout="hero"
        cards={[
          {
            title: "Ready to Build on Cardano?",
            description:
              "Follow this guide to set up your development environment and create your first Cardano application with AI assistance.",
            icon: <Rocket className="w-12 h-12" />,
            href: "/docs/ai-tools",
          },
        ]}
        className="mb-16"
      />

      {/* Prerequisites Section */}
      <ContentSection
        title="What You'll Need"
        subtitle="Everything you need to get started with Cardano development"
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

      {/* Setup Steps */}
      <ContentSection
        title="Setup Steps"
        subtitle="Follow these steps to get your development environment ready"
        cards={setupSteps}
        layout="cards"
        className="mb-16"
      />

      {/* Detailed Instructions */}
      <ContentSection
        title="Step-by-Step Instructions"
        subtitle="Detailed walkthrough of each setup step"
        layout="text"
        className="mb-16"
      >
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-surface/60 to-background/60 border border-primary/20 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/20 text-primary rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h3 className="text-xl font-semibold text-primary">
                Install Cursor IDE
              </h3>
            </div>
            <div className="space-y-4 text-text-secondary">
              <p>
                Cursor is an AI-powered code editor that will be your primary
                development tool. It provides intelligent code completion, AI
                assistance, and seamless integration with Cardano development.
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  Visit{" "}
                  <a
                    href="https://cursor.sh"
                    className="text-primary hover:underline"
                  >
                    cursor.sh
                  </a>
                </li>
                <li>Download the version for your operating system</li>
                <li>Install and launch Cursor</li>
                <li>Sign in with your GitHub account for AI features</li>
              </ol>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-surface/60 to-background/60 border border-primary/20 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/20 text-primary rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h3 className="text-xl font-semibold text-primary">
                Configure AI Tools
              </h3>
            </div>
            <div className="space-y-4 text-text-secondary">
              <p>
                Set up your AI development environment with the tools and
                extensions that will enhance your Cardano development
                experience.
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Install the MeshJS extension in Cursor</li>
                <li>Configure your AI assistant preferences</li>
                <li>Set up your development workspace</li>
                <li>Test the AI integration with a simple prompt</li>
              </ol>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-surface/60 to-background/60 border border-primary/20 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/20 text-primary rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h3 className="text-xl font-semibold text-primary">
                Create Your First Project
              </h3>
            </div>
            <div className="space-y-4 text-text-secondary">
              <p>
                Now it's time to build your first Cardano application! We'll
                guide you through creating a simple transaction.
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Create a new project directory</li>
                <li>Initialize your Cardano development environment</li>
                <li>Write your first transaction with AI assistance</li>
                <li>Test and deploy your application</li>
              </ol>
            </div>
          </motion.div>
        </div>
      </ContentSection>

      {/* Next Steps */}
      <ContentSection
        title="What's Next?"
        subtitle="Continue your Cardano development journey"
        layout="text"
        className="mb-16"
      >
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-primary mb-4">
            Ready to Build More?
          </h3>
          <p className="text-text-secondary mb-6">
            Congratulations! You've set up your development environment. Now
            explore more advanced topics and build real Cardano applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="/guides/first_transaction"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Build Your First Transaction
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="/docs/ai-tools"
              className="inline-flex items-center gap-2 px-6 py-3 bg-surface/60 border border-primary/20 text-primary rounded-xl font-semibold hover:bg-surface/80 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore AI Tools
              <Zap className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </ContentSection>
    </ContentLayout>
  );
}
