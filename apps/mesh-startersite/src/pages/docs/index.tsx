import { GetStaticProps } from "next";
import DocTemplate from "../../components/layout/DocTemplate";
import Link from "next/link";
import { getMDXFiles, MDXFile } from "../../utils/mdxUtils";

interface DocsIndexProps {
  docs: MDXFile[];
}

export default function DocsIndex({ docs }: DocsIndexProps) {
  return (
    <DocTemplate title="Documentation">
      <div className="grid gap-6">
        {docs.map(doc => (
          <Link
            key={doc.slug}
            href={`/docs/${doc.slug}`}
            className="block p-6 bg-surface-elevated border border-border rounded-lg hover:border-primary transition-colors"
          >
            <h2 className="text-2xl font-display font-bold text-text-primary mb-2">
              {doc.frontmatter.title}
            </h2>
            <p className="text-text-secondary mb-3 font-display">
              {doc.frontmatter.description}
            </p>
            <div className="flex gap-2">
              {doc.frontmatter.difficulty && (
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-display font-medium">
                  {doc.frontmatter.difficulty}
                </span>
              )}
              {doc.frontmatter.persona && (
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full font-display font-medium">
                  {doc.frontmatter.persona}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </DocTemplate>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const docs = getMDXFiles();

  return {
    props: {
      docs,
    },
  };
};
