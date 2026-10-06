// =========================
// MES NOTES
// =========================

const STORAGE_KEY = "mes-notes";


// =========================
// MATIÈRES
// =========================

const matieres = [
    "Français / Histoire-Géo / EMC",
    "Mathématiques",
    "Anglais LV1",
    "Sciences physiques",
    "Enseignement professionnel",
    "Pratique professionnelle",
    "Arts appliqués / Culture artistique",
    "Soutien au parcours",
    "Prévention-Santé-Environnement",
    "Économie & Gestion",
    "Réalisation projet",
    "Éducation physique & sportive"
];


// =========================
// RÉCUPÉRER LES NOTES
// =========================

let notes = JSON.parse(
    localStorage.getItem(STORAGE_KEY)
) || [];


// Note actuellement modifiée
let noteEnModification = null;


// =========================
// ÉLÉMENTS HTML
// =========================

const noteForm =
    document.getElementById("note-form");

const noteSubject =
    document.getElementById("note-subject");

const noteTitle =
    document.getElementById("note-title");

const noteValue =
    document.getElementById("note-value");

const noteCoefficient =
    document.getElementById("note-coefficient");

const noteDate =
    document.getElementById("note-date");

const cancelEdit =
    document.getElementById("cancel-edit");

const notesList =
    document.getElementById("notes-list");

const subjectsGrid =
    document.getElementById("subjects-grid");

const searchNote =
    document.getElementById("search-note");

const subjectFilter =
    document.getElementById("subject-filter");

const totalNotes =
    document.getElementById("total-notes");

const generalAverage =
    document.getElementById("general-average");

const bestNote =
    document.getElementById("best-note");

const subjectsCount =
    document.getElementById("subjects-count");


// =========================
// SAUVEGARDE
// =========================

function sauvegarderNotes() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(notes)
    );

}


// =========================
// PROTECTION HTML
// =========================

