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
  const [dragging, setDragging] = useState(false);
  const [maxWidth, setMaxWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth / 2 : 600
  );
  const [centerOffset, setCenterOffset] = useState(0); // Vertical offset for center point
  const [isClient, setIsClient] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);
  const dragStartWidth = useRef<number | null>(null);
  const dragStartY = useRef<number | null>(null);
  const dragStartCenterOffset = useRef<number | null>(null);
  const router = useRouter();

  // Single unified parabolic function - used for both clip-path and SVG border
  const generateParabolicCurve = (baseWidth: number, height: number) => {
    const amplitudeFactor = Math.max(
      0.12,
      ((baseWidth - 120) / (maxWidth - 120)) * 0.5
    );
    const minContentWidth = Math.max(100, baseWidth * 0.4);
    const maxClipAmount = baseWidth - minContentWidth;

    const points = [];
    const numPoints = 60; // Even more points for ultra-smooth curve

    for (let i = 0; i <= numPoints; i++) {
      const y = (i / numPoints) * height;
      const adjustedCenter = height / 2 + centerOffset;
      const distanceFromCenter = y - adjustedCenter;
      const normalizedDistance = distanceFromCenter / (height / 2);

      // Ultra-smooth parabolic function with cubic easing
      const easedDistance = Math.pow(Math.abs(normalizedDistance), 1.2); // Even gentler power
      const rawCurveOutset = baseWidth * amplitudeFactor * easedDistance;

      // Simple classic parabola - no bottom transition needed
      const curveOutset = Math.min(rawCurveOutset, maxClipAmount);
      const x = baseWidth - curveOutset; // Curve inward from the right edge

      points.push({ x, y });
    }

    return points;
  };

  // Generate clip-path from the unified curve
  const generateParabolicClipPath = (baseWidth: number, height: number) => {
    const points = generateParabolicCurve(baseWidth, height);

    const clipPoints = [
      ...points.map(p => `${p.x}px ${p.y}px`),
      // Add the left edge points to close the shape
      ...points
        .slice()
        .reverse()
        .map(p => `0px ${p.y}px`),
    ];

    return `polygon(${clipPoints.join(", ")})`;
  };

  // Calculate available width at any vertical position using the main function
  const getAvailableWidthAtPosition = (yPosition: number) => {
    const height = isClient ? window.innerHeight - 100 : 600;
    const adjustedCenter = height / 2 + centerOffset;
    const distanceFromCenter = yPosition - adjustedCenter;
    const normalizedDistance = distanceFromCenter / (height / 2);

    const amplitudeFactor = Math.max(
      0.12,
      ((width - 120) / (maxWidth - 120)) * 0.5
    );
    const easedDistance = Math.pow(Math.abs(normalizedDistance), 1.2);
    const rawCurveOutset = width * amplitudeFactor * easedDistance;

    const minContentWidth = Math.max(100, width * 0.4);
    const maxClipAmount = width - minContentWidth;
    const curveOutset = Math.min(rawCurveOutset, maxClipAmount);

    const availableWidth = Math.max(minContentWidth, width - curveOutset);

    return {
      availableWidth,
      curveOutset,
      isNearApex: Math.abs(normalizedDistance) < 0.3,
      normalizedDistance,
      position: Math.max(0, Math.min(1, yPosition / height)),
    };
  };

  // Set client-side flag and update maxWidth on window resize
  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      setMaxWidth(window.innerWidth / 2);
      setWidth(w => Math.min(w, window.innerWidth / 2));
    };
    handleResize(); // Call immediately
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!dragging) return;
    let animationFrameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
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

        // Handle vertical dragging for parabola center point
        if (
          dragging &&
          dragStartY.current !== null &&
          dragStartCenterOffset.current !== null
        ) {
          const deltaY = e.clientY - dragStartY.current;
          const newCenterOffset = dragStartCenterOffset.current + deltaY;
          const maxOffset =
            (typeof window !== "undefined" ? window.innerHeight : 800) * 0.8;
          const clampedOffset = Math.max(
            -maxOffset,
            Math.min(maxOffset, newCenterOffset)
          );
          setCenterOffset(clampedOffset);
        }
      });
    };
    const handleMouseUp = () => {
      setDragging(false);
      dragStartX.current = null;
      dragStartWidth.current = null;
      dragStartY.current = null;
      dragStartCenterOffset.current = null;
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

  // Generate parabolic clip-path for visual container only
  const clipPath = isClient
    ? generateParabolicClipPath(width, window.innerHeight - 100)
    : "none";

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 64,
        bottom: 36,
        width: collapsed ? COLLAPSED_WIDTH : width,
        height: "calc(100vh - 100px)",
        zIndex: 30,
      }}
    >
      {/* Parabolic border */}
      {!collapsed && (
        <svg
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: width,
            height: "calc(100vh - 100px)",
            pointerEvents: "none",
            zIndex: 50, // Higher z-index to ensure visibility
          }}
          viewBox={`0 0 ${width} ${isClient ? window.innerHeight - 100 : 600}`}
          preserveAspectRatio="none"
        >
          <path
            d={(() => {
              const height = isClient ? window.innerHeight - 100 : 600;
              const points = generateParabolicCurve(width, height);

              let pathData = "";
              points.forEach((point, i) => {
                if (i === 0) {
                  pathData = `M ${point.x} ${point.y}`;
                } else {
                  pathData += ` L ${point.x} ${point.y}`;
                }
              });
              return pathData;
            })()}
            fill="none"
            stroke="#00d4ff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      <nav
        ref={sidebarRef}
        className={`bg-surface border-l border-border transition-all duration-300 flex flex-col ${collapsed ? "min-w-0" : ""}`}
        aria-label="Sidebar navigation"
        style={
          {
            width: collapsed ? COLLAPSED_WIDTH : width,
            minWidth: collapsed ? 0 : COLLAPSED_WIDTH,
            maxWidth: collapsed ? COLLAPSED_WIDTH : maxWidth,
            transition: dragging ? "none" : "width 0.2s",
            height: "calc(100vh - 100px)",
            top: 0,
            bottom: 0,
            position: "absolute",
            left: 0,
            zIndex: 30,
            "--sidebar-width": collapsed
              ? `${COLLAPSED_WIDTH}px`
              : `${width}px`,
            clipPath: collapsed ? "none" : clipPath,
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

        {/* Combined Horizontal/Vertical Drag Handle */}
        <div
          className={`absolute right-0 top-0 h-full w-1 cursor-ew-resize z-50 group ${dragging ? "bg-primary" : "bg-transparent hover:bg-primary/30"}`}
          onMouseDown={e => {
            if (e.button === 0) {
              setDragging(true);
              dragStartX.current = e.clientX;
              dragStartWidth.current = width;
              dragStartY.current = e.clientY;
              dragStartCenterOffset.current = centerOffset;
              e.preventDefault();
            }
          }}
        />

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
    </div>
  );
}
