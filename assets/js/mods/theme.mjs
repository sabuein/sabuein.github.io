import { getStoredTheme, setStoredTheme } from './storage.mjs';

function resolveInitialTheme() {
  const storedTheme = getStoredTheme();
  if (storedTheme) return storedTheme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
}

function syncToggleState(toggle, theme) {
  if (!toggle) return;
  const isDark = theme === 'dark';
  toggle.setAttribute('aria-pressed', String(isDark));
  toggle.setAttribute('aria-label', `Activate ${isDark ? 'light' : 'dark'} theme`);
  const label = toggle.querySelector('span:last-child');
  if (label) {
    label.textContent = isDark ? 'Dark' : 'Light';
  }
}

export function initTheme() {
  const toggle = document.querySelector('[data-theme-toggle]');
  const theme = resolveInitialTheme();

  applyTheme(theme);
  syncToggleState(toggle, theme);

  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    setStoredTheme(nextTheme);
    syncToggleState(toggle, nextTheme);
  });
}