# Sidebar Persistence Feature

The sidebars now remember their state across page reloads and browser sessions using localStorage.

## What Gets Saved

### Main Sidebar (Left)

- **Collapsed/Expanded state**
- **Width** (when expanded)
- **Height** (when resized)
- **Vertical position** (when dragged)
- **Open/closed sections** (which sections are expanded)

### AI Chat Sidebar (Right)

- **Collapsed/Expanded state**
- **Width** (when expanded)
- **Height** (when resized)
- **Vertical position** (when dragged)
- **Active tab** (Resources or AI Chat)

## How It Works

1. **Automatic Saving**: Every time you resize, move, or change the state of a sidebar, it's automatically saved to localStorage
2. **Automatic Loading**: When the page loads, the sidebars restore to their last saved state
3. **Fallback**: If no saved state exists, the sidebars use their default states

## Storage Keys

- Main Sidebar: `sidebar-main-sidebar`
- AI Chat Sidebar: `sidebar-ai-chat-sidebar`

## Debugging

### Reset All Sidebar States

Press `Ctrl+R` to reset all sidebar states and reload the page.

### Check Current States

Open browser dev tools and run:

```javascript
// Check main sidebar state
console.log(JSON.parse(localStorage.getItem("sidebar-main-sidebar")));

// Check AI chat sidebar state
console.log(JSON.parse(localStorage.getItem("sidebar-ai-chat-sidebar")));
```

### Manual Reset

```javascript
// Reset main sidebar
localStorage.removeItem("sidebar-main-sidebar");

// Reset AI chat sidebar
localStorage.removeItem("sidebar-ai-chat-sidebar");

// Reload page
window.location.reload();
```

## Technical Implementation

- Uses a custom `useSidebarPersistence` hook
- Handles localStorage errors gracefully
- Syncs state on component mount
- Updates localStorage on every state change
- Maintains backward compatibility with existing functionality

## Browser Compatibility

- Works in all modern browsers that support localStorage
- Gracefully degrades if localStorage is not available
- No impact on functionality if persistence fails
