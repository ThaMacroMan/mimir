import ContentLayout from "../../components/ContentLayout";
import ContentSection from "../../components/ContentSection";

export default function ChatGPTGuidePage() {
  return (
    <ContentLayout
      title="Try ChatGPT"
      subtitle="Use ChatGPT to clarify concepts and plan changes before coding"
    >
      <ContentSection layout="text">
        <div className="prose prose-invert max-w-none">
          <p>
            Start here for explanations and planning. Describe your goal,
            constraints, and files involved. Ask for a checklist or step-by-step
            plan. Then move to Cursor to implement.
          </p>
          <ul>
            <li>Share context and acceptance criteria</li>
            <li>Keep prompts short and iterative</li>
            <li>Never paste secrets or keys</li>
          </ul>
        </div>
      </ContentSection>
    </ContentLayout>
  );
}
