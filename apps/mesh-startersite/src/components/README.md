# Components Directory Structure

This directory contains all React components organized by their purpose and responsibility.

## 📁 **Directory Organization**

### **`/layout/` - Page Structure Components**

Components responsible for the overall page layout and structure.

- **`Sidebar/`** - Navigation sidebar components
  - `Sidebar.tsx` - Main left sidebar
  - `AIChatSidebar.tsx` - Right AI chat sidebar
- **`Header/`** - Page header components
  - `Header.tsx` - Main page header
- **`Footer/`** - Page footer components
  - `Footer.tsx` - Main page footer
- **`ContentLayout.tsx`** - Main content wrapper
- **`ContentSection.tsx`** - Content section wrapper
- **`ScrollNavigation.tsx`** - Scroll navigation component

### **`/features/` - Business Logic Components**

Components specific to application features and business logic.

- **`Persona/`** - Persona-related components
  - `PersonaSelector.tsx` - Persona selection interface
  - `PersonaSwitcher.tsx` - Persona switching component
  - `MimirHero.tsx` - Main hero section
- **`Bento/`** - Bento grid components
  - `BentoGrid.tsx` - Main bento grid container
  - `BentoCard.tsx` - Individual bento card
  - `MagicBento.tsx` - Special bento component
- **`ClickCounter/`** - Click counter feature
  - `ClickCounter.tsx` - Main click counter
  - `ClickSpark.tsx` - Click spark effects
- **`Community/`** - Community features
  - `CommunitySection.tsx` - Community section

### **`/shared/` - Common Components**

Components used across multiple features and pages.

- **`Logo/`** - Logo components
  - `MetallicCardanoLogo.tsx` - Cardano logo component
- **`Background/`** - Background components
  - `FluidBackground.tsx` - Fluid background effects

### **`/ui/` - Reusable UI Components**

Generic, reusable UI components that can be used anywhere.

- **`Card/`** - Card components
  - `TiltedCard.tsx` - Tilted card effect
- **`PressEnterToContinue.tsx`** - Press enter prompt

### **`/mdx/` - MDX Content Components**

Components specifically for MDX content rendering.

- `Callout.tsx` - Callout/info boxes
- `LiveCode.tsx` - Live code examples
- `Quiz.tsx` - Quiz components

### **`/magicui/` - Magic UI Components**

Special UI components with advanced effects.

- `terminal.tsx` - Terminal component

## 🚀 **Usage Examples**

### **Importing Layout Components**

```tsx
import { Sidebar, AIChatSidebar, Header } from "@/components/layout";
```

### **Importing Feature Components**

```tsx
import {
  PersonaSelector,
  BentoGrid,
  ClickCounter,
} from "@/components/features";
```

### **Importing Shared Components**

```tsx
import { MetallicCardanoLogo, FluidBackground } from "@/components/shared";
```

### **Importing UI Components**

```tsx
import { TiltedCard, PressEnterToContinue } from "@/components/ui";
```

### **Importing Everything**

```tsx
import {
  Sidebar,
  PersonaSelector,
  MetallicCardanoLogo,
  TiltedCard,
} from "@/components";
```

## 📋 **Component Guidelines**

### **Naming Conventions**

- Use PascalCase for component files: `MyComponent.tsx`
- Use kebab-case for directories: `my-feature/`
- Export components as default exports
- Create index.ts files for clean imports

### **File Organization**

- One component per file
- Co-locate related components in feature directories
- Keep components focused and single-purpose
- Extract complex logic into custom hooks

### **Import/Export Strategy**

- Use barrel exports (index.ts files) for clean imports
- Export components from their respective category directories
- Maintain backward compatibility during refactoring

## 🔄 **Migration Notes**

This structure was created to improve:

- **Discoverability**: Easy to find components by purpose
- **Maintainability**: Related components are grouped together
- **Reusability**: Clear separation between generic and specific components
- **Scalability**: Easy to add new features without cluttering the root

## 📝 **Adding New Components**

1. **Layout Components**: Add to `/layout/` directory
2. **Feature Components**: Add to appropriate `/features/` subdirectory
3. **Shared Components**: Add to `/shared/` directory
4. **UI Components**: Add to `/ui/` directory
5. **Update index files**: Export new components from appropriate index.ts files
