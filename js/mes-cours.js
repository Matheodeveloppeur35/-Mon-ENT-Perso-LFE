
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-course");
    const categoryFilter = document.getElementById("course-filter");
    const sortSelect = document.getElementById("course-sort");
    const coursesGrid = document.getElementById("courses-grid");
    const countElement = document.getElementById("courses-count");
    const noResults = document.getElementById("no-results");

    // Vérifier que les éléments nécessaires existent dans la page.
    if (
        !searchInput ||
        !categoryFilter ||
        !sortSelect ||
        !coursesGrid ||
        !countElement ||
        !noResults
    ) {
        console.error(
            "Mon ENT Perso LFE : certains éléments de la page Mes cours sont manquants."
        );
        return;
    }

    // Mémoriser l'ordre initial des matières.
    const originalCards = Array.from(
        coursesGrid.querySelectorAll(".course-card")
    );

    // Préparer le texte pour une recherche sans différence d'accents.
    function normaliserTexte(texte) {
        return texte
            .toLocaleLowerCase("fr")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();
    }

    // Appliquer la recherche, le filtre et le tri.
    function afficherMatieres() {
        const recherche = normaliserTexte(searchInput.value);
        const categorie = categoryFilter.value;
        const tri = sortSelect.value;

        const cartesFiltrees = originalCards.filter((carte) => {
            const nom = normaliserTexte(
                carte.dataset.name || carte.textContent
            );

            const description = normaliserTexte(carte.textContent);
            const correspondRecherche =
                nom.includes(recherche) ||
                description.includes(recherche);

            const correspondCategorie =
                categorie === "all" ||
                carte.dataset.category === categorie;

            return correspondRecherche && correspondCategorie;
        });

        // Trier les matières selon le choix.
        if (tri === "az") {
            cartesFiltrees.sort((a, b) =>
                (a.dataset.name || "").localeCompare(
                    b.dataset.name || "",
                    "fr",
                    { sensitivity: "base" }
                )
            );
        } else if (tri === "za") {
            cartesFiltrees.sort((a, b) =>
                (b.dataset.name || "").localeCompare(
                    a.dataset.name || "",
                    "fr",
                    { sensitivity: "base" }
                )
            );
        } else {
            // Retrouver l'ordre initial.
            cartesFiltrees.sort(
                (a, b) =>
                    originalCards.indexOf(a) - originalCards.indexOf(b)
            );
        }

        // Réafficher uniquement les matières correspondantes.
        coursesGrid.replaceChildren(...cartesFiltrees);

        // Mettre à jour le nombre de résultats.
        const nombre = cartesFiltrees.length;
        countElement.textContent =
            nombre + (nombre > 1 ? " matières affichées" : " matière affichée");

        // Afficher un message si aucun résultat ne correspond.
        noResults.style.display = nombre === 0 ? "block" : "none";
        coursesGrid.style.display = nombre === 0 ? "none" : "grid";
    }

    // Réagir aux changements.
    searchInput.addEventListener("input", afficherMatieres);
    categoryFilter.addEventListener("change", afficherMatieres);
    sortSelect.addEventListener("change", afficherMatieres);

    // Affichage initial.
    afficherMatieres();
});
