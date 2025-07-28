import { useState, useRef, useEffect } from "react";
import { Bot, Send } from "lucide-react";

interface AIChatSidebarProps {
  width?: number;
  centerOffset?: number;
  onWidthChange?: (width: number) => void;
  onCenterOffsetChange?: (offset: number) => void;
}

export default function AIChatSidebar({
  width: externalWidth,
  centerOffset: externalCenterOffset,
  onWidthChange,
  onCenterOffsetChange,
}: AIChatSidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [width, setWidth] = useState(externalWidth || 320);
  const [dragging, setDragging] = useState(false);
  const [maxWidth, setMaxWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth / 2 : 600
  );
  const [centerOffset, setCenterOffset] = useState(externalCenterOffset || 0); // Vertical offset for center point
  const [isClient, setIsClient] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);
  const dragStartWidth = useRef<number | null>(null);
  const dragStartY = useRef<number | null>(null);
  const dragStartCenterOffset = useRef<number | null>(null);
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hi! I'm your AI coding buddy. Ask me anything!" },
    { from: "user", text: "How do I send a Cardano transaction?" },
    { from: "ai", text: "Great question! Here's a quick guide..." },
  ]);

  // Update internal state when external props change
  useEffect(() => {
    if (externalWidth !== undefined) {
      setWidth(externalWidth);
    }
  }, [externalWidth]);

  useEffect(() => {
    if (externalCenterOffset !== undefined) {
      setCenterOffset(externalCenterOffset);
    }
  }, [externalCenterOffset]);

  // Notify parent of changes
  const updateWidth = (newWidth: number) => {
    setWidth(newWidth);
    onWidthChange?.(newWidth);
  };

  const updateCenterOffset = (newOffset: number) => {
    setCenterOffset(newOffset);
    onCenterOffsetChange?.(newOffset);
  };

  // Collapsed width constant
  const COLLAPSED_WIDTH = 48;

  // Create refs for all messages upfront to avoid conditional hooks
  const messageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const messageStyles = useRef<
    Array<{
      padding: number;
      fontSize: string;
      maxWidth: string;
      opacity: number;
      displayText: string;
    }>
  >([]);

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
      const x = curveOutset;

      points.push({ x, y });
    }

    return points;
  };

  // Generate clip-path from the unified curve
  const generateParabolicClipPath = (baseWidth: number, height: number) => {
    const points = generateParabolicCurve(baseWidth, height);

    const clipPoints = [
      ...points.map(p => `${p.x}px ${p.y}px`),
      // Add the right edge points to close the shape
      ...points
        .slice()
        .reverse()
        .map(p => `${baseWidth}px ${p.y}px`),
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

  // Calculate responsive text sizes based on width
  const getResponsiveTextSize = () => {
    if (width < 200) return "text-xs";
    if (width < 300) return "text-sm";
    return "text-sm";
  };

  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);
  const prevMessagesLength = useRef(messages.length);

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

  // Only scroll to bottom when a new message is added
  useEffect(() => {
    if (messages.length > prevMessagesLength.current) {
      setTimeout(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    prevMessagesLength.current = messages.length;
  }, [messages]);

  // Ensure proper scroll position on initial load
  useEffect(() => {
    if (messages.length > 0 && !collapsed) {
      setTimeout(() => {
        const chatContainer = document.querySelector(".chat-scroll");
        if (chatContainer) {
          chatContainer.scrollTop = chatContainer.scrollHeight;
        }
      }, 200);
    }
  }, [collapsed]);

  // Ensure first message is always visible on load
  useEffect(() => {
    if (messages.length > 0 && !collapsed) {
      const chatContainer = document.querySelector(".chat-scroll");
      if (chatContainer) {
        chatContainer.scrollTop = 0;
      }
    }
  }, [collapsed]);

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
          const delta = dragStartX.current - e.clientX;
          const newWidth = Math.min(
            Math.max(dragStartWidth.current + delta, COLLAPSED_WIDTH),
            maxWidth
          );
          updateWidth(newWidth);
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
          updateCenterOffset(clampedOffset);
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

  // Generate parabolic clip-path for visual container only
  const clipPath = isClient
    ? generateParabolicClipPath(width, window.innerHeight - 100)
    : "none";

  // Calculate optimal content positioning based on parabola
  const getOptimalContentLayout = () => {
    const height = isClient ? window.innerHeight - 100 : 600;
    const adjustedCenter = height / 2 + centerOffset;

    // Find the best areas for header, content, and input
    const headerPosition = 0;
    const inputPosition = height;

    // Calculate available space at header and input positions
    const headerSpace = getAvailableWidthAtPosition(headerPosition);
    const inputSpace = getAvailableWidthAtPosition(inputPosition);

    // Find the area with maximum available width for content
    let maxContentWidth = 0;
    let optimalContentStart = 0;
    let optimalContentEnd = height;

    // Sample points to find the best content area
    for (let y = 0; y <= height; y += 20) {
      const space = getAvailableWidthAtPosition(y);
      if (space.availableWidth > maxContentWidth) {
        maxContentWidth = space.availableWidth;
        optimalContentStart = Math.max(0, y - 50);
        optimalContentEnd = Math.min(height, y + 50);
      }
    }

    return {
      headerSpace,
      inputSpace,
      contentArea: {
        start: optimalContentStart,
        end: optimalContentEnd,
        maxWidth: maxContentWidth,
      },
      adjustedCenter,
    };
  };

  const contentLayout = getOptimalContentLayout();

  return (
    <div
      style={{
        position: "fixed",
        right: 0,
        top: 64,
        bottom: 36,
        width: collapsed ? COLLAPSED_WIDTH : width,
        height: "calc(100vh - 100px)",
        zIndex: 40,
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

      <aside
        ref={sidebarRef}
        style={
          {
            width: collapsed ? COLLAPSED_WIDTH : width,
            minWidth: collapsed ? 0 : 120,
            maxWidth: collapsed ? COLLAPSED_WIDTH : maxWidth,
            transition: dragging ? "none" : "width 0.2s",
            height: "calc(100vh - 100px)",
            top: 0,
            bottom: 0,
            position: "absolute",
            right: 0,
            zIndex: 40,
            "--ai-chat-width": collapsed
              ? `${COLLAPSED_WIDTH}px`
              : `${width}px`,
            clipPath: collapsed ? "none" : clipPath,
          } as React.CSSProperties & { "--ai-chat-width": string }
        }
        className={`bg-surface flex flex-col shadow-2xl ${
          collapsed ? "min-w-0" : "rounded-l-2xl"
        }`}
        aria-label="AI Chat sidebar"
      >
        {/* Combined Horizontal/Vertical Drag Handle */}
        <div
          className={`absolute left-0 top-0 h-full w-1 cursor-ew-resize z-50 group ${dragging ? "bg-primary" : "bg-transparent hover:bg-primary/30"}`}
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

        {/* Collapsed state: show only icon */}
        {collapsed ? (
          <div className="flex flex-col items-center justify-center flex-1">
            <Bot className="w-5 h-5 text-primary" />
          </div>
        ) : !isClient ? (
          // Loading state while client-side calculations are being set up
          <div className="flex flex-col items-center justify-center flex-1">
            <Bot className="w-5 h-5 text-primary" />
          </div>
        ) : (
          <>
            {/* Dynamic Header - Adapts to available space */}
            <div
              className="flex items-center gap-1 px-2 py-1 bg-surface-elevated min-w-0 flex-shrink-0 sticky top-0 z-50 rounded-t-lg"
              style={{
                height:
                  contentLayout.headerSpace.availableWidth < 150
                    ? "20px"
                    : contentLayout.headerSpace.availableWidth < 200
                      ? "24px"
                      : "28px",
                minHeight:
                  contentLayout.headerSpace.availableWidth < 150
                    ? "20px"
                    : contentLayout.headerSpace.availableWidth < 200
                      ? "24px"
                      : "28px",
                width: `${contentLayout.headerSpace.availableWidth}px`,
                maxWidth: `${contentLayout.headerSpace.availableWidth}px`,
                position: "absolute",
                top: "8px",
                left: `${contentLayout.headerSpace.curveOutset + 2}px`,
              }}
            >
              <Bot
                className="text-primary"
                style={{
                  width:
                    contentLayout.headerSpace.availableWidth < 150
                      ? "8px"
                      : contentLayout.headerSpace.availableWidth < 200
                        ? "10px"
                        : "12px",
                  height:
                    contentLayout.headerSpace.availableWidth < 150
                      ? "8px"
                      : contentLayout.headerSpace.availableWidth < 200
                        ? "10px"
                        : "12px",
                }}
              />
              <div className="flex items-center gap-1 min-w-0 flex-1">
                <span
                  className="font-display font-semibold text-text-primary truncate"
                  style={{
                    fontSize:
                      contentLayout.headerSpace.availableWidth < 150
                        ? "8px"
                        : contentLayout.headerSpace.availableWidth < 200
                          ? "10px"
                          : "12px",
                  }}
                >
                  AI CHAT
                </span>
                <div
                  className="bg-primary rounded-full animate-pulse flex-shrink-0"
                  style={{
                    width:
                      contentLayout.headerSpace.availableWidth < 150
                        ? "2px"
                        : contentLayout.headerSpace.availableWidth < 200
                          ? "3px"
                          : "4px",
                    height:
                      contentLayout.headerSpace.availableWidth < 150
                        ? "2px"
                        : contentLayout.headerSpace.availableWidth < 200
                          ? "3px"
                          : "4px",
                  }}
                />
              </div>
            </div>

            {/* Chat Area - Dynamically positioned and sized */}
            <div
              className="flex-1 flex flex-col bg-surface min-w-0 overflow-hidden"
              style={{
                minHeight: 0,
                width: `${contentLayout.contentArea.maxWidth}px`,
                maxWidth: `${contentLayout.contentArea.maxWidth}px`,
                marginLeft: `${getAvailableWidthAtPosition(contentLayout.contentArea.start).curveOutset + 2}px`,
                position: "absolute",
                top: "40px", // Fixed top position below header
                bottom: "60px", // Fixed bottom position above input
                left: 0,
                right: 0,
              }}
            >
              <div
                className="w-full h-full overflow-y-auto flex flex-col gap-1 py-1 min-w-0 chat-scroll"
                style={{
                  paddingTop: "8px",
                  paddingBottom: "24px",
                  marginTop: "0px",
                  width: "100%",
                  maxWidth: "100%",
                  height: "100%",
                }}
              >
                {messages.map((msg, idx) => {
                  // Calculate message style based on available width
                  const availableWidth =
                    contentLayout.contentArea.maxWidth - 32;
                  let fontSize = "12px";
                  let padding = 12;
                  let maxWidth = "90%";

                  if (availableWidth < 150) {
                    fontSize = "10px";
                    padding = 8;
                    maxWidth = "95%";
                  } else if (availableWidth < 200) {
                    fontSize = "11px";
                    padding = 10;
                    maxWidth = "92%";
                  } else if (availableWidth > 300) {
                    fontSize = "14px";
                    padding = 16;
                    maxWidth = "85%";
                  }

                  // Calculate the message's vertical position to determine parabolic offset
                  const messageElement = messageRefs.current[idx];
                  const messageTop = messageElement?.offsetTop || 0;
                  const messageHeight = messageElement?.offsetHeight || 0;
                  const messageCenterY = messageTop + messageHeight / 2;

                  // Get the parabolic offset for this message's position
                  const parabolicOffset =
                    getAvailableWidthAtPosition(messageCenterY);

                  // Calculate wider message width based on available space
                  const messageWidth = Math.min(
                    parabolicOffset.availableWidth - 16, // Use more of available width
                    msg.from === "ai"
                      ? parabolicOffset.availableWidth -
                          parabolicOffset.curveOutset -
                          16
                      : parabolicOffset.availableWidth - 16
                  );

                  return (
                    <div
                      ref={el => {
                        messageRefs.current[idx] = el;
                      }}
                      key={idx}
                      className={`w-fit rounded-lg shadow-sm transition-all duration-300 ${
                        msg.from === "ai"
                          ? "bg-surface-elevated text-text-primary self-start"
                          : "bg-primary/20 text-primary self-end ml-auto"
                      }`}
                      style={{
                        wordBreak: "break-word",
                        padding: `${padding}px`,
                        fontSize: fontSize,
                        opacity: 1,
                        marginLeft:
                          msg.from === "user"
                            ? "auto"
                            : `${parabolicOffset.curveOutset + 8}px`,
                        marginRight: msg.from === "ai" ? "auto" : undefined,
                        minWidth: "60px",
                        width: "fit-content",
                        maxWidth: `${messageWidth}px`,
                      }}
                    >
                      <div
                        className="font-mono text-text-muted mb-1 truncate"
                        style={{
                          fontSize: `${parseInt(fontSize) - 2}px`,
                        }}
                      >
                        {msg.from === "ai" ? "AI" : "You"}
                      </div>
                      <div className="break-words whitespace-pre-wrap">
                        {msg.text}
                      </div>
                    </div>
                  );
                })}
                <div ref={chatEndRef} />
                <div className="h-12" />
                <div className="h-12" />
              </div>
            </div>

            {/* Dynamic Input Box - Adapts to available space with guaranteed send button */}
            <form
              className="w-full flex items-center gap-2 p-1 bg-surface-elevated rounded-lg mt-1 min-w-0 flex-shrink-0 sticky bottom-0 z-10 rounded-b-lg"
              onSubmit={e => {
                e.preventDefault();
                if (input.trim()) {
                  setMessages([...messages, { from: "user", text: input }]);
                  setInput("");
                }
              }}
              style={{
                fontSize:
                  contentLayout.inputSpace.availableWidth < 150
                    ? "10px"
                    : contentLayout.inputSpace.availableWidth < 200
                      ? "11px"
                      : "12px",
                padding:
                  contentLayout.inputSpace.availableWidth < 150
                    ? "2px"
                    : contentLayout.inputSpace.availableWidth < 200
                      ? "3px"
                      : "4px",
                height:
                  contentLayout.inputSpace.availableWidth < 150
                    ? "24px"
                    : contentLayout.inputSpace.availableWidth < 200
                      ? "28px"
                      : "32px",
                width: `${contentLayout.inputSpace.availableWidth}px`,
                maxWidth: `${contentLayout.inputSpace.availableWidth}px`,
                position: "absolute",
                bottom: "8px",
                left: `${contentLayout.inputSpace.curveOutset + 2}px`,
                zIndex: 20,
              }}
            >
              <input
                type="text"
                className="flex-1 bg-transparent text-text-primary border-none focus:outline-none focus:ring-0 font-mono placeholder:text-text-muted min-w-0"
                placeholder={
                  contentLayout.inputSpace.availableWidth < 150
                    ? "..."
                    : contentLayout.inputSpace.availableWidth < 200
                      ? "Ask..."
                      : "Ask me anything..."
                }
                value={input}
                onChange={e => setInput(e.target.value)}
                disabled={collapsed}
                style={{
                  minWidth:
                    contentLayout.inputSpace.availableWidth < 150
                      ? "15px"
                      : contentLayout.inputSpace.availableWidth < 200
                        ? "20px"
                        : "30px",
                  fontSize: "inherit",
                  flex: 1,
                  maxWidth: "calc(100% - 50px)", // Reserve space for send button
                }}
              />
              <button
                type="submit"
                className="rounded bg-primary text-background font-semibold hover:bg-primary-hover transition-all duration-200 font-mono disabled:opacity-50 flex items-center gap-1 flex-shrink-0"
                disabled={!input.trim()}
                style={{
                  padding:
                    contentLayout.inputSpace.availableWidth < 150
                      ? "2px 3px"
                      : contentLayout.inputSpace.availableWidth < 200
                        ? "3px 4px"
                        : "4px 6px",
                  fontSize: "inherit",
                  minWidth: "40px", // Guarantee minimum send button width
                  flexShrink: 0,
                  width: "40px", // Fixed width for send button
                }}
              >
                <Send
                  className={
                    contentLayout.inputSpace.availableWidth < 150
                      ? "w-2 h-2"
                      : contentLayout.inputSpace.availableWidth < 200
                        ? "w-2.5 h-2.5"
                        : "w-3 h-3"
                  }
                />
                <span className="hidden sm:inline">Send</span>
              </button>
            </form>
          </>
        )}
      </aside>
    </div>
  );
}
