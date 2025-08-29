import { useState } from "react";
import { motion } from "framer-motion";
import {
  PERSONAS,
  LearnerPersona,
  PersonaConfig,
} from "../../../types/personas";
import { MetallicCardanoLogo } from "../../shared/Logo";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { getSidebarSections } from "../../../utils/sidebarUtils";

interface PersonaSelectorProps {
  onPersonaSelect: (persona: LearnerPersona) => void;
  selectedPersona?: LearnerPersona | null;
}

export default function PersonaSelector({
  onPersonaSelect,
  selectedPersona,
}: PersonaSelectorProps) {
  const router = useRouter();
  const [hoveredPersona, setHoveredPersona] = useState<LearnerPersona | null>(
    null
  );

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

        // Open sidebar by dispatching custom event
        if (typeof window !== "undefined") {
          const sidebarState = {
            collapsed: false,
            width: 220,
            height:
              typeof window !== "undefined" ? window.innerHeight - 32 : 800,
            top: 16,
            openSections: sections.map(() => true),
          };

          // Dispatch custom event to trigger sidebar update
          window.dispatchEvent(
            new CustomEvent("sidebarStateUpdate", {
              detail: { sidebarId: "main-sidebar", state: sidebarState },
            })
          );
        }
      }
    }
  };

  const renderPersonaLogo = (persona: PersonaConfig) => {
    if (persona.logo.type === "metallic") {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <MetallicCardanoLogo size={200} className="w-auto h-auto" />
        </div>
      );
    } else if (persona.logo.type === "image" && persona.logo.src) {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={persona.logo.src}
            alt={`${persona.name} logo`}
            width={200}
            height={200}
            className={`object-contain ${
              persona.id === "ai-user" ? "brightness-0" : ""
            }`}
          />
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
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
              <motion.div
                onClick={() => onPersonaSelect(personaId)}
                onMouseEnter={() => setHoveredPersona(personaId)}
                onMouseLeave={() => setHoveredPersona(null)}
                className={`w-full h-56 transition-all duration-300 relative cursor-pointer ${isHovered ? "scale-[1.02]" : "scale-100"}`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Card content in vertical stack layout */}
                <div className="relative w-full h-full flex flex-col">
                  {/* Title above logo */}
                  <div className="flex-none flex items-end justify-center pb-2">
                    <div className="text-center">
                      <h3
                        className="text-2xl text-primary leading-tight drop-shadow-lg"
                        style={{
                          fontFamily: isSelected
                            ? "'Inter-ExtraBoldItalic', 'Inter', sans-serif"
                            : "'Inter-ExtraLight', 'Inter', sans-serif",
                          fontWeight: "normal",
                        }}
                      >
                        {persona.name}
                      </h3>
                    </div>
                  </div>

                  {/* Logo in center */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      {/* Glass background when selected */}
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute w-52 h-52 rounded-full border-2 border-primary"
                        />
                      )}
                      <div className="relative z-10">
                        {renderPersonaLogo(persona)}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
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
            whileHover={{
              scale: 1.05,
              y: -2,
              transition: { duration: 0.1, ease: "easeOut" },
            }}
            whileTap={{
              scale: 0.98,
              y: 0,
              transition: { duration: 0.1 },
            }}
            className={`
              relative group px-12 py-6 rounded-3xl font-display font-bold text-xl
              transition-all duration-500 ease-out
              shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)]
              backdrop-blur-sm border border-white/20
              overflow-hidden
              ${
                selectedPersona === "brand-new-to-ai"
                  ? "bg-gradient-to-br from-[#0033AD] via-[#1E40AF] to-[#3B82F6] hover:from-[#002B8F] hover:via-[#1E3A8A] hover:to-[#2563EB] text-white"
                  : selectedPersona === "ai-user"
                    ? "bg-gradient-to-br from-[#7C3AED] via-[#8B5CF6] to-[#A855F7] hover:from-[#6D28D9] hover:via-[#7C3AED] hover:to-[#9333EA] text-white"
                    : "bg-gradient-to-br from-[#DC2626] via-[#EF4444] to-[#F87171] hover:from-[#B91C1C] hover:via-[#DC2626] hover:to-[#EF4444] text-white"
              }
            `}
          >
            {/* Animated background glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />

            {/* Button content with enhanced typography */}
            <div className="relative z-10 flex items-center justify-center space-x-3">
              <span className="text-2xl font-bold tracking-wide drop-shadow-lg">
                Start Here
              </span>
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.1 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </motion.svg>
            </div>

            {/* Enhanced focus ring for accessibility */}
            <div className="absolute inset-0 rounded-3xl ring-4 ring-white/30 ring-offset-2 ring-offset-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-200" />
          </motion.button>

          {/* Subtle subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-gray-300 text-sm font-medium"
          >
            {selectedPersona === "brand-new-to-ai"
              ? "Start building with AI on Cardano"
              : selectedPersona === "ai-user"
                ? "Level up your AI skills for blockchain development"
                : "Master advanced AI techniques for DeFi and smart contracts"}
          </motion.p>
        </motion.div>
      )}
    </div>
  );
}
