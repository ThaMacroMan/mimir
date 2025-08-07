export type LearnerPersona = "brand-new-to-ai" | "ai-user" | "ai-power-user";

export interface PersonaConfig {
  id: LearnerPersona;
  name: string;
  description: string;
  subtexts: string[]; // Array of subtext options for smooth cycling
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
    name: "New Builder",
    description: "Never used AI before",
    subtexts: [
      "Never used AI before",
      "Starting your AI journey",
      "Discover the power of AI",
      "Learn AI from the ground up",
      "Your first steps with AI",
      "Transform from beginner to builder",
      "Unlock AI-powered development",
      "Begin your Cardano journey with AI",
      "From zero to Cardano hero",
      "AI-assisted blockchain development",
    ],
    characteristics: [
      "No AI tool experience",
      "Curious about AI capabilities",
      "Wants to understand AI basics",
      "Needs step-by-step guidance",
      "Interested in Cardano but overwhelmed",
      "Prefers visual learning",
      "Wants to build real projects",
      "Needs confidence-building exercises",
    ],
    learningStyle: "Visual and guided with hands-on practice",
    goals: [
      "Learn what AI tools can do",
      "Understand how to use AI for building",
      "Build first Cardano project with AI assistance",
      "Master Cursor IDE basics",
      "Create your first ADA transaction",
      "Understand blockchain fundamentals",
      "Join the Cardano developer community",
      "Build confidence with AI tools",
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
    name: "Developing Builder",
    description: "Some experience with AI",
    subtexts: [
      "Some experience with AI",
      "Ready to level up your AI skills",
      "Take your AI knowledge further",
      "Master AI-powered development",
      "Build faster with AI tools",
      "Elevate your Cardano development",
      "Advanced AI techniques for blockchain",
      "Optimize your development workflow",
      "Build sophisticated Cardano dApps",
      "Master AI-assisted smart contracts",
    ],
    characteristics: [
      "Basic AI tool experience",
      "Familiar with ChatGPT or similar",
      "Wants to improve AI skills",
      "Interested in advanced AI techniques",
      "Some Cardano knowledge",
      "Ready for intermediate concepts",
      "Wants to build complex projects",
      "Interested in DeFi and NFTs",
    ],
    learningStyle: "Hands-on with explanations and best practices",
    goals: [
      "Master AI-powered development",
      "Build more complex Cardano projects",
      "Understand AI best practices",
      "Optimize AI workflows",
      "Create NFT collections with AI assistance",
      "Build DeFi applications",
      "Master smart contract development",
      "Integrate with Cardano APIs",
      "Deploy production-ready dApps",
      "Contribute to open-source projects",
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
    name: "Advanced Builder",
    description: "Constantly use AI",
    subtexts: [
      "Constantly use AI",
      "Pushing AI boundaries",
      "Creating innovative AI workflows",
      "Leading the AI revolution",
      "Building the future with AI",
      "Architecting AI-powered Cardano systems",
      "Pioneering AI-assisted blockchain development",
      "Creating cutting-edge DeFi protocols",
      "Building the next generation of dApps",
      "Revolutionizing Cardano development",
    ],
    characteristics: [
      "Advanced AI tool experience",
      "Understands AI capabilities deeply",
      "Wants to innovate with AI",
      "Can teach others AI techniques",
      "Expert in Cardano development",
      "Familiar with MCP and advanced tooling",
      "Wants to push technical boundaries",
      "Interested in AI-assisted architecture",
      "Ready for experimental workflows",
      "Can mentor other developers",
    ],
    learningStyle: "Advanced and experimental with focus on innovation",
    goals: [
      "Push AI tool boundaries",
      "Create innovative AI workflows",
      "Build complex AI-assisted systems",
      "Contribute to AI development community",
      "Architect AI-powered Cardano protocols",
      "Create advanced smart contracts with AI",
      "Build sophisticated DeFi applications",
      "Integrate multiple AI tools seamlessly",
      "Develop AI-assisted testing frameworks",
      "Create AI-powered development tools",
      "Mentor the next generation of developers",
      "Contribute to Cardano ecosystem tooling",
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
  {
    id: "advanced-ai-cardano",
    title: "Advanced AI + Cardano",
    description: "Master AI-assisted Cardano development with advanced tooling",
    estimatedTime: "6-8 hours",
    difficulty: "advanced",
    personas: ["ai-power-user"],
    steps: [
      {
        id: "discover-mcp",
        title: "Discover MCP & Advanced Tooling",
        description:
          "Learn about Model Context Protocol and advanced AI workflows",
        type: "discover",
        contentPath: "/docs/mcp-setup",
        estimatedTime: "1 hour",
      },
      {
        id: "try-advanced-workflows",
        title: "Try Advanced AI Workflows",
        description: "Set up MCP, custom prompts, and AI-assisted development",
        type: "try",
        contentPath: "/docs/advanced-ai-workflows",
        estimatedTime: "2 hours",
      },
      {
        id: "build-dex-protocol",
        title: "Build a DEX Protocol",
        description: "Create a sophisticated DeFi protocol with AI assistance",
        type: "build",
        contentPath: "/guides/dex-protocol",
        estimatedTime: "3 hours",
      },
      {
        id: "ship-production-dapp",
        title: "Ship Production dApp",
        description: "Deploy, test, and maintain a production-ready dApp",
        type: "ship",
        contentPath: "/guides/production-deployment",
        estimatedTime: "2 hours",
      },
    ],
  },
];
