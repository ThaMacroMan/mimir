"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  Bot,
  Zap,
  Link as LinkIcon,
  GraduationCap,
  Palette,
  Briefcase,
  Rocket,
  BookOpen,
  Code,
  Users,
  Globe,
  GitBranch,
  Target,
  Video,
  MessageCircle,
  Twitter,
  Github,
  Search,
} from "lucide-react";
import TiltedCard from "./TiltedCard";

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

const bentoItems: BentoItem[] = [
  // Become a Builder - Main card with AI tools
  {
    title: "Become a Builder",
    description:
      "Transform from beginner to Cardano developer with AI-powered tools. No programming experience required.",
    icon: <Sparkles className="w-8 h-8" />,
    className: "col-span-3 row-span-4",
    href: "/docs/ai-tools",
    isHero: true,
    size: "mega",
    isContainer: true,
    children: [
      {
        title: "AI Tools Setup",
        description:
          "Cursor • Windsurf • ChatGPT • MCP Integration • Mnemos Utilities",
        icon: <Rocket className="w-5 h-5" />,
        href: "/docs/ai-tools",
        isLearning: true,
        size: "small",
      },
      {
        title: "Live Coding",
        description:
          "Watch recorded sessions and interactive classes on Mesh YouTube.",
        icon: <Video className="w-5 h-5" />,
        href: "/docs/live-coding",
        size: "small",
      },
      {
        title: "Practice Workflow",
        description:
          "Goal-oriented, provable practice with incentives for completion.",
        icon: <Target className="w-5 h-5" />,
        href: "/docs/practice",
        size: "small",
      },
    ],
  },
  // Build a Project - Main card with development tools
  {
    title: "Build a Project",
    description:
      "Learn by building real Cardano projects. Hands-on experience with development tools and APIs.",
    icon: <Code className="w-8 h-8" />,
    className: "col-span-3 row-span-4",
    href: "/docs/build",
    size: "mega",
    isContainer: true,
    children: [
      {
        title: "First Project",
        description:
          "Build your first 'hello-world' Cardano transaction with AI assistance.",
        icon: <Code className="w-5 h-5" />,
        href: "/docs/first-project",
        size: "small",
      },
      {
        title: "Cardano APIs",
        description:
          "Blockfrost • Taptools • Charlie3 • DexHunter • On-chain data",
        icon: <LinkIcon className="w-5 h-5" />,
        href: "/docs/apis",
        size: "small",
      },
      {
        title: "GitHub Workflow",
        description:
          "Learn branches, PRs, CI checks, and collaborative development practices.",
        icon: <GitBranch className="w-5 h-5" />,
        href: "/docs/github-workflow",
        size: "small",
      },
    ],
  },
];

