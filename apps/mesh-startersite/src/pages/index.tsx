import MimirHero from "../components/features/Persona/MimirHero";
import PersonaSelector from "../components/features/Persona/PersonaSelector";
import CommunitySection from "../components/features/Community/CommunitySection";
import { usePersona } from "../contexts/PersonaContext";

export default function Home() {
  const { selectedPersona, setSelectedPersona } = usePersona();

  return (
    <div className="w-full h-auto min-h-screen relative flex flex-col justify-start pb-8">
      {/* Content container - positioned at top */}
      <div className="relative z-10 w-full flex flex-col justify-start">
        {/* Hero Section - reduced margins to fit in viewport */}
        <section className="text-center mb-12 mt-16 px-6 w-full relative z-10">
          <MimirHero />
        </section>

        {/* Persona Selector - reduced margins */}
        <section className="w-full relative z-10">
          <PersonaSelector
            onPersonaSelect={setSelectedPersona}
            selectedPersona={selectedPersona}
          />
        </section>

        {/* Community Section - reduced margins */}
        <section className="w-full relative z-10">
          <CommunitySection />
        </section>
      </div>
    </div>
  );
}
