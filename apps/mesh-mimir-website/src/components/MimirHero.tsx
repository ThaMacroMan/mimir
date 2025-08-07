"use client";

import { motion } from "framer-motion";
import { MetallicCardanoLogo } from "./MetallicCardanoLogo";
import Image from "next/image";

export default function MimirHero() {
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
          <div className="inline-flex items-center justify-center gap-2 px-4">
            <MetallicCardanoLogo size={120} />
            <span className="font-mono font-extrabold tracking-widest text-5xl md:text-6xl lg:text-7xl text-primary drop-shadow-lg">
              MIMIR
            </span>
          </div>
        </div>
      </motion.div>

      <div className="flex justify-center mt-12">
        <span className="text-lg md:text-xl text-center text-text-secondary font-mono font-medium max-w-2xl">
          Learn to build on Cardano from scratch with simple guides, AI-powered
          tools, and{" "}
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
