"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import {
  Sparkles,
  Link as LinkIcon,
  Rocket,
  Code,
  GitBranch,
  Target,
  Video,
  Play,
  BookOpen,
  Zap,
  Settings,
  Terminal,
  Globe,
  Database,
  MessageSquare,
} from "lucide-react";
import BentoCard from "./BentoCard";
import { usePersona } from "../../../contexts/PersonaContext";
import { LearnerPersona } from "../../../types/personas";

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

// Define different bento items for each persona
const getBentoItems = (persona: LearnerPersona | null): BentoItem[] => {
  switch (persona) {
    case "brand-new-to-ai":
      return [
        // Simple, beginner-friendly cards
        {
          title: "Start Your Journey",
          description:
            "Take your first steps into AI-powered development. No experience needed.",
          icon: <Play className="w-8 h-8" />,
          className: "col-span-3 row-span-4",
          href: "/docs/ai-tools",
          isHero: true,
          size: "mega",
          isContainer: true,
          children: [
            {
              title: "What is AI?",
              description:
                "Learn the basics of AI and how it can help you build",
              icon: <Sparkles className="w-5 h-5" />,
              href: "/docs/ai-basics",
              size: "small",
            },
            {
              title: "Try ChatGPT",
              description: "Start with the most popular AI tool for beginners",
              icon: <MessageSquare className="w-5 h-5" />,
              href: "/docs/chatgpt-guide",
              size: "small",
            },
            {
              title: "Your First Project",
              description: "Build something simple with AI assistance",
              icon: <Rocket className="w-5 h-5" />,
              href: "/guides/first-project",
              size: "small",
            },
          ],
        },
        {
          title: "Learn the Basics",
          description:
            "Understand blockchain and Cardano fundamentals in simple terms.",
          icon: <BookOpen className="w-8 h-8" />,
          className: "col-span-3 row-span-4",
          href: "/docs/cardano-basics",
          size: "mega",
          isContainer: true,
          children: [
            {
              title: "What is Blockchain?",
              description: "Simple explanations of blockchain technology",
              icon: <Globe className="w-5 h-5" />,
              href: "/docs/blockchain-basics",
              size: "small",
            },
            {
              title: "Cardano Explained",
              description: "Learn about Cardano in simple terms",
              icon: <Database className="w-5 h-5" />,
              href: "/docs/cardano-explained",
              size: "small",
            },
            {
              title: "Safe Practices",
              description: "How to stay safe while learning blockchain",
              icon: <Target className="w-5 h-5" />,
              href: "/docs/safety-guide",
              size: "small",
            },
          ],
        },
      ];

    case "ai-user":
      return [
        // Intermediate cards with more technical content
        {
          title: "Master AI Tools",
          description:
            "Level up your AI skills with advanced tools and techniques.",
          icon: <Zap className="w-8 h-8" />,
          className: "col-span-3 row-span-4",
          href: "/docs/ai-tools",
          isHero: true,
          size: "mega",
          isContainer: true,
          children: [
            {
              title: "Cursor Setup",
              description: "Set up Cursor IDE for AI-powered development",
              icon: <Terminal className="w-5 h-5" />,
              href: "/docs/ai-tools/cursor-setup",
              size: "small",
            },
            {
              title: "Windsurf Integration",
              description: "Connect Windsurf for enhanced AI capabilities",
              icon: <Settings className="w-5 h-5" />,
              href: "/docs/ai-tools/windsurf-setup",
              size: "small",
            },
            {
              title: "Advanced Prompts",
              description:
                "Learn to write better AI prompts for better results",
              icon: <Sparkles className="w-5 h-5" />,
              href: "/docs/advanced-prompts",
              size: "small",
            },
          ],
        },
        {
          title: "Build Real Projects",
          description:
            "Create practical Cardano applications with AI assistance.",
          icon: <Code className="w-8 h-8" />,
          className: "col-span-3 row-span-4",
          href: "/docs/build",
          size: "mega",
          isContainer: true,
          children: [
            {
              title: "First Transaction",
              description: "Send your first Cardano transaction with MeshJS",
              icon: <Rocket className="w-5 h-5" />,
              href: "/guides/first_transaction",
              size: "small",
            },
            {
              title: "Cardano APIs",
              description: "Blockfrost • Taptools • Charlie3 • DexHunter",
              icon: <LinkIcon className="w-5 h-5" />,
              href: "/docs/apis",
              size: "small",
            },
            {
              title: "GitHub Workflow",
              description: "Learn branches, PRs, CI checks, and collaboration",
              icon: <GitBranch className="w-5 h-5" />,
              href: "/docs/github-workflow",
              size: "small",
            },
          ],
        },
      ];

    case "ai-power-user":
      return [
        // Advanced cards with complex features
        {
          title: "Push AI Boundaries",
          description:
            "Explore cutting-edge AI techniques and advanced development workflows.",
          icon: <Rocket className="w-8 h-8" />,
          className: "col-span-3 row-span-4",
          href: "/docs/ai-tools",
          isHero: true,
          size: "mega",
          isContainer: true,
          children: [
            {
              title: "MCP Integration",
              description: "Model Context Protocol for advanced AI workflows",
              icon: <Terminal className="w-5 h-5" />,
              href: "/docs/mcp-integration",
              size: "small",
            },
            {
              title: "Custom AI Models",
              description:
                "Fine-tune and deploy custom AI models for development",
              icon: <Settings className="w-5 h-5" />,
              href: "/docs/custom-models",
              size: "small",
            },
            {
              title: "AI Automation",
              description: "Build automated AI-powered development pipelines",
              icon: <Zap className="w-5 h-5" />,
              href: "/docs/ai-automation",
              size: "small",
            },
          ],
        },
        {
          title: "Advanced Cardano Development",
          description: "Master complex Cardano development with AI assistance.",
          icon: <Code className="w-8 h-8" />,
          className: "col-span-3 row-span-4",
          href: "/docs/advanced-cardano",
          size: "mega",
          isContainer: true,
          children: [
            {
              title: "Smart Contracts",
              description: "Build and deploy Plutus smart contracts with AI",
              icon: <Code className="w-5 h-5" />,
              href: "/guides/smart-contracts",
              size: "small",
            },
            {
              title: "DeFi Protocols",
              description: "Create advanced DeFi applications on Cardano",
              icon: <LinkIcon className="w-5 h-5" />,
              href: "/guides/defi-protocols",
              size: "small",
            },
            {
              title: "Advanced APIs",
              description: "Integrate with complex Cardano ecosystem APIs",
              icon: <Database className="w-5 h-5" />,
              href: "/docs/advanced-apis",
              size: "small",
            },
          ],
        },
      ];

    default:
      // Default cards (current ones) for when no persona is selected
      return [
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
  }
};

export default function BentoGrid() {
  const { selectedPersona } = usePersona();
  const bentoItems = useMemo(
    () => getBentoItems(selectedPersona),
    [selectedPersona]
  );

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
  }, [bentoItems.length]); // Only re-run when the number of items changes

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[280px] justify-items-center">
        {bentoItems.map((item, index) => (
          <BentoCard
            key={item.title}
            item={item}
            index={index}
            mousePosition={mousePosition}
            isMouseInView={isMouseInView}
            cardPositions={cardPositions}
            cardRefs={cardRefs}
            totalCards={bentoItems.length}
          />
        ))}
      </div>
    </div>
  );
}
