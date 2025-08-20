import { useState, useEffect, useCallback } from "react";

interface SidebarState {
  collapsed: boolean;
  width: number;
  height: number;
  top: number;
  openSections?: boolean[];
  activeTab?: string;
}

interface UseSidebarPersistenceOptions {
  sidebarId: string;
  defaultState: SidebarState;
  onStateChange?: (state: SidebarState) => void;
}

export function useSidebarPersistence({
  sidebarId,
  defaultState,
  onStateChange,
}: UseSidebarPersistenceOptions) {
  const [state, setState] = useState<SidebarState>(defaultState);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load state from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`sidebar-${sidebarId}`);
      if (saved) {
        const parsed = JSON.parse(saved);
        setState(prev => ({ ...prev, ...parsed }));
      }
    } catch (error) {
      console.warn(`Failed to load sidebar state for ${sidebarId}:`, error);
    }
    setIsLoaded(true);
  }, [sidebarId]);

  // Save state to localStorage whenever it changes
  const updateState = useCallback(
    (newState: Partial<SidebarState>) => {
      setState(prev => {
        const updated = { ...prev, ...newState };

        // Save to localStorage
        try {
          localStorage.setItem(`sidebar-${sidebarId}`, JSON.stringify(updated));
        } catch (error) {
          console.warn(`Failed to save sidebar state for ${sidebarId}:`, error);
        }

        // Notify parent component
        onStateChange?.(updated);

        return updated;
      });
    },
    [sidebarId, onStateChange]
  );

  // Reset to defaults
  const resetState = useCallback(() => {
    setState(defaultState);
    try {
      localStorage.removeItem(`sidebar-${sidebarId}`);
    } catch (error) {
      console.warn(`Failed to reset sidebar state for ${sidebarId}:`, error);
    }
  }, [sidebarId, defaultState]);

  return {
    state,
    updateState,
    resetState,
    isLoaded,
  };
}
