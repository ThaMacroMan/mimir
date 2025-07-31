import Head from "next/head";
import { Globe, Database, Zap, Code } from "lucide-react";
import ContentLayout from "../../components/ContentLayout";
import ContentSection from "../../components/ContentSection";

const apiServices = [
  {
    title: "Blockfrost",
    description: "Cardano blockchain data and analytics API",
    icon: <Database className="w-6 h-6" />,
    href: "https://blockfrost.io",
    primary: true,
  },
  {
    title: "Taptools",
    description: "DeFi analytics and market data for Cardano",
    icon: <Globe className="w-6 h-6" />,
    href: "https://taptools.io",
  },
  {
    title: "Charlie3",
    description: "Cardano blockchain explorer and API",
    icon: <Code className="w-6 h-6" />,
    href: "https://charlie3.com",
  },
  {
    title: "DexHunter",
    description: "DEX aggregator and trading API",
    icon: <Zap className="w-6 h-6" />,
    href: "https://dexhunter.io",
  },
];

export default function APIsPage() {
  return (
    <ContentLayout
      title="Cardano APIs"
      subtitle="Essential APIs and services for Cardano development"
    >
      <Head>
        <title>Cardano APIs | Mimir</title>
        <meta
          name="description"
          content="Essential APIs and services for Cardano development including Blockfrost, Taptools, and more."
        />
      </Head>

      {/* Hero Section */}
      <ContentSection
        layout="hero"
        cards={[
          {
            title: "Essential APIs",
            description:
              "Connect to Cardano blockchain data and build powerful applications with these essential APIs.",
            icon: <Globe className="w-12 h-12" />,
            href: "#",
          },
        ]}
        className="mb-16"
      />

      {/* API Services */}
      <ContentSection
        title="Popular APIs"
        subtitle="Essential services for Cardano development"
        cards={apiServices}
        layout="cards"
        className="mb-16"
      />

      {/* API Documentation */}
      <ContentSection
        title="Getting Started"
        subtitle="Learn how to integrate these APIs into your projects"
        layout="text"
        className="mb-16"
      >
        <div className="bg-gradient-to-br from-surface/60 to-background/60 border border-primary/20 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-primary mb-4">
            API Integration Guide
          </h3>
          <p className="text-text-secondary mb-6">
            We're working on comprehensive guides for integrating these APIs
            into your Cardano projects. Each API will have detailed
            documentation, code examples, and best practices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-primary">What You'll Learn</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Setting up API keys and authentication</li>
                <li>• Fetching blockchain data</li>
                <li>• Building real-time applications</li>
                <li>• Error handling and rate limiting</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-primary">Coming Soon</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Step-by-step integration guides</li>
                <li>• Code examples in JavaScript/TypeScript</li>
                <li>• Best practices and optimization tips</li>
                <li>• Troubleshooting common issues</li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>
    </ContentLayout>
  );
}
