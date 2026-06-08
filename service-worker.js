const CACHE_NAME = "ebike-pro-v15";

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    clients.claim()
  );
});

self.addEventListener("fetch", event => {

  event.respondWith(

    fetch(event.request)
      .catch(() => caches.match(event.request))

  );

});