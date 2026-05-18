import { getStoredTheme, setStoredTheme } from './storage.mjs';

function resolveInitialTheme() {
  const storedTheme = getStoredTheme();
  if (storedTheme) return storedTheme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
}

export function initTheme() {
  const toggle = document.querySelector('[data-theme-toggle]');
  const theme = resolveInitialTheme();
  applyTheme(theme);

  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    setStoredTheme(nextTheme);
  });
}
