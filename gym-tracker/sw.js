const CACHE_NAME = 'gym-tracker-v3';
const ASSETS = [
  './',
  './index.html',
  './css/variables.css',
  './css/base.css',
  './css/components.css',
  './js/app.js',
  './js/store.js',
  './js/exercises.js',
  './js/tracker.js',
  './js/charts.js',
  './js/calendar.js',
  './js/pr.js',
  './manifest.json'
];

const CDN_URLS = [
  'https://unpkg.com/lucide@latest/dist/umd/lucide.js',
  'https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Cache local assets first, then try CDN
      return cache.addAll(ASSETS).then(() => {
        return Promise.allSettled(CDN_URLS.map(url => cache.add(url)));
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Network first for navigation, cache first for assets
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match('./index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        // Cache successful responses
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // Fallback for fonts
        if (event.request.url.includes('fonts.googleapis.com') || event.request.url.includes('fonts.gstatic.com')) {
          return new Response('', { status: 200 });
        }
      });
    })
  );
});
