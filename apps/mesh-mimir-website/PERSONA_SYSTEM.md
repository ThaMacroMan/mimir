# Persona System & Content Engine

## Overview

The Mimir learning platform now features a persona-driven experience that tailors content based on the learner's background and goals. This system creates personalized learning paths that feel like storylines rather than lectures.

## Learner Personas

### 1. Absolute Newbie

- **Characteristics**: No programming experience, prefers visual interfaces, wants quick results
- **Learning Style**: Visual and guided with lots of hand-holding
- **Abstraction Level**: High (abstracts away technical complexity)
- **Technical Depth**: Basic
- **Goals**: Build something cool without coding, understand blockchain basics

### 2. Hobby Coder

- **Characteristics**: Basic programming knowledge, likes to understand how things work, enjoys tinkering
- **Learning Style**: Hands-on with explanations
- **Abstraction Level**: Medium
- **Technical Depth**: Intermediate
- **Goals**: Learn Cardano development, build real projects, contribute to open source

### 3. Designer

- **Characteristics**: Strong design skills, user experience focused, visual thinker
- **Learning Style**: Visual and interactive
- **Abstraction Level**: Medium
- **Technical Depth**: Intermediate
- **Goals**: Create beautiful blockchain UIs, understand UX in Web3, bridge design and development

### 4. Entrepreneur

- **Characteristics**: Business and product focused, wants to understand market opportunities
- **Learning Style**: Practical and results-oriented
- **Abstraction Level**: Low (wants to see the full picture)
- **Technical Depth**: Advanced
- **Goals**: Build blockchain products, understand market opportunities, launch successful projects

## Content Structure

### Quest → Chapter → Step Organization

```
src/content/
├── ai-tools/
│   ├── discover/
│   │   └── index.mdx          # Discover AI Tools
│   ├── try/
│   │   ├── cursor-setup.mdx   # Try Cursor
│   │   └── windsurf-setup.mdx # Try Windsurf
│   ├── build/
│   │   └── first-project.mdx  # Build First Project
│   └── ship/
│       └── github-workflow.mdx # Ship to GitHub
├── cardano-basics/
│   ├── discover/
│   │   └── index.mdx          # Discover Cardano
│   ├── try/
│   │   └── first-transaction.mdx
│   ├── build/
│   │   └── nft-collection.mdx
│   └── ship/
│       └── marketplace.mdx
```

### MDX Component Kit

The content engine includes three core components for interactive learning:

#### 1. Callout Component

```jsx
<Callout type="info" title="Why AI Tools Matter">
  AI tools can reduce development time by 50-80% and help you focus on the
  creative aspects of building.
</Callout>
```

**Types**: `info`, `warning`, `success`, `error`

#### 2. Quiz Component

```jsx
<Quiz
  question="Which AI tool is best for beginners?"
  options={[
    {
      id: "cursor",
      text: "Cursor - It has excellent TypeScript support",
      isCorrect: true,
      explanation: "Cursor is perfect for beginners...",
    },
  ]}
  explanation="For beginners, Cursor provides the best balance..."
/>
```

#### 3. LiveCode Component

```jsx
<LiveCode
  title="Your First AI-Assisted Code"
  description="Here's a simple example of how AI can help you write Cardano code"
  code={`// Example: Creating a simple Cardano transaction
import { ForgeScript, Transaction } from '@meshsdk/core';`}
  language="typescript"
  explanation="This code shows how AI can help you write Cardano transactions..."
/>
```

## Persona-Aware Content Filtering

The sidebar automatically filters content based on the selected persona:

- **Difficulty-based filtering**: Content is shown based on the persona's technical depth
- **Persona-specific content**: Some content is only shown to specific personas
- **Dynamic sections**: The sidebar updates when the persona changes

### Content Metadata

Each MDX file includes frontmatter that defines:

```yaml
---
title: "Discover AI Tools"
description: "Learn about AI-powered development tools"
type: "discover"
difficulty: "beginner"
estimatedTime: "30 min"
personas: ["newbie", "hobby-coder", "designer", "entrepreneur"]
---
```

## Implementation Details

### Persona Context

- `PersonaContext`: Manages selected persona state across the app
- `usePersona()`: Hook to access and modify persona state
- Persistence: Persona selection is saved to localStorage

### Sidebar Integration

- `getSidebarSections(persona)`: Returns persona-filtered sidebar sections
- `PersonaSwitcher`: Compact component for changing personas
- Dynamic updates: Sidebar content changes when persona changes

### Content Components

- All MDX components are exported from `src/components/mdx/index.ts`
- Components are designed to work with the dark theme and Cardano branding
- Interactive elements provide immediate feedback and learning reinforcement

## Usage Examples

### Setting Up Persona-Aware Content

1. **Create MDX content** with appropriate frontmatter
2. **Use the component kit** for interactive elements
3. **Test with different personas** to ensure appropriate filtering
4. **Add persona-specific explanations** where needed

### Adding New Personas

1. **Update `PERSONAS`** in `src/types/personas.ts`
2. **Add persona-specific content** with appropriate metadata
3. **Test filtering logic** in `sidebarUtils.ts`
4. **Update UI components** if needed

### Creating New Content Types

1. **Design the component** with appropriate props
2. **Add to the MDX component kit** in `src/components/mdx/index.ts`
3. **Document usage** in this README
4. **Test with different personas**

## Best Practices

### Content Creation

- **Start with the persona in mind**: Write for a specific learner type
- **Use progressive disclosure**: Show basic concepts first, then advanced details
- **Include interactive elements**: Quizzes, code examples, and callouts
- **Provide multiple explanations**: Different personas need different levels of detail

### Component Design

- **Consistent styling**: Use the established design system
- **Accessibility**: Ensure components work with screen readers
- **Responsive design**: Components should work on all screen sizes
- **Performance**: Keep components lightweight and fast

### Persona Management

- **Clear transitions**: Make it easy to switch between personas
- **Persistent state**: Remember user's persona choice
- **Visual feedback**: Show which persona is currently active
- **Contextual help**: Provide guidance based on the selected persona

## Future Enhancements

1. **Adaptive content**: Content that changes based on user progress
2. **Learning analytics**: Track which content works best for each persona
3. **A/B testing**: Test different content approaches for each persona
4. **Community features**: Allow users to share content within their persona group
5. **Advanced filtering**: More sophisticated content filtering based on user behavior
