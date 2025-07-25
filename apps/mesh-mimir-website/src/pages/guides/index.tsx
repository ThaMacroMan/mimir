import Head from "next/head";
import Layout from "../../../Layout";
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

const guides = [
  {
    title: "Send Your First ADA",
    description:
      "Move some ADA around and feel like a blockchain wizard. Copy, paste, done!",
    href: "/guides/first_transaction",
    difficulty: "Super Easy",
    time: "15 min",
    icon: "💰",
    color: "from-emerald-500/20 to-green-500/20",
    encouragement: "Perfect first project!",
  },
  {
    title: "Create Your First NFT",
    description:
      "Turn your photos into digital collectibles. No art skills needed, just follow along!",
    href: "/guides/nft-collection",
    difficulty: "Still Easy",
    time: "30 min",
    icon: "🎨",
    color: "from-purple-500/20 to-pink-500/20",
    encouragement: "You'll love this one!",
    comingSoon: true,
  },
  {
    title: "Build a Token Swapper",
    description:
      "Create your own mini exchange. Sounds fancy, but AI makes it simple!",
    href: "/guides/token-swap",
    difficulty: "Getting Fun",
    time: "45 min",
    icon: "🔄",
    color: "from-blue-500/20 to-cyan-500/20",
    encouragement: "You're ready for this!",
    comingSoon: true,
  },
];

export default function GuidesIndex() {
  return (
    <div>
      <h1>Guides Section</h1>
      <p>
        Welcome to the guides section. Here you will find step-by-step
        walkthroughs of different projects.
      </p>
    </div>
  );
}
