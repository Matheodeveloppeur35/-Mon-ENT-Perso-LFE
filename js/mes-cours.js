```javascript
// ========================================
// 📚 MES COURS
// Recherche + filtres + tri
// Compteur automatique des cours
// ========================================


// ========================================
// ÉLÉMENTS DE LA PAGE
// ========================================

const searchInput = document.getElementById("search-course");
const categoryFilter = document.getElementById("course-filter");
const sortSelect = document.getElementById("course-sort");

const coursesGrid = document.getElementById("courses-grid");

const courseCards = Array.from(
    document.querySelectorAll(".course-card")
);

const coursesCount = document.getElementById("courses-count");
const noResults = document.getElementById("no-results");


// ========================================
// CORRESPONDANCE MATIÈRE → LOCALSTORAGE
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
// OBTENIR LE NOMBRE DE COURS
// ========================================

function obtenirNombreCours(sujet) {

    const storageKey = storageKeys[sujet];

    if (!storageKey) {
        return 0;
    }

    try {

        const donnees =
            localStorage.getItem(storageKey);

        if (!donnees) {
            return 0;
        }

        const cours =
            JSON.parse(donnees);

        if (Array.isArray(cours)) {
            return cours.length;
        }

        return 0;

    } catch (erreur) {

        console.error(
            "Erreur lors de la lecture des cours :",
            sujet,
            erreur
        );

        return 0;
    }
}


// ========================================
// METTRE À JOUR LES COMPTEURS
// ========================================

function mettreAJourCompteurs() {

    courseCards.forEach(carte => {

        const sujet =
            carte.dataset.subject;

        const compteur =
            carte.querySelector(
                ".course-count-number"
            );

        if (!compteur) {
            return;
        }

        const nombre =
            obtenirNombreCours(sujet);

        compteur.textContent =
            nombre;

    });

}


// ========================================
// FILTRER ET TRIER LES COURS
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
    // RECHERCHE + FILTRE
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

            carte.style.display = "flex";

            nombreVisible++;

        } else {

            carte.style.display = "none";

        }

    });


    // ====================================
    // COMPTEUR DES MATIÈRES AFFICHÉES
    // ====================================

    if (coursesCount) {

        coursesCount.textContent =
            nombreVisible === 1
                ? "1 matière"
                : `${nombreVisible} matières`;

    }


    // ====================================
    // MESSAGE AUCUN RÉSULTAT
    // ====================================

    if (noResults) {

        if (nombreVisible === 0) {

            noResults.style.display =
                "block";

        } else {

            noResults.style.display =
                "none";

        }

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

        mettreAJourCompteurs();

        filtrerCours();

    }
);
```
