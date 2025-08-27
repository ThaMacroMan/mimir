import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { PERSONAS, LearnerPersona, PersonaConfig } from "../../../types/personas";
import { usePersona } from "../../../contexts/PersonaContext";
import { MetallicCardanoLogo } from "../../shared/Logo";
import Image from "next/image";

interface PersonaSwitcherProps {
  variant?: "compact" | "full";
  className?: string;
}

const renderPersonaLogo = (persona: PersonaConfig) => {
  if (persona.logo.type === "metallic") {
    return (
      <div className="flex-shrink-0 relative">
        <div className="w-6 h-6 rounded-full flex items-center justify-center">
          <MetallicCardanoLogo size={24} className="flex-shrink-0" />
        </div>
      </div>
    );
  } else if (persona.logo.type === "image" && persona.logo.src) {
    return (
      <div className="flex-shrink-0 relative">
        <div className="w-6 h-6 rounded-full flex items-center justify-center">
          <Image
            src={persona.logo.src}
            alt={`${persona.name} logo`}
            width={24}
            height={18}
            className={`flex-shrink-0 ${
              persona.id === "ai-user" ? "brightness-0" : ""
            }`}
          />
        </div>
      </div>
    );
  }
  return null;
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
                {renderPersonaLogo(currentPersona)}
                <span className="text-sm font-mono font-semibold text-primary">
                  {currentPersona.name}
                </span>
              </>
            ) : (
              <>
                <div className="w-6 h-6 rounded-full bg-surface/50 flex items-center justify-center">
                  <MetallicCardanoLogo size={24} className="flex-shrink-0" />
                </div>
                <span className="text-sm font-mono text-text-secondary">
                  Choose Persona
                </span>
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
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
                scale: { duration: 0.2 },
              }}
              className="absolute bottom-full left-0 right-0 mb-3 bg-surface-elevated backdrop-blur-md border border-border rounded-lg shadow-xl z-50 max-w-[calc(100vw-32px)]"
            >
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide px-3 py-2 border-b border-border/30">
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
                    className={`w-full flex items-center gap-2 px-3 py-3 rounded-none text-left transition-colors duration-200 ${
                      isSelected
                        ? "bg-primary/20 border-l-4 border-l-primary"
                        : "hover:bg-surface/50"
                    }`}
                  >
                    {renderPersonaLogo(persona)}
                    <div className="flex-1 min-w-0">
                      <div className="font-mono font-semibold text-primary text-sm truncate">
                        {persona.name}
                      </div>
                      <div className="text-xs text-text-secondary font-mono leading-relaxed line-clamp-2">
                        {persona.description}
                      </div>
                    </div>
                  </button>
                );
              })}
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
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                {renderPersonaLogo(persona)}
              </div>
              <h3 className="font-mono font-semibold text-primary text-sm mb-1">
                {persona.name}
              </h3>
              <p className="text-xs text-text-secondary font-mono leading-relaxed">
                {persona.description}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
