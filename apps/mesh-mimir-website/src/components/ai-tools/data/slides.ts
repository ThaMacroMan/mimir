import { SlideConfig } from "../types";
import { AIToolsIntro } from "../index";
import { AIToolsSelection } from "../index";
import { CursorSetupQuest } from "../index";
import { WindsurfSetup } from "../index";

export const aiToolsSlides: SlideConfig[] = [
  {
    id: "intro",
    title: "AI Tools Revolution",
    description:
      "Discover how AI-powered development tools can transform your coding journey",
    route: "/docs/ai-tools/intro",
    component: AIToolsIntro,
    showInSidebar: true,
    sidebarLabel: "AI Tools Revolution",
    nextSlide: "selection",
    category: "learn",
  },
  {
    id: "selection",
    title: "Choose Your Tool",
    description:
      "Compare and select the AI development tool that's right for you",
    route: "/docs/ai-tools/selection",
    component: AIToolsSelection,
    showInSidebar: true,
    sidebarLabel: "Choose Your Tool",
    prevSlide: "intro",
    nextSlide: "cursor-setup", // Default next, can be overridden by user choice
    category: "learn",
  },
  {
    id: "cursor-setup",
    title: "Cursor Setup Quest",
    description: "Complete step-by-step setup of Cursor AI editor",
    route: "/docs/ai-tools/cursor-setup",
    component: CursorSetupQuest,
    showInSidebar: true,
    sidebarLabel: "Cursor Setup Quest",
    prevSlide: "selection",
    category: "learn",
  },
  {
    id: "windsurf-setup",
    title: "Windsurf Setup",
    description: "Get started with Windsurf agentic IDE",
    route: "/docs/ai-tools/windsurf-setup",
    component: WindsurfSetup,
    showInSidebar: true,
    sidebarLabel: "Windsurf Setup",
    prevSlide: "selection",
    category: "learn",
  },
];

// Helper functions for slide navigation
export function getSlideByRoute(route: string): SlideConfig | undefined {
  return aiToolsSlides.find(slide => slide.route === route);
}

export function getSlideById(id: string): SlideConfig | undefined {
  return aiToolsSlides.find(slide => slide.id === id);
}

export function getNextSlide(currentSlideId: string): SlideConfig | undefined {
  const currentSlide = getSlideById(currentSlideId);
  if (!currentSlide?.nextSlide) return undefined;
  return getSlideById(currentSlide.nextSlide);
}

export function getPrevSlide(currentSlideId: string): SlideConfig | undefined {
  const currentSlide = getSlideById(currentSlideId);
  if (!currentSlide?.prevSlide) return undefined;
  return getSlideById(currentSlide.prevSlide);
}

export function getSidebarSlides(): SlideConfig[] {
  return aiToolsSlides.filter(slide => slide.showInSidebar);
}
