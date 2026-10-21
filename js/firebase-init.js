"use strict";

(function initialiserFirebase() {

    if (typeof firebase === "undefined") {
        console.error(
            "Firebase n'est pas chargé. Vérifie les scripts Firebase dans la page."
        );

        return;
    }

    if (typeof firebaseConfig === "undefined") {
        console.error(
            "firebaseConfig est introuvable. Vérifie js/firebase-config.js."
        );

        return;
    }


    // ==========================================
    // INITIALISATION
    // ==========================================

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }


    window.auth =
        firebase.auth();

    window.db =
        firebase.firestore();


    // ==========================================
    // SESSION LOCALE
    // ==========================================

    window.auth
        .setPersistence(
            firebase.auth.Auth.Persistence.LOCAL
        )
        .catch((erreur) => {

            console.error(
                "Impossible de conserver la session :",
                erreur
            );
        });


    // ==========================================
    // CACHE HORS LIGNE
    // ==========================================

    window.db
        .enablePersistence({
            synchronizeTabs: true
        })
        .catch((erreur) => {

            if (
                erreur.code ===
                "failed-precondition"
            ) {

                console.warn(
                    "Le cache hors ligne est déjà utilisé dans un autre onglet."
                );

                return;
            }


            if (
                erreur.code ===
                "unimplemented"
            ) {

                console.warn(
                    "Le navigateur ne prend pas en charge le cache Firestore."
                );

                return;
            }


            console.error(
                "Impossible d'activer le cache Firestore :",
                erreur
            );
        });


    // ==========================================
    // PROTECTION DE LA PAGE
    // ==========================================

    window.auth.onAuthStateChanged(
        (utilisateur) => {

            if (!utilisateur) {

                window.location.replace(
                    "connexion.html"
                );

                return;
            }


            document.documentElement.classList.add(
                "firebase-ready"
            );


            window.dispatchEvent(
                new CustomEvent(
                    "ent-auth-ready",
                    {
                        detail: {
                            utilisateur
                        }
                    }
                )
            );
        }
    );

})();
