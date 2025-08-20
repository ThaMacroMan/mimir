import type { MDXComponents } from "mdx/types";
import { Callout, Quiz, LiveCode } from "./src/components/mdx";

// Global MDX component overrides and additions
const components = {
  // Map our custom shortcodes
  Callout,
  Quiz,
  LiveCode,
  // Provide some default styled elements
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="text-3xl md:text-4xl font-bold text-primary mt-8 mb-4"
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-2xl md:text-3xl font-semibold text-text-primary mt-8 mb-3"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-xl md:text-2xl font-semibold text-text-primary mt-6 mb-3"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-text-secondary leading-relaxed mb-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc pl-6 space-y-1 mb-4" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal pl-6 space-y-1 mb-4" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="bg-surface-elevated/60 border border-border px-1.5 py-0.5 rounded text-sm"
      {...props}
    />
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
