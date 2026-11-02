"use strict";

/* ========================================
   MON ENT PERSO LFE
   INITIALISATION FIREBASE
======================================== */

(() => {

    /*
     * Vérification de la présence de Firebase.
     */
    if (typeof firebase === "undefined") {

        console.error(
            "Firebase n'a pas été chargé. Vérifie les scripts Firebase dans le HTML."
        );

        return;
    }


    /*
     * Vérification de la configuration.
     *
     * Le fichier js/firebase-config.js doit
     * définir window.firebaseConfig.
     */
    if (
        !window.firebaseConfig ||
        typeof window.firebaseConfig !== "object"
    ) {

        console.error(
            "La configuration Firebase est introuvable. Vérifie js/firebase-config.js."
        );

        return;
    }


    /* ====================================
       INITIALISATION DE L'APPLICATION
    ==================================== */

    try {

        if (!firebase.apps.length) {

            firebase.initializeApp(
                window.firebaseConfig
            );
        }

    } catch (erreur) {

        console.error(
            "Impossible d'initialiser Firebase :",
            erreur
        );

        return;
    }


    /* ====================================
       SERVICES FIREBASE
    ==================================== */

    const auth =
        firebase.auth();

    const db =
        firebase.firestore();


    /*
     * Rendre les services accessibles dans
     * les autres fichiers JavaScript :
     *
     * window.entAuth
     * window.entDB
     */
    window.entAuth =
        auth;

    window.entDB =
        db;


    /* ====================================
       PERSISTANCE FIRESTORE HORS LIGNE
    ==================================== */

    async function activerPersistance() {

        try {

            /*
             * synchronizeTabs permet de partager
             * Firestore entre plusieurs onglets
             * du même navigateur.
             */
            await db.enablePersistence({
                synchronizeTabs: true
            });


            console.log(
                "Persistance Firestore hors ligne activée."
            );

            document.dispatchEvent(
                new CustomEvent(
                    "ent-firestore-ready",
                    {
                        detail: {
                            persistence: true
                        }
                    }
                )
            );

        } catch (erreur) {

            /*
             * failed-precondition :
             * plusieurs onglets ou une autre
             * instance Firestore empêche
             * l'activation.
             */
            if (
                erreur.code ===
                "failed-precondition"
            ) {

                console.warn(
                    "La persistance Firestore n'a pas pu être activée : plusieurs onglets utilisent peut-être l'application."
                );

            }

            /*
             * unimplemented :
             * navigateur incompatible.
             */
            else if (
                erreur.code ===
                "unimplemented"
            ) {

                console.warn(
                    "Ce navigateur ne prend pas en charge la persistance hors ligne de Firestore."
                );

            }

            else {

                console.error(
                    "Erreur pendant l'activation de la persistance Firestore :",
                    erreur
                );
            }


            /*
             * Firestore reste utilisable même
             * si la persistance ne s'active pas.
             */
            document.dispatchEvent(
                new CustomEvent(
                    "ent-firestore-ready",
                    {
                        detail: {
                            persistence: false,
                            error: erreur
                        }
                    }
                )
            );
        }
    }


    activerPersistance();


    /* ====================================
       SUIVI DE L'AUTHENTIFICATION
    ==================================== */

    auth.onAuthStateChanged(
        (utilisateur) => {

            if (utilisateur) {

                /*
                 * Informations accessibles dans
                 * les autres scripts.
                 */
                window.entUtilisateur =
                    utilisateur;


                console.log(
                    "Utilisateur connecté :",
                    utilisateur.email ||
                    utilisateur.uid
                );


                document.dispatchEvent(
                    new CustomEvent(
                        "ent-user-connected",
                        {
                            detail: {
                                user: utilisateur
                            }
                        }
                    )
                );

            } else {

                window.entUtilisateur =
                    null;


                console.log(
                    "Aucun utilisateur connecté."
                );


                document.dispatchEvent(
                    new CustomEvent(
                        "ent-user-disconnected"
                    )
                );
            }
        },
        (erreur) => {

            console.error(
                "Erreur de vérification de l'authentification :",
                erreur
            );
        }
    );


    /* ====================================
       ÉTAT DE LA CONNEXION
    ==================================== */

    function notifierConnexion() {

        document.dispatchEvent(
            new CustomEvent(
                "ent-network-change",
                {
                    detail: {
                        online:
                            navigator.onLine
                    }
                }
            )
        );
    }


    window.addEventListener(
        "online",
        notifierConnexion
    );


    window.addEventListener(
        "offline",
        notifierConnexion
    );


    /* ====================================
       FIREBASE PRÊT
    ==================================== */

    window.entFirebaseReady =
        true;


    document.dispatchEvent(
        new CustomEvent(
            "ent-firebase-ready",
            {
                detail: {
                    auth,
                    db
                }
            }
        )
    );


    console.log(
        "Firebase est initialisé pour Mon ENT Perso LFE."
    );

})();
