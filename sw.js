self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("rifa").then(cache => {
      return cache.addAll(["./"]);
    })
  );
});