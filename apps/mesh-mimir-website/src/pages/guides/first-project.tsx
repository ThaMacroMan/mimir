import ContentLayout from "../../components/ContentLayout";
import ContentSection from "../../components/ContentSection";

export default function FirstProjectPage() {
  return (
    <ContentLayout
      title="Your First Project"
      subtitle="We’ll scaffold a simple app in the next step"
    >
      <ContentSection layout="text">
        <div className="prose prose-invert max-w-none">
          <p>
            This page will introduce a minimal project scaffold and walk you
            through the workflow. For now, ensure your AI tools are set up and
            you’re comfortable with the sidebar navigation.
          </p>
        </div>
      </ContentSection>
    </ContentLayout>
  );
}
