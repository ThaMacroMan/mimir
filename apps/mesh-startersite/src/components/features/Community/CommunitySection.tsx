"use client";

import { motion } from "framer-motion";
import { Twitter, MessageCircle, Github } from "lucide-react";

export default function CommunitySection() {
  return (
    <motion.div
      className="flex justify-center mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="flex flex-col items-center w-full max-w-2xl">
        <div className="flex flex-row gap-6 w-full justify-center border border-primary/10 rounded-xl px-5 py-4 bg-primary/5">
          <span className=" px-3 py-1 border-primary/20 rounded-full text-primary font-display text-sm font-medium tracking-wide bg-primary/5">
            Find other Builders:
          </span>
          <motion.a
            href="https://x.com/meshsdk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Twitter className="w-4 h-4" />
            <span className="text-xs font-display font-medium">Twitter</span>
          </motion.a>
          <motion.a
            href="https://discord.gg/meshjs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-4 h-4" />
            <span className="text-xs font-display font-medium">Discord</span>
          </motion.a>
          <motion.a
            href="https://github.com/MeshJS/mesh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-4 h-4" />
            <span className="text-xs font-display font-medium">GitHub</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
