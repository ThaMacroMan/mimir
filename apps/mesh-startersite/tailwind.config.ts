import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        surface: "#111118",
        "surface-elevated": "#1a1a24",
        primary: "#00d4ff",
        "primary-hover": "#00b8e6",
        secondary: "#6366f1",
        accent: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
        "text-primary": "#f8fafc",
        "text-secondary": "#cbd5e1",
        "text-muted": "#94a3b8",
        "text-accent": "#e2e8f0",
        border: "#27272a",
        "border-light": "#3f3f46",
        "border-accent": "#00d4ff20",
        glow: "#00d4ff40",
        "glow-strong": "#00d4ff60",
        "center-bg": "#0f0f16",
      },
      fontFamily: {
        sans: ["Inter-ExtraLight", "Inter", "sans-serif"], // Default sans-serif font with ExtraLight priority
        display: ["Inter-ExtraLight", "Inter", "sans-serif"], // Display font with ExtraLight priority
        mono: ["JetBrains Mono", "monospace"],
        inter: ["Inter-ExtraLight", "Inter", "sans-serif"], // Inter-specific font family with ExtraLight priority
        "inter-extralight": ["Inter-ExtraLight", "Inter", "sans-serif"], // Dedicated ExtraLight font family
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite alternate",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.3s ease-out",
      },
      keyframes: {
        "glow-pulse": {
          "0%": { boxShadow: "0 0 20px rgba(0, 212, 255, 0.4)" },
          "100%": { boxShadow: "0 0 30px rgba(0, 212, 255, 0.6)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
