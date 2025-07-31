import Head from "next/head";
import { Target, Trophy, Clock, Users } from "lucide-react";
import ContentLayout from "../../components/ContentLayout";
import ContentSection from "../../components/ContentSection";

const practiceModules = [
  {
    title: "Beginner Challenges",
    description: "Start with simple Cardano development challenges",
    icon: <Target className="w-6 h-6" />,
    href: "#",
    primary: true,
  },
  {
    title: "Intermediate Projects",
    description: "Build more complex applications and protocols",
    icon: <Trophy className="w-6 h-6" />,
    href: "#",
  },
  {
    title: "Advanced Concepts",
    description: "Master advanced Cardano development techniques",
    icon: <Clock className="w-6 h-6" />,
    href: "#",
  },
];

export default function PracticePage() {
  return (
    <ContentLayout
      title="Practice Workflow"
      subtitle="Goal-oriented, provable practice with incentives for completion"
    >
      <Head>
        <title>Practice | Mimir</title>
        <meta
          name="description"
          content="Practice Cardano development with goal-oriented challenges and incentives."
        />
      </Head>

      {/* Hero Section */}
      <ContentSection
        layout="hero"
        cards={[
          {
            title: "Practice Makes Perfect",
            description:
              "Complete challenges, earn rewards, and track your progress as you master Cardano development.",
            icon: <Target className="w-12 h-12" />,
            href: "#",
          },
        ]}
        className="mb-16"
      />

      {/* Practice Modules */}
      <ContentSection
        title="Practice Modules"
        subtitle="Choose your difficulty level and start practicing"
        cards={practiceModules}
        layout="cards"
        className="mb-16"
      />

      {/* Coming Soon */}
      <ContentSection
        title="Coming Soon"
        subtitle="We're building an amazing practice system"
        layout="text"
        className="mb-16"
      >
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold text-primary mb-4">
            Practice System Coming Soon
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            We're building a comprehensive practice system with challenges,
            rewards, and progress tracking. Soon you'll be able to practice
            Cardano development with AI assistance and earn achievements.
          </p>
          <div className="flex items-center justify-center gap-4 text-text-secondary">
            <Users className="w-5 h-5" />
            <span className="text-sm">Join the waitlist</span>
          </div>
        </div>
      </ContentSection>
    </ContentLayout>
  );
}
