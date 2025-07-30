import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getSidebarSlides } from "./ai-tools/data/slides";
import { BookOpen, Rocket, ChevronDown } from "lucide-react";

// Collapsed width constant
const COLLAPSED_WIDTH = 48;

interface SidebarSection {
  title: string;
  icon: React.ReactNode;
  items: { label: string; href: string }[];
}

// Generate AI Tools items dynamically from slides configuration
const aiToolsItems = getSidebarSlides().map(slide => ({
  label: slide.sidebarLabel || slide.title,
  href: slide.route,
}));

const sections: SidebarSection[] = [
  {
    title: "Learn",
    icon: <BookOpen className="w-5 h-5" />,
    items: aiToolsItems,
  },
  {
    title: "Build",
    icon: <Rocket className="w-5 h-5" />,
    items: [{ label: "First Transaction", href: "/guides/first_transaction" }],
  },
];

export default function Sidebar() {
  const [openSections, setOpenSections] = useState(() =>
    sections.map(() => true)
  );
  const [collapsed, setCollapsed] = useState(false);
  const [width, setWidth] = useState(260);
  const [height, setHeight] = useState(800); // Start with fallback, will be updated on client
  const [top, setTop] = useState(16); // Vertical position of sidebar
  const [dragging, setDragging] = useState(false);
  const [draggingVertical, setDraggingVertical] = useState(false);
  const [draggingPosition, setDraggingPosition] = useState(false);
  const [maxWidth, setMaxWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth / 2 : 600
  );
  const [maxHeight, setMaxHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight - 32 : 800
  );
  const [isClient, setIsClient] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);
  const dragStartWidth = useRef<number | null>(null);
  const dragStartY = useRef<number | null>(null);
  const dragStartHeight = useRef<number | null>(null);
  const dragStartTop = useRef<number | null>(null);

  const router = useRouter();

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
          setCollapsed(newWidth <= COLLAPSED_WIDTH);
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
  ]);

  const toggleSection = (idx: number) => {
    setOpenSections(prev => prev.map((open, i) => (i === idx ? !open : open)));
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
        className={`bg-surface/30 backdrop-blur-md transition-all duration-300 flex flex-col overflow-hidden isolate ${collapsed ? "min-w-0 rounded-3xl" : "rounded-3xl"}`}
        aria-label="Sidebar navigation"
        style={
          {
            width: collapsed ? COLLAPSED_WIDTH : width,
            minWidth: collapsed ? 0 : COLLAPSED_WIDTH,
            maxWidth: collapsed ? COLLAPSED_WIDTH : maxWidth,
            transition:
              dragging || draggingVertical ? "none" : "width 0.2s, height 0.2s",
            height: height,
            top: 0,
            bottom: 0,
            position: "absolute",
            left: 0,
            zIndex: 30,
            "--sidebar-width": collapsed
              ? `${COLLAPSED_WIDTH}px`
              : `${width}px`,
          } as React.CSSProperties & { "--sidebar-width": string }
        }
      >
        {/* Sidebar Title */}
        {!collapsed && (
          <div
            className="flex items-center gap-3 px-4 py-4 border-b border-border/30 bg-surface-elevated/40 backdrop-blur-sm rounded-t-3xl cursor-move"
            onMouseDown={e => {
              if (e.button === 0) {
                setDraggingPosition(true);
                dragStartY.current = e.clientY;
                dragStartTop.current = top;
                e.preventDefault();
              }
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="font-display font-semibold text-text-primary text-sm">
                LEARNING SECTIONS
              </span>
            </div>
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
            }
          }}
        />

        <ul className="space-y-2 flex-1 overflow-y-auto py-4 px-2 scrollbar-none">
          {sections.map((section, idx) => {
            const isActiveSection = section.items.some(item =>
              router.pathname.startsWith(item.href)
            );
            return (
              <li key={section.title} className="relative group">
                <button
                  className={`flex items-center w-full text-left py-3 px-3 rounded-lg hover:bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 ${collapsed ? "justify-center" : ""} ${isActiveSection ? "bg-primary/10 border border-primary/30" : ""}`}
                  aria-expanded={openSections[idx]}
                  aria-controls={`sidebar-section-${idx}`}
                  onClick={() => toggleSection(idx)}
                  tabIndex={collapsed ? -1 : 0}
                >
                  <span className={`text-primary ${collapsed ? "" : "mr-3"}`}>
                    {section.icon}
                  </span>
                  {!collapsed && (
                    <span className="flex-1 font-display font-medium text-text-primary">
                      {section.title}
                    </span>
                  )}
                  {!collapsed && (
                    <ChevronDown
                      className={`w-4 h-4 text-text-secondary transition-transform duration-200 ${
                        openSections[idx] ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

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

        {/* Status Bar */}
        {!collapsed && (
          <div className="border-t border-border px-4 py-3 bg-surface-elevated rounded-b-3xl">
            <div className="flex items-center justify-between text-xs text-text-muted font-mono">
              <span>Section: AI Tools</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Mesh</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
