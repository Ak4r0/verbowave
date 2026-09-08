// Nombre de la memoria caché
const CACHE_NAME = 'verbowave-v1';

// Archivos que el celular guardará para abrir rápido
const assets = [
  './',
  './index.html',
  './styles.css',
  './app.js'
];

// Instalar el Service Worker y guardar los archivos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Interceptar peticiones para que cargue desde la caché
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});