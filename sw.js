// =======================================================
// CONFIGURACIÓN DE CACHÉ DE VERBOWAVE
// IMPORTANTE: Cada vez que hagas cambios en HTML, CSS o JS,
// incrementa este identificador (v2, v3, v4...) para forzar
// la actualización en todos los celulares y navegadores.
// =======================================================
const CACHE_NAME = 'verbowave-cache-v2';

// Lista de archivos indispensables para el modo sin conexión
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icon.svg'
];

// 1. INSTALACIÓN: Descarga y almacena los archivos nuevos
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Instalando nueva versión:', CACHE_NAME);
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  // Fuerza al Service Worker a tomar el control inmediatamente sin esperar
  self.skipWaiting();
});

// 2. ACTIVACIÓN: Elimina los datos viejos de la versión anterior
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activando versión y limpiando caché vieja');
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Borrando caché obsoleta:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  // Toma el control de todas las ventanas abiertas de inmediato
  self.clients.claim();
});

// 3. RESPUESTA DE RED: Si está en caché lo entrega; si no, lo busca en internet
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});