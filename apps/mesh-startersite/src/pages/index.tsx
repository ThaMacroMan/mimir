import MimirHero from "../components/features/Persona/MimirHero";
import PersonaSelector from "../components/features/Persona/PersonaSelector";
import CommunitySection from "../components/features/Community/CommunitySection";
import { usePersona } from "../contexts/PersonaContext";

export default function Home() {
  const { selectedPersona, setSelectedPersona } = usePersona();

  return (
    <div className="w-full relative md:min-h-screen md:flex md:flex-col md:justify-center md:items-center">
      {/* Content container - centered vertically on desktop, natural flow on mobile */}
      <div className="relative z-10 w-full flex flex-col md:justify-center items-center">
        {/* Hero Section */}
        <section className="text-center mt-2 md:mt-0 mb-4 md:mb-8 w-full relative z-10">
          <MimirHero />
        </section>

        {/* Persona Selector */}
        <section className="w-full relative z-10 mt-6 md:mt-16 mb-8 md:mb-16">
          <PersonaSelector
            onPersonaSelect={setSelectedPersona}
            selectedPersona={selectedPersona}
          />
        </section>

        {/* Community Section */}
        <section className="w-full relative z-10">
          <CommunitySection />
        </section>
      </div>
    </div>
  );
}
