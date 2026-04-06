// ============================================================
// sw.js — Service Worker · Consulta Rápida ENF UDP
// Estrategia: Cache First para assets estáticos
//             Network First para contenido dinámico
// ============================================================

const CACHE_NAME = 'enf-udp-v2';
const CACHE_STATIC = 'enf-udp-static-v2';

// Archivos a cachear en la instalación (app shell)
const STATIC_ASSETS = [
  './',
  './index.html',
  './app.js',
  './cdss.js',
  './data.js',
  './extras.js',
  './manifest.json'
];

// ─── INSTALL ────────────────────────────────────────────────
self.addEventListener('install', event => {
  console.log('[SW] Instalando — caché inicial');
  event.waitUntil(
    caches.open(CACHE_STATIC)
      .then(cache => {
        console.log('[SW] Cacheando app shell');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
      .catch(err => console.warn('[SW] Error en caché inicial:', err))
  );
});

// ─── ACTIVATE ───────────────────────────────────────────────
self.addEventListener('activate', event => {
  console.log('[SW] Activando — limpiando caches antiguos');
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => key !== CACHE_STATIC && key !== CACHE_NAME)
          .map(key => {
            console.log('[SW] Eliminando cache obsoleto:', key);
            return caches.delete(key);
          })
      );
    }).then(() => self.clients.claim())
  );
});

// ─── FETCH ──────────────────────────────────────────────────
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Solo interceptar solicitudes del mismo origen
  if (url.origin !== location.origin) return;

  // Estrategia: Cache First → si no está, buscar en red y cachear
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          // Actualizar en background (stale-while-revalidate)
          const fetchPromise = fetch(event.request).then(networkResponse => {
            if (networkResponse && networkResponse.status === 200) {
              const responseClone = networkResponse.clone();
              caches.open(CACHE_STATIC).then(cache => {
                cache.put(event.request, responseClone);
              });
            }
            return networkResponse;
          }).catch(() => {}); // Silenciar errores de red en background
          
          return cachedResponse; // Responder inmediatamente con caché
        }

        // No está en caché → buscar en red
        return fetch(event.request)
          .then(networkResponse => {
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'opaque') {
              return networkResponse;
            }
            // Cachear la respuesta nueva
            const responseClone = networkResponse.clone();
            caches.open(CACHE_STATIC).then(cache => {
              cache.put(event.request, responseClone);
            });
            return networkResponse;
          })
          .catch(() => {
            // Sin conexión y sin caché → página offline
            if (event.request.destination === 'document') {
              return caches.match('./index.html');
            }
          });
      })
  );
});

// ─── MENSAJE DESDE LA APP ───────────────────────────────────
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    caches.keys().then(keys => {
      keys.forEach(key => caches.delete(key));
    });
    console.log('[SW] Caché limpiado por solicitud de la app');
  }
});
