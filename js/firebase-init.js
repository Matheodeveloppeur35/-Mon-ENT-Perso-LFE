"use strict";

if (typeof firebase === "undefined") {
    throw new Error("Firebase n'est pas chargé.");
}

if (typeof firebaseConfig === "undefined") {
    throw new Error("La configuration Firebase est absente.");
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();

/*
 * Maintient la session sur le téléphone et le PC.
 */
auth.setPersistence(
    firebase.auth.Auth.Persistence.LOCAL
).catch((erreur) => {
    console.error(
        "Impossible de conserver la session :",
        erreur
    );
});

/*
 * Active le cache Firestore afin de pouvoir consulter et modifier
 * les données lorsque la connexion Internet est temporairement absente.
 */
db.enablePersistence({
    synchronizeTabs: true
}).catch((erreur) => {

    if (erreur.code === "failed-precondition") {
        console.warn(
            "Le cache hors ligne est déjà utilisé dans un autre onglet."
        );
        return;
    }

    if (erreur.code === "unimplemented") {
        console.warn(
            "Ce navigateur ne prend pas en charge le cache Firestore."
        );
        return;
    }

    console.error(
        "Impossible d'activer le cache Firestore :",
        erreur
    );
});

/*
 * Protège la page.
 */
auth.onAuthStateChanged((utilisateur) => {

    if (!utilisateur) {
        window.location.replace("connexion.html");
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
});
