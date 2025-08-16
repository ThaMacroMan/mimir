import ContentLayout from "../../components/ContentLayout";
import ContentSection from "../../components/ContentSection";

export default function CardanoExplainedPage() {
  return (
    <ContentLayout
      title="Cardano Explained"
      subtitle="A quick mental model for new builders"
    >
      <ContentSection layout="text">
        <div className="prose prose-invert max-w-none">
          <ul>
            <li>Currency: ADA (Lovelace is the smallest unit)</li>
            <li>Wallets: manage keys, sign transactions</li>
            <li>Networks: Mainnet (real) vs Testnets (learning)</li>
            <li>Providers: APIs like Blockfrost for on-chain data</li>
          </ul>
        </div>
      </ContentSection>
    </ContentLayout>
  );
}
