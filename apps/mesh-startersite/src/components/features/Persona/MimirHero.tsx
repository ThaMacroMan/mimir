"use client";

import { motion } from "framer-motion";
import { MetallicCardanoLogo } from "../../shared/Logo";
import Image from "next/image";
import { useEffect, useState } from "react";

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

export default function MimirHero() {
  const [currentBuilderIndex, setCurrentBuilderIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
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
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Mimir Badge - now much larger, with "powered by MeshJS" inside */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="inline-flex flex-col items-center justify-center gap-1 from-primary/10 to-secondary/10 border border-primary/20 rounded-full backdrop-blur-sm shadow-2xl">
          <div className="inline-flex items-center justify-center gap-2 mr-2       ">
            <MetallicCardanoLogo size={120} />
            <span className="font-mono font-extrabold tracking-widest text-5xl md:text-6xl lg:text-7xl text-primary drop-shadow-lg">
              MIMIR
            </span>
          </div>
        </div>
      </motion.div>

      <div className="flex justify-center mt-8">
        <span className="text-lg md:text-xl text-center text-text-secondary font-mono font-medium max-w-2xl">
          Learn to build on Cardano as a{" "}
          <span
            className={`font-bold text-primary font-mono ${
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
          <span className="font-bold text-primary">MeshJS</span>
        </span>
      </div>
    </div>
  );
}
