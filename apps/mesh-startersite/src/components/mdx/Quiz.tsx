import React, { useState } from "react";

interface QuizProps {
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
}

export default function Quiz({
  question,
  options,
  correct,
  explanation,
}: QuizProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const resetQuiz = () => {
    setSelectedAnswer(null);
    setIsSubmitted(false);
  };

  const isCorrect = selectedAnswer === correct;

  return (
    <div className="my-8 p-6 border border-border rounded-lg bg-surface-elevated">
      <h3 className="text-xl font-semibold text-text-primary mb-4">
        Quiz Question
      </h3>

      <p className="text-text-secondary mb-6 text-lg">{question}</p>

      <div className="space-y-3 mb-6">
        {options.map((option, index) => (
          <label
            key={index}
            className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
              selectedAnswer === index
                ? isSubmitted
                  ? isCorrect
                    ? "border-green-500 bg-green-50"
                    : "border-red-500 bg-red-50"
                  : "border-primary bg-primary/10"
                : "border-border hover:border-primary/50"
            }`}
          >
            <input
              type="radio"
              name="quiz"
              value={index}
              checked={selectedAnswer === index}
              onChange={() => setSelectedAnswer(index)}
              className="mr-3"
              disabled={isSubmitted}
            />
            <span className="text-text-primary">{option}</span>
          </label>
        ))}
      </div>

      {!isSubmitted ? (
        <button
          onClick={handleSubmit}
          disabled={selectedAnswer === null}
          className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Submit Answer
        </button>
      ) : (
        <div className="space-y-4">
          <div
            className={`p-4 rounded-lg ${
              isCorrect
                ? "bg-green-100 border border-green-300"
                : "bg-red-100 border border-red-300"
            }`}
          >
            <h4
              className={`font-mono font-semibold mb-2 ${
                isCorrect ? "text-green-800" : "text-red-800"
              }`}
            >
              {isCorrect ? "✅ Correct!" : "❌ Incorrect"}
            </h4>
            {explanation && (
              <p className={`${isCorrect ? "text-green-700" : "text-red-700"}`}>
                {explanation}
              </p>
            )}
          </div>

          <button
            onClick={resetQuiz}
            className="px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-hover transition-colors"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
