import { NextPage } from "next";
import ContentLayout from "../../components/ContentLayout";
import ContentSection from "../../components/ContentSection";
import BuilderIndex from "../../content/builders/index.mdx";

const BuildersPage: NextPage = () => {
  return (
    <ContentLayout
      title="Builder Track"
      subtitle="Ship faster with an AI-first Cardano workflow"
    >
      <ContentSection layout="text" maxWidth="4xl">
        <div className="prose prose-invert max-w-none">
          <BuilderIndex />
        </div>
      </ContentSection>
    </ContentLayout>
  );
};

export default BuildersPage;
