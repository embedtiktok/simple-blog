importScripts("/precache-manifest.c5e755b638ae680a0791c706e7469891.js", "https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js");

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js');

// workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.routing.registerRoute(
    /\.(?:js|css|ico|png|gif|jpg|jpeg|svg)$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'static-resources',
    })
);

// workbox Precaching did not find a match for https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css workbox-core.dev.js:45:22
// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
    /^https:\/\/stackpath\.bootstrapcdn\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'bootstrap-cdn',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    })
);

// workbox Precaching did not find a match for https://use.fontawesome.com/releases/v5.5.0/css/all.css workbox-core.dev.js:45:22
// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
    /^https:\/\/use\.fontawesome\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'fontawesome-cdn',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    })
);

// workbox Precaching did not find a match for https://cdnjs.cloudflare.com/ajax/libs/pubsub-js/1.5.8/pubsub.min.js workbox-core.dev.js:45:22
// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
    /^https:\/\/cdnjs\.cloudflare\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'cloudflare-cdn',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    })
);

// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
    /^http:\/\/localhost:8080\/pho\//,
    new workbox.strategies.CacheFirst({
        cacheName: 'simpleblog-photos',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    })
);

// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
    /^\/pho\//,
    new workbox.strategies.CacheFirst({
        cacheName: 'simpleblog-photos',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    })
);

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
workbox.routing.registerRoute(
    /^http:\/\/localhost:8080\/api\//,
    new workbox.strategies.NetworkFirst({
        cacheName: 'simpleblog-api',
    })
);

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
workbox.routing.registerRoute(
    /^\/api\//,
    new workbox.strategies.NetworkFirst({
        cacheName: 'simpleblog-api',
    })
);
