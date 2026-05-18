const CACHE_NAME = 'sabuein-site-v1';
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/resume/',
  '/resume/index.html',
  '/portfolio/',
  '/portfolio/index.html',
  '/app.webmanifest',
  '/assets/css/reset.css',
  '/assets/css/tokens.css',
  '/assets/css/base.css',
  '/assets/css/utilities.css',
  '/assets/css/home.css',
  '/assets/css/resume.css',
  '/assets/css/portfolio.css',
  '/assets/css/print.css',
  '/assets/js/application.mjs',
  '/assets/js/mods/pwa.mjs',
  '/assets/js/mods/theme.mjs',
  '/assets/js/mods/ui.mjs',
  '/assets/js/mods/share.mjs',
  '/assets/js/mods/contact.mjs',
  '/assets/js/mods/redirect.mjs',
  '/assets/js/mods/helpers.mjs',
  '/assets/js/mods/storage.mjs',
  '/assets/documents/salaheddin-abuein-resume.pdf',
  '/assets/favicon/apple-touch-icon.png',
  '/assets/favicon/favicon-32x32.png',
  '/assets/favicon/favicon-16x16.png',
  '/assets/favicon/favicon.ico',
  '/assets/favicon/android-chrome-192x192.png',
  '/assets/favicon/android-chrome-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(event.request)
        .then((networkResponse) => {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          return networkResponse;
        })
        .catch(() => caches.match('/index.html'));
    })
  );
});
