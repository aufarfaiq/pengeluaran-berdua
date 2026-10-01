const CACHE = "pengeluaran-berdua-v2";

const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon.svg"
];


self.addEventListener("install", event => {

  event.waitUntil(

    caches
      .open(CACHE)
      .then(cache =>
        cache.addAll(APP_SHELL)
      )

  );

  self.skipWaiting();

});


self.addEventListener("activate", event => {

  event.waitUntil(

    caches
      .keys()
      .then(keys =>

        Promise.all(

          keys
            .filter(key => key !== CACHE)
            .map(key =>
              caches.delete(key)
            )

        )

      )

  );

  self.clients.claim();

});


self.addEventListener("fetch", event => {

  const request =
    event.request;

  const url =
    new URL(request.url);


  /*
   * Hanya cache file milik
   * GitHub Pages.
   */
  if (
    url.origin ===
    self.location.origin
  ) {

    event.respondWith(

      fetch(request)

        .then(response => {

          const copy =
            response.clone();

          caches
            .open(CACHE)
            .then(cache =>
              cache.put(request, copy)
            );

          return response;

        })

        .catch(() =>
          caches.match(request)
        )

    );

  }

});
