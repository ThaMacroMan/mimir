import { motion } from "framer-motion";
import { useRouter } from "next/router";
import SlideWrapper from "./SlideWrapper";

export default function WindsurfSetup() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/docs/ai-tools/selection");
  };

  return (
    <SlideWrapper>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-white">
            Windsurf{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Setup
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Get started with the first agentic IDE that can plan, code, and
            execute autonomously
          </p>
        </div>

        {/* Setup Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl">🌊</div>
              <div>
                <h2 className="text-3xl font-bold text-white">
                  Quick Setup Guide
                </h2>
                <p className="text-gray-400">
                  Follow these steps to get Windsurf running
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800/50 border border-gray-600/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    1
                  </span>
                  Visit Windsurf Website
                </h3>
                <p className="text-gray-300 mb-4">
                  Go to the official Windsurf website and create your free
                  account.
                </p>
                <a
                  href="https://windsurf.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Open Windsurf →
                </a>
              </div>

              <div className="bg-gray-800/50 border border-gray-600/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    2
                  </span>
                  Download and Install
                </h3>
                <p className="text-gray-300 mb-4">
                  Download the appropriate version for your operating system
                  (Windows, macOS, or Linux) and follow the installation
                  instructions.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-600/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    3
                  </span>
                  Create Your First Project
                </h3>
                <p className="text-gray-300 mb-4">
                  Start with a new workspace or open an example project to
                  explore Windsurf's agentic capabilities.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-600/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    4
                  </span>
                  Try Your First AI Command
                </h3>
                <p className="text-gray-300 mb-4">
                  Test the AI capabilities with a simple prompt like:
                </p>
                <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-4 font-mono text-sm text-green-400">
                  "Create a simple React component with a button that says
                  'Hello Cardano'"
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-semibold text-white mb-3">
                🚀 Ready to Build?
              </h3>
              <p className="text-gray-300">
                Once you have Windsurf set up, you're ready to start building
                your first Cardano application! The agentic AI will help you
                plan, code, and execute complex tasks autonomously.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handleBack}
            className="px-6 py-3 rounded-xl border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-200"
          >
            ← Back to Tool Selection
          </button>

          <button
            onClick={() => router.push("/guides/first_transaction")}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200"
          >
            Start Building →
          </button>
        </div>
      </div>
    </SlideWrapper>
  );
}
