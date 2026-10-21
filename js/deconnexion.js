"use strict";

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const logoutButton =
            document.getElementById(
                "logout-button"
            );

        const emailElement =
            document.getElementById(
                "connected-user-email"
            );


        if (!logoutButton) {
            return;
        }


        auth.onAuthStateChanged(
            (utilisateur) => {

                if (
                    utilisateur &&
                    emailElement
                ) {

                    emailElement.textContent =
                        utilisateur.email ||
                        "Compte connecté";
                }
            }
        );


        logoutButton.addEventListener(
            "click",
            async () => {

                const confirmation =
                    confirm(
                        "Veux-tu vraiment te déconnecter ?"
                    );


                if (!confirmation) {
                    return;
                }


                logoutButton.disabled =
                    true;

                logoutButton.textContent =
                    "⏳ Déconnexion...";


                try {

                    await auth.signOut();

                    window.location.replace(
                        "connexion.html"
                    );

                } catch (erreur) {

                    console.error(
                        "Erreur de déconnexion :",
                        erreur
                    );

                    alert(
                        "Impossible de se déconnecter."
                    );

                    logoutButton.disabled =
                        false;

                    logoutButton.textContent =
                        "🚪 Se déconnecter";
                }
            }
        );
    }
);
