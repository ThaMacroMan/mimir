import React, { useState } from "react";
import MimirHeader from "../shared/Logo/MimirHeader";
import { MetallicCardanoLogo } from "../shared/Logo/MetallicCardanoLogo";
import { usePersona } from "../../contexts/PersonaContext";
import { PERSONAS } from "../../types/personas";
import Image from "next/image";

interface TabContent {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface TabbedTutorialProps {
  tabs: TabContent[];
  title?: string;
}

export default function TabbedTutorial({ tabs, title }: TabbedTutorialProps) {
  const [currentTab, setCurrentTab] = useState(0);
  const { selectedPersona } = usePersona();

  // Render the appropriate logo based on persona configuration
  const renderPersonaLogo = () => {
    if (!selectedPersona) return null;

    const persona = PERSONAS[selectedPersona];
    const { logo } = persona;

    if (logo.type === "metallic") {
      return <MetallicCardanoLogo size={32} className="flex-shrink-0" />;
    } else if (logo.type === "image" && logo.src) {
      return (
        <Image
          src={logo.src}
          alt={`${persona.name} logo`}
          width={32}
          height={32}
          className="flex-shrink-0"
        />
      );
    }

    // Fallback to MetallicCardanoLogo
    return <MetallicCardanoLogo size={32} className="flex-shrink-0" />;
  };

  const goToNext = () => {
    if (currentTab < tabs.length - 1) {
      setCurrentTab(currentTab + 1);
    }
  };

  const goToPrevious = () => {
    if (currentTab > 0) {
      setCurrentTab(currentTab - 1);
    }
  };

  const goToTab = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <div className="my-2 mx-auto w-full border border-border rounded-3xl overflow-hidden bg-surface flex flex-col min-h-[80vh] max-h-[90vh]">
      {/* Header with Mimir, title, and progress */}
      <div className="bg-surface-elevated px-4 py-2 border-b border-border rounded-tr-3xl">
        {/* All elements inline */}
        <div className="flex items-center justify-between">
          <MimirHeader size="md" />

          {/* Title and navigation dots */}
          <div className="flex items-center gap-4">
            {title && (
              <h2 className="text-lg font-display font-bold text-text-primary tracking-wide">
                {title}
              </h2>
            )}

            {/* Tab navigation dots */}
            <div className="flex gap-2">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => goToTab(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentTab
                      ? "bg-primary"
                      : index < currentTab
                        ? "bg-primary/50"
                        : "bg-border hover:bg-primary/30"
                  }`}
                  aria-label={`Go to ${tab.title}`}
                />
              ))}
            </div>
          </div>

          {selectedPersona && (
            <div className="inline-flex items-center gap-1 p-1 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm shadow-2xl">
              <div className="w-8 h-8 flex items-center justify-center">
                {renderPersonaLogo()}
              </div>
              <span className="text-2xl font-display font-extrabold tracking-widest text-primary drop-shadow-lg">
                {PERSONAS[selectedPersona].name}
              </span>
            </div>
          )}
        </div>

        {/* Progress bar */}
        <div className="w-full bg-surface rounded-full h-1 mt-2">
          <div
            className="bg-primary h-1 rounded-full transition-all duration-300"
            style={{ width: `${((currentTab + 1) / tabs.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Content area */}
      <div className="p-6 flex-1 overflow-y-auto scrollbar-none">
        {tabs[currentTab].content}
      </div>

      {/* Previous/Next Page Cards */}
      <div className="p-4 bg-surface-elevated rounded-br-3xl border-t border-border relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Previous Page Card */}
          <div
            onClick={currentTab > 0 ? goToPrevious : undefined}
            className={`px-3 py-2 rounded-lg border transition-all duration-200 relative z-20 ${
              currentTab > 0
                ? "bg-surface border-border hover:bg-surface-elevated hover:border-primary cursor-pointer"
                : "bg-surface border-border opacity-50 cursor-not-allowed"
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="text-primary text-sm font-bold">‹</div>
              <div className="flex-1">
                <h3 className="text-xs font-display font-bold text-text-primary">
                  {currentTab > 0
                    ? tabs[currentTab - 1].title
                    : "No Previous Page"}
                </h3>
              </div>
            </div>
          </div>

          {/* Next Page Card */}
          <div
            onClick={currentTab < tabs.length - 1 ? goToNext : undefined}
            className={`px-3 py-2 rounded-lg border transition-all duration-200 relative z-20 ${
              currentTab < tabs.length - 1
                ? "bg-surface border-border hover:bg-surface-elevated hover:border-primary cursor-pointer"
                : "bg-surface border-border opacity-50 cursor-not-allowed"
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="flex-1 text-right">
                <h3 className="text-xs font-display font-bold text-text-primary">
                  {currentTab < tabs.length - 1
                    ? tabs[currentTab + 1].title
                    : "No Next Page"}
                </h3>
              </div>
              <div className="text-primary text-sm font-bold">›</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
