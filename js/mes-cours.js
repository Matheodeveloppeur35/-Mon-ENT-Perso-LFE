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
