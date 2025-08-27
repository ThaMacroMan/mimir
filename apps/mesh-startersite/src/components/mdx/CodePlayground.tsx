import React, { useState } from "react";

interface CodePlaygroundProps {
  initialCode?: string;
  language?: string;
  title?: string;
}

export default function CodePlayground({
  initialCode = "console.log('Hello, Cardano!');",
  language = "javascript",
  title = "Code Playground",
}: CodePlaygroundProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      // Safe evaluation for demonstration
      if (language === "javascript") {
        const result = eval(code);
        setOutput(String(result));
      } else {
        setOutput(`Language: ${language}\nCode: ${code}`);
      }
    } catch (error) {
      setOutput(
        `Error: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput("");
  };

  return (
    <div className="my-8 border border-border rounded-lg overflow-hidden">
      <div className="bg-surface-elevated p-4 border-b border-border">
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          {title}
        </h3>
        <div className="flex gap-2">
          <button
            onClick={runCode}
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-hover transition-colors"
          >
            Run Code
          </button>
          <button
            onClick={resetCode}
            className="px-4 py-2 bg-secondary text-white rounded hover:bg-secondary-hover transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-0">
        <div className="p-4 bg-gray-900">
          <textarea
            value={code}
            onChange={e => setCode(e.target.value)}
            className="w-full h-48 bg-transparent text-green-400 font-mono text-sm border-none outline-none resize-none"
            placeholder="Enter your code here..."
          />
        </div>

        <div className="p-4 bg-gray-800">
          <h4 className="text-white font-mono font-semibold mb-2">Output:</h4>
          <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
            {output || "Run code to see output..."}
          </pre>
        </div>
      </div>
    </div>
  );
}
