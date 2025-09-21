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

  return (
    <div className="mt-0 mb-0 md:my-2 mx-auto w-full border border-border rounded-3xl overflow-hidden bg-surface/30 backdrop-blur-md flex flex-col h-[calc(100vh-110px)] mx-0">
      {/* Header with Mimir, title, and progress */}
      <div
        className="bg-surface-elevated px-1 md:px-4 py-0 md:py-2 border-b border-border rounded-tr-3xl"
        style={{ minHeight: "auto" }}
      >
        {/* Mobile: Stack vertically, Desktop: Inline */}
        <div
          className="flex flex-col md:flex-row md:items-center gap-0 md:gap-2"
          style={{ minHeight: "auto" }}
        >
          {/* Mobile: Only show progress counter, Desktop: Show full header */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Desktop: Left side - Mimir header */}
            <div className="flex items-center">
              <MimirHeader size="sm" />
            </div>

            {/* Desktop: Center - Title and progress */}
            <div className="flex items-center gap-2">
              {title && (
                <h2 className="md:text-lg font-display font-bold text-text-primary tracking-wide leading-none">
                  {title}
                </h2>
              )}
              <span className="md:text-sm font-medium text-text-secondary">
                {currentTab + 1} of {tabs.length}
              </span>
            </div>

            {/* Desktop: Right side - Persona badge */}
            {selectedPersona && (
              <div className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm shadow-2xl">
                <div className="w-6 h-6 flex items-center justify-center">
                  {renderPersonaLogo()}
                </div>
                <span className="text-sm font-display font-extrabold tracking-widest text-primary drop-shadow-lg">
                  {PERSONAS[selectedPersona].name}
                </span>
              </div>
            )}
          </div>

          {/* Mobile: Only progress counter */}
          <div className="flex items-center justify-center md:hidden gap-0.5">
            <span className="text-[8px] font-medium text-text-secondary">
              {currentTab + 1} of {tabs.length}
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-surface rounded-full h-0.5 md:h-1 mt-0 md:mt-2">
          <div
            className="bg-primary h-0.5 md:h-1 rounded-full transition-all duration-300"
            style={{ width: `${((currentTab + 1) / tabs.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Content area */}
      <div className="p-3 md:p-6 flex-1 overflow-y-auto scrollbar-none">
        {tabs[currentTab].content}
      </div>

      {/* Previous/Next Page Cards */}
      <div className="p-0.5 md:p-4 bg-surface-elevated rounded-br-3xl border-t border-border relative z-10">
        <div className="grid grid-cols-2 gap-0.5 md:gap-4">
          {/* Previous Page Card */}
          <div
            onClick={currentTab > 0 ? goToPrevious : undefined}
            className={`px-2 md:px-3 py-4 md:py-2 rounded-bl-3xl md:rounded-lg border transition-all duration-200 relative z-20 flex items-center justify-center ${
              currentTab > 0
                ? "bg-surface border-border hover:bg-surface-elevated hover:border-primary cursor-pointer"
                : "bg-surface border-border opacity-50 cursor-not-allowed"
            }`}
          >
            <div className="flex items-center justify-center gap-1 md:gap-2 w-full">
              <div className="text-primary text-[14px] md:text-xs font-bold leading-none">
                ‹
              </div>
              <div className="flex-1 min-w-0 text-center">
                <span className="text-[14px] md:text-xs font-medium text-text-primary truncate block leading-tight">
                  {currentTab > 0 ? tabs[currentTab - 1].title : "Prev"}
                </span>
              </div>
            </div>
          </div>

          {/* Next Page Card */}
          <div
            onClick={currentTab < tabs.length - 1 ? goToNext : undefined}
            className={`px-2 md:px-3 py-1.5 md:py-2 rounded-br-3xl md:rounded-lg border transition-all duration-200 relative z-20 flex items-center justify-center ${
              currentTab < tabs.length - 1
                ? "bg-surface border-border hover:bg-surface-elevated hover:border-primary cursor-pointer"
                : "bg-surface border-border opacity-50 cursor-not-allowed"
            }`}
          >
            <div className="flex items-center justify-center gap-1 md:gap-2 w-full">
              <div className="flex-1 min-w-0 text-center">
                <span className="text-[14px] md:text-xs font-medium text-text-primary truncate block leading-tight">
                  {currentTab < tabs.length - 1
                    ? tabs[currentTab + 1].title
                    : "Next"}
                </span>
              </div>
              <div className="text-primary text-[14px] md:text-xs font-bold leading-none">
                ›
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
