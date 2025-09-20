"use client";

import { motion } from "framer-motion";
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
      {/* Mimir Badge - responsive sizing */}
      <motion.div
        className="flex justify-center mb-4 md:mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="inline-flex flex-col items-center justify-center gap-1 border-2 border-primary/40 rounded-full backdrop-blur-sm p-1 md:p-3 bg-transparent md:bg-gradient-to-br md:from-primary/10 md:to-secondary/10">
          <div className="inline-flex items-center justify-center gap-1 md:gap-2">
            <Image
              src="/cardano_we_logos/cardanologo_border_blue.002.png"
              alt="Cardano Logo"
              width={60}
              height={60}
              className="w-12 h-12 md:hidden brightness-0 invert"
            />
            <Image
              src="/cardano_we_logos/cardanologo_border_blue.002.png"
              alt="Cardano Logo"
              width={100}
              height={100}
              className="w-20 h-20 hidden md:block brightness-0 invert"
            />
            <span className="font-display font-extrabold tracking-widest text-xl md:text-3xl lg:text-4xl text-primary">
              MIMIR
            </span>
          </div>
        </div>
      </motion.div>

      <div className="flex justify-center px-2">
        <div className="text-sm md:text-lg lg:text-xl text-center text-text-secondary font-display font-medium leading-relaxed">
          <span>Learn to build on Cardano as a </span>
          <span
            className={`font-bold text-primary font-display inline-block min-w-[120px] md:min-w-[140px] text-center transition-colors duration-200 font-mono ${
              isDecrypting ? "text-primary/80" : "text-primary"
            }`}
          >
            {displayText}
          </span>
          <span> with simple guides, AI-powered tools, and </span>
          <span className="inline-block align-middle">
            <Image
              src="/logo-mesh-white-32x32.webp"
              alt="MeshJS Logo"
              width={20}
              height={20}
              className="w-5 h-5 md:w-6 md:h-6 opacity-80 inline-block mr-1"
            />
            <span className="font-bold text-primary font-display">MeshJS</span>
          </span>
        </div>
      </div>
    </div>
  );
}
