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
        background: "#0d1117", // App body background
        surface: "#161b22", // Cards, nav, footers
        primary: "#0ea5e9", // Buttons, links, accents (sky-500)
        "primary-hover": "#0369a1", // Button/Link hover (sky-700)
        secondary: "#38bdf8", // Hero gradient, highlights (sky-400)
        "text-primary": "#ffffff", // Main text
        "text-secondary": "#cbd5e1", // Descriptive copy (slate-300)
        border: "#2d333b", // Card & component borders
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
