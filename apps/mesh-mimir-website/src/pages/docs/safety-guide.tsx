import ContentLayout from "../../components/ContentLayout";
import ContentSection from "../../components/ContentSection";

export default function SafetyGuidePage() {
  return (
    <ContentLayout
      title="Safety Guide"
      subtitle="Simple rules to avoid common mistakes"
    >
      <ContentSection layout="text">
        <div className="prose prose-invert max-w-none">
          <ul>
            <li>Never paste seed phrases or private keys anywhere</li>
            <li>Use test wallets for development</li>
            <li>Keep secrets in env vars; never commit them</li>
          </ul>
        </div>
      </ContentSection>
    </ContentLayout>
  );
}
