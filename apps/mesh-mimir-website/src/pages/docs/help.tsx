import ContentLayout from "../../components/ContentLayout";
import ContentSection from "../../components/ContentSection";

export default function HelpPage() {
  return (
    <ContentLayout title="Help & Support" subtitle="Where to get answers fast">
      <ContentSection layout="text">
        <div className="prose prose-invert max-w-none">
          <ul>
            <li>Mesh Discord: community help and Q&A</li>
            <li>Docs: search guides before asking</li>
            <li>Minimal repro: include steps, files, and expectations</li>
          </ul>
        </div>
      </ContentSection>
    </ContentLayout>
  );
}
