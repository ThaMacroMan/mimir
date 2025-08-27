import { LearnerPersona, PERSONAS } from "../types/personas";

interface SidebarItem {
  label: string;
  href: string;
  persona?: LearnerPersona; // Optional persona filter
  difficulty?: "beginner" | "intermediate" | "advanced";
}

interface SidebarSection {
  title: string;
  icon: string;
  items: SidebarItem[];
  persona?: LearnerPersona; // Optional persona filter
}

// Persona-specific content filtering
function filterItemsByPersona(
  items: SidebarItem[],
  persona: LearnerPersona | null
): SidebarItem[] {
  if (!persona) return items;

  const personaConfig = PERSONAS[persona];
  return items.filter(item => {
    // If no persona specified, show to all
    if (!item.persona) return true;

    // If difficulty is specified, filter based on persona's technical depth
    if (item.difficulty && personaConfig) {
      const difficultyMap = {
        beginner: ["basic", "intermediate", "advanced"],
        intermediate: ["intermediate", "advanced"],
        advanced: ["advanced"],
      };
      return difficultyMap[item.difficulty].includes(
        personaConfig.technicalDepth
      );
    }

    return item.persona === persona;
  });
}

export function getSidebarSections(
  persona: LearnerPersona | null = null
): SidebarSection[] {
  // Define different sections based on persona
  const getPersonaSpecificSections = (
    persona: LearnerPersona | null
  ): SidebarSection[] => {
    switch (persona) {
      case "brand-new-to-ai":
        return [
          {
            title: "AI Fundamentals",
            icon: "BookOpen",
            items: [
              {
                label: "AI Basics",
                href: "/docs/ai-basics",
                difficulty: "beginner",
              },
              {
                label: "Blockchain Basics",
                href: "/docs/blockchain-basics",
                difficulty: "beginner",
              },
              {
                label: "Cardano Explained",
                href: "/docs/cardano-explained",
                difficulty: "beginner",
              },
            ],
          },
          {
            title: "AI Tools",
            icon: "Code",
            items: [
              {
                label: "AI Tools Overview",
                href: "/docs/ai-tools",
                difficulty: "beginner",
              },
              {
                label: "ChatGPT Guide",
                href: "/docs/chatgpt-guide",
                difficulty: "beginner",
              },
              {
                label: "Cursor Setup",
                href: "/docs/ai-tools/cursor-setup",
                difficulty: "beginner",
              },
              {
                label: "Windsurf Setup",
                href: "/docs/ai-tools/windsurf-setup",
                difficulty: "beginner",
              },
              {
                label: "Tool Selection",
                href: "/docs/ai-tools/selection",
                difficulty: "beginner",
              },
            ],
          },
          {
            title: "Getting Started",
            icon: "Rocket",
            items: [
              {
                label: "First Project",
                href: "/guides/first-project",
                difficulty: "beginner",
              },
              {
                label: "Safety Guide",
                href: "/docs/safety-guide",
                difficulty: "beginner",
              },
            ],
          },
          {
            title: "Discover",
            icon: "Layout",
            items: [
              {
                label: "AI Tools Discovery",
                href: "/docs/discover",
                difficulty: "beginner",
              },
              {
                label: "Join Discord",
                href: "https://discord.gg/meshjs",
                difficulty: "beginner",
              },
            ],
          },
        ];

      case "ai-user":
        return [
          {
            title: "AI Fundamentals",
            icon: "BookOpen",
            items: [
              {
                label: "AI Basics",
                href: "/docs/ai-basics",
                difficulty: "intermediate",
              },
              {
                label: "Blockchain Basics",
                href: "/docs/blockchain-basics",
                difficulty: "intermediate",
              },
              {
                label: "Cardano Explained",
                href: "/docs/cardano-explained",
                difficulty: "intermediate",
              },
            ],
          },
          {
            title: "AI Tools",
            icon: "Code",
            items: [
              {
                label: "AI Tools Overview",
                href: "/docs/ai-tools",
                difficulty: "intermediate",
              },
              {
                label: "ChatGPT Guide",
                href: "/docs/chatgpt-guide",
                difficulty: "intermediate",
              },
              {
                label: "Cursor Setup",
                href: "/docs/ai-tools/cursor-setup",
                difficulty: "intermediate",
              },
              {
                label: "Windsurf Setup",
                href: "/docs/ai-tools/windsurf-setup",
                difficulty: "intermediate",
              },
              {
                label: "Tool Selection",
                href: "/docs/ai-tools/selection",
                difficulty: "intermediate",
              },
            ],
          },
          {
            title: "Build Projects",
            icon: "Rocket",
            items: [
              {
                label: "First Project",
                href: "/guides/first-project",
                difficulty: "intermediate",
              },
              {
                label: "Safety Guide",
                href: "/docs/safety-guide",
                difficulty: "intermediate",
              },
            ],
          },
          {
            title: "Advanced Topics",
            icon: "Layout",
            items: [
              {
                label: "Cardano APIs",
                href: "/docs/apis",
                difficulty: "intermediate",
              },
              {
                label: "Live Coding",
                href: "/docs/live-coding",
                difficulty: "intermediate",
              },
              {
                label: "Practice Exercises",
                href: "/docs/practice",
                difficulty: "intermediate",
              },
            ],
          },
          {
            title: "Resources",
            icon: "Layout",
            items: [
              {
                label: "Blockfrost API",
                href: "https://blockfrost.io/",
                difficulty: "intermediate",
              },
              {
                label: "DexHunter",
                href: "https://dexhunter.io/",
                difficulty: "intermediate",
              },
              {
                label: "Taptools",
                href: "https://taptools.io/",
                difficulty: "intermediate",
              },
            ],
          },
        ];

      case "ai-power-user":
        return [
          {
            title: "AI Fundamentals",
            icon: "BookOpen",
            items: [
              {
                label: "AI Basics",
                href: "/docs/ai-basics",
                difficulty: "advanced",
              },
              {
                label: "Blockchain Basics",
                href: "/docs/blockchain-basics",
                difficulty: "advanced",
              },
              {
                label: "Cardano Explained",
                href: "/docs/cardano-explained",
                difficulty: "advanced",
              },
            ],
          },
          {
            title: "AI Tools",
            icon: "Code",
            items: [
              {
                label: "AI Tools Overview",
                href: "/docs/ai-tools",
                difficulty: "advanced",
              },
              {
                label: "ChatGPT Guide",
                href: "/docs/chatgpt-guide",
                difficulty: "advanced",
              },
              {
                label: "Cursor Setup",
                href: "/docs/ai-tools/cursor-setup",
                difficulty: "advanced",
              },
              {
                label: "Windsurf Setup",
                href: "/docs/ai-tools/windsurf-setup",
                difficulty: "advanced",
              },
              {
                label: "Tool Selection",
                href: "/docs/ai-tools/selection",
                difficulty: "advanced",
              },
            ],
          },
          {
            title: "Advanced Development",
            icon: "Rocket",
            items: [
              {
                label: "First Project",
                href: "/guides/first-project",
                difficulty: "advanced",
              },
              {
                label: "Safety Guide",
                href: "/docs/safety-guide",
                difficulty: "advanced",
              },
              {
                label: "Cardano APIs",
                href: "/docs/apis",
                difficulty: "advanced",
              },
              {
                label: "Live Coding",
                href: "/docs/live-coding",
                difficulty: "advanced",
              },
              {
                label: "Practice Exercises",
                href: "/docs/practice",
                difficulty: "advanced",
              },
            ],
          },
          {
            title: "Production & Scale",
            icon: "Code",
            items: [
              {
                label: "GitHub Workflow",
                href: "/docs/github-workflow",
                difficulty: "advanced",
              },
              {
                label: "Deployment",
                href: "/docs/deployment",
                difficulty: "advanced",
              },
              {
                label: "Performance",
                href: "/docs/performance",
                difficulty: "advanced",
              },
            ],
          },
          {
            title: "Resources",
            icon: "Layout",
            items: [
              {
                label: "Blockfrost API",
                href: "https://blockfrost.io/",
                difficulty: "advanced",
              },
              {
                label: "DexHunter",
                href: "https://dexhunter.io/",
                difficulty: "advanced",
              },
              {
                label: "Taptools",
                href: "https://taptools.io/",
                difficulty: "advanced",
              },
            ],
          },
        ];

      default:
        // Default sections for all personas
        return [
          {
            title: "AI Fundamentals",
            icon: "BookOpen",
            items: [
              {
                label: "AI Basics",
                href: "/docs/ai-basics",
              },
              {
                label: "Blockchain Basics",
                href: "/docs/blockchain-basics",
              },
              {
                label: "Cardano Explained",
                href: "/docs/cardano-explained",
              },
            ],
          },
          {
            title: "AI Tools",
            icon: "Code",
            items: [
              {
                label: "AI Tools Overview",
                href: "/docs/ai-tools",
              },
              {
                label: "ChatGPT Guide",
                href: "/docs/chatgpt-guide",
              },
              {
                label: "Cursor Setup",
                href: "/docs/ai-tools/cursor-setup",
              },
              {
                label: "Windsurf Setup",
                href: "/docs/ai-tools/windsurf-setup",
              },
              {
                label: "Tool Selection",
                href: "/docs/ai-tools/selection",
              },
            ],
          },
          {
            title: "Getting Started",
            icon: "Rocket",
            items: [
              {
                label: "First Project",
                href: "/guides/first-project",
              },
              {
                label: "Safety Guide",
                href: "/docs/safety-guide",
              },
            ],
          },
          {
            title: "Discover",
            icon: "Layout",
            items: [
              {
                label: "AI Tools Discovery",
                href: "/docs/discover",
              },
              {
                label: "Join Discord",
                href: "https://discord.gg/meshjs",
              },
            ],
          },
        ];
    }
  };

  const sections = getPersonaSpecificSections(persona);

  // Filter items by persona for each section
  return sections.map(section => ({
    ...section,
    items: filterItemsByPersona(section.items, persona),
  }));
}

