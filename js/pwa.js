"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const statusElement =
        document.getElementById("network-status");

    function mettreAJourEtatConnexion() {
        const estEnLigne = navigator.onLine;

        if (statusElement) {
            statusElement.textContent = estEnLigne
                ? "🟢 En ligne — synchronisation disponible"
                : "🟠 Hors ligne — les changements seront synchronisés plus tard";

            statusElement.classList.toggle(
                "is-offline",
                !estEnLigne
            );
        }

        document.body.classList.toggle(
            "offline",
            !estEnLigne
        );
    }

    mettreAJourEtatConnexion();

    window.addEventListener(
        "online",
        mettreAJourEtatConnexion
    );

    window.addEventListener(
        "offline",
        mettreAJourEtatConnexion
    );

    if (!("serviceWorker" in navigator)) {
        console.warn(
            "Les service workers ne sont pas disponibles."
        );

        return;
    }

    window.addEventListener("load", async () => {
        try {
            const registration =
                await navigator.serviceWorker.register(
                    "./service-worker.js"
                );

            console.log(
                "Service worker enregistré :",
                registration.scope
            );

            registration.update();
        } catch (erreur) {
            console.error(
                "Impossible d'enregistrer le service worker.",
                erreur
            );
        }
    });
});
