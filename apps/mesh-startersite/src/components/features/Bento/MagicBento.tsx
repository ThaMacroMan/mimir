"use client";

import MimirHero from "../Persona/MimirHero";
import BentoGrid from "./BentoGrid";
import CommunitySection from "../Community/CommunitySection";

export default function MagicBento() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <MimirHero />
      <BentoGrid />
      <CommunitySection />
    </div>
  );
}