function echapperHTML(texte) {

    if (texte === null || texte === undefined) {
        return "";
    }

    return String(texte)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


// =========================
// FORMATER UNE NOTE
// =========================

function formaterNote(note) {

    const valeur =
        Number(note);

    if (Number.isInteger(valeur)) {
        return valeur.toString();
    }

    return valeur
        .toFixed(2)
        .replace(/0+$/, "")
        .replace(/\.$/, "")
        .replace(".", ",");

}


// =========================
// FORMATER UNE DATE
// =========================

function formaterDate(date) {

    if (!date) {
        return "";
    }

    const parties =
        date.split("-");

    if (parties.length !== 3) {
        return date;
    }

    return `${parties[2]}/${parties[1]}/${parties[0]}`;

}


// =========================
// MOYENNE D'UNE MATIÈRE
// =========================

function calculerMoyenneMatiere(matiere) {

    const notesMatiere =
        notes.filter(
            note => note.matiere === matiere
        );

    if (notesMatiere.length === 0) {
        return null;
    }

    let total = 0;
    let totalCoefficients = 0;

    notesMatiere.forEach(note => {

        const valeur =
            Number(note.note);

        const coefficient =
            Number(note.coefficient) || 1;

        total += valeur * coefficient;

        totalCoefficients += coefficient;

    });

    if (totalCoefficients === 0) {
        return null;
    }

    return total / totalCoefficients;

}


// =========================
// MOYENNE GÉNÉRALE
// =========================

function calculerMoyenneGenerale() {

    if (notes.length === 0) {
        return null;
    }

    let total = 0;
    let totalCoefficients = 0;

    notes.forEach(note => {

        const valeur =
            Number(note.note);

        const coefficient =
            Number(note.coefficient) || 1;

        total += valeur * coefficient;

        totalCoefficients += coefficient;

    });

    if (totalCoefficients === 0) {
        return null;
    }

    return total / totalCoefficients;

}


// =========================
// AFFICHER LES STATISTIQUES
// =========================

function afficherStatistiques() {

    totalNotes.textContent =
        notes.length;


    const moyenne =
        calculerMoyenneGenerale();


    if (moyenne === null) {

        generalAverage.textContent =
            "— /20";

    } else {

        generalAverage.textContent =
            `${formaterNote(moyenne)} /20`;

    }


    if (notes.length === 0) {

        bestNote.textContent =
            "—";

    } else {

        const meilleure =
            Math.max(
                ...notes.map(
                    note => Number(note.note)
                )
            );

        bestNote.textContent =
            `${formaterNote(meilleure)} /20`;

    }


    const matieresNotees =
        matieres.filter(
            matiere =>
                notes.some(
                    note => note.matiere === matiere
                )
        );

    subjectsCount.textContent =
        `${matieresNotees.length} / ${matieres.length}`;

}


// =========================
// AFFICHER LES MOYENNES
// =========================

function afficherMoyennesMatieres() {

    subjectsGrid.innerHTML = "";

    matieres.forEach(matiere => {

        const moyenne =
            calculerMoyenneMatiere(matiere);

        const nombreNotes =
            notes.filter(
                note => note.matiere === matiere
            ).length;


        const carte =
            document.createElement("div");

        carte.className =
            "subject-card";


        carte.innerHTML = `

            <h3>
                ${echapperHTML(matiere)}
            </h3>

            <div class="subject-average">

                ${
                    moyenne === null
                        ? "—"
                        : `${formaterNote(moyenne)} /20`
                }

            </div>

            <div class="subject-count">

                ${
                    nombreNotes === 0
                        ? "Aucune note"
                        : `${nombreNotes} note${nombreNotes > 1 ? "s" : ""}`
                }

            </div>

        `;


        subjectsGrid.appendChild(carte);

    });

}


// =========================
// RÉCUPÉRER LES NOTES FILTRÉES
// =========================

function obtenirNotesFiltrees() {

    const recherche =
        searchNote.value
            .trim()
            .toLowerCase();

    const matiere =
        subjectFilter.value;


    return notes
        .filter(note => {

            const correspondRecherche =
                !recherche ||
                note.titre
                    .toLowerCase()
                    .includes(recherche) ||
                note.matiere
                    .toLowerCase()
                    .includes(recherche);


            const correspondMatiere =
                matiere === "all" ||
                note.matiere === matiere;


            return (
                correspondRecherche &&
                correspondMatiere
            );

        })
        .sort(
            (a, b) =>
                new Date(b.date) -
                new Date(a.date)
        );

}


// =========================
// AFFICHER LES NOTES
// =========================

function afficherNotes() {

    const notesFiltrees =
        obtenirNotesFiltrees();


    notesList.innerHTML = "";


    if (notesFiltrees.length === 0) {

        notesList.innerHTML = `

            <p class="empty-message">

                ${
                    notes.length === 0
                        ? "Aucune note enregistrée pour le moment."
                        : "Aucune note ne correspond à ta recherche."

                }

            </p>

        `;

        return;

    }


    notesFiltrees.forEach(note => {

        const carte =
            document.createElement("div");

        carte.className =
            "note-card";


        carte.innerHTML = `

            <div class="note-info">

                <div class="note-title">

                    ${echapperHTML(note.titre)}

                </div>

                <div class="note-details">

                    📚 ${echapperHTML(note.matiere)}
                    ·
                    📅 ${formaterDate(note.date)}

                </div>

            </div>


            <div class="note-value">

                ${formaterNote(note.note)} /20

                <div class="note-coefficient">

                    Coef. ${formaterNote(note.coefficient)}

                </div>

            </div>


            <div class="note-actions">

                <button
                    class="edit-button"
                    onclick="modifierNote('${note.id}')"
                >
                    ✏️
                </button>

                <button
                    class="delete-button"
                    onclick="supprimerNote('${note.id}')"
                >
                    🗑️
                </button>

            </div>

        `;


        notesList.appendChild(carte);

    });

}


// =========================
// AJOUTER UNE NOTE
// =========================

noteForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const matiere =
            noteSubject.value;

        const titre =
            noteTitle.value.trim();

        const valeur =
            Number(noteValue.value);

        const coefficient =
            Number(noteCoefficient.value);

        const date =
            noteDate.value;


        if (!matiere || !titre || !date) {

            alert(
                "Merci de remplir tous les champs obligatoires."
            );

            return;

        }


        if (
            Number.isNaN(valeur) ||
            valeur < 0 ||
            valeur > 20
        ) {

            alert(
                "La note doit être comprise entre 0 et 20."
            );

            return;

        }


        if (
            Number.isNaN(coefficient) ||
            coefficient <= 0
        ) {

            alert(
                "Le coefficient doit être supérieur à 0."
            );

            return;

        }


        // =========================
        // MODIFICATION
        // =========================

        if (noteEnModification) {

            const index =
                notes.findIndex(
                    note =>
                        note.id ===
                        noteEnModification
                );


            if (index !== -1) {

                notes[index] = {

                    ...notes[index],

                    matiere: matiere,

                    titre: titre,

                    note: valeur,

                    coefficient: coefficient,

                    date: date

                };

            }


            noteEnModification = null;

            cancelEdit.style.display =
                "none";


            noteForm.querySelector(
                ".save-button"
            ).textContent =
                "💾 Enregistrer la note";


        }

        // =========================
        // NOUVELLE NOTE
        // =========================

        else {

            notes.push({

                id:
                    Date.now().toString(),

                matiere: matiere,

                titre: titre,

                note: valeur,

                coefficient: coefficient,

                date: date

            });

        }


        sauvegarderNotes();

        noteForm.reset();

        noteCoefficient.value = "1";


        afficherTout();

    }
);


