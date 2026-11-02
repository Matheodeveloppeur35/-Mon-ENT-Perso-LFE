"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const installButton =
        document.getElementById("install-pwa-button");

    const networkStatus =
        document.getElementById("network-status");

    const pwaMessage =
        document.getElementById("pwa-message");

    let deferredPrompt = null;

    function afficherMessage(message, type = "info") {
        if (!pwaMessage) {
            console.log(message);
            return;
        }

        pwaMessage.textContent = message;
        pwaMessage.dataset.type = type;
        pwaMessage.hidden = false;
    }

    function actualiserConnexion() {
        if (!networkStatus) {
            return;
        }

        if (navigator.onLine) {
            networkStatus.textContent =
                "🟢 Connexion Internet disponible";

            networkStatus.classList.add("online");
            networkStatus.classList.remove("offline");
        } else {
            networkStatus.textContent =
                "🟠 Application en mode hors ligne";

            networkStatus.classList.add("offline");
            networkStatus.classList.remove("online");
        }
    }

    actualiserConnexion();

    window.addEventListener("online", actualiserConnexion);
    window.addEventListener("offline", actualiserConnexion);

    async function enregistrerServiceWorker() {
        if (!("serviceWorker" in navigator)) {
            afficherMessage(
                "Ce navigateur ne prend pas en charge le mode hors ligne.",
                "error"
            );

            return;
        }

        try {
            const registration =
                await navigator.serviceWorker.register(
                    "./service-worker.js",
                    {
                        scope: "./"
                    }
                );

            await navigator.serviceWorker.ready;

            console.log(
                "Service worker actif :",
                registration.scope
            );
        } catch (error) {
            console.error(
                "Erreur du service worker :",
                error
            );

            afficherMessage(
                `Erreur PWA : ${error.message}`,
                "error"
            );
        }
    }

    window.addEventListener(
        "load",
        enregistrerServiceWorker
    );

    window.addEventListener(
        "beforeinstallprompt",
        (event) => {
            event.preventDefault();

            deferredPrompt = event;

            if (installButton) {
                installButton.hidden = false;
            }

            afficherMessage(
                "📲 L'application peut maintenant être installée.",
                "success"
            );
        }
    );

    installButton?.addEventListener(
        "click",
        async () => {
            if (!deferredPrompt) {
                alert(
                    "La PWA n'est pas encore validée par Chrome. " +
                    "Vérifie les icônes puis recharge la page."
                );

                return;
            }

            deferredPrompt.prompt();

            const result =
                await deferredPrompt.userChoice;

            console.log(
                "Résultat de l'installation :",
                result.outcome
            );

            deferredPrompt = null;
            installButton.hidden = true;
        }
    );

    window.addEventListener("appinstalled", () => {
        deferredPrompt = null;

        if (installButton) {
            installButton.hidden = true;
        }

        afficherMessage(
            "✅ Mon ENT a bien été installé.",
            "success"
        );
    });

    const standalone =
        window.matchMedia(
            "(display-mode: standalone)"
        ).matches;

    if (standalone && installButton) {
        installButton.hidden = true;
    }
});
