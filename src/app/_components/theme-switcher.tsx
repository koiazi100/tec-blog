'use client';

import { useState, useEffect } from 'react';

type ColorScheme = 'system' | 'light' | 'dark';

const STORAGE_KEY = 'nextjs-blog-starter-theme';
const modes: ColorScheme[] = ['system', 'light', 'dark'];

export function ThemeSwitcher() {
  const [mode, setMode] = useState<ColorScheme>('system');

  // Load initial theme
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ColorScheme | null;
    if (saved) setMode(saved);
  }, []);

  // Update DOM + storage on change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, mode);

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const resolved = mode === 'system' ? (prefersDark ? 'dark' : 'light') : mode;

    document.documentElement.classList.toggle('dark', resolved === 'dark');
    document.documentElement.setAttribute('data-mode', mode);
  }, [mode]);

  const handleClick = () => {
    const next = modes[(modes.indexOf(mode) + 1) % modes.length];
    setMode(next);
  };

  return (
    <button onClick={handleClick} aria-label="Toggle theme">
      Theme: {mode}
    </button>
  );
}