// =========================
// MODIFIER UNE NOTE
// =========================

function modifierNote(id) {

    const note =
        notes.find(
            element =>
                element.id === id
        );


    if (!note) {
        return;
    }


    noteEnModification =
        id;


    noteSubject.value =
        note.matiere;

    noteTitle.value =
        note.titre;

    noteValue.value =
        note.note;

    noteCoefficient.value =
        note.coefficient;

    noteDate.value =
        note.date;


    cancelEdit.style.display =
        "inline-block";


    noteForm.querySelector(
        ".save-button"
    ).textContent =
        "💾 Enregistrer les modifications";


    noteForm.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// =========================
// ANNULER MODIFICATION
// =========================

cancelEdit.addEventListener(
    "click",
    function() {

        noteEnModification = null;

        noteForm.reset();

        noteCoefficient.value = "1";

        cancelEdit.style.display =
            "none";


        noteForm.querySelector(
            ".save-button"
        ).textContent =
            "💾 Enregistrer la note";

    }
);


// =========================
// SUPPRIMER UNE NOTE
// =========================

function supprimerNote(id) {

    const note =
        notes.find(
            element =>
                element.id === id
        );


    if (!note) {
        return;
    }


    const confirmation =
        confirm(
            `Supprimer la note "${note.titre}" ?`
        );


    if (!confirmation) {
        return;
    }


    notes =
        notes.filter(
            element =>
                element.id !== id
        );


    sauvegarderNotes();

    afficherTout();

}


// =========================
// RECHERCHE
// =========================

searchNote.addEventListener(
    "input",
    afficherNotes
);


// =========================
// FILTRE MATIÈRE
// =========================

subjectFilter.addEventListener(
    "change",
    afficherNotes
);


// =========================
// TOUT AFFICHER
// =========================

function afficherTout() {

    afficherStatistiques();

    afficherMoyennesMatieres();

    afficherNotes();

}


// =========================
// INITIALISATION
// =========================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        afficherTout();

    }
);
