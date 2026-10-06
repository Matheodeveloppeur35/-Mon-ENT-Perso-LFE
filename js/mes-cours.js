```javascript
// ========================================
// 📚 MES COURS
// Recherche + filtres + tri
// Compteurs + dernier cours
// ========================================


// ========================================
// ÉLÉMENTS DE LA PAGE
// ========================================

const searchInput =
    document.getElementById("search-course");

const categoryFilter =
    document.getElementById("course-filter");

const sortSelect =
    document.getElementById("course-sort");

const coursesGrid =
    document.getElementById("courses-grid");

const courseCards =
    Array.from(
        document.querySelectorAll(".course-card")
    );

const coursesCount =
    document.getElementById("courses-count");

const noResults =
    document.getElementById("no-results");


// ========================================
// CLÉS LOCALSTORAGE
// ========================================

const storageKeys = {

    francais:
        "cours-francais-histoire-geo",

    mathematiques:
        "cours-mathematiques",

    anglais:
        "cours-anglais",

    sciences:
        "cours-sciences-physiques",

    enseignement:
        "cours-enseignement-professionnel",

    pratique:
        "cours-pratique-professionnelle",

    arts:
        "cours-arts-appliques",

    soutien:
        "cours-soutien-au-parcours",

    pse:
        "cours-prevention-sante-environnement",

    economie:
        "cours-economie-gestion",

    projet:
        "cours-realisation-projet",

    eps:
        "cours-education-physique-sportive"

};


// ========================================
// RÉCUPÉRER LES COURS
// ========================================

function recupererCours(sujet) {

    const cle =
        storageKeys[sujet];

    if (!cle) {
        return [];
    }

    try {

        const donnees =
            localStorage.getItem(cle);

        if (!donnees) {
            return [];
        }

        const cours =
            JSON.parse(donnees);

        if (Array.isArray(cours)) {
            return cours;
        }

        return [];

    } catch (erreur) {

        console.error(
            "Impossible de récupérer les cours :",
            sujet,
            erreur
        );

        return [];

    }

}


// ========================================
// TROUVER UNE DATE
// ========================================

function obtenirDateCours(cours) {

    if (!cours || typeof cours !== "object") {
        return null;
    }

    const champsPossibles = [
        "date",
        "dateCours",
        "createdAt",
        "created_at",
        "timestamp"
    ];

    for (const champ of champsPossibles) {

        if (cours[champ]) {

            const date =
                new Date(cours[champ]);

            if (!isNaN(date.getTime())) {
                return date;
            }

        }

    }

    return null;

}


// ========================================
// TROUVER LE DERNIER COURS
// ========================================

function obtenirDernierCours(cours) {

    if (!Array.isArray(cours) ||
        cours.length === 0) {

        return null;
    }


    const coursAvecDates =
        cours
            .map((coursItem, index) => {

                return {
                    cours: coursItem,
                    index: index,
                    date: obtenirDateCours(coursItem)
                };

            })
            .filter(item => item.date !== null);


    // Si aucune date n'existe,
    // on considère que le dernier élément
    // est le dernier cours ajouté.

    if (coursAvecDates.length === 0) {

        return cours[cours.length - 1];

    }


    coursAvecDates.sort(
        (a, b) =>
            b.date.getTime() -
            a.date.getTime()
    );


    return coursAvecDates[0].cours;

}


// ========================================
// OBTENIR LE TITRE DU COURS
// ========================================

function obtenirTitreCours(cours) {

    if (!cours || typeof cours !== "object") {
        return "Dernier cours";
    }

    const champsTitre = [
        "titre",
        "title",
        "nom",
        "matiere",
        "chapitre"
    ];

    for (const champ of champsTitre) {

        if (
            typeof cours[champ] === "string" &&
            cours[champ].trim() !== ""
        ) {

            return cours[champ].trim();

        }

    }

    return "Dernier cours";

}


// ========================================
// OBTENIR LA DATE DU COURS
// ========================================

function obtenirTexteDate(cours) {

    const date =
        obtenirDateCours(cours);

    if (!date) {
        return "";
    }

    return date.toLocaleDateString(
        "fr-FR",
        {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }
    );

}


// ========================================
// METTRE À JOUR UNE CARTE
// ========================================

function mettreAJourCarte(carte) {

    const sujet =
        carte.dataset.subject;

    const cours =
        recupererCours(sujet);

    const compteur =
        carte.querySelector(
            ".course-count-number"
        );

    const dernierCours =
        carte.querySelector(
            ".last-course"
        );


    // Nombre de cours

    if (compteur) {

        compteur.textContent =
            cours.length;

    }


    // Dernier cours

    if (!dernierCours) {
        return;
    }


    if (cours.length === 0) {

        dernierCours.className =
            "last-course empty";

        dernierCours.textContent =
            "Aucun cours enregistré pour le moment.";

        return;

    }


    const dernier =
        obtenirDernierCours(cours);

    const titre =
        obtenirTitreCours(dernier);

    const date =
        obtenirTexteDate(dernier);


    dernierCours.className =
        "last-course";


    dernierCours.innerHTML = `
        <span class="last-course-title">
            📌 ${echapperHTML(titre)}
        </span>

        ${
            date
                ? `<span class="last-course-date">
                    📅 ${date}
                   </span>`
                : `<span class="last-course-date">
                    Dernier cours enregistré
                   </span>`
        }
    `;

}


// ========================================
// METTRE À JOUR TOUTES LES CARTES
// ========================================

function mettreAJourCours() {

    courseCards.forEach(
        carte => mettreAJourCarte(carte)
    );

}


// ========================================
// PROTECTION HTML
// ========================================

function echapperHTML(texte) {

    if (texte === null ||
        texte === undefined) {

        return "";

    }

    return String(texte)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


// ========================================
// RECHERCHE + FILTRE + TRI
// ========================================

function filtrerCours() {

    const recherche =
        searchInput
            ? searchInput.value
                .toLowerCase()
                .trim()
            : "";

    const categorie =
        categoryFilter
            ? categoryFilter.value
            : "all";

    const tri =
        sortSelect
            ? sortSelect.value
            : "default";


    let cartes =
        [...courseCards];


    // ====================================
    // TRI A → Z
    // ====================================

    if (tri === "az") {

        cartes.sort((a, b) => {

            const nomA =
                a.querySelector("h2")
                    .textContent
                    .trim();

            const nomB =
                b.querySelector("h2")
                    .textContent
                    .trim();

            return nomA.localeCompare(
                nomB,
                "fr"
            );

        });

    }


    // ====================================
    // TRI Z → A
    // ====================================

    if (tri === "za") {

        cartes.sort((a, b) => {

            const nomA =
                a.querySelector("h2")
                    .textContent
                    .trim();

            const nomB =
                b.querySelector("h2")
                    .textContent
                    .trim();

            return nomB.localeCompare(
                nomA,
                "fr"
            );

        });

    }


    // ====================================
    // RÉORGANISER LES CARTES
    // ====================================

    cartes.forEach(carte => {

        coursesGrid.appendChild(carte);

    });


    // ====================================
    // AFFICHAGE
    // ====================================

    let nombreVisible = 0;


    cartes.forEach(carte => {

        const nom =
            carte.querySelector("h2")
                .textContent
                .toLowerCase();

        const professeur =
            carte.querySelector(
                ".course-teacher"
            )
                .textContent
                .toLowerCase();

        const categorieCarte =
            carte.dataset.category;


        const correspondRecherche =
            nom.includes(recherche) ||
            professeur.includes(recherche);


        const correspondCategorie =
            categorie === "all" ||
            categorieCarte === categorie;


        if (
            correspondRecherche &&
            correspondCategorie
        ) {

            carte.style.display =
                "flex";

            nombreVisible++;

        } else {

            carte.style.display =
                "none";

        }

    });


    // ====================================
    // COMPTEUR DE MATIÈRES
    // ====================================

    if (coursesCount) {

        coursesCount.textContent =
            nombreVisible === 1
                ? "1 matière"
                : `${nombreVisible} matières`;

    }


    // ====================================
    // AUCUN RÉSULTAT
    // ====================================

    if (noResults) {

        noResults.style.display =
            nombreVisible === 0
                ? "block"
                : "none";

    }

}


// ========================================
// ÉVÉNEMENTS
// ========================================

if (searchInput) {

    searchInput.addEventListener(
        "input",
        filtrerCours
    );

}


if (categoryFilter) {

    categoryFilter.addEventListener(
        "change",
        filtrerCours
    );

}


if (sortSelect) {

    sortSelect.addEventListener(
        "change",
        filtrerCours
    );

}


// ========================================
// INITIALISATION
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        mettreAJourCours();

        filtrerCours();

    }
);


// ========================================
// ACTUALISATION AUTOMATIQUE
// Quand on revient sur la page
// ========================================

window.addEventListener(
    "pageshow",
    () => {

        mettreAJourCours();

        filtrerCours();

    }
);
```
