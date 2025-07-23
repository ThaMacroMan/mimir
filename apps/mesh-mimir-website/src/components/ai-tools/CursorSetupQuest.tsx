import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import SlideWrapper from "./SlideWrapper";

export default function CursorSetupQuest() {
  const [currentStep, setCurrentStep] = useState(0);
  const [checkedSteps, setCheckedSteps] = useState<boolean[]>([]);
  const router = useRouter();

  const steps = [
    {
      title: "Step 1: Installation",
      checklist: "I have downloaded and installed Cursor on my computer.",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Instructions - 1/4 width on large screens */}
          <div className="lg:col-span-1 space-y-4 text-text-secondary">
            <p className="text-lg">
              First, let's get Cursor installed. It's a free download and works
              on Mac, Windows, and Linux.
            </p>
            <div className="bg-background border border-border rounded-lg p-4">
              <h4 className="font-semibold text-text-primary mb-2 text-lg">
                1. Download from the Official Site
              </h4>
              <p className="text-base mb-3">
                Use the link below to go to the official download page and get
                the correct installer for your operating system.
              </p>
              <a
                href="https://cursor.com/home"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold underline"
              >
                Official Download Page →
              </a>
            </div>
            <div className="bg-background border border-border rounded-lg p-4">
              <h4 className="font-semibold text-text-primary mb-2 text-lg">
                2. Run the Installer
              </h4>
              <p className="text-base">
                <strong className="text-text-primary">On Windows:</strong> Run
                the `.exe` file you downloaded and follow the on-screen
                instructions.
                <br />
                <strong className="text-text-primary">On macOS:</strong> Open
                the `.dmg` file and drag the `Cursor.app` icon into your
                `Applications` folder.
                <br />
                <strong className="text-text-primary">On Linux:</strong> The
                `.AppImage` file is the most common method. Make it executable
                and run it.
              </p>
            </div>
          </div>

          {/* Image - 3/4 width on large screens */}
          <div className="lg:col-span-3">
            <Image
              src="/cursor-blank.png"
              alt="Cursor Editor Screenshot"
              width={800}
              height={600}
              className="w-full rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      ),
    },
    {
      title: "Step 2: First Look",
      checklist: "I have opened Cursor and seen the interface.",
      content: (
        <div className="text-center space-y-6">
          <Image
            src="/cursor-blank.png"
            alt="This is what you will see on opening"
            width={800}
            height={600}
            className="mx-auto rounded-lg shadow-lg"
            priority
          />
          <p className="text-lg text-text-secondary italic">
            This is what you will see on opening
          </p>
        </div>
      ),
    },
    // ... other steps would be added here
  ];

  const handleStepComplete = (stepIndex: number) => {
    const newCheckedSteps = [...checkedSteps];
    newCheckedSteps[stepIndex] = !newCheckedSteps[stepIndex];
    setCheckedSteps(newCheckedSteps);
  };

  const canProceed = checkedSteps[currentStep] === true;
  const isLastStep = currentStep === steps.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      // Quest complete - could navigate to next section
      router.push("/guides/first_transaction");
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      router.push("/docs/ai-tools/selection");
    }
  };

  return (
    <SlideWrapper>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-white">
            Cursor{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Setup Quest
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Complete each step to unlock your AI-powered development environment
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-gray-800 rounded-full h-3 mb-8">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
            style={{
              width: `${((currentStep + 1) / steps.length) * 100}%`,
            }}
          />
        </div>

        {/* Current Step */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              {steps[currentStep].title}
            </h2>

            <div className="mb-8">{steps[currentStep].content}</div>

            {/* Checklist */}
            <div className="bg-gray-800/50 border border-gray-600/50 rounded-xl p-6 mb-8">
              <label className="flex items-center gap-4 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checkedSteps[currentStep] || false}
                  onChange={() => handleStepComplete(currentStep)}
                  className="w-5 h-5 rounded border-2 border-gray-600 bg-transparent checked:bg-blue-500 checked:border-blue-500"
                />
                <span className="text-lg text-gray-300">
                  {steps[currentStep].checklist}
                </span>
              </label>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handleBack}
            className="px-6 py-3 rounded-xl border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-200"
          >
            ← Back
          </button>

          <span className="text-gray-400">
            Step {currentStep + 1} of {steps.length}
          </span>

          <button
            onClick={handleNext}
            disabled={!canProceed}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
              canProceed
                ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                : "bg-gray-700 text-gray-500 cursor-not-allowed"
            }`}
          >
            {isLastStep ? "Complete Quest →" : "Next Step →"}
          </button>
        </div>
      </div>
    </SlideWrapper>
  );
}
