"use strict";

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const boutonDeconnexion =
            document.getElementById(
                "logout-button"
            );

        const emailUtilisateur =
            document.getElementById(
                "connected-user-email"
            );


        if (
            typeof auth === "undefined"
        ) {

            console.error(
                "Firebase Authentication n'est pas initialisé."
            );

            return;
        }


        // ======================================
        // AFFICHER L'ADRESSE E-MAIL
        // ======================================

        auth.onAuthStateChanged(
            (utilisateur) => {

                if (
                    utilisateur &&
                    emailUtilisateur
                ) {

                    emailUtilisateur.textContent =
                        utilisateur.email ||
                        "Compte connecté";
                }
            }
        );


        // ======================================
        // BOUTON ABSENT
        // ======================================

        if (!boutonDeconnexion) {
            return;
        }


        // ======================================
        // DÉCONNEXION
        // ======================================

        boutonDeconnexion.addEventListener(
            "click",
            async () => {

                const confirmation =
                    window.confirm(
                        "Veux-tu vraiment te déconnecter de ton ENT ?"
                    );


                if (!confirmation) {
                    return;
                }


                boutonDeconnexion.disabled =
                    true;

                boutonDeconnexion.textContent =
                    "⏳ Déconnexion...";


                try {

                    await auth.signOut();

                    window.location.replace(
                        "connexion.html"
                    );

                } catch (erreur) {

                    console.error(
                        "Erreur pendant la déconnexion :",
                        erreur
                    );


                    alert(
                        "Impossible de se déconnecter pour le moment."
                    );


                    boutonDeconnexion.disabled =
                        false;

                    boutonDeconnexion.textContent =
                        "🚪 Se déconnecter";
                }
            }
        );
    }
);
