import React, { useState } from "react";
import { CheckCircle, XCircle, Lightbulb } from "lucide-react";

interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation?: string;
}

interface QuizProps {
  question: string;
  options: QuizOption[];
  explanation?: string;
  difficulty?: "beginner" | "intermediate" | "advanced";
}

export default function Quiz({
  question,
  options,
  explanation,
  difficulty = "beginner",
}: QuizProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [_showExplanation, setShowExplanation] = useState(false);

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    setShowResult(true);
  };

  const getDifficultyColor = () => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-500";
      case "intermediate":
        return "bg-yellow-500";
      case "advanced":
        return "bg-red-500";
      default:
        return "bg-green-500";
    }
  };

  const selectedOptionData = options.find(opt => opt.id === selectedOption);
  const isCorrect = selectedOptionData?.isCorrect;

  return (
    <div className="bg-surface/30 backdrop-blur-md rounded-xl border border-border p-6 my-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-display font-semibold text-white">
          Quiz Question
        </h3>
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${getDifficultyColor()}`}
        >
          {difficulty}
        </span>
      </div>

      {/* Question */}
      <p className="text-gray-200 mb-6 text-lg">{question}</p>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {options.map(option => {
          const isSelected = selectedOption === option.id;
          const showCorrect = showResult && option.isCorrect;
          const showIncorrect = showResult && isSelected && !option.isCorrect;

          return (
            <button
              key={option.id}
              onClick={() => handleOptionSelect(option.id)}
              disabled={showResult}
              className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                isSelected
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50 hover:bg-surface/50"
              } ${
                showCorrect
                  ? "border-green-500 bg-green-500/10"
                  : showIncorrect
                    ? "border-red-500 bg-red-500/10"
                    : ""
              } ${showResult ? "cursor-default" : "cursor-pointer"}`}
            >
              <div className="flex items-center gap-3">
                {showResult && (
                  <div className="flex-shrink-0">
                    {option.isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : isSelected ? (
                      <XCircle className="w-5 h-5 text-red-400" />
                    ) : null}
                  </div>
                )}
                <span className="text-gray-200">{option.text}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Result */}
      {showResult && (
        <div
          className={`p-4 rounded-lg mb-4 ${
            isCorrect
              ? "bg-green-500/10 border border-green-500/30"
              : "bg-red-500/10 border border-red-500/30"
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            {isCorrect ? (
              <CheckCircle className="w-5 h-5 text-green-400" />
            ) : (
              <XCircle className="w-5 h-5 text-red-400" />
            )}
            <span
              className={`font-semibold ${
                isCorrect ? "text-green-400" : "text-red-400"
              }`}
            >
              {isCorrect ? "Correct!" : "Incorrect"}
            </span>
          </div>
          {selectedOptionData?.explanation && (
            <p className="text-gray-300 text-sm">
              {selectedOptionData.explanation}
            </p>
          )}
        </div>
      )}

      {/* Explanation */}
      {explanation && showResult && (
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="w-4 h-4 text-blue-400" />
            <span className="font-semibold text-blue-400">Explanation</span>
          </div>
          <p className="text-gray-300 text-sm">{explanation}</p>
        </div>
      )}

      {/* Reset button */}
      {showResult && (
        <button
          onClick={() => {
            setSelectedOption(null);
            setShowResult(false);
            setShowExplanation(false);
          }}
          className="mt-4 px-4 py-2 bg-primary/20 hover:bg-primary/30 border border-primary/30 rounded-lg text-primary transition-colors duration-200"
        >
          Try Again
        </button>
      )}
    </div>
  );
}
