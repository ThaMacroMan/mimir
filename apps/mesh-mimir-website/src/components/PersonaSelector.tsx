import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { PERSONAS, LearnerPersona, PersonaConfig } from "../types/personas";
import { MetallicCardanoLogo } from "./MetallicCardanoLogo";
import Image from "next/image";

interface PersonaSelectorProps {
  onPersonaSelect: (persona: LearnerPersona) => void;
  selectedPersona?: LearnerPersona | null;
}

export default function PersonaSelector({
  onPersonaSelect,
  selectedPersona,
}: PersonaSelectorProps) {
  const [hoveredPersona, setHoveredPersona] = useState<LearnerPersona | null>(
    null
  );

  const renderPersonaLogo = (persona: PersonaConfig) => {
    if (persona.logo.type === "metallic") {
      return (
        <div className="flex-shrink-0 relative">
          <div className="w-30 h-30 rounded-full flex items-center justify-center">
            <MetallicCardanoLogo size={64} className="flex-shrink-0" />
          </div>
        </div>
      );
    } else if (persona.logo.type === "image" && persona.logo.src) {
      return (
        <div className="flex-shrink-0 relative">
          <div className="w-30 h-30 rounded-full flex items-center justify-center">
            <Image
              src={persona.logo.src}
              alt={`${persona.name} logo`}
              width={64}
              height={46}
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

  return (
    <div className="w-full max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(Object.keys(PERSONAS) as LearnerPersona[]).map((personaId, index) => {
          const persona = PERSONAS[personaId];
          const isSelected = selectedPersona === personaId;
          const isHovered = hoveredPersona === personaId;

          return (
            <motion.div
              key={personaId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <motion.button
                onClick={() => onPersonaSelect(personaId)}
                onMouseEnter={() => setHoveredPersona(personaId)}
                onMouseLeave={() => setHoveredPersona(null)}
                className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden ${
                  isSelected
                    ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                    : "border-gray-700 bg-surface/30 hover:border-primary/50 hover:bg-surface/50"
                } ${isHovered ? "scale-105" : "scale-100"}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Selected indicator */}
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-3 right-3"
                  >
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </motion.div>
                )}

                {/* Content with logo on the left */}
                <div className="relative z-10 flex items-center gap-4">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    {renderPersonaLogo(persona)}
                  </div>

                  {/* Text content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-mono font-semibold text-text-secondary mb-2">
                      {persona.name}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed font-mono">
                      {persona.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            </motion.div>
          );
        })}
      </div>

      {/* Call to action */}
      {selectedPersona && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-12"
        ></motion.div>
      )}
    </div>
  );
}
