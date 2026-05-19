const THEME_KEY = 'sabuein-theme';

export function getStoredTheme() {
  return window.localStorage.getItem(THEME_KEY);
}

export function setStoredTheme(theme) {
  window.localStorage.setItem(THEME_KEY, theme);
}