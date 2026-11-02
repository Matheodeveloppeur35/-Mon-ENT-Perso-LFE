"use strict";

const CACHE_VERSION = "mon-ent-pwa-v2";

const APP_SHELL = [
    "./",
    "./index.html",
    "./emploi-du-temps.html",
    "./mes-cours.html",
    "./mes-devoirs.html",
    "./mes-notes.html",
    "./mes-controles.html",
    "./manifest.json",
    "./css/style.css",
    "./js/pwa.js",
    "./js/accueil.js",
    "./js/emploi-du-temps.js",
    "./js/mes-cours.js",
    "./js/mes-devoirs.js",
    "./js/mes-notes.js",
    "./js/mes-controles.js",
    "./icons/icon-192.png",
    "./icons/icon-512.png",
    "./icons/icon-maskable-512.png"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_VERSION)
            .then(async (cache) => {
                await Promise.allSettled(
                    APP_SHELL.map((url) => cache.add(url))
                );
            })
            .then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys()
            .then((cacheNames) =>
                Promise.all(
                    cacheNames
                        .filter((cacheName) => cacheName !== CACHE_VERSION)
                        .map((cacheName) => caches.delete(cacheName))
                )
            )
            .then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", (event) => {
    const request = event.request;

    if (request.method !== "GET") {
        return;
    }

    const url = new URL(request.url);

    if (url.origin !== self.location.origin) {
        return;
    }

    if (request.mode === "navigate") {
        event.respondWith(
            fetch(request)
                .then((response) => {
                    if (response && response.ok) {
                        const copy = response.clone();

                        caches.open(CACHE_VERSION)
                            .then((cache) => {
                                cache.put(request, copy);
                            });
                    }

                    return response;
                })
                .catch(async () => {
                    return (
                        await caches.match(request)
                    ) || (
                        await caches.match("./index.html")
                    );
                })
        );

        return;
    }

    event.respondWith(
        caches.match(request)
            .then(async (cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse;
                }

                const networkResponse = await fetch(request);

                if (networkResponse && networkResponse.ok) {
                    const cache = await caches.open(CACHE_VERSION);
                    await cache.put(request, networkResponse.clone());
                }

                return networkResponse;
            })
    );
});
