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

  const mdxFiles: MDXFile[] = [];

  function scanDirectory(currentPath: string, relativePath: string = ""): void {
    const items = fs.readdirSync(currentPath);

    for (const item of items) {
      const itemPath = path.join(currentPath, item);
      const itemRelativePath = relativePath
        ? path.join(relativePath, item)
        : item;
      const stat = fs.statSync(itemPath);

      if (stat.isDirectory()) {
        // Recursively scan subdirectories
        scanDirectory(itemPath, itemRelativePath);
      } else if (item.endsWith(".mdx")) {
        // Process MDX files
        const fileContents = fs.readFileSync(itemPath, "utf8");
        const { data, content } = matter(fileContents);
        const slug = itemRelativePath.replace(/\.mdx$/, "").replace(/\\/g, "/");

        mdxFiles.push({
          slug,
          frontmatter: data as FrontMatter,
          content,
          filePath: itemPath,
        });
      }
    }
  }

  scanDirectory(fullPath);
  return mdxFiles;
}

export function getMDXFileBySlug(
  slug: string | string[],
  directory: string = "docs"
): MDXFile | null {
  const files = getMDXFiles(directory);

  // Handle both string and array slugs (for [...slug] routes)
  const slugString = Array.isArray(slug) ? slug.join("/") : slug;

  return files.find(file => file.slug === slugString) || null;
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
