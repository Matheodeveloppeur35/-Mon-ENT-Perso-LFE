// ========================================
// MES COURS
// Recherche + filtres + tri
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
// FILTRER LES COURS
// ========================================

function filtrerCours() {

    const recherche =
        searchInput.value
            .toLowerCase()
            .trim();

    const categorie =
        categoryFilter.value;

    const tri =
        sortSelect.value;


    // ====================================
    // TRI
    // ====================================

    let cartes = [...courseCards];


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


    // Remettre les cartes dans le bon ordre
    cartes.forEach(carte => {

        coursesGrid.appendChild(carte);

    });


    // ====================================
    // FILTRE
    // ====================================

    let nombreVisible = 0;


    cartes.forEach(carte => {

        const nom =
            carte.querySelector("h2")
                .textContent
                .toLowerCase();

        const professeur =
            carte.querySelector(".course-teacher")
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
    // COMPTEUR
    // ====================================

    coursesCount.textContent =
        nombreVisible === 1
            ? "1 matière"
            : `${nombreVisible} matières`;


    // ====================================
    // AUCUN RÉSULTAT
    // ====================================

    if (nombreVisible === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}


// ========================================
// ÉVÉNEMENTS
// ========================================

searchInput.addEventListener(
    "input",
    filtrerCours
);

categoryFilter.addEventListener(
    "change",
    filtrerCours
);

sortSelect.addEventListener(
    "change",
    filtrerCours
);


// ========================================
// INITIALISATION
// ========================================

filtrerCours();
