import ContentLayout from "../../components/ContentLayout";
import ContentSection from "../../components/ContentSection";

export default function CardanoBasicsPage() {
  return (
    <ContentLayout
      title="Cardano Basics"
      subtitle="Key terms you’ll see throughout the guides"
    >
      <ContentSection layout="text">
        <div className="prose prose-invert max-w-none">
          <ul>
            <li>
              UTXO: Unspent Transaction Output, the building block of balances
            </li>
            <li>Address: where ADA/assets can be sent</li>
            <li>Policy: rules for minting/burning assets</li>
          </ul>
        </div>
      </ContentSection>
    </ContentLayout>
  );
}
