// Cf. https://developers.google.com/web/fundamentals/getting-started/primers/service-workers
var CACHE_NAME = 'Barnacle';
var urlsToCache = [
  '/css/main.css'
];
var urlsToNotCache = [
  '/sw-registration.js', // do not cache the service worker registration
  '/manifest.webmanifest' // do not cache the manifest
];

self.addEventListener('activate', function (event) {

  var cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('install', function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function (response) {
            var blacklistMatch = urlsToNotCache.map(function (url) {
              return event.request.url.indexOf(url) !== -1
            }).some(function (urlNotToCacheFound) {
              return urlNotToCacheFound;
            });

            // Check if we received a valid response which we are allowed to cache
            if (!response || response.status !== 200 || response.type !== 'basic' || blacklistMatch) {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function (cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});
