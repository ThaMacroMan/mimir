import Head from "next/head";
import { Video, Play, Calendar, Users } from "lucide-react";
import ContentLayout from "../../components/ContentLayout";
import ContentSection from "../../components/ContentSection";

const upcomingSessions = [
  {
    title: "Building Your First DApp",
    description: "Live coding session with AI assistance",
    icon: <Play className="w-6 h-6" />,
    href: "#",
    primary: true,
  },
  {
    title: "Advanced Cardano Development",
    description: "Deep dive into smart contracts and DeFi",
    icon: <Video className="w-6 h-6" />,
    href: "#",
  },
  {
    title: "Community Q&A Session",
    description: "Ask questions and get real-time help",
    icon: <Users className="w-6 h-6" />,
    href: "#",
  },
];

export default function LiveCodingPage() {
  return (
    <ContentLayout
      title="Live Coding Sessions"
      subtitle="Watch recorded sessions and join interactive classes on Mesh YouTube"
    >
      <Head>
        <title>Live Coding | Mimir</title>
        <meta
          name="description"
          content="Watch live coding sessions and interactive classes for Cardano development."
        />
      </Head>

      {/* Hero Section */}
      <ContentSection
        layout="hero"
        cards={[
          {
            title: "Learn by Watching",
            description:
              "Join our live coding sessions and watch experienced developers build Cardano applications in real-time.",
            icon: <Video className="w-12 h-12" />,
            href: "#",
          },
        ]}
        className="mb-16"
      />

      {/* Upcoming Sessions */}
      <ContentSection
        title="Upcoming Sessions"
        subtitle="Join our live coding sessions and interactive classes"
        cards={upcomingSessions}
        layout="cards"
        className="mb-16"
      />

      {/* Coming Soon */}
      <ContentSection
        title="Coming Soon"
        subtitle="We're setting up our live coding infrastructure"
        layout="text"
        className="mb-16"
      >
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold text-primary mb-4">
            Live Coding Sessions Coming Soon
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            We're currently setting up our live coding infrastructure. Soon
            you'll be able to join interactive sessions where you can watch
            experienced developers build Cardano applications and ask questions
            in real-time.
          </p>
          <div className="flex items-center justify-center gap-4 text-text-secondary">
            <Calendar className="w-5 h-5" />
            <span className="text-sm">Stay tuned for updates</span>
          </div>
        </div>
      </ContentSection>
    </ContentLayout>
  );
}
