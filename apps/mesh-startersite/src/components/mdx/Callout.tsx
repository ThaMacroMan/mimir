import React from "react";
import { Info, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

interface CalloutProps {
  type?: "info" | "warning" | "success" | "error";
  title?: string;
  children: React.ReactNode;
}

const calloutStyles = {
  info: {
    icon: Info,
    className: "bg-blue-500/10 border-blue-500/30 text-blue-200",
    iconClassName: "text-blue-400",
  },
  warning: {
    icon: AlertTriangle,
    className: "bg-yellow-500/10 border-yellow-500/30 text-yellow-200",
    iconClassName: "text-yellow-400",
  },
  success: {
    icon: CheckCircle,
    className: "bg-green-500/10 border-green-500/30 text-green-200",
    iconClassName: "text-green-400",
  },
  error: {
    icon: XCircle,
    className: "bg-red-500/10 border-red-500/30 text-red-200",
    iconClassName: "text-red-400",
  },
};

export default function Callout({
  type = "info",
  title,
  children,
}: CalloutProps) {
  const style = calloutStyles[type];
  const Icon = style.icon;

  return (
    <div
      className={`rounded-lg border p-4 my-6 ${style.className} bg-surface-elevated/50`}
    >
      <div className="flex items-start gap-3">
        <Icon
          className={`w-5 h-5 mt-0.5 flex-shrink-0 ${style.iconClassName}`}
        />
        <div className="flex-1">
          {title && (
            <h4 className="font-semibold mb-2 text-text-primary">{title}</h4>
          )}
          <div className="text-text-secondary text-sm leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
