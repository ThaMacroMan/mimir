import React, { useState } from "react";

interface InteractiveDemoProps {
  title?: string;
  children?: React.ReactNode;
}

export default function InteractiveDemo({
  title,
  children,
}: InteractiveDemoProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="my-8 border border-border rounded-lg overflow-hidden">
      <div
        className="bg-surface-elevated p-4 cursor-pointer hover:bg-surface-hover transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-mono font-semibold text-text-primary">
            {title || "Interactive Demo"}
          </h3>
          <span className="text-text-secondary">{isExpanded ? "▼" : "▶"}</span>
        </div>
      </div>

      {isExpanded && <div className="p-6 bg-surface">{children}</div>}
    </div>
  );
}
