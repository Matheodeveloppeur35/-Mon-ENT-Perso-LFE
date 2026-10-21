"use strict";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();
"use strict";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();

db.enablePersistence({
    synchronizeTabs: true
}).catch((erreur) => {
    if (erreur.code === "failed-precondition") {
        console.warn(
            "La persistance hors ligne ne peut être activée que dans un seul contexte."
        );
    } else if (erreur.code === "unimplemented") {
        console.warn(
            "Ce navigateur ne prend pas en charge le cache hors ligne."
        );
    } else {
        console.error(
            "Erreur du cache hors ligne :",
            erreur
        );
    }
});

auth.onAuthStateChanged((utilisateur) => {
    if (!utilisateur) {
        window.location.href = "connexion.html";
    }
});

auth.onAuthStateChanged((utilisateur) => {
    if (!utilisateur) {
        window.location.href = "connexion.html";
    }
});
