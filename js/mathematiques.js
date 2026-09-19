// ========================================
// FICHE DE COURS — MATHÉMATIQUES
// ========================================

// Récupération des cours enregistrés
function recupererCours() {
    const cours = localStorage.getItem("cours-mathematiques");

    if (cours) {
        return JSON.parse(cours);
    }

    return [];
}


// Sauvegarde des cours
function sauvegarderCours(cours) {
    localStorage.setItem(
        "cours-mathematiques",
        JSON.stringify(cours)
    );
}


// Ajouter un cours
function ajouterCours(cours) {

    const coursExistants = recupererCours();

    coursExistants.push(cours);

    sauvegarderCours(coursExistants);
}


// Supprimer un cours
function supprimerCours(index) {

    const cours = recupererCours();

    cours.splice(index, 1);

    sauvegarderCours(cours);
}


// Modifier un cours
function modifierCours(index, nouveauCours) {

    const cours = recupererCours();

    cours[index] = nouveauCours;

    sauvegarderCours(cours);
}


// Récupérer tous les cours
function obtenirTousLesCours() {

    return recupererCours();
}
// ========================================
// FORMULAIRE D'AJOUT D'UN COURS
// ========================================

const formulaire = document.getElementById("course-form");

if (formulaire) {

    formulaire.addEventListener("submit", function (event) {

        event.preventDefault();

        const date = document.getElementById("course-date").value;
        const titre = document.getElementById("course-title").value;
        const contenu = document.getElementById("course-content").value;
        const devoir = document.getElementById("course-homework").value;
        const lien = document.getElementById("course-link").value;

        const nouveauCours = {
            date: date,
            titre: titre,
            contenu: contenu,
            devoir: devoir,
            lien: lien
        };

        ajouterCours(nouveauCours);

        alert("✅ Le cours a été enregistré !");

        formulaire.reset();

    });

}
