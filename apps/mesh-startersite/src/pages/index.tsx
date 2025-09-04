import MimirHero from "../components/features/Persona/MimirHero";
import PersonaSelector from "../components/features/Persona/PersonaSelector";
import CommunitySection from "../components/features/Community/CommunitySection";
import { usePersona } from "../contexts/PersonaContext";

export default function Home() {
  const { selectedPersona, setSelectedPersona } = usePersona();

  return (
    <div className="w-full min-h-screen relative flex flex-col justify-center items-center pb-8">
      {/* Content container - centered vertically */}
      <div className="relative z-10 w-full flex flex-col justify-center items-center">
        {/* Hero Section */}
        <section className="text-center mb-12 px-6 w-full relative z-10">
          <MimirHero />
        </section>

        {/* Persona Selector */}
        <section className="w-full relative z-10">
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
