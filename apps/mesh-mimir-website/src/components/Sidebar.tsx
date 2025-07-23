import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getSidebarSlides } from "./ai-tools/data/slides";

interface SidebarSection {
  title: string;
  icon: string;
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
    icon: "📚",
    items: aiToolsItems,
  },
  {
    title: "Build",
    icon: "🚀",
    items: [{ label: "First Transaction", href: "/guides/first_transaction" }],
  },
];

// NOTE: Ensure that the /docs/ai-tools page (AIToolsContainer) reads the 'slide' query param and displays the correct slide accordingly.

export default function Sidebar() {
  const [openSections, setOpenSections] = useState(() =>
    sections.map(() => true)
  );
  const [collapsed, setCollapsed] = useState(false);
  const [width, setWidth] = useState(260); // default width
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
          top: 64, // header height in px
          bottom: 36, // footer height in px
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
        <div className="flex items-center justify-left gap-2 px-4 py-3 border-b border-border bg-surface text-lg font-bold text-primary select-none">
          <span role="img" aria-label="Learning">
            📚
          </span>{" "}
          Learning Sections
        </div>
      )}
      {/* Drag Handle */}
      <div
        className={`absolute right-0 top-0 h-full w-2 cursor-ew-resize z-50 group ${dragging ? "bg-primary/30" : "bg-transparent"}`}
        onMouseDown={e => {
          setDragging(true);
          dragStartX.current = e.clientX;
          dragStartWidth.current = width;
          e.preventDefault();
        }}
      ></div>
      <ul className="space-y-4 flex-1 overflow-y-auto py-4 scrollbar-none">
        {sections.map((section, idx) => {
          // Determine if any item in this section matches the current route
          const isActiveSection = section.items.some(item =>
            router.pathname.startsWith(item.href)
          );
          return (
            <li key={section.title} className="relative group">
              <button
                className={`flex items-center w-full text-left font-bold text-text-primary py-2 px-2 rounded hover:bg-background/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition ${collapsed ? "justify-center" : ""} ${isActiveSection ? "text-blue-500" : ""}`}
                aria-expanded={openSections[idx]}
                aria-controls={`sidebar-section-${idx}`}
                onClick={() => toggleSection(idx)}
                tabIndex={collapsed ? -1 : 0}
              >
                <span className="text-xl mr-0 md:mr-2">{section.icon}</span>
                {!collapsed && <span className="flex-1">{section.title}</span>}
                {/* Remove collapse/expand arrow */}
              </button>
              {/* Tooltip for collapsed state */}
              {collapsed && (
                <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 rounded bg-background border border-border text-xs text-text-secondary opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 shadow-lg transition-opacity duration-200">
                  {section.title}
                </span>
              )}
              <ul
                id={`sidebar-section-${idx}`}
                className={`pl-4 mt-2 space-y-2 transition-all ${openSections[idx] && !collapsed ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
              >
                {!collapsed &&
                  section.items.map(item => {
                    const isActiveItem = router.pathname === item.href;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`inline-block py-1 px-4 rounded-full text-text-secondary hover:text-primary hover:bg-background/40 transition font-bold ${isActiveItem ? "bg-blue-500 text-white" : ""}`}
                          style={
                            isActiveItem ? { minWidth: "fit-content" } : {}
                          }
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
    </nav>
  );
}
