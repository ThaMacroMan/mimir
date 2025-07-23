import { Tool } from "../types";

export const tools: Tool[] = [
  {
    id: "cursor",
    name: "Cursor",
    description:
      "AI-powered code editor built for pair programming with AI. Get intelligent completions, chat with your codebase, and debug faster.",
    icon: "⚡",
    setupUrl: "/docs/ai-tools/cursor-setup",
    learnMoreUrl: "https://cursor.com/home",
    features: [
      "AI-powered autocompletion",
      "Chat with your codebase",
      "Intelligent debugging",
      "Multi-language support",
    ],
  },
  {
    id: "windsurf",
    name: "Windsurf",
    description:
      "The first agentic IDE that can plan, code, and execute complex tasks autonomously while you focus on the big picture.",
    icon: "🌊",
    setupUrl: "/docs/ai-tools/windsurf-setup",
    learnMoreUrl: "https://windsurf.com/",
    features: [
      "Autonomous task execution",
      "Advanced planning capabilities",
      "Seamless collaboration",
      "Enterprise-ready security",
    ],
  },
];
