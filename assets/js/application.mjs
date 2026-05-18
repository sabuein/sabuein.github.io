import { initTheme } from './mods/theme.mjs';
import { initShare } from './mods/share.mjs';
import { initRedirect } from './mods/redirect.mjs';
import { registerServiceWorker } from './mods/pwa.mjs';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initShare();
  initRedirect();
  registerServiceWorker();
});
