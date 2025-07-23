import { ReactNode } from "react";

export interface SetupQuestStep {
  title: string;
  checklist: string;
  content: ReactNode;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  setupUrl: string;
  learnMoreUrl: string;
  features: string[];
}

export interface SetupStep {
  id: string;
  title: string;
  description?: string;
  content: React.ReactNode;
  image?: string;
  imageCaption?: string;
  completed?: boolean;
}

export interface SlideConfig {
  id: string;
  title: string;
  description?: string;
  route: string;
  component: React.ComponentType<any>;
  showInSidebar?: boolean;
  sidebarLabel?: string;
  nextSlide?: string;
  prevSlide?: string;
  category?: "learn" | "build" | "practice";
}

export interface NavigationProps {
  onNext?: () => void;
  onPrev?: () => void;
  onFinish?: () => void;
  nextLabel?: string;
  prevLabel?: string;
  finishLabel?: string;
  showNext?: boolean;
  showPrev?: boolean;
  showFinish?: boolean;
}
