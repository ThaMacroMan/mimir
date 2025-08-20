import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ContentCard {
  title: string;
  description: string;
  icon?: ReactNode;
  href?: string;
  className?: string;
  primary?: boolean;
}

interface ContentSectionProps {
  children?: ReactNode;
  title?: string;
  subtitle?: string;
  cards?: ContentCard[];
  layout?: "grid" | "cards" | "text" | "hero";
  className?: string;
  maxWidth?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl";
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const getMaxWidthClass = (maxWidth?: string) => {
  switch (maxWidth) {
    case "sm":
      return "max-w-sm";
    case "md":
      return "max-w-md";
    case "lg":
      return "max-w-lg";
    case "xl":
      return "max-w-xl";
    case "2xl":
      return "max-w-2xl";
    case "3xl":
      return "max-w-3xl";
    case "4xl":
      return "max-w-4xl";
    case "5xl":
      return "max-w-5xl";
    case "6xl":
      return "max-w-6xl";
    case "7xl":
      return "max-w-7xl";
    default:
      return "max-w-4xl";
  }
};

export default function ContentSection({
  children,
  title,
  subtitle,
  cards,
  layout = "text",
  className = "",
  maxWidth = "4xl",
}: ContentSectionProps) {
  const maxWidthClass = getMaxWidthClass(maxWidth);

  const renderCards = () => {
    if (!cards) return null;

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {card.href ? (
              <motion.a
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  card.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`block group h-full p-6 rounded-2xl border transition-all duration-300 ${
                  card.primary
                    ? "bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30 hover:from-primary/20 hover:to-secondary/20 hover:border-primary/50"
                    : "bg-gradient-to-br from-surface/60 to-background/60 border-primary/20 hover:from-surface/80 hover:to-background/80 hover:border-primary/40"
                } ${card.className || ""}`}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-4">
                  {card.icon && (
                    <div className="text-primary group-hover:text-secondary transition-colors duration-200">
                      {card.icon}
                    </div>
                  )}
                  <div className="flex-1">
                    <h3
                      className={`text-lg font-semibold mb-2 ${
                        card.primary ? "text-primary" : "text-text-primary"
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <div className="text-text-secondary group-hover:text-primary transition-colors duration-200">
                    →
                  </div>
                </div>
              </motion.a>
            ) : (
              <motion.div
                className={`block group h-full p-6 rounded-2xl border transition-all duration-300 ${
                  card.primary
                    ? "bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30"
                    : "bg-gradient-to-br from-surface/60 to-background/60 border-primary/20"
                } ${card.className || ""}`}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-4">
                  {card.icon && (
                    <div className="text-primary group-hover:text-secondary transition-colors duration-200">
                      {card.icon}
                    </div>
                  )}
                  <div className="flex-1">
                    <h3
                      className={`text-lg font-semibold mb-2 ${
                        card.primary ? "text-primary" : "text-text-primary"
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    );
  };

  const renderHero = () => {
    if (!cards || cards.length === 0) return null;

    const heroCard = cards[0];

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="bg-gradient-to-br from-surface/60 to-background/60 border border-primary/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-start gap-6">
            {heroCard.icon && (
              <div className="text-primary text-4xl md:text-5xl">
                {heroCard.icon}
              </div>
            )}
            <div className="flex-1">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
                {heroCard.title}
              </h2>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                {heroCard.description}
              </p>
              {heroCard.href && (
                <motion.a
                  href={heroCard.href}
                  target={
                    heroCard.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    heroCard.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                  <span>→</span>
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <motion.section
      className={`w-full pt-8 ${className}`}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerChildren}
    >
      <div className={`mx-auto px-6 ${maxWidthClass}`}>
        {/* Header */}
        {(title || subtitle) && (
          <motion.div variants={fadeInUp} className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl text-text-secondary font-medium max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        {/* Content */}
        <motion.div variants={fadeInUp}>
          {layout === "hero" && renderHero()}
          {layout === "cards" && renderCards()}
          {layout === "grid" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {children}
            </div>
          )}
          {layout === "text" && children}
        </motion.div>
      </div>
    </motion.section>
  );
}
