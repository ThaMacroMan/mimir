import React from "react";
import { Copy } from "lucide-react";

interface DiffProps {
  beforePrompt: string;
  afterPrompt: string;
  beforeOutput?: string;
  afterOutput?: string;
}

export default function BeforeAfterDiff({
  beforePrompt,
  afterPrompt,
  beforeOutput,
  afterOutput,
}: DiffProps) {
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div className="bg-surface/20 border border-border rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <h5 className="text-sm font-semibold text-white">Before</h5>
          <button
            onClick={() => copyToClipboard(beforePrompt)}
            className="text-gray-300 text-sm flex items-center gap-2"
          >
            <Copy className="w-4 h-4" /> Copy
          </button>
        </div>
        <pre className="bg-black/10 rounded-md p-3 text-sm overflow-x-auto">
          {beforePrompt}
        </pre>
        {beforeOutput && (
          <pre className="mt-3 text-sm text-green-300 font-mono p-3 bg-surface/10 rounded">
            {beforeOutput}
          </pre>
        )}
      </div>

      <div className="bg-surface/20 border border-border rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <h5 className="text-sm font-semibold text-white">After</h5>
          <button
            onClick={() => copyToClipboard(afterPrompt)}
            className="text-gray-300 text-sm flex items-center gap-2"
          >
            <Copy className="w-4 h-4" /> Copy
          </button>
        </div>
        <pre className="bg-black/10 rounded-md p-3 text-sm overflow-x-auto">
          {afterPrompt}
        </pre>
        {afterOutput && (
          <pre className="mt-3 text-sm text-green-300 font-mono p-3 bg-surface/10 rounded">
            {afterOutput}
          </pre>
        )}
      </div>
    </div>
  );
}
