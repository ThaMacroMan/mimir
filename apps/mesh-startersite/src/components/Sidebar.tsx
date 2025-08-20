import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  BookOpen,
  Rocket,
  ChevronDown,
  Layout,
  Code,
  Home,
  X,
} from "lucide-react";
import { MetallicCardanoLogo } from "./MetallicCardanoLogo";
import { useSidebarPersistence } from "../hooks/useSidebarPersistence";
import { getSidebarSections } from "../utils/sidebarUtils";
import { usePersona } from "../contexts/PersonaContext";
import { LearnerPersona } from "../types/personas";
import PersonaSwitcher from "./PersonaSwitcher";

// Collapsed width constant
const COLLAPSED_WIDTH = 48;

interface SidebarSection {
  title: string;
  icon: React.ReactNode;
  items: { label: string; href: string }[];
}

// Icon mapping for dynamic sections
const iconMap = {
  Home: <Home className="w-5 h-5" />,
  BookOpen: <BookOpen className="w-5 h-5" />,
  Rocket: <Rocket className="w-5 h-5" />,
  Layout: <Layout className="w-5 h-5" />,
  Code: <Code className="w-5 h-5" />,
};

// Get sections with proper icons
const getSectionsWithIcons = (
  persona: LearnerPersona | null
): SidebarSection[] => {
  const sections = getSidebarSections(persona);
  return sections.map(section => ({
    ...section,
    icon: iconMap[section.icon as keyof typeof iconMap] || (
      <Home className="w-5 h-5" />
    ),
  }));
};

