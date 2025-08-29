"use client";

import { motion } from "framer-motion";
import { MetallicCardanoLogo } from "../../shared/Logo";
import Image from "next/image";
import { useEffect, useState } from "react";

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

export default function MimirHero() {
  const [currentBuilderIndex, setCurrentBuilderIndex] = useState(0);
  const [displayText, setDisplayText] = useState("New Builder");
  const [isDecrypting, setIsDecrypting] = useState(false);
  const builderNames = [
    "New Builder",
    "Developing Builder",
    "Advanced Builder",
  ];

  const targetText = builderNames[currentBuilderIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBuilderIndex(prev => (prev + 1) % builderNames.length);
    }, 6180); // 6.18 seconds

    return () => clearInterval(interval);
  }, [builderNames.length]);

  useEffect(() => {
    if (!targetText) return;

    setIsDecrypting(true);
    let iterations = 0;

    const interval = setInterval(() => {
      setDisplayText(
        targetText
          .split("")
          .map((_letter, index) => {
            if (index < iterations) {
              return targetText[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iterations >= targetText.length) {
        clearInterval(interval);
        setIsDecrypting(false);
      }

      iterations += 1 / 3;
    }, 50);

    return () => clearInterval(interval);
  }, [targetText]);

  return (
    <div className="w-full px-4">
      {/* Mimir Badge - now much larger, with "powered by MeshJS" inside */}
      <motion.div
        className="flex justify-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="inline-flex flex-col items-center justify-center gap-1 from-primary/10 to-secondary/10 border-2 border-primary/40 rounded-full backdrop-blur-sm">
          <div className="inline-flex items-center justify-center gap-3 mr-2">
            <MetallicCardanoLogo size={120} />
            <span className="font-display font-extrabold tracking-widest text-4xl md:text-5xl text-primary">
              MIMIR
            </span>
          </div>
        </div>
      </motion.div>

      <div className="flex justify-center">
        <span className="text-lg md:text-xl text-center text-text-secondary font-display font-medium">
          Learn to build on Cardano as a{" "}
          <span
            className={`font-bold text-primary font-display inline-block min-w-[140px] text-center transition-colors duration-200 font-mono ${
              isDecrypting ? "text-primary/80" : "text-primary"
            }`}
          >
            {displayText}
          </span>{" "}
          with simple guides, AI-powered tools, and{" "}
          <Image
            src="/logo-mesh-white-32x32.webp"
            alt="MeshJS Logo"
            width={24}
            height={24}
            className="w-6 h-6 opacity-80 inline-block"
          />{" "}
          <span className="font-bold text-primary font-display">MeshJS</span>
        </span>
      </div>
    </div>
  );
}
