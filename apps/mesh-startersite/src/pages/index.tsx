import MimirHero from "../components/features/Persona/MimirHero";
import PersonaSelector from "../components/features/Persona/PersonaSelector";
import CommunitySection from "../components/features/Community/CommunitySection";
import { usePersona } from "../contexts/PersonaContext";

export default function Home() {
  const { selectedPersona, setSelectedPersona } = usePersona();

  return (
    <div className="w-full h-screen relative flex flex-col justify-center">
      {/* Content container - no scrolling, centered vertically */}
      <div className="relative z-10 w-full flex flex-col justify-center">
        {/* Hero Section - reduced margins to fit in viewport */}
        <section className="text-center mb-16 mt-16 px-6 w-full relative z-10">
          <MimirHero />
        </section>

        {/* Persona Selector - reduced margins */}
        <section className="mb-6 w-full relative z-10">
          <PersonaSelector
            onPersonaSelect={setSelectedPersona}
            selectedPersona={selectedPersona}
          />
        </section>

        {/* Community Section - reduced margins */}
        <section className="mb-16 w-full relative z-10">
          <CommunitySection />
        </section>
      </div>
    </div>
  );
}
