importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js");

workbox.precaching.precacheAndRoute([
    "img/themes/default/ace_of_clubs.jpg", 
    "img/themes/default/ace_of_diamonds.jpg", 
    "img/themes/default/ace_of_hearts.jpg", 
    "img/themes/default/ace_of_spades.jpg", 
    "img/themes/default/jack_of_clubs.jpg", 
    "img/themes/default/jack_of_diamonds.jpg", 
    "img/themes/default/jack_of_hearts.jpg", 
    "img/themes/default/jack_of_spades.jpg", 
    "img/themes/default/queen_of_clubs.jpg", 
    "img/themes/default/queen_of_diamonds.jpg", 
    "img/themes/default/queen_of_hearts.jpg", 
    "img/themes/default/queen_of_spades.jpg", 
    "img/themes/default/king_of_clubs.jpg", 
    "img/themes/default/king_of_diamonds.jpg", 
    "img/themes/default/king_of_hearts.jpg", 
    "img/themes/default/king_of_spades.jpg", 
    "index.html"
]);

workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/, 
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
    })
);

workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/, 
    new workbox.strategies.CacheFirst({
        cacheName: "google-fonts-webfonts",
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

workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/, 
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "icofont-fonts",
    })
);

workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/, 
    new workbox.strategies.CacheFirst({
        cacheName: "images", 
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 100, 
                maxAgeSeconds: 30 * 24 * 60 * 60,
            }),
        ],
    })
);

workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "static-resources",
    })
);