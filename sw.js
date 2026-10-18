const CACHE_NAME = "hapod-v44";
const ASSETS = [
  "./",
  "./index.html",
  "./privacy.html",
  "./terms.html",
  "./legal.js?v=0.8.25",
  "./styles.css?v=0.8.25",
  "./app.js?v=0.8.25",
  "./firebase.js?v=0.8.25",
  "./manifest.webmanifest?v=0.8.25",
  "./assets/exercises/diamond-push-ups.gif",
  "./assets/exercises/dumbbell-floor-press.gif",
  "./assets/exercises/pike-push-ups.gif",
  "./assets/exercises/forearm-plank.gif",
  "./assets/exercises/dead-bug.gif",
  "./assets/exercises/under-table-rows.gif?v=0.8.23",
  "./icon.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
      )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then((response) => response)
      .catch(() =>
        caches.match(event.request).then(
          (cached) => cached || (event.request.mode === "navigate" ? caches.match("./index.html") : Response.error())
        )
      )
  );
});
