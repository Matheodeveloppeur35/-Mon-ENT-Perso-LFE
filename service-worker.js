"use strict";

const CACHE_NAME = "mon-ent-perso-lfe-v1";

const FICHIERS_A_METTRE_EN_CACHE = [
    "./",
    "./index.html",
    "./emploi-du-temps.html",
    "./mes-cours.html",
    "./mes-devoirs.html",
    "./mes-notes.html",
    "./mes-controles.html",
    "./connexion.html",

    "./css/style.css",

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

    "./fiche-cours/mathematiques.html",
    "./fiche-cours/arts-appliques.html",
    "./fiche-cours/francais-histoire-geo.html",
    "./fiche-cours/anglais.html",
    "./fiche-cours/sciences-physiques.html",
    "./fiche-cours/enseignement-professionnel.html",
    "./fiche-cours/pratique-professionnelle.html",
    "./fiche-cours/soutien-au-parcours.html",
    "./fiche-cours/prevention-sante-environnement.html",
    "./fiche-cours/economie-gestion.html",
    "./fiche-cours/realisation-projet.html",
    "./fiche-cours/education-physique-sportive.html"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(FICHIERS_A_METTRE_EN_CACHE))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(nomsCaches => {
            return Promise.all(
                nomsCaches
                    .filter(nom => nom !== CACHE_NAME)
                    .map(nom => caches.delete(nom))
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", event => {
    const requete = event.request;

    if (requete.method !== "GET") {
        return;
    }

    event.respondWith(
        caches.match(requete).then(reponseEnCache => {
            if (reponseEnCache) {
                return reponseEnCache;
            }

            return fetch(requete)
                .then(reponse => {
                    if (
                        !reponse ||
                        reponse.status !== 200 ||
                        reponse.type === "opaque"
                    ) {
                        return reponse;
                    }

                    const copie = reponse.clone();

                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(requete, copie);
                    });

                    return reponse;
                })
                .catch(() => {
                    if (requete.mode === "navigate") {
                        return caches.match("./index.html");
                    }

                    return new Response(
                        "Contenu indisponible hors ligne.",
                        {
                            status: 503,
                            headers: {
                                "Content-Type": "text/plain; charset=utf-8"
                            }
                        }
                    );
                });
        })
    );
});
