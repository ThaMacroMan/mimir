import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "src/content");

export interface FrontMatter {
  title: string;
  description: string;
  difficulty?: "beginner" | "intermediate" | "advanced";
  persona?: string;
  [key: string]: unknown;
}

export interface MDXFile {
  slug: string;
  frontmatter: FrontMatter;
  content: string;
  filePath: string;
}

export function getMDXFiles(directory: string = "docs"): MDXFile[] {
  const fullPath = path.join(contentDirectory, directory);

  if (!fs.existsSync(fullPath)) {
    return [];
  }

  const files = fs.readdirSync(fullPath);
  const mdxFiles = files.filter(file => file.endsWith(".mdx"));

  return mdxFiles.map(file => {
    const filePath = path.join(fullPath, file);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    const slug = file.replace(/\.mdx$/, "");

    return {
      slug,
      frontmatter: data as FrontMatter,
      content,
      filePath,
    };
  });
}

export function getMDXFileBySlug(
  slug: string,
  directory: string = "docs"
): MDXFile | null {
  const files = getMDXFiles(directory);
  return files.find(file => file.slug === slug) || null;
}

export function getAllMDXSlugs(directory: string = "docs"): string[] {
  const files = getMDXFiles(directory);
  return files.map(file => file.slug);
}

export function getMDXFilesByPersona(
  persona: string,
  directory: string = "docs"
): MDXFile[] {
  const files = getMDXFiles(directory);
  return (
    files.filter(
      file =>
        !file.frontmatter.persona ||
        file.frontmatter.persona === persona ||
        file.frontmatter.persona === "default"
    ) || []
  );
}
