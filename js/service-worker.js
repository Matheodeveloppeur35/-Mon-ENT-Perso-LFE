"use strict";

const CACHE_NAME = "mon-ent-perso-lfe-v4";

const APP_SHELL = [
    "./",
    "./index.html",
    "./emploi-du-temps.html",
    "./mes-cours.html",
    "./mes-devoirs.html",
    "./mes-notes.html",
    "./mes-controles.html",
    "./connexion.html",

    "./manifest.json",
    "./css/style.css",
    "./icons/logo.png",

    "./js/accueil.js",
    "./js/emploi-du-temps.js",
    "./js/mes-cours.js",
    "./js/mes-devoirs.js",
    "./js/mes-notes.js",
    "./js/mes-controles.js",
    "./js/firebase-config.js",
    "./js/firebase-init.js",
    "./js/connexion.js",
    "./js/deconnexion.js",
    "./js/pwa.js",

    "./fiche-cours/francais-histoire-geo.html",
    "./fiche-cours/mathematiques.html",
    "./fiche-cours/anglais.html",
    "./fiche-cours/sciences-physiques.html",
    "./fiche-cours/enseignement-professionnel.html",
    "./fiche-cours/pratique-professionnelle.html",
    "./fiche-cours/arts-appliques.html",
    "./fiche-cours/soutien-au-parcours.html",
    "./fiche-cours/prevention-sante-environnement.html",
    "./fiche-cours/economie-gestion.html",
    "./fiche-cours/realisation-projet.html",
    "./fiche-cours/education-physique-sportive.html"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(cache => cache.addAll(APP_SHELL))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches
            .keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames
                        .filter(name => name !== CACHE_NAME)
                        .map(name => caches.delete(name))
                );
            })
            .then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", event => {
    const request = event.request;

    if (request.method !== "GET") {
        return;
    }

    const url = new URL(request.url);

    const estFirebase =
        url.hostname.includes("googleapis.com") ||
        url.hostname.includes("gstatic.com") ||
        url.hostname.includes("firebaseapp.com") ||
        url.hostname.includes("firebaseio.com");

    if (estFirebase) {
        event.respondWith(
            fetch(request).catch(() => caches.match(request))
        );

        return;
    }

    if (request.mode === "navigate") {
        event.respondWith(
            fetch(request)
                .then(response => {
                    const copie = response.clone();

                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(request, copie);
                    });

                    return response;
                })
                .catch(async () => {
                    return (
                        await caches.match(request) ||
                        await caches.match("./index.html")
                    );
                })
        );

        return;
    }

    event.respondWith(
        caches.match(request).then(cachedResponse => {
            if (cachedResponse) {
                return cachedResponse;
            }

            return fetch(request).then(response => {
                if (
                    response &&
                    response.status === 200 &&
                    response.type !== "opaque"
                ) {
                    const copie = response.clone();

                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(request, copie);
                    });
                }

                return response;
            });
        })
    );
});
