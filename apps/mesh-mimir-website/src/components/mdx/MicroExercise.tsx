import React, { useState } from "react";

interface MicroExerciseProps {
  id?: string;
  prompt: string;
  hint?: string;
  answer?: string;
}

export default function MicroExercise({
  id,
  prompt,
  hint,
  answer,
}: MicroExerciseProps) {
  const [value, setValue] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [done, setDone] = useState(false);

  return (
    <div
      id={id}
      className="bg-surface/20 border border-border rounded-lg p-4 my-6"
    >
      <div className="prose prose-invert max-w-none mb-3">
        <div className="text-sm text-gray-200">{prompt}</div>
      </div>

      <textarea
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Type your answer here..."
        className="w-full bg-black/10 rounded p-2 text-sm text-gray-200 border border-border"
        rows={4}
      />

      <div className="flex items-center gap-2 mt-3">
        <button
          onClick={() => setDone(true)}
          className="px-3 py-1.5 bg-primary/20 hover:bg-primary/30 border border-primary/30 rounded-lg text-primary text-sm"
        >
          Mark Complete
        </button>
        <button
          onClick={() => setShowAnswer(s => !s)}
          className="px-3 py-1.5 bg-surface/50 hover:bg-surface/70 border border-border rounded-lg text-gray-300 text-sm"
        >
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </button>
        {hint && (
          <div className="text-sm text-gray-300 ml-auto">Hint: {hint}</div>
        )}
      </div>

      {done && (
        <div className="mt-3 text-sm text-green-300">
          Marked complete — great job!
        </div>
      )}

      {showAnswer && answer && (
        <div className="mt-3 bg-surface/10 border border-border rounded p-3 text-sm text-green-300">
          <strong>Suggested answer:</strong>
          <div className="mt-2 font-mono">{answer}</div>
        </div>
      )}
    </div>
  );
}
