"use client";

import { motion } from "framer-motion";
import TiltedCard from "../../ui/Card/TiltedCard";

interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  href?: string;
  isHero?: boolean;
  isChat?: boolean;
  isLearning?: boolean;
  size?: "small" | "medium" | "large" | "xlarge" | "mega";
  isContainer?: boolean;
  children?: BentoItem[];
}

interface BentoCardProps {
  item: BentoItem;
  index: number;
  isSubCard?: boolean;
  mousePosition: { x: number; y: number };
  isMouseInView: boolean;
  cardPositions: Array<{
    x: number;
    y: number;
    width: number;
    height: number;
  }>;
  cardRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  totalCards: number;
}

export default function BentoCard({
  item,
  index,
  isSubCard = false,
  mousePosition,
  isMouseInView,
  cardPositions,
  cardRefs,
  totalCards,
}: BentoCardProps) {
  const cardPosition = cardPositions[index] || {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  };

  // Calculate distance from mouse to card center
  const distance = Math.sqrt(
    Math.pow(mousePosition.x - cardPosition.x, 2) +
      Math.pow(mousePosition.y - cardPosition.y, 2)
  );

  // Calculate repulsion force (stronger when closer)
  const maxDistance = 150;
  const repulsionStrength = Math.max(0, (maxDistance - distance) / maxDistance);
  const repulsionForce = repulsionStrength * 25;

  // Calculate direction from mouse to card
  const angle = Math.atan2(
    cardPosition.y - mousePosition.y,
    cardPosition.x - mousePosition.x
  );
  const pushX = Math.cos(angle) * repulsionForce;
  const pushY = Math.sin(angle) * repulsionForce;

  // Minimal offset calculations for consistent spacing
  const offsetMultiplier = 40; // Minimal horizontal movement
  const scaleMultiplier = 0.05; // Minimal scale variation
  const verticalOffsetMultiplier = 20; // Minimal vertical offset

  // Create minimal movement for each card
  const baseOffset = (index - (totalCards - 1) / 2) * offsetMultiplier;
  const baseScale = 1 + (index - (totalCards - 1) / 2) * scaleMultiplier;
  const baseVerticalOffset =
    (index - (totalCards - 1) / 2) * verticalOffsetMultiplier;

  // Determine card size classes based on item size
  const getSizeClasses = (size?: string) => {
    switch (size) {
      case "mega":
        return "md:col-span-3 md:row-span-2";
      case "xlarge":
        return "md:col-span-2 md:row-span-2";
      case "large":
        return "md:col-span-2 md:row-span-3";
      case "medium":
        return "md:col-span-1 md:row-span-1";
      case "small":
        return "md:col-span-1 md:row-span-1";
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  return (
    <TiltedCard
      key={item.title}
      maxTilt={item.size === "mega" ? 0 : 12} // Disable tilt for mega cards
      scale={item.size === "mega" ? 1.0 : 1.03} // No scale for mega cards
      className={`h-full ${getSizeClasses(item.size)}`}
      disabled={
        item.size === "mega" || (isMouseInView && distance < maxDistance)
      }
      asGridItem={true}
    >
      <motion.div
        ref={el => {
          cardRefs.current[index] = el;
        }}
        className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-surface/60 to-background/60 border border-primary/20 backdrop-blur-sm h-full transition-all duration-300 ${
          isSubCard
            ? "bg-gradient-to-br from-surface/40 to-background/40"
            : item.isContainer
              ? "hover:border-primary/30"
              : "hover:border-primary/40"
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{
          x: isMouseInView && distance < maxDistance ? pushX : baseOffset,
          y:
            isMouseInView && distance < maxDistance
              ? pushY
              : baseVerticalOffset,
          scale: isMouseInView && distance < maxDistance ? 1 : baseScale,
          rotate: isMouseInView && distance < maxDistance ? 0 : [0, 0.5, 0],
        }}
        transition={{
          duration:
            isMouseInView && distance < maxDistance ? 0.1 : 4 + index * 0.5,
          repeat: isMouseInView && distance < maxDistance ? 0 : Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: isMouseInView && distance < maxDistance ? 0 : index * 0.1,
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="relative z-10 h-full p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="text-primary text-lg">{item.icon}</div>
              <h3 className="font-mono font-bold text-primary group-hover:text-secondary transition-colors duration-300 text-lg md:text-xl">
                {item.title}
              </h3>
            </div>

            <p className="font-mono text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300 text-sm">
              {item.description}
            </p>
          </div>

          {/* Sub-cards container for mega cards */}
          {item.isContainer && item.children && (
            <div className="mt-4 grid grid-cols-1 gap-4">
              {item.children.map((child, _childIndex) => (
                <TiltedCard
                  key={child.title}
                  maxTilt={12}
                  scale={1.05}
                  disabled={false}
                  asGridItem={true}
                >
                  {child.href ? (
                    <motion.a
                      href={child.href}
                      target={
                        child.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        child.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="block bg-gradient-to-br from-surface/40 to-background/40 border border-primary/10 rounded-lg p-3 hover:border-primary/30 hover:from-surface/60 hover:to-background/60 transition-all duration-200 group cursor-pointer"
                      whileHover={{
                        scale: 1.02,
                        borderColor: "rgba(14, 165, 233, 0.4)", // primary/40
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-primary group-hover:text-secondary transition-colors duration-200">
                          {child.icon}
                        </div>
                        <h4 className="text-sm font-mono font-semibold text-primary group-hover:text-secondary transition-colors duration-200">
                          {child.title}
                        </h4>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-mono text-text-secondary group-hover:text-text-primary transition-colors duration-200 leading-tight">
                          {child.description}
                        </p>
                        <div className="text-sm text-primary/60 group-hover:text-primary transition-colors duration-200">
                          →
                        </div>
                      </div>
                    </motion.a>
                  ) : (
                    <motion.div
                      className="bg-gradient-to-br from-surface/40 to-background/40 border border-primary/10 rounded-lg p-3 hover:border-primary/30 transition-all duration-200 group"
                      whileHover={{
                        scale: 1.02,
                        borderColor: "rgba(14, 165, 233, 0.4)", // primary/40
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-primary group-hover:text-secondary transition-colors duration-200">
                          {child.icon}
                        </div>
                        <h4 className="text-sm font-mono font-semibold text-primary group-hover:text-secondary transition-colors duration-200">
                          {child.title}
                        </h4>
                      </div>
                      <p className="text-sm font-mono text-text-secondary group-hover:text-text-primary transition-colors duration-200 leading-tight">
                        {child.description}
                      </p>
                    </motion.div>
                  )}
                </TiltedCard>
              ))}
            </div>
          )}

          {/* Bottom accent */}
          <div className="mt-3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Interactive overlay - only for cards without children */}
        {item.href && !item.isContainer && (
          <motion.a
            href={item.href}
            className="absolute inset-0 z-20"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          />
        )}
      </motion.div>
    </TiltedCard>
  );
}
