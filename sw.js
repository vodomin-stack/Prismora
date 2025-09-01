const CACHE_NAME = 'xr3d-shell-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png'
];
self.addEventListener('install', (evt) => {
  evt.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', (evt) => {
  evt.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE_NAME && caches.delete(k))))
  );
  self.clients.claim();
});
self.addEventListener('fetch', (evt) => {
  const url = new URL(evt.request.url);
  if (url.origin === location.origin) {
    evt.respondWith(
      caches.match(evt.request).then(resp => resp || fetch(evt.request))
    );
  }
});
