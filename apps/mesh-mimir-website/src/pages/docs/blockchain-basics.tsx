import ContentLayout from "../../components/ContentLayout";
import ContentSection from "../../components/ContentSection";

export default function BlockchainBasicsPage() {
  return (
    <ContentLayout
      title="Blockchain Basics"
      subtitle="What blockchains do and why the UTXO model matters later"
    >
      <ContentSection layout="text">
        <div className="prose prose-invert max-w-none">
          <p>
            A blockchain is a shared ledger. Transactions update balances.
            Cardano uses a UTXO model—think of unspent outputs as spendable
            notes. Building transactions means selecting inputs and producing
            new outputs.
          </p>
        </div>
      </ContentSection>
    </ContentLayout>
  );
}
