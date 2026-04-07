// ============================================================
// sw.js — Service Worker — Consulta Rápida ENF UDP
// Actualizado: 2026-04-06 — v1.1 (añade antibioticos-slides)
// ============================================================

const CACHE_NAME = 'consulta-rapida-enf-v1.1';

const ASSETS = [
  './',
  './index.html',
  './app.js',
  './cdss.js',
  './data.js',
  './extras.js',
  './antibioticos-slides.html',
  './manifest.json',
  // Íconos PWA
  './icon-72.png',
  './icon-96.png',
  './icon-128.png',
  './icon-144.png',
  './icon-152.png',
  './icon-192.png',
  './icon-384.png',
  './icon-512.png'
];

// ── INSTALL: pre-cachear todos los assets ──────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// ── ACTIVATE: limpiar cachés antiguas ─────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH: cache-first, fallback network ──────────────────
self.addEventListener('fetch', event => {
  // Solo interceptar peticiones GET
  if (event.request.method !== 'GET') return;

  // No interceptar peticiones a la API de Anthropic (Profe IA)
  if (event.request.url.includes('api.anthropic.com')) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Cachear respuestas válidas de mismo origen
        if (
          response.status === 200 &&
          response.type === 'basic'
        ) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache =>
            cache.put(event.request, clone)
          );
        }
        return response;
      }).catch(() => {
        // Sin red y sin caché: mostrar index como fallback
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
