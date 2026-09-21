// =========================
// MES COURS
// RECHERCHE + FILTRES
// =========================

const searchInput =
    document.getElementById("search-course");

const filterSelect =
    document.getElementById("course-filter");

const courseCards =
    document.querySelectorAll(".course-card");

const coursesCount =
    document.getElementById("courses-count");

const noResults =
    document.getElementById("no-results");


// =========================
// FILTRER LES COURS
// =========================

function filtrerCours() {

    const recherche =
        searchInput.value
            .toLowerCase()
            .trim();

    const categorie =
        filterSelect.value;

    let nombreVisible = 0;


    courseCards.forEach(function(card) {

        const texte =
            card.textContent.toLowerCase();

        const cardCategorie =
            card.dataset.category;


        // Recherche
        const correspondRecherche =
            texte.includes(recherche);


        // Catégorie
        const correspondCategorie =
            categorie === "all" ||
            cardCategorie === categorie;


        // Affichage
        if (
            correspondRecherche &&
            correspondCategorie
        ) {

            card.style.display = "flex";

            nombreVisible++;

        } else {

            card.style.display = "none";

        }

    });


    // =========================
    // COMPTEUR
    // =========================

    if (nombreVisible === 0) {

        coursesCount.textContent =
            "Aucune matière trouvée";

        noResults.style.display =
            "block";

    } else {

        coursesCount.textContent =
            nombreVisible +
            (
                nombreVisible > 1
                    ? " matières affichées"
                    : " matière affichée"
            );

        noResults.style.display =
            "none";

    }

}


// =========================
// RECHERCHE
// =========================

searchInput.addEventListener(
    "input",
    filtrerCours
);


// =========================
// FILTRE
// =========================

filterSelect.addEventListener(
    "change",
    filtrerCours
);


// =========================
// AFFICHAGE INITIAL
// =========================

filtrerCours();
