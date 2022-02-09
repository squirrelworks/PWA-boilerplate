const CACHE_NAME = 'my-site-cache';
const Dynamic_cache = 'site-dynamic-cachee';

let urlsToCache = [
  
  './css/site.css',
  './img/android-chrome-512x512.png',
    './index.html',
    './info.html'

];


// alle elementer til at skabe appen skal caches


self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)

      .then(function(cache) {
        console.log('initial cache of statics');
        return cache.addAll(urlsToCache);
      })
  );
});







self.addEventListener('fetch', function(event){

  console.log('URL: '+event.request.url);
  
  if (event.request.url.includes('img') ) {
    console.log('found img: '+event.request.url);
  }

  if (event.request.url.includes('css') ) {
    console.log('found css: '+event.request.url);
    cacheOnly(event);
  }

  if (event.request.url.includes('images.dog.ceo') ) {
    /* found a dog cache it*/  
    console.log('found dog img to cache: '+event.request.url);
  }

  // caching strategies goes here!!


});

function cacheOnly(event){
  console.log('cacheOnly: '+event.request.url);
  event.respondWith(caches.match(event.request));
  

}


/* ------------------ cache first  -----------------*/
/*
self.addEventListener('fetch', function(event) {
 
  event.respondWith(
    caches.open(CACHE_NAME)

    .then(function(cache) {
      let result=cache.match(event.request)
      console.log('cache match: '+result)

      return result

      .then(function (response) {

        return response || fetch(event.request).then(function(response) {

          cache.put(event.request, response.clone());
          console.log('to cache '+response);
          return response;
        });
      });
    })
  );
});
*/


/* network med fallback til cache 

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {

      cache.put(event.request);
      return caches.match(event.request);
    })
  );
});*/


