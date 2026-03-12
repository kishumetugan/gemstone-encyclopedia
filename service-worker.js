const CACHE_NAME = 'gemstone-encyclopedia-v1.0';
const urlsToCache = [
  '/gemstone-encyclopedia/',
  '/gemstone-encyclopedia/index.html',
  '/gemstone-encyclopedia/css/styles.css',
  '/gemstone-encyclopedia/js/data.js',
  '/gemstone-encyclopedia/js/app.js'
];

// התקנה - שמירת קבצים ב-Cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// טעינה - החזרת קבצים מה-Cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // אם יש ב-Cache - החזר מהCache
        if (response) {
          return response;
        }
        // אם אין - הורד מהרשת
        return fetch(event.request);
      })
  );
});

// הפעלה - מחיקת Cache ישן
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// הודעה על עדכון זמין
self.addEventListener('message', event => {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});
