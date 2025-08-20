import React, { useState } from "react";
import { Play, Copy, Check, Download, Code } from "lucide-react";

interface LiveCodeProps {
  title?: string;
  description?: string;
  code: string;
  language?: string;
  runnable?: boolean;
  output?: string;
  explanation?: string;
}

export default function LiveCode({
  title,
  description,
  code,
  language = "typescript",
  runnable = false,
  output,
  explanation,
}: LiveCodeProps) {
  const [copied, setCopied] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  const handleRun = () => {
    setShowOutput(true);
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${title || "code"}.${language}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-surface/30 backdrop-blur-md rounded-xl border border-border my-8 overflow-hidden">
      {/* Header */}
      {(title || description) && (
        <div className="p-6 border-b border-border">
          {title && (
            <h3 className="text-lg font-display font-semibold text-white mb-2">
              {title}
            </h3>
          )}
          {description && <p className="text-gray-300">{description}</p>}
        </div>
      )}

      {/* Code Block */}
      <div className="relative">
        <div className="flex items-center justify-between p-4 bg-surface/50 border-b border-border">
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-400 font-mono">{language}</span>
          </div>
          <div className="flex items-center gap-2">
            {runnable && (
              <button
                onClick={handleRun}
                className="flex items-center gap-2 px-3 py-1.5 bg-primary/20 hover:bg-primary/30 border border-primary/30 rounded-lg text-primary text-sm transition-colors duration-200"
              >
                <Play className="w-4 h-4" />
                Run
              </button>
            )}
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-3 py-1.5 bg-surface/50 hover:bg-surface/70 border border-border rounded-lg text-gray-300 text-sm transition-colors duration-200"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-3 py-1.5 bg-surface/50 hover:bg-surface/70 border border-border rounded-lg text-gray-300 text-sm transition-colors duration-200"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-400" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy
                </>
              )}
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-6">
          <pre className="text-sm text-gray-200 overflow-x-auto">
            <code className={`language-${language}`}>{code}</code>
          </pre>
        </div>
      </div>

      {/* Output */}
      {showOutput && output && (
        <div className="border-t border-border p-6 bg-surface/20">
          <h4 className="text-sm font-semibold text-white mb-3">Output:</h4>
          <div className="bg-black/50 rounded-lg p-4">
            <pre className="text-sm text-green-400 font-mono">{output}</pre>
          </div>
        </div>
      )}

      {/* Explanation */}
      {explanation && (
        <div className="border-t border-border p-6 bg-blue-500/5">
          <h4 className="text-sm font-semibold text-blue-400 mb-3">
            Explanation:
          </h4>
          <p className="text-gray-300 text-sm leading-relaxed">{explanation}</p>
        </div>
      )}
    </div>
  );
}
