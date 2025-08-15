self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('adivina-cache-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './assets/audio/bg.wav',
        './assets/audio/win1.wav',
        './assets/audio/win2.wav',
        './assets/audio/win3.wav',
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