export default function MagicBento() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInView, setIsMouseInView] = useState(false);
  const [cardPositions, setCardPositions] = useState<
    Array<{
      x: number;
      y: number;
      width: number;
      height: number;
    }>
  >([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsMouseInView(true);
    const handleMouseLeave = () => setIsMouseInView(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Update card positions when component mounts or window resizes
  useEffect(() => {
    const updateCardPositions = () => {
      const positions = cardRefs.current.map(ref => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          return {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
            width: rect.width,
            height: rect.height,
          };
        }
        return { x: 0, y: 0, width: 0, height: 0 };
      });
      setCardPositions(positions);
    };

    // Initial update
    updateCardPositions();

    // Update on window resize
    window.addEventListener("resize", updateCardPositions);
    return () => window.removeEventListener("resize", updateCardPositions);
  }, []);

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

  const renderCard = (item: BentoItem, index: number, isSubCard = false) => {
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
    const repulsionStrength = Math.max(
      0,
      (maxDistance - distance) / maxDistance
    );
    const repulsionForce = repulsionStrength * 25;

    // Calculate direction from mouse to card
    const angle = Math.atan2(
      cardPosition.y - mousePosition.y,
      cardPosition.x - mousePosition.x
    );
    const pushX = Math.cos(angle) * repulsionForce;
    const pushY = Math.sin(angle) * repulsionForce;

    // Minimal offset calculations for consistent spacing
    const totalCards = bentoItems.length;
    const offsetMultiplier = 40; // Minimal horizontal movement
    const scaleMultiplier = 0.05; // Minimal scale variation
    const verticalOffsetMultiplier = 20; // Minimal vertical offset

    // Create minimal movement for each card
    const baseOffset = (index - (totalCards - 1) / 2) * offsetMultiplier;
    const baseScale = 1 + (index - (totalCards - 1) / 2) * scaleMultiplier;
    const baseVerticalOffset =
      (index - (totalCards - 1) / 2) * verticalOffsetMultiplier;

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
          <div className="relative z-10 h-full p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`text-primary ${item.isHero ? "text-2xl" : ""}`}
                >
                  {item.icon}
                </div>
                <h3
                  className={`font-bold text-primary group-hover:text-secondary transition-colors duration-300 ${
                    item.isHero
                      ? "text-3xl md:text-4xl"
                      : isSubCard
                        ? "text-sm md:text-base"
                        : "text-lg md:text-xl"
                  }`}
                >
                  {item.title}
                </h3>
              </div>

              <p
                className={`text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300 ${
                  item.isHero
                    ? "text-base md:text-lg"
                    : isSubCard
                      ? "text-xs md:text-sm"
                      : "text-sm md:text-base"
                }`}
              >
                {item.description}
              </p>
            </div>

            {/* Sub-cards container for mega cards */}
            {item.isContainer && item.children && (
              <div className="mt-6 grid grid-cols-1 gap-4">
                {item.children.map((child, childIndex) => (
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
                        className="block bg-gradient-to-br from-surface/40 to-background/40 border border-primary/10 rounded-xl p-3 hover:border-primary/30 hover:from-surface/60 hover:to-background/60 transition-all duration-200 group cursor-pointer"
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
                          <h4 className="text-xs font-semibold text-primary group-hover:text-secondary transition-colors duration-200">
                            {child.title}
                          </h4>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-text-secondary group-hover:text-text-primary transition-colors duration-200 leading-tight">
                            {child.description}
                          </p>
                          <div className="text-xs text-primary/60 group-hover:text-primary transition-colors duration-200">
                            →
                          </div>
                        </div>
                      </motion.a>
                    ) : (
                      <motion.div
                        className="bg-gradient-to-br from-surface/40 to-background/40 border border-primary/10 rounded-xl p-3 hover:border-primary/30 transition-all duration-200 group"
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
                          <h4 className="text-xs font-semibold text-primary group-hover:text-secondary transition-colors duration-200">
                            {child.title}
                          </h4>
                        </div>
                        <p className="text-xs text-text-secondary group-hover:text-text-primary transition-colors duration-200 leading-tight">
                          {child.description}
                        </p>
                      </motion.div>
                    )}
                  </TiltedCard>
                ))}
              </div>
            )}

            {/* Bottom accent */}
            <div className="mt-4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Mimir Badge - now much larger, with "powered by MeshJS" inside */}
      <motion.div
        className="flex justify-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="inline-flex flex-col items-center justify-center gap-1 px-8 py-6 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full backdrop-blur-sm shadow-2xl">
          <span className="font-mono font-extrabold tracking-widest text-5xl md:text-6xl lg:text-7xl text-primary drop-shadow-lg">
            Mimir
          </span>
          <span className="text-xs text-text-secondary font-mono opacity-70 mt-2 flex items-center gap-2">
            powered by{" "}
            <img
              src="/logo-mesh-white-32x32.webp"
              alt="MeshJS Logo"
              className="w-4 h-4 opacity-80"
            />{" "}
            <span className="font-bold text-primary">MeshJS</span>
          </span>
        </div>
      </motion.div>
      {/* Added: Project tagline for clarity and SEO */}
      <div className="flex justify-center mb-4">
        <span className="text-lg md:text-xl text-center text-text-secondary font-mono font-medium max-w-2xl">
          Start from 0.
        </span>
      </div>
      <div className="flex justify-center mb-6">
        <span className="text-lg md:text-xl text-center text-text-secondary font-mono font-medium max-w-2xl">
          Learn to build on Cardano from scratch with simple guides, AI-powered
          tools, and{" "}
          <img
            src="/logo-mesh-white-32x32.webp"
            alt="MeshJS Logo"
            className="w-6 h-6 opacity-80 inline-block"
          />{" "}
          <span className="font-bold text-primary">MeshJS</span>
        </span>
      </div>

      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[200px] justify-items-center">
        {bentoItems.map((item, index) => renderCard(item, index))}
      </div>

      {/* Community Section - "Get Involved" with border and label */}
      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex flex-col items-center w-full max-w-2xl">
          <div className="flex flex-row gap-8 w-full justify-center border border-primary/20 rounded-xl px-8 py-5 bg-primary/5 shadow-sm">
            <span className=" px-4 py-1 border-primary/30 rounded-full text-primary font-mono text-base font-semibold tracking-wide bg-primary/5">
              And make new friends:
            </span>
            <motion.a
              href="https://twitter.com/mesh_js"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Twitter className="w-5 h-5" />
              <span className="text-sm font-medium">Twitter</span>
            </motion.a>
            <motion.a
              href="https://discord.gg/meshjs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Discord</span>
            </motion.a>
            <motion.a
              href="https://github.com/MeshJS/mesh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-medium">GitHub</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
