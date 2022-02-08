var CACHE_NAME = 'my-site-cache';
var urlsToCache = [
  './',
  './css/site.css',
  './img/android-chrome-512x512.png',
    './index.html'

];

// alle elementer til at skabe appen skal caches


self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(e){

  console.log('intercept req: '+e.request.url);

  // caching strategies goes here!!


});
