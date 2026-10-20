"use strict";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();

auth.onAuthStateChanged((utilisateur) => {
    if (!utilisateur) {
        window.location.href = "connexion.html";
    }
});
