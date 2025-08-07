export type LearnerPersona = "brand-new-to-ai" | "ai-user" | "ai-power-user";

export interface PersonaConfig {
  id: LearnerPersona;
  name: string;
  description: string;
  characteristics: string[];
  learningStyle: string;
  goals: string[];
  abstractionLevel: "high" | "medium" | "low";
  technicalDepth: "basic" | "intermediate" | "advanced";
  logo: {
    type: "image" | "metallic";
    src?: string;
  };
}

export const PERSONAS: Record<LearnerPersona, PersonaConfig> = {
  "brand-new-to-ai": {
    id: "brand-new-to-ai",
    name: "Brand New to AI",
    description: "Never used AI before",
    characteristics: [
      "No AI tool experience",
      "Curious about AI capabilities",
      "Wants to understand AI basics",
      "Needs step-by-step guidance",
    ],
    learningStyle: "Visual and guided",
    goals: [
      "Learn what AI tools can do",
      "Understand how to use AI for building",
      "Build first project with AI assistance",
    ],
    abstractionLevel: "high",
    technicalDepth: "basic",
    logo: {
      type: "image",
      src: "/cardano_we_logos/cardanologo_border_blue.002.png",
    },
  },
  "ai-user": {
    id: "ai-user",
    name: "AI User",
    description: "Some experience with AI",
    characteristics: [
      "Basic AI tool experience",
      "Familiar with ChatGPT or similar",
      "Wants to improve AI skills",
      "Interested in advanced AI techniques",
    ],
    learningStyle: "Hands-on with explanations",
    goals: [
      "Master AI-powered development",
      "Build more complex projects",
      "Understand AI best practices",
      "Optimize AI workflows",
    ],
    abstractionLevel: "medium",
    technicalDepth: "intermediate",
    logo: {
      type: "image",
      src: "/cardano_we_logos/cardanologo_border_blue.002.png",
    },
  },
  "ai-power-user": {
    id: "ai-power-user",
    name: "AI Power User",
    description: "Constantly use AI",
    characteristics: [
      "Advanced AI tool experience",
      "Understands AI capabilities deeply",
      "Wants to innovate with AI",
      "Can teach others AI techniques",
    ],
    learningStyle: "Advanced and experimental",
    goals: [
      "Push AI tool boundaries",
      "Create innovative AI workflows",
      "Build complex AI-assisted systems",
      "Contribute to AI development community",
    ],
    abstractionLevel: "low",
    technicalDepth: "advanced",
    logo: {
      type: "metallic",
    },
  },
};

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  steps: LearningStep[];
  estimatedTime: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  personas: LearnerPersona[];
}

export interface LearningStep {
  id: string;
  title: string;
  description: string;
  type: "discover" | "try" | "build" | "ship";
  contentPath: string;
  estimatedTime: string;
}

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: "ai-tools-journey",
    title: "AI Tools Journey",
    description: "Master AI-powered development tools to build faster",
    estimatedTime: "2-4 hours",
    difficulty: "beginner",
    personas: ["brand-new-to-ai", "ai-user", "ai-power-user"],
    steps: [
      {
        id: "discover-ai-tools",
        title: "Discover AI Tools",
        description: "Learn about Cursor, Windsurf, and ChatGPT",
        type: "discover",
        contentPath: "/docs/ai-tools",
        estimatedTime: "30 min",
      },
      {
        id: "try-cursor",
        title: "Try Cursor",
        description: "Set up and explore Cursor IDE",
        type: "try",
        contentPath: "/docs/ai-tools/cursor-setup",
        estimatedTime: "45 min",
      },
      {
        id: "build-first-project",
        title: "Build Your First Project",
        description: "Create a simple Cardano project",
        type: "build",
        contentPath: "/guides/first_transaction",
        estimatedTime: "1 hour",
      },
      {
        id: "ship-to-github",
        title: "Ship to GitHub",
        description: "Deploy your project and share it",
        type: "ship",
        contentPath: "/docs/github-workflow",
        estimatedTime: "30 min",
      },
    ],
  },
  {
    id: "cardano-basics",
    title: "Cardano Basics",
    description: "Learn the fundamentals of Cardano development",
    estimatedTime: "3-5 hours",
    difficulty: "beginner",
    personas: ["ai-user", "ai-power-user"],
    steps: [
      {
        id: "discover-cardano",
        title: "Discover Cardano",
        description: "Understand blockchain and Cardano basics",
        type: "discover",
        contentPath: "/docs/cardano-basics",
        estimatedTime: "45 min",
      },
      {
        id: "try-first-transaction",
        title: "Try Your First Transaction",
        description: "Send ADA and understand transactions",
        type: "try",
        contentPath: "/guides/first_transaction",
        estimatedTime: "1 hour",
      },
      {
        id: "build-nft",
        title: "Build an NFT Collection",
        description: "Create and mint your own NFTs",
        type: "build",
        contentPath: "/guides/nft-collection",
        estimatedTime: "2 hours",
      },
      {
        id: "ship-marketplace",
        title: "Ship Your Marketplace",
        description: "Deploy and monetize your NFT collection",
        type: "ship",
        contentPath: "/guides/marketplace",
        estimatedTime: "1 hour",
      },
    ],
  },
];
