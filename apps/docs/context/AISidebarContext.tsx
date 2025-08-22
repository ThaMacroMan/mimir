"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface AISidebarContextType {
  isAISidebarOpen: boolean;
  setIsAISidebarOpen: (isOpen: boolean) => void;
}

const AISidebarContext = createContext<AISidebarContextType | undefined>(undefined);


export function AISidebarProvider({ children }: { children: ReactNode }) {
  const [isAISidebarOpen, setIsAISidebarOpen] = useState(false);

  const value = {
    isAISidebarOpen,
    setIsAISidebarOpen
  }

  return <AISidebarContext.Provider value={value}>
    {children}
  </AISidebarContext.Provider>
}


export function useAISidebar() {
  const context = useContext(AISidebarContext);
  if(context === undefined) {
    throw new Error("useAISidebar must be used within AISidebarProvider")
  }

  return context;
}