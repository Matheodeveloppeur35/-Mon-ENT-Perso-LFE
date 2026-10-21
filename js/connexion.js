"use strict";

document.addEventListener(
    "DOMContentLoaded",
    () => {

        if (
            typeof firebase === "undefined" ||
            typeof firebaseConfig === "undefined"
        ) {

            console.error(
                "Firebase ou firebaseConfig est indisponible."
            );

            return;
        }


        if (!firebase.apps.length) {

            firebase.initializeApp(
                firebaseConfig
            );
        }


        const auth =
            firebase.auth();


        const form =
            document.getElementById(
                "login-form"
            );

        const emailInput =
            document.getElementById(
                "login-email"
            );

        const passwordInput =
            document.getElementById(
                "login-password"
            );

        const loginButton =
            document.getElementById(
                "login-button"
            );

        const message =
            document.getElementById(
                "login-message"
            );

        const passwordToggle =
            document.getElementById(
                "password-toggle"
            );

        const offlineMessage =
            document.getElementById(
                "login-offline"
            );


        if (
            !form ||
            !emailInput ||
            !passwordInput ||
            !loginButton ||
            !message ||
            !passwordToggle ||
            !offlineMessage
        ) {

            console.error(
                "Un élément du formulaire de connexion est manquant."
            );

            return;
        }


        let redirectionEnCours =
            false;


        function afficherMessage(
            texte,
            type = "error"
        ) {

            message.textContent =
                texte;

            message.className =
                `login-message ${type}`;
        }


        function masquerMessage() {

            message.textContent =
                "";

            message.className =
                "login-message";
        }


        function actualiserEtatConnexion() {

            offlineMessage.classList.toggle(
                "visible",
                !navigator.onLine
            );
        }


        function traduireErreur(code) {

            const messages = {

                "auth/invalid-email":
                    "L'adresse e-mail n'est pas valide.",

                "auth/user-disabled":
                    "Ce compte a été désactivé.",

                "auth/user-not-found":
                    "Aucun compte ne correspond à cette adresse.",

                "auth/wrong-password":
                    "Le mot de passe est incorrect.",

                "auth/invalid-credential":
                    "L'adresse e-mail ou le mot de passe est incorrect.",

                "auth/too-many-requests":
                    "Trop de tentatives. Réessaie un peu plus tard.",

                "auth/network-request-failed":
                    "Connexion Internet indisponible. Vérifie ton réseau.",

                "auth/internal-error":
                    "Une erreur interne s'est produite."
            };


            return (
                messages[code] ||
                "La connexion a échoué. Vérifie tes informations."
            );
        }


        // ======================================
        // AFFICHER / MASQUER LE MOT DE PASSE
        // ======================================

        passwordToggle.addEventListener(
            "click",
            () => {

                const masquer =
                    passwordInput.type ===
                    "password";


                passwordInput.type =
                    masquer
                        ? "text"
                        : "password";


                passwordToggle.textContent =
                    masquer
                        ? "🙈"
                        : "👁️";


                passwordToggle.setAttribute(
                    "aria-label",
                    masquer
                        ? "Masquer le mot de passe"
                        : "Afficher le mot de passe"
                );
            }
        );


        // ======================================
        // CONNEXION
        // ======================================

        form.addEventListener(
            "submit",
            async (evenement) => {

                evenement.preventDefault();

                masquerMessage();


                if (!navigator.onLine) {

                    afficherMessage(
                        "Une première connexion Internet est nécessaire."
                    );

                    return;
                }


                const email =
                    emailInput.value
                        .trim();

                const password =
                    passwordInput.value;


                if (
                    !email ||
                    !password
                ) {

                    afficherMessage(
                        "Entre ton adresse e-mail et ton mot de passe."
                    );

                    return;
                }


                loginButton.disabled =
                    true;

                loginButton.textContent =
                    "⏳ Connexion...";


                try {

                    await auth
                        .setPersistence(
                            firebase.auth
                                .Auth
                                .Persistence
                                .LOCAL
                        );


                    await auth
                        .signInWithEmailAndPassword(
                            email,
                            password
                        );


                    afficherMessage(
                        "Connexion réussie. Redirection...",
                        "success"
                    );


                } catch (erreur) {

                    console.error(
                        "Erreur de connexion :",
                        erreur
                    );


                    afficherMessage(
                        traduireErreur(
                            erreur.code
                        )
                    );


                    loginButton.disabled =
                        false;

                    loginButton.textContent =
                        "🔐 Se connecter";
                }
            }
        );


        // ======================================
        // SESSION EXISTANTE
        // ======================================

        auth.onAuthStateChanged(
            (utilisateur) => {

                if (
                    utilisateur &&
                    !redirectionEnCours
                ) {

                    redirectionEnCours =
                        true;

                    window.location.replace(
                        "index.html"
                    );
                }
            }
        );


        // ======================================
        // INTERNET
        // ======================================

        window.addEventListener(
            "online",
            actualiserEtatConnexion
        );


        window.addEventListener(
            "offline",
            actualiserEtatConnexion
        );


        actualiserEtatConnexion();
    }
);
