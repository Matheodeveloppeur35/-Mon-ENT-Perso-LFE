"use strict";

const VERSION = "mon-ent-v10";

const BASE = "/-Mon-ENT-Perso-LFE/";

const FICHIERS_ESSENTIELS = [
    BASE,
    `${BASE}index.html`,
    `${BASE}manifest.json`,
    `${BASE}css/style.css`,

    `${BASE}emploi-du-temps.html`,
    `${BASE}mes-cours.html`,
    `${BASE}mes-devoirs.html`,
    `${BASE}mes-notes.html`,
    `${BASE}mes-controles.html`,

    `${BASE}js/accueil.js`,
    `${BASE}js/pwa.js`,

    `${BASE}icons/icon-192.png`,
    `${BASE}icons/icon-512.png`,
    `${BASE}icons/icon-maskable-512.png`
];

/* Installation */

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(VERSION).then(async (cache) => {
            for (const fichier of FICHIERS_ESSENTIELS) {
                try {
                    const reponse = await fetch(fichier, {
                        cache: "reload"
                    });

                    if (reponse.ok) {
                        await cache.put(fichier, reponse);
                    } else {
                        console.warn(
                            "Fichier non mis en cache :",
                            fichier,
                            reponse.status
                        );
                    }
                } catch (erreur) {
                    console.warn(
                        "Impossible de mettre en cache :",
                        fichier,
                        erreur
                    );
                }
            }
        })
    );

    self.skipWaiting();
});

/* Activation */

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((noms) =>
            Promise.all(
                noms
                    .filter((nom) => nom !== VERSION)
                    .map((nom) => caches.delete(nom))
            )
        )
    );

    self.clients.claim();
});

/* Gestion des requêtes */

self.addEventListener("fetch", (event) => {
    const requete = event.request;

    if (requete.method !== "GET") {
        return;
    }

    const url = new URL(requete.url);

    if (url.origin !== self.location.origin) {
        return;
    }

    /* Pour les pages HTML : réseau, puis cache */

    if (requete.mode === "navigate") {
        event.respondWith(
            fetch(requete)
                .then((reponse) => {
                    if (reponse.ok) {
                        const copie = reponse.clone();

                        caches.open(VERSION).then((cache) => {
                            cache.put(requete, copie);
                        });
                    }

                    return reponse;
                })
                .catch(async () => {
                    const pageDemandee =
                        await caches.match(requete);

                    if (pageDemandee) {
                        return pageDemandee;
                    }

                    return caches.match(
                        `${BASE}index.html`
                    );
                })
        );

        return;
    }

    /* Pour CSS, JS et images : cache, puis réseau */

    event.respondWith(
        caches.match(requete).then(async (reponseCache) => {
            if (reponseCache) {
                return reponseCache;
            }

            try {
                const reponseReseau = await fetch(requete);

                if (reponseReseau.ok) {
                    const copie = reponseReseau.clone();

                    const cache = await caches.open(VERSION);
                    await cache.put(requete, copie);
                }

                return reponseReseau;
            } catch (erreur) {
                return new Response(
                    "Ressource indisponible hors ligne.",
                    {
                        status: 503,
                        headers: {
                            "Content-Type":
                                "text/plain; charset=utf-8"
                        }
                    }
                );
            }
        })
    );
});
