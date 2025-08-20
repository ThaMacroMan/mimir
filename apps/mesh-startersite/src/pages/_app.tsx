import "@/styles/globals.css";
import "@meshsdk/react/styles.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Layout from "../../Layout";
import ClickSpark from "../components/ClickSpark";
import { PersonaProvider } from "../contexts/PersonaContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PersonaProvider>
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
    </PersonaProvider>
  );
}

export default MyApp;
