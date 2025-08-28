import { MeshBadge } from "@meshsdk/react";

interface FooterProps {
  onTerminalClick?: () => void;
  onFooterDrag?: (e: React.MouseEvent) => void;
}

export default function Footer({ onTerminalClick, onFooterDrag }: FooterProps) {
  return (
    <footer
      className="h-9 bg-surface/95 border-t border-border flex px-4 select-none relative"
      style={{ fontSize: "0.85rem" }}
    >
      {/* Drag handle at top of footer */}
      <div
        className="absolute top-0 left-0 right-0 h-1 cursor-ns-resize bg-transparent hover:bg-primary/30 transition-colors"
        onMouseDown={onFooterDrag}
        style={{ marginTop: "-1px" }}
      />

      {/* Centered drag tip note */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-text-muted pointer-events-none select-none font-display">
        Drag edge up or press Terminal for tips
      </div>

      {/* Far left: Small MeshBadge and AI Tools section */}
      <div className="flex items-center">
        <span
          className="inline-flex"
          style={{
            transform: "scale(0.3)",
            transformOrigin: "left",
            marginRight: "-2rem",
          }}
        >
          <MeshBadge isDark={true} />
        </span>
        <span
          className="text-text-secondary font-display text-xs truncate"
          style={{ marginLeft: "-0.25rem" }}
        >
          Section: <span className="font-semibold text-primary">AI Tools</span>
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Far right: Terminal button and MeshJS Mimir */}
      <div className="flex items-center justify-end text-xs font-semibold min-w-[120px] gap-3">
        <button
          onClick={onTerminalClick}
          className="flex items-center gap-2 px-3 py-1 rounded-lg bg-surface-elevated border border-border text-text-secondary hover:text-primary hover:bg-surface transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 font-display"
          aria-label="Open terminal"
        >
          <svg
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M4 17v-10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2z" />
            <path d="M8 9l4 4-4 4" />
          </svg>
          Terminal
        </button>
        <span className="text-text-muted font-display">MeshJS Mimir</span>
      </div>
    </footer>
  );
}
