"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const installButton =
        document.getElementById("install-pwa-button");

    const networkStatus =
        document.getElementById("network-status");

    let deferredPrompt = null;

    function updateNetworkStatus() {
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

    updateNetworkStatus();

    window.addEventListener("online", updateNetworkStatus);
    window.addEventListener("offline", updateNetworkStatus);

    if ("serviceWorker" in navigator) {
        window.addEventListener("load", async () => {
            try {
                const registration =
                    await navigator.serviceWorker.register(
                        "./service-worker.js",
                        {
                            scope: "./"
                        }
                    );

                console.log(
                    "Service worker enregistré :",
                    registration.scope
                );
            } catch (error) {
                console.error(
                    "Erreur du service worker :",
                    error
                );
            }
        });
    }

    window.addEventListener("beforeinstallprompt", (event) => {
        event.preventDefault();

        deferredPrompt = event;

        if (installButton) {
            installButton.hidden = false;
        }
    });

    installButton?.addEventListener("click", async () => {
        if (!deferredPrompt) {
            alert(
                "Ouvre le menu ⋮ de Chrome puis choisis « Installer l'application » ou « Ajouter à l'écran d'accueil »."
            );
            return;
        }

        deferredPrompt.prompt();

        const choice = await deferredPrompt.userChoice;

        console.log(
            "Choix d'installation :",
            choice.outcome
        );

        deferredPrompt = null;
        installButton.hidden = true;
    });

    window.addEventListener("appinstalled", () => {
        deferredPrompt = null;

        if (installButton) {
            installButton.hidden = true;
        }

        console.log(
            "Mon ENT Perso LFE a été installé."
        );
    });

    const standalone =
        window.matchMedia("(display-mode: standalone)").matches;

    if (standalone && installButton) {
        installButton.hidden = true;
    }
});
