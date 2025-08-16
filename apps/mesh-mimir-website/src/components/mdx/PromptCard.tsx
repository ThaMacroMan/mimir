import React, { useState } from "react";
import { Copy, MessageSquare, X } from "lucide-react";

interface PromptCardProps {
  title?: string;
  prompt: string;
  exampleOutput?: string;
}

export default function PromptCard({
  title,
  prompt,
  exampleOutput,
}: PromptCardProps) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("copy failed", err);
    }
  };

  return (
    <div className="bg-surface/20 border border-border rounded-lg p-4 my-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          {title && <h4 className="font-semibold text-white mb-2">{title}</h4>}
          <div className="prose prose-invert max-w-none">
            <pre className="bg-black/10 rounded-md p-3 text-sm overflow-x-auto">
              {prompt}
            </pre>
          </div>
        </div>
        <div className="flex-shrink-0 flex flex-col items-end gap-2">
          <button
            onClick={() => handleCopy(prompt)}
            className="flex items-center gap-2 px-3 py-1.5 bg-surface/50 hover:bg-surface/70 border border-border rounded-lg text-gray-300 text-sm"
          >
            <Copy className="w-4 h-4" />
            {copied ? "Copied" : "Copy"}
          </button>
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 bg-primary/20 hover:bg-primary/30 border border-primary/30 rounded-lg text-primary text-sm"
          >
            <MessageSquare className="w-4 h-4" />
            Try
          </button>
        </div>
      </div>

      {exampleOutput && (
        <div className="mt-4 bg-surface/10 border border-border rounded-md p-3">
          <div className="text-sm text-gray-300">Example output:</div>
          <pre className="text-sm text-green-300 font-mono mt-2 overflow-x-auto">
            {exampleOutput}
          </pre>
        </div>
      )}

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />
          <div className="relative bg-surface/20 border border-border rounded-lg w-full max-w-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">
                Try this prompt
              </h4>
              <button onClick={() => setOpen(false)} className="text-gray-300">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="prose prose-invert max-w-none">
              <pre className="bg-black/10 rounded-md p-3 text-sm overflow-x-auto">
                {prompt}
              </pre>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleCopy(prompt)}
                  className="px-3 py-1.5 bg-surface/50 hover:bg-surface/70 border border-border rounded-lg text-gray-300 text-sm flex items-center gap-2"
                >
                  <Copy className="w-4 h-4" /> Copy Prompt
                </button>
                <button
                  onClick={() => {
                    // placeholder for integration with AI chat sidebar
                    handleCopy(prompt);
                    setOpen(false);
                  }}
                  className="px-3 py-1.5 bg-primary/20 hover:bg-primary/30 border border-primary/30 rounded-lg text-primary text-sm flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" /> Copy & Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
