import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import {
  PERSONAS,
  LearnerPersona,
  PersonaConfig,
} from "../../../types/personas";
import { MetallicCardanoLogo } from "../../shared/Logo";
import Image from "next/image";
import { useCyclingText } from "../../../hooks/useCyclingText";
import { useRouter } from "next/navigation";
import { getSidebarSections } from "../../../utils/sidebarUtils";

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
  const router = useRouter();
  const [hoveredPersona, setHoveredPersona] = useState<LearnerPersona | null>(
    null
  );
  const [currentChangingIndex, setCurrentChangingIndex] = useState(0);
  const [cardTexts, setCardTexts] = useState<Record<number, string>>({
    0: PERSONAS["brand-new-to-ai"].subtexts[0],
    1: PERSONAS["ai-user"].subtexts[0],
    2: PERSONAS["ai-power-user"].subtexts[0],
  });

  // Handle Start Here button click
  const handleStartHere = () => {
    if (selectedPersona) {
      // Get the first available page from sidebar sections
      const sections = getSidebarSections(selectedPersona);
      const firstSection = sections.find(section => section.items.length > 0);

      if (firstSection && firstSection.items.length > 0) {
        const firstPage = firstSection.items[0];

        // Navigate to the first page
        router.push(firstPage.href);

        // Open sidebar by setting localStorage (sidebar will read this)
        if (typeof window !== "undefined") {
          const sidebarState = {
            collapsed: false,
            width: 220,
            height: 800,
            top: 16,
            openSections: [true, true, true, true, true],
          };
          localStorage.setItem(
            "sidebar-main-sidebar",
            JSON.stringify(sidebarState)
          );
        }
      }
    }
  };

  // Global interval to cycle through cards sequentially
  // This ensures: Card 0 → Card 1 → Card 2 → Card 0 (no consecutive repeats)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentChangingIndex(prev => {
        const nextIndex = (prev + 1) % 3;
        return nextIndex;
      });
    }, 16180); // 16.18 seconds - slower text cycling

    return () => clearInterval(interval);
  }, []);

  // Get the current changing persona
  // currentChangingIndex cycles: 0 → 1 → 2 → 0 → 1 → 2... (no consecutive repeats)
  const currentChangingPersona =
    PERSONAS[Object.keys(PERSONAS)[currentChangingIndex] as LearnerPersona];

  // Only use cycling text for the currently changing card
  const { currentText } = useCyclingText(
    currentChangingPersona.subtexts,
    currentChangingIndex >= 0 ? 16180 : 0
  );
  const { displayText, isDecrypting } = useDecryptedText(
    currentText,
    currentChangingIndex >= 0 ? 16180 : 0
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
          <div className="w-20 h-20 rounded-full flex items-center justify-center">
            <MetallicCardanoLogo size={64} className="flex-shrink-0" />
          </div>
        </div>
      );
    } else if (persona.logo.type === "image" && persona.logo.src) {
      return (
        <div className="flex-shrink-0 relative">
          <div className="w-20 h-20 rounded-full flex items-center justify-center">
            <Image
              src={persona.logo.src}
              alt={`${persona.name} logo`}
              width={64}
              height={64}
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
    <div className="w-full max-w-4xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
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
                className={`w-full h-44 p-5 rounded-3xl bg-gradient-to-br from-surface/50 to-background/50 border border-primary/20 backdrop-blur-sm transition-all duration-300 relative overflow-hidden ${
                  isSelected
                    ? "border-primary/30 bg-primary/10 shadow-md shadow-primary/10"
                    : "hover:border-primary/30 hover:from-surface/60 hover:to-background/60"
                } ${isHovered ? "scale-[1.02]" : "scale-100"}`}
                whileHover={{ scale: 1.01 }}
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

                {/* Content with logo inline with title */}
                <div className="relative z-10 flex flex-col h-full justify-center items-center">
                  {/* Title with inline logo */}
                  <div className="flex items-center justify-center gap-3 mb-4">
                    {renderPersonaLogo(persona)}
                    <h3 className="text-base font-display font-bold text-primary leading-tight">
                      {persona.name}
                    </h3>
                  </div>

                  {/* Full-width description text */}
                  <div className="flex-1 flex items-center justify-center min-w-0 px-2">
                    <p
                      className={`text-xs sm:text-sm font-display text-text-secondary leading-relaxed text-center ${
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
          className="text-center mt-16"
        >
          <motion.button
            onClick={handleStartHere}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-2xl font-display font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
              selectedPersona === "brand-new-to-ai"
                ? "bg-gradient-to-r from-[#0033AD] to-[#3366CC] hover:from-[#002B8F] hover:to-[#2952A3] text-white"
                : selectedPersona === "ai-user"
                  ? "bg-gradient-to-r from-[#9333EA] to-[#A855F7] hover:from-[#7C3AED] hover:to-[#9333EA] text-white"
                  : "bg-gradient-to-r from-[#EF4444] to-[#F87171] hover:from-[#DC2626] hover:to-[#EF4444] text-white"
            }`}
          >
            Start Here
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
