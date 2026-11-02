"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const installButton =
        document.getElementById("install-pwa-button");

    const networkStatus =
        document.getElementById("network-status");

    let installationEvent = null;

    /* ========================================
       CONNEXION
    ======================================== */

    function afficherConnexion() {
        if (!networkStatus) {
            return;
        }

        if (navigator.onLine) {
            networkStatus.textContent =
                "🟢 Connecté à Internet";

            networkStatus.classList.add("online");
            networkStatus.classList.remove("offline");
        } else {
            networkStatus.textContent =
                "🟠 Mode hors ligne";

            networkStatus.classList.add("offline");
            networkStatus.classList.remove("online");
        }
    }

    afficherConnexion();

    window.addEventListener("online", afficherConnexion);
    window.addEventListener("offline", afficherConnexion);

    /* ========================================
       SERVICE WORKER
    ======================================== */

    async function demarrerPWA() {
        if (!("serviceWorker" in navigator)) {
            console.error(
                "Les service workers ne sont pas compatibles."
            );

            return;
        }

        try {
            const inscription =
                await navigator.serviceWorker.register(
                    "/-Mon-ENT-Perso-LFE/service-worker.js",
                    {
                        scope: "/-Mon-ENT-Perso-LFE/",
                        updateViaCache: "none"
                    }
                );

            console.log(
                "Service worker enregistré :",
                inscription.scope
            );

            await inscription.update();
            await navigator.serviceWorker.ready;

            console.log(
                "Service worker actif."
            );
        } catch (erreur) {
            console.error(
                "Échec de la PWA :",
                erreur
            );

            if (networkStatus) {
                networkStatus.textContent =
                    `🔴 Erreur PWA : ${erreur.message}`;
            }
        }
    }

    window.addEventListener("load", demarrerPWA);

    /* ========================================
       INSTALLATION ANDROID
    ======================================== */

    window.addEventListener(
        "beforeinstallprompt",
        (event) => {
            event.preventDefault();

            installationEvent = event;

            if (installButton) {
                installButton.hidden = false;
                installButton.disabled = false;
            }

            console.log(
                "La PWA est prête à être installée."
            );
        }
    );

    installButton?.addEventListener(
        "click",
        async () => {
            if (!installationEvent) {
                alert(
                    "Chrome ne propose pas encore l'installation. " +
                    "Recharge simplement la page puis attends quelques secondes."
                );

                return;
            }

            installButton.disabled = true;

            try {
                await installationEvent.prompt();

                const choix =
                    await installationEvent.userChoice;

                console.log(
                    "Choix d'installation :",
                    choix.outcome
                );

                installationEvent = null;
                installButton.hidden = true;
            } catch (erreur) {
                console.error(
                    "Erreur d'installation :",
                    erreur
                );

                installButton.disabled = false;
            }
        }
    );

    window.addEventListener("appinstalled", () => {
        installationEvent = null;

        if (installButton) {
            installButton.hidden = true;
        }

        alert(
            "✅ Mon ENT Perso LFE est installé."
        );
    });

    /* Masquer le bouton si l'application est déjà ouverte comme PWA */

    const dejaInstallee =
        window.matchMedia(
            "(display-mode: standalone)"
        ).matches ||
        window.navigator.standalone === true;

    if (dejaInstallee && installButton) {
        installButton.hidden = true;
    }
});
