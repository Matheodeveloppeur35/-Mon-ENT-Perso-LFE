"use strict";

/* ========================================
   MON ENT PERSO LFE — SERVICE WORKER
======================================== */

const CACHE_VERSION = "mon-ent-v1";

const OFFLINE_URL = "./index.html";

/*
 * Fichiers essentiels enregistrés dès
 * l'installation de l'application.
 */
const FICHIERS_ESSENTIELS = [
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


/* ========================================
   INSTALLATION
======================================== */

self.addEventListener("install", (event) => {

    event.waitUntil(
        caches.open(CACHE_VERSION)
            .then((cache) => {
                return cache.addAll(FICHIERS_ESSENTIELS);
            })
            .then(() => {
                return self.skipWaiting();
            })
    );

});


/* ========================================
   ACTIVATION
======================================== */

self.addEventListener("activate", (event) => {

    event.waitUntil(
        caches.keys()
            .then((nomsCaches) => {
                return Promise.all(
                    nomsCaches.map((nomCache) => {

                        if (nomCache !== CACHE_VERSION) {
                            return caches.delete(nomCache);
                        }

                        return Promise.resolve();
                    })
                );
            })
            .then(() => {
                return self.clients.claim();
            })
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

    const url = new URL(requete.url);

    /*
     * Ne pas intercepter les services externes,
     * par exemple Firebase.
     */
    if (url.origin !== self.location.origin) {
        return;
    }

    /*
     * Navigation HTML :
     * Internet en priorité, cache en secours.
     */
    if (requete.mode === "navigate") {

        event.respondWith(
            fetch(requete)
                .then((reponse) => {

                    if (reponse && reponse.ok) {

                        const copie = reponse.clone();

                        caches.open(CACHE_VERSION)
                            .then((cache) => {
                                cache.put(requete, copie);
                            });
                    }

                    return reponse;
                })
                .catch(async () => {

                    const pageEnCache =
                        await caches.match(requete);

                    return pageEnCache ||
                        caches.match(OFFLINE_URL);
                })
        );

        return;
    }

    /*
     * CSS, JavaScript et images :
     * cache en priorité, Internet en secours.
     */
    event.respondWith(
        caches.match(requete)
            .then((reponseEnCache) => {

                if (reponseEnCache) {
                    return reponseEnCache;
                }

                return fetch(requete)
                    .then((reponseReseau) => {

                        if (
                            !reponseReseau ||
                            !reponseReseau.ok
                        ) {
                            return reponseReseau;
                        }

                        const copie =
                            reponseReseau.clone();

                        caches.open(CACHE_VERSION)
                            .then((cache) => {
                                cache.put(
                                    requete,
                                    copie
                                );
                            });

                        return reponseReseau;
                    });
            })
    );

});
