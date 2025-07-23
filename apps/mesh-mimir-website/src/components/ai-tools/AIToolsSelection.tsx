import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { tools } from "./data/tools";
import SlideWrapper from "./SlideWrapper";

export default function AIToolsSelection() {
  const router = useRouter();

  const handleToolSelect = (toolId: string) => {
    const tool = tools.find(t => t.id === toolId);
    if (tool) {
      router.push(tool.setupUrl);
    }
  };

  const handleBack = () => {
    router.push("/docs/ai-tools/intro");
  };

  return (
    <SlideWrapper>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-white">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              AI Tool
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Both tools are excellent for AI-powered development. Pick the one
            that matches your style and needs.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 group"
            >
              {/* Tool Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{tool.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{tool.name}</h3>
                  <a
                    href={tool.learnMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
                  >
                    Learn more →
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {tool.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {tool.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleToolSelect(tool.id)}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform group-hover:scale-105"
              >
                Set Up {tool.name} →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-12">
          <button
            onClick={handleBack}
            className="px-6 py-3 rounded-xl border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-200"
          >
            ← Back to Introduction
          </button>
        </div>
      </div>
    </SlideWrapper>
  );
}
