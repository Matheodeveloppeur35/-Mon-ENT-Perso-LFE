"use strict";

const CACHE_NAME = "mon-ent-perso-lfe-v1";

const BASE_PATH = "/-Mon-ENT-Perso-LFE/";

const APP_FILES = [
    BASE_PATH,
    `${BASE_PATH}index.html`,
    `${BASE_PATH}manifest.json`,
    `${BASE_PATH}css/style.css`,

    `${BASE_PATH}emploi-du-temps.html`,
    `${BASE_PATH}mes-cours.html`,
    `${BASE_PATH}mes-devoirs.html`,
    `${BASE_PATH}mes-notes.html`,
    `${BASE_PATH}mes-controles.html`,

    `${BASE_PATH}js/pwa.js`,
    `${BASE_PATH}js/accueil.js`,

    `${BASE_PATH}icons/icon-192.png`,
    `${BASE_PATH}icons/icon-512.png`,
    `${BASE_PATH}icons/icon-maskable-512.png`
];

/* Installation */

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(async (cache) => {
            await Promise.allSettled(
                APP_FILES.map((file) =>
                    cache.add(file)
                )
            );
        })
    );

    self.skipWaiting();
});

/* Activation */

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) =>
            Promise.all(
                cacheNames
                    .filter((cacheName) => cacheName !== CACHE_NAME)
                    .map((cacheName) => caches.delete(cacheName))
            )
        )
    );

    self.clients.claim();
});

/* Requêtes */

self.addEventListener("fetch", (event) => {
    if (event.request.method !== "GET") {
        return;
    }

    const requestURL = new URL(event.request.url);

    if (requestURL.origin !== self.location.origin) {
        return;
    }

    if (event.request.mode === "navigate") {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    const copie = response.clone();

                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, copie);
                    });

                    return response;
                })
                .catch(async () => {
                    return (
                        await caches.match(event.request)
                    ) || (
                        await caches.match(
                            `${BASE_PATH}index.html`
                        )
                    );
                })
        );

        return;
    }

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }

            return fetch(event.request).then((networkResponse) => {
                if (
                    !networkResponse ||
                    networkResponse.status !== 200
                ) {
                    return networkResponse;
                }

                const copie = networkResponse.clone();

                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, copie);
                });

                return networkResponse;
            });
        })
    );
});
