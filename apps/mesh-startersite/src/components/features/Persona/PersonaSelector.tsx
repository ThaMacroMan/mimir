import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { PERSONAS, LearnerPersona, PersonaConfig } from "../../../types/personas";
import { MetallicCardanoLogo } from "../../shared/Logo";
import Image from "next/image";
import { useCyclingText } from "../../../hooks/useCyclingText";

interface PersonaSelectorProps {
  onPersonaSelect: (persona: LearnerPersona) => void;
  selectedPersona?: LearnerPersona | null;
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

// Custom hook for decrypted text animation
const useDecryptedText = (text: string, _interval: number) => {
  const [displayText, setDisplayText] = useState("");
  const [isDecrypting, setIsDecrypting] = useState(false);

  useEffect(() => {
    if (!text) return;

    setIsDecrypting(true);
    let iterations = 0;

    const decryptInterval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((_letter, index) => {
            if (index < iterations) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iterations >= text.length) {
        clearInterval(decryptInterval);
        setIsDecrypting(false);
      }

      iterations += 1 / 3;
    }, 50);

    return () => clearInterval(decryptInterval);
  }, [text]);

  return { displayText, isDecrypting };
};

export default function PersonaSelector({
  onPersonaSelect,
  selectedPersona,
}: PersonaSelectorProps) {
  const [hoveredPersona, setHoveredPersona] = useState<LearnerPersona | null>(
    null
  );
  const [currentChangingIndex, setCurrentChangingIndex] = useState(0);
  const [cardTexts, setCardTexts] = useState<Record<number, string>>({
    0: PERSONAS["brand-new-to-ai"].subtexts[0],
    1: PERSONAS["ai-user"].subtexts[0],
    2: PERSONAS["ai-power-user"].subtexts[0],
  });

  // Global interval to cycle through cards sequentially
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentChangingIndex(prev => (prev + 1) % 3);
    }, 6180); // 6.18 seconds

    return () => clearInterval(interval);
  }, []);

  // Get the current changing persona
  const currentChangingPersona =
    PERSONAS[Object.keys(PERSONAS)[currentChangingIndex] as LearnerPersona];

  // Only use cycling text for the currently changing card
  const { currentText } = useCyclingText(
    currentChangingPersona.subtexts,
    currentChangingIndex >= 0 ? 6180 : 0
  );
  const { displayText, isDecrypting } = useDecryptedText(
    currentText,
    currentChangingIndex >= 0 ? 6180 : 0
  );

  // Update the card's text when it's currently changing
  useEffect(() => {
    if (displayText) {
      setCardTexts(prev => ({
        ...prev,
        [currentChangingIndex]: displayText,
      }));
    }
  }, [displayText, currentChangingIndex]);

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {(Object.keys(PERSONAS) as LearnerPersona[]).map((personaId, index) => {
          const persona = PERSONAS[personaId];
          const isSelected = selectedPersona === personaId;
          const isHovered = hoveredPersona === personaId;
          const isCurrentlyChanging = currentChangingIndex === index;

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
                className={`w-full max-w-sm mx-auto h-40 p-5 rounded-3xl bg-gradient-to-br from-surface/60 to-background/60 border border-primary/20 backdrop-blur-sm transition-all duration-300 relative overflow-hidden ${
                  isSelected
                    ? "border-primary/40 bg-primary/10 shadow-lg shadow-primary/20"
                    : "hover:border-primary/30 hover:from-surface/70 hover:to-background/70"
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
                <div className="relative z-10 flex items-center gap-4 h-full">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    {renderPersonaLogo(persona)}
                  </div>

                  {/* Text content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-mono font-bold text-primary mb-3 leading-tight">
                      {persona.name}
                    </h3>
                    <p
                      className={`text-sm font-mono text-text-secondary leading-relaxed ${
                        isDecrypting && isCurrentlyChanging
                          ? "text-text-secondary/80"
                          : "text-text-secondary"
                      }`}
                    >
                      {isCurrentlyChanging ? displayText : cardTexts[index]}
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
