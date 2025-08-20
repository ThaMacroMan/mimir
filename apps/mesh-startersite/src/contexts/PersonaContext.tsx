import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { LearnerPersona } from "../types/personas";

interface PersonaContextType {
  selectedPersona: LearnerPersona | null;
  setSelectedPersona: (persona: LearnerPersona | null) => void;
  isPersonaSelected: boolean;
}

const PersonaContext = createContext<PersonaContextType | undefined>(undefined);

interface PersonaProviderProps {
  children: ReactNode;
}

export function PersonaProvider({ children }: PersonaProviderProps) {
  const [selectedPersona, setSelectedPersona] = useState<LearnerPersona | null>(
    null
  );
  const [isPersonaSelected, setIsPersonaSelected] = useState(false);

  // Load persona from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedPersona = localStorage.getItem(
        "selected-persona"
      ) as LearnerPersona | null;
      if (savedPersona) {
        setSelectedPersona(savedPersona);
        setIsPersonaSelected(true);
      }
    }
  }, []);

  // Save persona to localStorage when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (selectedPersona) {
        localStorage.setItem("selected-persona", selectedPersona);
        setIsPersonaSelected(true);
      } else {
        localStorage.removeItem("selected-persona");
        setIsPersonaSelected(false);
      }
    }
  }, [selectedPersona]);

  const value: PersonaContextType = {
    selectedPersona,
    setSelectedPersona,
    isPersonaSelected,
  };

  return (
    <PersonaContext.Provider value={value}>{children}</PersonaContext.Provider>
  );
}

export function usePersona() {
  const context = useContext(PersonaContext);
  if (context === undefined) {
    throw new Error("usePersona must be used within a PersonaProvider");
  }
  return context;
}