export default function Sidebar() {
  const { selectedPersona } = usePersona();
  const sections = getSectionsWithIcons(selectedPersona);

  // Initialize persistence hook
  const {
    state: persistedState,
    updateState: updatePersistedState,
    isLoaded: isPersistedStateLoaded,
  } = useSidebarPersistence({
    sidebarId: "main-sidebar",
    defaultState: {
      collapsed: true,
      width: COLLAPSED_WIDTH,
      height: 800,
      top: 16,
      openSections: sections.map(() => true),
    },
  });

  const [openSections, setOpenSections] = useState(
    () => persistedState.openSections || sections.map(() => true)
  );
  const [selectedSection, setSelectedSection] = useState(0); // Track which section is selected
  const [collapsed, setCollapsed] = useState(persistedState.collapsed);
  const [width, setWidth] = useState(persistedState.width);
  const [animatingWidth, setAnimatingWidth] = useState(persistedState.width); // For smooth transitions
  const [height, setHeight] = useState(persistedState.height); // Start with fallback, will be updated on client
  const [top, setTop] = useState(persistedState.top); // Vertical position of sidebar
  const [dragging, setDragging] = useState(false);
  const [draggingVertical, setDraggingVertical] = useState(false);
  const [draggingPosition, setDraggingPosition] = useState(false);
  const [maxWidth, setMaxWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth / 2 : 600
  );
  const [maxHeight, setMaxHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight - 32 : 800
  );
  const [_isClient, setIsClient] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);
  const dragStartWidth = useRef<number | null>(null);
  const dragStartY = useRef<number | null>(null);
  const dragStartHeight = useRef<number | null>(null);
  const dragStartTop = useRef<number | null>(null);

  // Animation states
  const [isAnimating, setIsAnimating] = useState(false);

  const router = useRouter();

  // Sync with persisted state when it loads
  useEffect(() => {
    if (isPersistedStateLoaded) {
      setCollapsed(persistedState.collapsed);
      setWidth(persistedState.width);
      setAnimatingWidth(persistedState.width);
      setHeight(persistedState.height);
      setTop(persistedState.top);
      if (persistedState.openSections) {
        setOpenSections(persistedState.openSections);
      }
    }
  }, [isPersistedStateLoaded, persistedState]);

  // Update sections when persona changes
  useEffect(() => {
    const newSections = getSectionsWithIcons(selectedPersona);
    setOpenSections(newSections.map(() => true));
  }, [selectedPersona]);

  // Set client-side flag and update maxWidth/maxHeight on window resize
  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      const newMaxWidth = window.innerWidth / 2;
      const newMaxHeight = window.innerHeight - 32;
      setMaxWidth(newMaxWidth);
      setMaxHeight(newMaxHeight);
      setWidth(w => Math.min(w, newMaxWidth));
      // Always set to full height on initial load and resize
      setHeight(newMaxHeight);
    };
    handleResize(); // Call immediately
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!dragging && !draggingVertical && !draggingPosition) return;
    let animationFrameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
        // Handle horizontal dragging for width
        if (
          dragging &&
          dragStartX.current !== null &&
          dragStartWidth.current !== null &&
          sidebarRef.current
        ) {
          const delta = e.clientX - dragStartX.current;
          const newWidth = Math.min(
            Math.max(dragStartWidth.current + delta, COLLAPSED_WIDTH),
            maxWidth
          );
          setWidth(newWidth);
          setAnimatingWidth(newWidth);
          const newCollapsed = newWidth <= COLLAPSED_WIDTH;
          setCollapsed(newCollapsed);
          updatePersistedState({ width: newWidth, collapsed: newCollapsed });
        }

        // Handle vertical dragging for height (bottom handle only)
        if (
          draggingVertical &&
          dragStartY.current !== null &&
          dragStartHeight.current !== null
        ) {
          const deltaY = e.clientY - dragStartY.current;

          // Bottom handle: height increases as we drag down, decreases as we drag up
          const newHeight = Math.min(
            Math.max(dragStartHeight.current + deltaY, 200), // Minimum height of 200px
            maxHeight
          );

          // Prevent expanding off-screen by adjusting top position if needed
          const maxAllowedHeight = window.innerHeight - top - 16; // 16px margin from bottom
          if (newHeight > maxAllowedHeight) {
            const adjustedHeight = maxAllowedHeight;
            const adjustedTop = Math.max(
              16,
              window.innerHeight - adjustedHeight - 16
            );
            setTop(adjustedTop);
            setHeight(adjustedHeight);
          } else {
            setHeight(newHeight);
            updatePersistedState({ height: newHeight });
          }
        }

        // Handle position dragging (moving the entire sidebar up/down)
        if (
          draggingPosition &&
          dragStartY.current !== null &&
          dragStartTop.current !== null
        ) {
          const deltaY = e.clientY - dragStartY.current;
          const newTop = Math.min(
            Math.max(dragStartTop.current + deltaY, 16), // Minimum top position
            window.innerHeight - height - 16 // Maximum top position (keep sidebar in view)
          );
          setTop(newTop);
          updatePersistedState({ top: newTop });
        }
      });
    };
    const handleMouseUp = () => {
      setDragging(false);
      setDraggingVertical(false);
      setDraggingPosition(false);
      dragStartX.current = null;
      dragStartWidth.current = null;
      dragStartY.current = null;
      dragStartHeight.current = null;
      dragStartTop.current = null;

      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [
    dragging,
    draggingVertical,
    draggingPosition,
    maxWidth,
    maxHeight,
    height,
    top,
    updatePersistedState,
  ]);

  // Handle click to expand when collapsed
  const handleCollapsedClick = () => {
    if (collapsed) {
      setIsAnimating(true);
      setCollapsed(false);
      setWidth(260); // Expand to default width
      setAnimatingWidth(260);
      updatePersistedState({ collapsed: false, width: 260 });
      // Reset animation state after transition
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const toggleSection = (idx: number) => {
    setOpenSections(prev => {
      const newSections = prev.map((open, i) => (i === idx ? !open : open));
      updatePersistedState({ openSections: newSections });
      return newSections;
    });
  };

  return (
    <div
      className="rounded-3xl overflow-hidden"
      style={{
        position: "fixed",
        left: "16px",
        top: `${top}px`,
        width: collapsed ? COLLAPSED_WIDTH : width,
        height: height,
        zIndex: 30,
      }}
    >
      <nav
        ref={sidebarRef}
        className={`bg-surface/30 backdrop-blur-md transition-all duration-500 ease-out flex flex-col overflow-hidden isolate ${collapsed ? "min-w-0 rounded-3xl cursor-pointer" : "rounded-3xl"} ${isAnimating ? "animate-pulse" : ""}`}
        aria-label="Sidebar navigation"
        onClick={collapsed ? handleCollapsedClick : undefined}
        title={collapsed ? "Click to expand" : ""}
        style={
          {
            width: animatingWidth,
            minWidth: collapsed ? 0 : COLLAPSED_WIDTH,
            maxWidth: collapsed ? COLLAPSED_WIDTH : maxWidth,
            transition:
              dragging || draggingVertical
                ? "none"
                : "width 0.6s cubic-bezier(0.4, 0, 0.2, 1), height 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            height: height,
            top: 0,
            bottom: 0,
            position: "absolute",
            left: 0,
            zIndex: 30,
            "--sidebar-width": `${animatingWidth}px`,
          } as React.CSSProperties & { "--sidebar-width": string }
        }
      >
        {/* Sidebar Title */}
        <div
          className={`border-b border-border px-4 py-3 bg-surface-elevated rounded-t-3xl transition-all duration-300 ease-out ${collapsed ? "opacity-0 pointer-events-none h-0 overflow-hidden" : "opacity-100"}`}
        >
          <div
            className="flex items-center justify-between cursor-move"
            onMouseDown={e => {
              if (e.button === 0) {
                setDraggingPosition(true);
                dragStartY.current = e.clientY;
                dragStartTop.current = top;
                e.preventDefault();
                e.stopPropagation();
              }
            }}
          >
            <div className="flex items-center gap-3">
              <MetallicCardanoLogo size={24} className="flex-shrink-0" />
              <span className="font-display font-semibold text-text-primary text-sm">
                LEARNING SECTIONS
              </span>
            </div>
            <button
              onClick={() => {
                setCollapsed(true);
                setWidth(COLLAPSED_WIDTH);
                updatePersistedState({
                  collapsed: true,
                  width: COLLAPSED_WIDTH,
                });
              }}
              onMouseDown={e => e.stopPropagation()}
              className="p-1 rounded-full hover:bg-surface/50 text-text-secondary hover:text-primary transition-colors duration-200"
              title="Collapse sidebar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Home Section */}
        {!collapsed && (
          <div className="border-b border-border/30">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-3 hover:bg-surface-elevated/50 transition-colors duration-200"
              onMouseDown={e => e.stopPropagation()}
            >
              <Home className="w-5 h-5 text-primary" />
              <span className="font-display font-medium text-text-primary text-sm">
                Home
              </span>
            </Link>
          </div>
        )}

        {/* Horizontal Drag Handle */}
        <div
          className={`absolute right-0 top-0 h-full w-1 cursor-ew-resize z-50 group ${dragging ? "bg-primary" : "bg-transparent hover:bg-primary/30"}`}
          onMouseDown={e => {
            if (e.button === 0) {
              setDragging(true);
              dragStartX.current = e.clientX;
              dragStartWidth.current = width;
              e.preventDefault();
              e.stopPropagation();
            }
          }}
        />

        {/* Vertical Drag Handle (bottom only) */}
        <div
          className={`absolute left-0 bottom-0 w-full h-1 cursor-ns-resize z-50 group ${draggingVertical ? "bg-primary" : "bg-transparent hover:bg-primary/30"}`}
          onMouseDown={e => {
            if (e.button === 0) {
              setDraggingVertical(true);
              dragStartY.current = e.clientY;
              dragStartHeight.current = height;
              e.preventDefault();
              e.stopPropagation();
            }
          }}
        />

        {collapsed ? (
          <div className="flex flex-col items-center justify-center gap-8 h-full">
            {sections.map((section, idx) =>
              section.title === "Home" ? (
                <Link
                  key={section.title}
                  href="/"
                  onMouseDown={e => e.stopPropagation()}
                  className={`transition-all duration-300 ease-out cursor-pointer ${
                    router.pathname === "/"
                      ? "text-primary-hover scale-110"
                      : "text-primary hover:text-primary-hover hover:scale-105"
                  }`}
                >
                  {section.icon}
                </Link>
              ) : (
                <button
                  key={section.title}
                  onClick={() => {
                    setIsAnimating(true);
                    setCollapsed(false);
                    setWidth(260);
                    setAnimatingWidth(260);
                    updatePersistedState({ collapsed: false, width: 260 });
                    setSelectedSection(idx);
                    setOpenSections(prev => {
                      const newSections = prev.map((open, i) =>
                        i === idx ? true : open
                      );
                      updatePersistedState({ openSections: newSections });
                      return newSections;
                    });
                    // Reset animation state after transition
                    setTimeout(() => setIsAnimating(false), 600);
                  }}
                  onMouseDown={e => e.stopPropagation()}
                  className={`transition-all duration-300 ease-out cursor-pointer ${
                    selectedSection === idx
                      ? "text-primary-hover scale-110"
                      : "text-primary hover:text-primary-hover hover:scale-105"
                  }`}
                >
                  {section.icon}
                </button>
              )
            )}
          </div>
        ) : (
          <ul className="space-y-4 flex-1 overflow-y-auto py-4 px-2 scrollbar-none">
            {sections.map((section, idx) => {
              const isActiveSection = section.items.some(item =>
                router.pathname.startsWith(item.href)
              );
              return (
                <li key={section.title} className="relative group">
                  {section.title === "Home" ? (
                    <Link
                      href="/"
                      className={`flex items-center w-full text-left py-4 px-3 rounded-lg hover:bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 ${
                        router.pathname === "/"
                          ? "bg-primary/10 border border-primary/30"
                          : ""
                      }`}
                      onMouseDown={e => e.stopPropagation()}
                    >
                      <span className="text-primary mr-3">{section.icon}</span>
                      <span className="flex-1 font-display font-medium text-text-primary">
                        {section.title}
                      </span>
                    </Link>
                  ) : (
                    <button
                      className={`flex items-center w-full text-left py-4 px-3 rounded-lg hover:bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 ${
                        isActiveSection || selectedSection === idx
                          ? "bg-primary/10 border border-primary/30"
                          : ""
                      }`}
                      aria-expanded={openSections[idx]}
                      aria-controls={`sidebar-section-${idx}`}
                      onClick={() => {
                        toggleSection(idx);
                        setSelectedSection(idx);
                      }}
                      onMouseDown={e => e.stopPropagation()}
                      tabIndex={0}
                    >
                      <span className="text-primary mr-3">{section.icon}</span>
                      <span className="flex-1 font-display font-medium text-text-primary">
                        {section.title}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-text-secondary transition-transform duration-200 ${
                          openSections[idx] ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}

                  {/* Tooltip for collapsed state */}
                  {collapsed && (
                    <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-2 rounded-lg bg-surface-elevated border border-border text-xs text-text-primary opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 shadow-lg transition-opacity duration-200 font-display">
                      {section.title}
                    </span>
                  )}

                  <ul
                    id={`sidebar-section-${idx}`}
                    className={`pl-4 mt-2 space-y-1 transition-all duration-200 ${
                      openSections[idx] && !collapsed
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    {!collapsed &&
                      section.items.map(item => {
                        const isActiveItem = router.pathname === item.href;
                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className={`block py-2 px-3 rounded-lg text-sm font-mono transition-all duration-200 ${
                                isActiveItem
                                  ? "bg-primary/20 text-primary border border-primary/30"
                                  : "text-text-secondary hover:text-primary hover:bg-surface-elevated"
                              }`}
                              onMouseDown={e => e.stopPropagation()}
                            >
                              {item.label}
                            </Link>
                          </li>
                        );
                      })}
                  </ul>
                </li>
              );
            })}
          </ul>
        )}

        {/* Persona Switcher */}
        {!collapsed && (
          <div className="border-t border-border px-4 py-3 bg-surface-elevated rounded-b-3xl">
            <PersonaSwitcher variant="compact" />
          </div>
        )}
      </nav>
    </div>
  );
}
