import "@/styles/globals.css";
import "@meshsdk/react/styles.css";
import type { AppProps } from "next/app";
import { MeshProvider } from "@meshsdk/react";
import { MDXProvider } from "@mdx-js/react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../Layout";
import ClickSpark from "../components/ClickSpark";

const components = {
  // Custom MDX components can be added here
};

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: "tween" as const,
  ease: "anticipate" as const,
  duration: 0.4,
};

// Loading indicator component
function LoadingBar() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-sky-400 to-emerald-400 z-50"
    />
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClickSpark
      sparkColor="#0ea5e9"
      sparkSize={12}
      sparkRadius={20}
      sparkCount={12}
      duration={618}
      easing="ease-out"
      extraScale={1.2}
    >
      <Layout>
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </ClickSpark>
  );
}

export default MyApp;
