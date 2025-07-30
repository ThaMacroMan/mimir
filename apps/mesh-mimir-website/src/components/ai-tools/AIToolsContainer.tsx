import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import AIToolsIntro from "./AIToolsIntro";
import AIToolsSelection from "./AIToolsSelection";
import CursorSetupQuest from "./CursorSetupQuest";
import WindsurfSetup from "./WindsurfSetup";

export default function AIToolsContainer() {
  const [selectedTool, setSelectedTool] = useState<
    "cursor" | "windsurf" | null
  >(null);
  const [showIntro, setShowIntro] = useState(true);

  const handleSelectTool = (tool: "cursor" | "windsurf") => {
    setSelectedTool(tool);
  };

  const handleGetStarted = () => {
    setShowIntro(false);
  };

  const handleBackToSelection = () => {
    setSelectedTool(null);
  };

  return (
    <div className="w-full text-xl space-y-16">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <AIToolsIntro onGetStarted={handleGetStarted} />
        ) : !selectedTool ? (
          <AIToolsSelection onSelectTool={handleSelectTool} />
        ) : selectedTool === "cursor" ? (
          <CursorSetupQuest onBack={handleBackToSelection} />
        ) : (
          <WindsurfSetup onBack={handleBackToSelection} />
        )}
      </AnimatePresence>
    </div>
  );
}
