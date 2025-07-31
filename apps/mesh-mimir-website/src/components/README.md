# Content Layout Components

This directory contains reusable layout components for creating consistent content pages that maintain the same sidebar structure and background as the main page.

## Components

### ContentLayout

The main layout wrapper that provides the consistent background and structure for content pages.

```tsx
import ContentLayout from "../components/ContentLayout";

export default function MyPage() {
  return (
    <ContentLayout title="Page Title" subtitle="Page subtitle or description">
      {/* Your content here */}
    </ContentLayout>
  );
}
```

**Props:**

- `children`: ReactNode - The content to render
- `title?: string` - Optional page title
- `subtitle?: string` - Optional page subtitle
- `showBreadcrumbs?: boolean` - Whether to show breadcrumbs (default: true)
- `className?: string` - Additional CSS classes

### ContentSection

A flexible content section component that provides different layout options.

```tsx
import ContentSection from "../components/ContentSection";

// Cards layout
<ContentSection
  title="Section Title"
  subtitle="Section description"
  cards={[
    {
      title: "Card Title",
      description: "Card description",
      icon: <SomeIcon />,
      href: "/some-link",
      primary: true, // Makes the card highlighted
    }
  ]}
  layout="cards"
/>

// Text layout
<ContentSection
  title="Section Title"
  subtitle="Section description"
  layout="text"
>
  <p>Your content here...</p>
</ContentSection>

// Hero layout
<ContentSection
  layout="hero"
  cards={[
    {
      title: "Hero Title",
      description: "Hero description",
      icon: <HeroIcon />,
      href: "/hero-link",
    }
  ]}
/>

// Grid layout
<ContentSection
  title="Grid Section"
  layout="grid"
>
  <div>Grid item 1</div>
  <div>Grid item 2</div>
</ContentSection>
```

**Props:**

- `children?: ReactNode` - Content for text/grid layouts
- `title?: string` - Section title
- `subtitle?: string` - Section subtitle
- `cards?: ContentCard[]` - Cards for cards/hero layouts
- `layout?: "grid" | "cards" | "text" | "hero"` - Layout type (default: "text")
- `className?: string` - Additional CSS classes
- `maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl"` - Max width constraint

**ContentCard Interface:**

```tsx
interface ContentCard {
  title: string;
  description: string;
  icon?: ReactNode;
  href?: string;
  className?: string;
  primary?: boolean; // Makes the card highlighted
}
```

## Layout Types

### Cards Layout

Displays content in a responsive grid of cards. Perfect for feature lists, navigation, or content collections.

### Hero Layout

Creates a prominent hero section with a single large card. Ideal for page introductions or call-to-action sections.

### Text Layout

Simple text content layout with optional title and subtitle. Good for articles, documentation, or detailed content.

### Grid Layout

Two-column grid layout for comparing content or organizing related information side by side.

## Examples

### Documentation Page

```tsx
import ContentLayout from "../components/ContentLayout";
import ContentSection from "../components/ContentSection";

export default function DocsPage() {
  return (
    <ContentLayout
      title="Documentation"
      subtitle="Learn how to build on Cardano"
    >
      <ContentSection
        layout="hero"
        cards={[
          {
            title: "Get Started",
            description: "Begin your Cardano journey",
            icon: <Rocket />,
            href: "/docs/getting-started",
          },
        ]}
      />

      <ContentSection title="Guides" cards={guideCards} layout="cards" />
    </ContentLayout>
  );
}
```

### Guide Page

```tsx
export default function GuidePage() {
  return (
    <ContentLayout title="How to Build a DApp">
      <ContentSection title="Prerequisites" layout="text">
        <ul>
          <li>Basic JavaScript knowledge</li>
          <li>Node.js installed</li>
        </ul>
      </ContentSection>

      <ContentSection title="Steps" layout="text">
        <div className="space-y-4">
          <div>Step 1: Setup</div>
          <div>Step 2: Build</div>
          <div>Step 3: Deploy</div>
        </div>
      </ContentSection>
    </ContentLayout>
  );
}
```

## Styling

All components use the same design system as the main page:

- **Colors**: Primary (`#0ea5e9`), Secondary (`#38bdf8`), Surface (`#161b22`), Background (`#0d1117`)
- **Typography**: Inter font family with consistent sizing
- **Animations**: Framer Motion with staggered children and fade-in effects
- **Borders**: Subtle borders with primary color accents
- **Gradients**: Surface to background gradients with backdrop blur

## Best Practices

1. **Use appropriate layouts**: Choose the layout type that best fits your content
2. **Keep titles concise**: Section titles should be clear and brief
3. **Use icons consistently**: Include relevant icons for better visual hierarchy
4. **Maintain spacing**: Use consistent margins between sections (`mb-16`)
5. **Test responsiveness**: Ensure content looks good on all screen sizes
6. **Follow the design system**: Use the established color palette and typography

## File Structure

```
src/components/
├── ContentLayout.tsx      # Main layout wrapper
├── ContentSection.tsx     # Flexible content sections
└── README.md             # This documentation
```

## Integration with Existing Layout

These components work seamlessly with the existing layout system:

- **Sidebars**: Left navigation and right AI chat sidebars remain functional
- **Background**: Fluid Cardano logos background is maintained
- **Terminal**: Optional bottom terminal panel continues to work
- **Navigation**: Breadcrumbs and scroll navigation are preserved
