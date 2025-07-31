import Head from "next/head";
import { motion } from "framer-motion";
import {
  DollarSign,
  Palette,
  RefreshCw,
  Clock,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import ContentLayout from "../../components/ContentLayout";
import ContentSection from "../../components/ContentSection";

const guides = [
  {
    title: "Send Your First ADA",
    description:
      "Move some ADA around and feel like a blockchain wizard. Copy, paste, done!",
    href: "/guides/first_transaction",
    difficulty: "Super Easy",
    time: "15 min",
    icon: <DollarSign className="w-6 h-6" />,
    color: "from-emerald-500/20 to-green-500/20",
    encouragement: "Perfect first project!",
  },
  {
    title: "Create Your First NFT",
    description:
      "Turn your photos into digital collectibles. No art skills needed, just follow along!",
    href: "/guides/nft-collection",
    difficulty: "Still Easy",
    time: "30 min",
    icon: <Palette className="w-6 h-6" />,
    color: "from-purple-500/20 to-pink-500/20",
    encouragement: "You'll love this one!",
    comingSoon: true,
  },
  {
    title: "Build a Token Swapper",
    description:
      "Create your own mini exchange. Sounds fancy, but AI makes it simple!",
    href: "/guides/token-swap",
    difficulty: "Getting Fun",
    time: "45 min",
    icon: <RefreshCw className="w-6 h-6" />,
    color: "from-blue-500/20 to-cyan-500/20",
    encouragement: "You're ready for this!",
    comingSoon: true,
  },
];

export default function GuidesIndex() {
  const guideCards = guides.map(guide => ({
    title: guide.title,
    description: guide.description,
    icon: guide.icon,
    href: guide.comingSoon ? undefined : guide.href,
    className: guide.comingSoon ? "opacity-60" : "",
    primary: guide.href === "/guides/first_transaction", // Make first transaction primary
  }));

  return (
    <ContentLayout
      title="Build Real Projects"
      subtitle="Step-by-step guides to help you build actual Cardano applications. Start simple, grow powerful."
    >
      <Head>
        <title>Guides | Mimir</title>
        <meta
          name="description"
          content="Step-by-step guides to help you build real Cardano applications with AI assistance."
        />
      </Head>

      {/* Hero Section */}
      <ContentSection
        layout="hero"
        cards={[
          {
            title: "Start Building Today",
            description:
              "Choose a project that matches your skill level and start building real Cardano applications with AI assistance.",
            icon: <Sparkles className="w-12 h-12" />,
            href: "/guides/first_transaction",
          },
        ]}
        className="mb-16"
      />

      {/* Guides Grid */}
      <ContentSection
        title="Choose Your Project"
        subtitle="Each guide is designed to teach you specific Cardano development skills"
        cards={guideCards}
        layout="cards"
        className="mb-16"
      />

      {/* Guide Details */}
      <ContentSection
        title="What You'll Learn"
        subtitle="Our guides are designed to build your skills progressively"
        layout="text"
        className="mb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${guide.color} border border-primary/20 rounded-2xl p-6 ${
                guide.comingSoon ? "opacity-60" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-primary">{guide.icon}</div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-primary">
                    {guide.difficulty}
                  </span>
                  <span className="text-xs text-text-secondary">•</span>
                  <span className="text-xs text-text-secondary flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {guide.time}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-primary mb-2">
                {guide.title}
              </h3>

              <p className="text-sm text-text-secondary mb-3">
                {guide.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-primary font-medium">
                  {guide.encouragement}
                </span>
                {guide.comingSoon && (
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                    Coming Soon
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      {/* Getting Started CTA */}
      <ContentSection
        title="Ready to Start?"
        subtitle="Begin with the easiest project and work your way up"
        layout="text"
        className="mb-16"
      >
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold text-primary mb-4">
            Start with Your First Transaction
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            The "Send Your First ADA" guide is perfect for beginners. You'll
            learn the basics of Cardano transactions and get comfortable with
            the development workflow.
          </p>
          <motion.a
            href="/guides/first_transaction"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Building
            <TrendingUp className="w-4 h-4" />
          </motion.a>
        </div>
      </ContentSection>
    </ContentLayout>
  );
}
