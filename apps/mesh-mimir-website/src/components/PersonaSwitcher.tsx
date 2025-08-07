import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Code, TrendingUp, ChevronDown } from "lucide-react";
import { PERSONAS, LearnerPersona } from "../types/personas";
import { usePersona } from "../contexts/PersonaContext";

interface PersonaSwitcherProps {
  variant?: "compact" | "full";
  className?: string;
}

const personaIcons = {
  "brand-new-to-ai": <User className="w-4 h-4" />,
  "ai-user": <Code className="w-4 h-4" />,
  "ai-power-user": <TrendingUp className="w-4 h-4" />,
};

const personaColors = {
  "brand-new-to-ai": "from-blue-500 to-cyan-500",
  "ai-user": "from-green-500 to-emerald-500",
  "ai-power-user": "from-purple-500 to-pink-500",
};

export default function PersonaSwitcher({
  variant = "compact",
  className = "",
}: PersonaSwitcherProps) {
  const { selectedPersona, setSelectedPersona } = usePersona();
  const [isOpen, setIsOpen] = useState(false);

  const currentPersona = selectedPersona ? PERSONAS[selectedPersona] : null;

  if (variant === "compact") {
    return (
      <div className={`relative ${className}`}>
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center gap-2">
            {currentPersona ? (
              <>
                <div
                  className={`w-6 h-6 rounded-full bg-gradient-to-br ${personaColors[selectedPersona!]} flex items-center justify-center text-white`}
                >
                  {personaIcons[selectedPersona!]}
                </div>
                <span className="text-sm font-medium text-white">
                  {currentPersona.name}
                </span>
              </>
            ) : (
              <>
                <User className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">Choose Persona</span>
              </>
            )}
          </div>
          <ChevronDown
            className={`w-4 h-4 text-text-secondary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-full left-0 mb-2 w-64 bg-surface/95 backdrop-blur-md border border-border rounded-lg shadow-xl z-50"
            >
              <div className="p-2">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide px-3 py-2">
                  Select Your Path
                </div>
                {(Object.keys(PERSONAS) as LearnerPersona[]).map(personaId => {
                  const persona = PERSONAS[personaId];
                  const isSelected = selectedPersona === personaId;

                  return (
                    <button
                      key={personaId}
                      onClick={() => {
                        setSelectedPersona(personaId);
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors duration-200 ${
                        isSelected
                          ? "bg-primary/20 border border-primary/30"
                          : "hover:bg-surface/50 border border-transparent"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg bg-gradient-to-br ${personaColors[personaId]} flex items-center justify-center text-white`}
                      >
                        {personaIcons[personaId]}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-white">
                          {persona.name}
                        </div>
                        <div className="text-xs text-gray-400">
                          {persona.description}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Full variant for larger displays
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 ${className}`}>
      {(Object.keys(PERSONAS) as LearnerPersona[]).map(personaId => {
        const persona = PERSONAS[personaId];
        const isSelected = selectedPersona === personaId;

        return (
          <button
            key={personaId}
            onClick={() => setSelectedPersona(personaId)}
            className={`p-4 rounded-lg border-2 transition-all duration-300 ${
              isSelected
                ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                : "border-gray-700 bg-surface/30 hover:border-primary/50 hover:bg-surface/50"
            }`}
          >
            <div className="text-center">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${personaColors[personaId]} flex items-center justify-center text-white mx-auto mb-3`}
              >
                {personaIcons[personaId]}
              </div>
              <h3 className="font-semibold text-white text-sm mb-1">
                {persona.name}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {persona.description}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