// Utility functions for sidebar state management
export const SIDEBAR_KEYS = {
  MAIN_SIDEBAR: "sidebar-main-sidebar",
  AI_CHAT_SIDEBAR: "sidebar-ai-chat-sidebar",
} as const;

export function resetAllSidebarStates() {
  try {
    localStorage.removeItem(SIDEBAR_KEYS.MAIN_SIDEBAR);
    localStorage.removeItem(SIDEBAR_KEYS.AI_CHAT_SIDEBAR);
    console.log("All sidebar states reset");
  } catch (error) {
    console.error("Failed to reset sidebar states:", error);
  }
}

export function getSidebarStates() {
  try {
    const mainSidebar = localStorage.getItem(SIDEBAR_KEYS.MAIN_SIDEBAR);
    const aiChatSidebar = localStorage.getItem(SIDEBAR_KEYS.AI_CHAT_SIDEBAR);

    return {
      mainSidebar: mainSidebar ? JSON.parse(mainSidebar) : null,
      aiChatSidebar: aiChatSidebar ? JSON.parse(aiChatSidebar) : null,
    };
  } catch (error) {
    console.error("Failed to get sidebar states:", error);
    return { mainSidebar: null, aiChatSidebar: null };
  }
}

export function setSidebarState(sidebarId: string, state: unknown) {
  try {
    localStorage.setItem(`sidebar-${sidebarId}`, JSON.stringify(state));
  } catch (error) {
    console.error(`Failed to set sidebar state for ${sidebarId}:`, error);
  }
}
