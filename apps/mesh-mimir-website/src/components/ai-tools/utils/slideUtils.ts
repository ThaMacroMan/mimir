import { SlideConfig } from "../types";
import { aiToolsSlides } from "../data/slides";

/**
 * Utility to create a new slide configuration
 */
export function createSlide(config: Omit<SlideConfig, 'showInSidebar'>): SlideConfig {
  return {
    showInSidebar: true,
    ...config
  };
}

/**
 * Utility to add a new slide to the slides array
 * This would typically be used when expanding the slides configuration
 */
export function addSlide(slide: SlideConfig): SlideConfig[] {
  return [...aiToolsSlides, slide];
}

/**
 * Generate Next.js page component for a slide
 */
export function createSlidePage(slideId: string) {
  return function SlidePage() {
    const slide = aiToolsSlides.find(s => s.id === slideId);
    if (!slide) {
      return <div>Slide not found</div>;
    }
    
    const Component = slide.component;
    return <Component />;
  };
}

/**
 * Generate navigation props for a slide
 */
export function getSlideNavigation(slideId: string) {
  const slide = aiToolsSlides.find(s => s.id === slideId);
  if (!slide) return {};

  return {
    nextSlide: slide.nextSlide,
    prevSlide: slide.prevSlide,
    title: slide.title,
    description: slide.description
  };
}

/**
 * Template for creating a new slide component
 */
export const slideTemplate = `
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import SlideWrapper from "../SlideWrapper";

export default function NewSlide() {
  const router = useRouter();

  const handleNext = () => {
    // Navigate to next slide
    router.push("/docs/ai-tools/next-slide");
  };

  const handleBack = () => {
    // Navigate to previous slide
    router.push("/docs/ai-tools/prev-slide");
  };

  return (
    <SlideWrapper>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-white">
            Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Slide Title
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Your slide description
          </p>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8"
        >
          {/* Your slide content here */}
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handleBack}
            className="px-6 py-3 rounded-xl border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-200"
          >
            ← Back
          </button>

          <button
            onClick={handleNext}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200"
          >
            Next →
          </button>
        </div>
      </div>
    </SlideWrapper>
  );
}
`;

/**
 * Instructions for adding a new slide
 */
export const addSlideInstructions = `
To add a new slide to the AI Tools flow:

1. Create a new component file: src/components/ai-tools/YourNewSlide.tsx
   - Use the slideTemplate above as a starting point
   - Wrap your content in SlideWrapper for responsive behavior

2. Add the slide to the configuration: src/components/ai-tools/data/slides.ts
   - Import your component
   - Add a new SlideConfig object to the aiToolsSlides array
   - Set up navigation (prevSlide, nextSlide)

3. Create a Next.js page: src/pages/docs/ai-tools/your-new-slide.tsx
   - Import and render your component

4. Export your component: src/components/ai-tools/index.ts
   - Add export for your new component

5. The sidebar will automatically update to include your new slide!

Example slide config:
{
  id: "your-new-slide",
  title: "Your New Slide",
  description: "Description of your slide",
  route: "/docs/ai-tools/your-new-slide",
  component: YourNewSlide,
  showInSidebar: true,
  sidebarLabel: "Your New Slide",
  prevSlide: "previous-slide-id",
  nextSlide: "next-slide-id",
  category: "learn"
}
`; 