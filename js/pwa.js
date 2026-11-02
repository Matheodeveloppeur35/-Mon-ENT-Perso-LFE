"use strict";

/* ========================================
   MON ENT PERSO LFE — PWA
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    const networkStatus =
        document.getElementById("network-status");

    const installButton =
        document.getElementById("install-pwa-button");

    let installationEvent = null;


    /* ====================================
       ÉTAT DE LA CONNEXION
    ==================================== */

    function mettreAJourConnexion() {

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
                "🟠 Mode hors ligne";

            networkStatus.classList.add("offline");
            networkStatus.classList.remove("online");

        }
    }


    mettreAJourConnexion();

    window.addEventListener(
        "online",
        mettreAJourConnexion
    );

    window.addEventListener(
        "offline",
        mettreAJourConnexion
    );


    /* ====================================
       ENREGISTREMENT DU SERVICE WORKER
    ==================================== */

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


                /*
                 * Vérifier immédiatement si une
                 * nouvelle version existe.
                 */
                registration.update();

            } catch (erreur) {

                console.error(
                    "Erreur d'enregistrement du service worker :",
                    erreur
                );
            }
        });

    } else {

        console.warn(
            "Ce navigateur ne prend pas en charge les service workers."
        );
    }


    /* ====================================
       DÉTECTION DE L'INSTALLATION
    ==================================== */

    window.addEventListener(
        "beforeinstallprompt",
        (event) => {

            /*
             * Empêcher Chrome d'afficher son
             * invitation automatiquement.
             */
            event.preventDefault();

            installationEvent =
                event;


            /*
             * Si le bouton existe déjà dans le
             * HTML, on l'affiche.
             */
            if (installButton) {

                installButton.hidden =
                    false;
            }
        }
    );


    /* ====================================
       CLIC SUR LE BOUTON D'INSTALLATION
    ==================================== */

    if (installButton) {

        installButton.addEventListener(
            "click",
            async () => {

                if (!installationEvent) {

                    alert(
                        "Pour installer Mon ENT, ouvre le menu de Chrome puis choisis « Installer l'application » ou « Ajouter à l'écran d'accueil »."
                    );

                    return;
                }


                installationEvent.prompt();


                const choix =
                    await installationEvent.userChoice;


                if (
                    choix.outcome === "accepted"
                ) {

                    console.log(
                        "Installation acceptée."
                    );

                } else {

                    console.log(
                        "Installation refusée."
                    );
                }


                installationEvent =
                    null;

                installButton.hidden =
                    true;
            }
        );
    }


    /* ====================================
       APPLICATION INSTALLÉE
    ==================================== */

    window.addEventListener(
        "appinstalled",
        () => {

            installationEvent =
                null;


            if (installButton) {

                installButton.hidden =
                    true;
            }


            console.log(
                "Mon ENT Perso LFE est installé."
            );
        }
    );


    /* ====================================
       DÉTECTION DU MODE APPLICATION
    ==================================== */

    const applicationInstallee =
        window.matchMedia(
            "(display-mode: standalone)"
        ).matches ||
        window.navigator.standalone === true;


    if (
        applicationInstallee &&
        installButton
    ) {

        installButton.hidden =
            true;
    }

});
