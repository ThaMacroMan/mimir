// Utility functions for sidebar state management

export const SIDEBAR_KEYS = {
  MAIN_SIDEBAR: "sidebar-main-sidebar",
  AI_CHAT_SIDEBAR: "sidebar-ai-chat-sidebar",
} as const;

export function resetAllSidebarStates() {
  try {
    localStorage.removeItem(SIDEBAR_KEYS.MAIN_SIDEBAR);
    localStorage.removeItem(SIDEBAR_KEYS.AI_CHAT_SIDEBAR);
    console.log("All sidebar states reset");
  } catch (error) {
    console.error("Failed to reset sidebar states:", error);
  }
}

export function getSidebarStates() {
  try {
    const mainSidebar = localStorage.getItem(SIDEBAR_KEYS.MAIN_SIDEBAR);
    const aiChatSidebar = localStorage.getItem(SIDEBAR_KEYS.AI_CHAT_SIDEBAR);

    return {
      mainSidebar: mainSidebar ? JSON.parse(mainSidebar) : null,
      aiChatSidebar: aiChatSidebar ? JSON.parse(aiChatSidebar) : null,
    };
  } catch (error) {
    console.error("Failed to get sidebar states:", error);
    return { mainSidebar: null, aiChatSidebar: null };
  }
}

export function setSidebarState(sidebarId: string, state: unknown) {
  try {
    localStorage.setItem(`sidebar-${sidebarId}`, JSON.stringify(state));
  } catch (error) {
    console.error(`Failed to set sidebar state for ${sidebarId}:`, error);
  }
}
