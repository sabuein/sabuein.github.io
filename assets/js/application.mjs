import { initTheme } from './mods/theme.mjs';
import { initShare } from './mods/share.mjs';
import { initRedirect } from './mods/redirect.mjs';
import { registerServiceWorker } from './mods/pwa.mjs';
import { initUi } from './mods/ui.mjs';
import { initContact } from './mods/contact.mjs';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initShare();
  initRedirect();
  initUi();
  initContact();
  registerServiceWorker();
});