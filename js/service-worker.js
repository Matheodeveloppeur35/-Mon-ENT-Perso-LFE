"use strict";

const CACHE_NAME = "mon-ent-perso-lfe-v2";

const APP_SHELL = [
    "./",
    "./index.html",
    "./manifest.json",
    "./css/style.css",
    "./js/pwa.js",
    "./js/accueil.js",
    "./icons/icon-192.png",
    "./icons/icon-512.png",
    "./icons/icon-maskable-512.png"
];


/* ========================================
   INSTALLATION
======================================== */

self.addEventListener("install", (event) => {

    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(async (cache) => {

                const resultats =
                    await Promise.allSettled(
                        APP_SHELL.map((fichier) =>
                            cache.add(fichier)
                        )
                    );

                resultats.forEach((resultat, index) => {

                    if (resultat.status === "rejected") {

                        console.warn(
                            "Fichier non mis en cache :",
                            APP_SHELL[index],
                            resultat.reason
                        );
                    }
                });
            })
            .then(() => self.skipWaiting())
    );
});


/* ========================================
   ACTIVATION
======================================== */

self.addEventListener("activate", (event) => {

    event.waitUntil(
        caches
            .keys()
            .then((nomsCaches) =>
                Promise.all(
                    nomsCaches.map((nomCache) => {

                        if (nomCache !== CACHE_NAME) {

                            return caches.delete(
                                nomCache
                            );
                        }

                        return Promise.resolve();
                    })
                )
            )
            .then(() => self.clients.claim())
    );
});


/* ========================================
   REQUÊTES
======================================== */

self.addEventListener("fetch", (event) => {

    const requete = event.request;

    if (requete.method !== "GET") {
        return;
    }


    const url =
        new URL(requete.url);


    // Ne pas mettre Firebase en cache.
    if (url.origin !== self.location.origin) {
        return;
    }


    // Pages HTML : réseau puis cache.
    if (requete.mode === "navigate") {

        event.respondWith(
            fetch(requete)
                .then((reponse) => {

                    if (reponse.ok) {

                        const copie =
                            reponse.clone();

                        caches
                            .open(CACHE_NAME)
                            .then((cache) =>
                                cache.put(
                                    requete,
                                    copie
                                )
                            );
                    }

                    return reponse;
                })
                .catch(async () => {

                    return (
                        await caches.match(requete)
                    ) || (
                        await caches.match(
                            "./index.html"
                        )
                    );
                })
        );

        return;
    }


    // CSS, JavaScript et images.
    event.respondWith(
        caches
            .match(requete)
            .then(async (reponseEnCache) => {

                if (reponseEnCache) {
                    return reponseEnCache;
                }


                const reponseReseau =
                    await fetch(requete);


                if (reponseReseau.ok) {

                    const cache =
                        await caches.open(
                            CACHE_NAME
                        );

                    await cache.put(
                        requete,
                        reponseReseau.clone()
                    );
                }


                return reponseReseau;
            })
    );
});
