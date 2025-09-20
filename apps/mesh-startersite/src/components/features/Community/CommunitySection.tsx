"use client";

import { motion } from "framer-motion";
import { Twitter, MessageCircle, Github } from "lucide-react";

export default function CommunitySection() {
  return (
    <motion.div
      className="flex justify-center mt-4 md:mt-6 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="flex flex-col items-center w-full max-w-2xl">
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full justify-center border border-primary/10 rounded-xl px-3 md:px-4 py-3 bg-primary/5">
          <span className="px-3 py-1 border-primary/20 rounded-full text-primary font-display text-sm font-medium tracking-wide bg-primary/5 text-center md:text-left">
            Find other Builders:
          </span>
          <div className="flex flex-row gap-3 md:gap-4 justify-center md:justify-start">
            <motion.a
              href="https://x.com/meshsdk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 md:gap-3 text-text-secondary hover:text-primary transition-colors duration-200 min-h-[36px] px-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Twitter className="w-5 h-5 md:w-4 md:h-4" />
              <span className="text-sm md:text-xs font-display font-medium">
                Twitter
              </span>
            </motion.a>
            <motion.a
              href="https://discord.gg/meshjs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 md:gap-3 text-text-secondary hover:text-primary transition-colors duration-200 min-h-[36px] px-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5 md:w-4 md:h-4" />
              <span className="text-sm md:text-xs font-display font-medium">
                Discord
              </span>
            </motion.a>
            <motion.a
              href="https://github.com/MeshJS/mesh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 md:gap-3 text-text-secondary hover:text-primary transition-colors duration-200 min-h-[36px] px-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5 md:w-4 md:h-4" />
              <span className="text-sm md:text-xs font-display font-medium">
                GitHub
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
