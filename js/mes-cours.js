// =========================
// RECHERCHE DES COURS
// =========================

const searchInput = document.getElementById("search-course");
const courseCards = document.querySelectorAll(".course-card");

searchInput.addEventListener("input", function () {

    const recherche = searchInput.value.toLowerCase().trim();

    courseCards.forEach(function (card) {

        const texte = card.textContent.toLowerCase();

        if (texte.includes(recherche)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }

    });

});


// =========================
// BOUTONS « VOIR LES COURS »
// =========================

const buttons = document.querySelectorAll(".view-course-btn");

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        const matiere = button.dataset.course;

        alert(
            "📚 " + matiere +
            "\n\nLa fiche de cette matière sera bientôt disponible."
        );

    });

});
