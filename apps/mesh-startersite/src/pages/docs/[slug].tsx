import { GetStaticProps, GetStaticPaths } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import DocTemplate from "../../components/layout/DocTemplate";
import {
  getMDXFileBySlug,
  getAllMDXSlugs,
  FrontMatter,
} from "../../utils/mdxUtils";
import { InteractiveDemo, CodePlayground, Quiz } from "../../components/mdx";

// Components that can be used in MDX files
const mdxComponents = {
  InteractiveDemo,
  CodePlayground,
  Quiz,
};

interface DocPageProps {
  mdxSource: MDXRemoteSerializeResult;
  frontmatter: FrontMatter;
}

export default function DocPage({ mdxSource, frontmatter }: DocPageProps) {
  return (
    <DocTemplate title={frontmatter.title}>
      <div className="prose prose-lg max-w-none text-text-primary font-mono">
        <MDXRemote {...mdxSource} components={mdxComponents} />
      </div>
    </DocTemplate>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const mdxFile = getMDXFileBySlug(slug);

  if (!mdxFile) {
    return {
      notFound: true,
    };
  }

  const mdxSource = await serialize(mdxFile.content);

  return {
    props: {
      mdxSource,
      frontmatter: mdxFile.frontmatter,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllMDXSlugs();

  const paths = slugs.map(slug => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
