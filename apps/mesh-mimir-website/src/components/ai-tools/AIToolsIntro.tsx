import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Zap, Brain, Rocket, ArrowRight } from "lucide-react";
import SlideWrapper from "./SlideWrapper";

export default function AIToolsIntro() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/docs/ai-tools/selection");
  };

  return (
    <SlideWrapper>
      <div className="flex flex-col items-center justify-center min-h-[600px] text-center space-y-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-6xl font-bold text-white mb-4">
            AI Tools{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Revolution
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Transform your development workflow with AI-powered tools that
            understand your code, assist your thinking, and accelerate your
            building like never before.
          </p>
        </motion.div>

        {/* Benefits Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12"
        >
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-xl p-6 text-center">
            <div className="flex justify-center mb-4">
              <Zap className="w-12 h-12 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              10x Faster Development
            </h3>
            <p className="text-gray-400">
              Write code at the speed of thought with intelligent autocompletion
              and generation
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-xl p-6 text-center">
            <div className="flex justify-center mb-4">
              <Brain className="w-12 h-12 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Intelligent Assistance
            </h3>
            <p className="text-gray-400">
              Get contextual help, debugging support, and code explanations in
              real-time
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-xl p-6 text-center">
            <div className="flex justify-center mb-4">
              <Rocket className="w-12 h-12 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Learn While Building
            </h3>
            <p className="text-gray-400">
              Understand patterns, best practices, and new concepts as you code
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <button
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
