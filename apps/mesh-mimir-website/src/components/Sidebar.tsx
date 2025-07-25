import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getSidebarSlides } from "./ai-tools/data/slides";
import { BookOpen, Rocket, ChevronDown } from "lucide-react";

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
  const [dragging, setDragging] = useState(false);
  const [maxWidth, setMaxWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth / 2 : 600
  );
  const sidebarRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);
  const dragStartWidth = useRef<number | null>(null);
  const router = useRouter();

  // Update maxWidth on window resize
  useEffect(() => {
    const handleResize = () => {
      setMaxWidth(window.innerWidth / 2);
      setWidth(w => Math.min(w, window.innerWidth / 2));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!dragging) return;
    let animationFrameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
        if (
          dragStartX.current !== null &&
          dragStartWidth.current !== null &&
          sidebarRef.current
        ) {
          const delta = e.clientX - dragStartX.current;
          const newWidth = Math.min(
            Math.max(dragStartWidth.current + delta, 56),
            maxWidth
          );
          setWidth(newWidth);
          setCollapsed(newWidth <= 56);
        }
      });
    };
    const handleMouseUp = () => {
      setDragging(false);
      dragStartX.current = null;
      dragStartWidth.current = null;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [dragging, maxWidth]);

  const toggleSection = (idx: number) => {
    setOpenSections(prev => prev.map((open, i) => (i === idx ? !open : open)));
  };

  return (
    <nav
      ref={sidebarRef}
      className={`bg-surface border-r border-border transition-all duration-300 flex flex-col ${collapsed ? "w-14 min-w-0" : ""}`}
      aria-label="Sidebar navigation"
      style={
        {
          left: 0,
          top: 64,
          bottom: 36,
          position: "fixed",
          zIndex: 30,
          height: "auto",
          width: collapsed ? 56 : width,
          minWidth: collapsed ? 0 : 56,
          maxWidth: maxWidth,
          transition: dragging ? "none" : "width 0.2s",
          "--sidebar-width": collapsed ? "56px" : `${width}px`,
        } as React.CSSProperties & { "--sidebar-width": string }
      }
    >
      {/* Sidebar Title */}
      {!collapsed && (
        <div className="flex items-center gap-3 px-4 py-4 border-b border-border bg-surface-elevated">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="font-display font-semibold text-text-primary text-sm">
              LEARNING SECTIONS
            </span>
          </div>
        </div>
      )}

      {/* Drag Handle */}
      <div
        className={`absolute right-0 top-0 h-full w-1 cursor-ew-resize z-50 group ${dragging ? "bg-primary" : "bg-transparent hover:bg-primary/30"}`}
        onMouseDown={e => {
          setDragging(true);
          dragStartX.current = e.clientX;
          dragStartWidth.current = width;
          e.preventDefault();
        }}
      ></div>

      <ul className="space-y-2 flex-1 overflow-y-auto py-4 scrollbar-none">
        {sections.map((section, idx) => {
          const isActiveSection = section.items.some(item =>
            router.pathname.startsWith(item.href)
          );
          return (
            <li key={section.title} className="relative group">
              <button
                className={`flex items-center w-full text-left py-3 px-4 rounded-lg hover:bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 ${collapsed ? "justify-center" : ""} ${isActiveSection ? "bg-primary/10 border border-primary/30" : ""}`}
                aria-expanded={openSections[idx]}
                aria-controls={`sidebar-section-${idx}`}
                onClick={() => toggleSection(idx)}
                tabIndex={collapsed ? -1 : 0}
              >
                <span className="text-primary mr-3">{section.icon}</span>
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
                          className={`block py-2 px-4 rounded-lg text-sm font-mono transition-all duration-200 ${
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
        <div className="border-t border-border px-4 py-3 bg-surface-elevated">
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
  );
}
