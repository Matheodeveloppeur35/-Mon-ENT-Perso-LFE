"use strict";

document.addEventListener("DOMContentLoaded", () => {
    if (!("serviceWorker" in navigator)) {
        console.warn("Les service workers ne sont pas disponibles.");
        return;
    }

    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./service-worker.js")
            .then(registration => {
                console.log(
                    "Service worker enregistré :",
                    registration.scope
                );

                registration.addEventListener("updatefound", () => {
                    const nouveauWorker =
                        registration.installing;

                    if (!nouveauWorker) {
                        return;
                    }

                    nouveauWorker.addEventListener("statechange", () => {
                        if (
                            nouveauWorker.state === "installed" &&
                            navigator.serviceWorker.controller
                        ) {
                            console.log(
                                "Une nouvelle version de Mon ENT est disponible."
                            );
                        }
                    });
                });
            })
            .catch(erreur => {
                console.error(
                    "Impossible d'enregistrer le service worker.",
                    erreur
                );
            });
    });
});
