import { useState, useRef, useEffect } from "react";

export default function AIChatSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [width, setWidth] = useState(320); // default 20rem (320px)
  const [dragging, setDragging] = useState(false);
  const [maxWidth, setMaxWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth / 2 : 600
  );
  const sidebarRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);
  const dragStartWidth = useRef<number | null>(null);
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hi! I'm your AI coding buddy. Ask me anything!" },
    { from: "user", text: "How do I send a Cardano transaction?" },
    { from: "ai", text: "Great question! Here’s a quick guide..." },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);
  const prevMessagesLength = useRef(messages.length);

  // Update maxWidth on window resize
  useEffect(() => {
    const handleResize = () => {
      setMaxWidth(window.innerWidth / 2);
      setWidth(w => Math.min(w, window.innerWidth / 2));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Only scroll to bottom when a new message is added
  useEffect(() => {
    if (messages.length > prevMessagesLength.current) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    prevMessagesLength.current = messages.length;
  }, [messages]);

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
          const delta = dragStartX.current - e.clientX;
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

  return (
    <aside
      ref={sidebarRef}
      style={
        {
          width: collapsed ? 56 : width,
          minWidth: collapsed ? 0 : 56,
          maxWidth: collapsed ? 56 : maxWidth,
          transition: dragging ? "none" : "width 0.2s",
          height: "auto",
          top: 64, // header height in px
          bottom: 36, // footer height in px
          position: "fixed",
          right: 0,
          zIndex: 40,
          "--ai-chat-width": collapsed ? "56px" : `${width}px`,
        } as React.CSSProperties & { "--ai-chat-width": string }
      }
      className={`bg-surface border-l border-border flex flex-col shadow-2xl ${collapsed ? "w-14 min-w-0" : "rounded-l-2xl"}`}
      aria-label="AI Chat sidebar"
    >
      {/* Drag Handle */}
      <div
        className={`absolute left-0 top-0 h-full w-2 cursor-ew-resize z-50 group ${dragging ? "bg-primary/30" : "bg-transparent"}`}
        onMouseDown={e => {
          setDragging(true);
          dragStartX.current = e.clientX;
          dragStartWidth.current = width;
          e.preventDefault();
        }}
      >
      </div>
      {/* Collapsed state: show only icon */}
      {collapsed ? (
        <div className="flex flex-col items-center justify-center flex-1">
          <span className="text-2xl text-primary">🤖</span>
        </div>
      ) : (
        <>
          {/* Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface">
            <span className="text-2xl">🤖</span>
            <span className="font-bold text-lg text-primary">AI Chat</span>
          </div>
          {/* Chat Area */}
          <div
            className={`flex-1 flex flex-col items-center justify-center bg-surface px-2 py-2`}
            style={{ minHeight: 0 }}
          >
            <div
              className="w-full max-w-xl flex-1 overflow-y-auto flex flex-col gap-3 py-6 px-2 scrollbar-none"
              style={{ maxHeight: "calc(100vh - 140px)" }}
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`w-fit max-w-[80%] px-4 py-2 rounded-2xl text-base shadow-md/10 ${
                    msg.from === "ai"
                      ? "bg-[#23263A] text-sky-200 self-start border border-[#2A2D3A]"
                      : "bg-[#1B2B24] text-emerald-200 self-end ml-auto border border-[#22332A]"
                  }`}
                  style={{ wordBreak: "break-word" }}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            {/* Input Box */}
            <form
              className="w-full max-w-xl flex items-center gap-2 p-3 bg-surface rounded-2xl shadow-lg border border-border sticky bottom-4 z-10 mt-2"
              style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.18)" }}
              onSubmit={e => {
                e.preventDefault();
                if (input.trim()) {
                  setMessages([...messages, { from: "user", text: input }]);
                  setInput("");
                }
              }}
            >
              <input
                type="text"
                className="flex-1 rounded-xl px-4 py-2 bg-surface text-white border-none focus:outline-none focus:ring-2 focus:ring-primary/30 transition text-base shadow-none"
                placeholder="Type your question..."
                value={input}
                onChange={e => setInput(e.target.value)}
                disabled={collapsed}
                style={{ background: "none" }}
              />
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition disabled:opacity-50 text-base shadow-md"
                disabled={!input.trim()}
              >
                Send
              </button>
            </form>
          </div>
        </>
      )}
    </aside>
  );
}
