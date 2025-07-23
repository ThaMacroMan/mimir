import Head from "next/head";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function LearnIndex() {
  return (
    <div>
      <h1>Learn Section</h1>
      <p>
        Welcome to the learning section. Here you will find guides and tutorials
        to help you get started with Cardano development.
      </p>
    </div>
  );
}
