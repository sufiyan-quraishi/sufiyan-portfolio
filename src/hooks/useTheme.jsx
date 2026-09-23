import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

// Single source of truth for the 6 available themes — used by both the
// CSS token system (src/index.css, [data-theme='id']) and the switcher UI.
export const THEMES = [
  {
    id: 'obsidian',
    name: 'Obsidian Electric',
    description: 'Premium dark developer interface',
    swatch: ['#05070d', '#111726', '#4c8dff'],
  },
  {
    id: 'violet',
    name: 'Midnight Violet',
    description: 'Dark, futuristic, professional',
    swatch: ['#08060f', '#1a1329', '#8b5cf6'],
  },
  {
    id: 'arctic',
    name: 'Arctic Glass',
    description: 'Premium light glass interface',
    swatch: ['#f4f8fc', '#eaf1f8', '#0ea5e9'],
  },
  {
    id: 'emerald',
    name: 'Graphite Emerald',
    description: 'Professional engineering dashboard',
    swatch: ['#0a0d0c', '#161d19', '#10b981'],
  },
  {
    id: 'royal',
    name: 'Royal Blue',
    description: 'Corporate + premium technology',
    swatch: ['#050b1a', '#0f1c3d', '#3b6cf6'],
  },
  {
    id: 'mono',
    name: 'Monochrome Pro',
    description: 'Ultra-minimal premium portfolio',
    swatch: ['#fafafa', '#f0f0f0', '#171717'],
  },
];

const THEME_IDS = THEMES.map((t) => t.id);
const DEFAULT_THEME = 'obsidian';

function getInitialTheme() {
  if (typeof window === 'undefined') return DEFAULT_THEME;
  const stored = window.localStorage.getItem('theme');
  if (stored && THEME_IDS.includes(stored)) return stored;
  // Legacy values from the old light/dark toggle, kept for smooth upgrade.
  if (stored === 'light') return 'arctic';
  if (stored === 'dark') return 'obsidian';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'obsidian' : 'arctic';
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const setTheme = useCallback((id) => {
    if (THEME_IDS.includes(id)) setThemeState(id);
  }, []);

  return <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}
