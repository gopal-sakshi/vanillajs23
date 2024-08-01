self.addEventListener("install", function(event) {
    console.log("sw24 installed ===> ")
});

self.addEventListener("activate", function(event) {

});

self.addEventListener("fetch", function(event) {

    // Return data from cache which matches with request.url
    event.respondWith(
        caches.match(event.request)
    );
});