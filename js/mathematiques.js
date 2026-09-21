// ========================================
// FICHE DE COURS — MATHÉMATIQUES
// ========================================


// ========================================
// RÉCUPÉRER LES COURS
// ========================================

function recupererCours() {

    const cours = localStorage.getItem("cours-mathematiques");

    if (cours) {
        return JSON.parse(cours);
    }

    return [];
}


// ========================================
// SAUVEGARDER LES COURS
// ========================================

function sauvegarderCours(cours) {

    localStorage.setItem(
        "cours-mathematiques",
        JSON.stringify(cours)
    );
}


// ========================================
// AJOUTER UN COURS
// ========================================

function ajouterCours(cours) {

    const coursExistants = recupererCours();

    coursExistants.push(cours);

    sauvegarderCours(coursExistants);
}


// ========================================
// SUPPRIMER UN COURS
// ========================================

function supprimerCours(index) {

    const cours = recupererCours();

    cours.splice(index, 1);

    sauvegarderCours(cours);
}


// ========================================
// MODIFIER UN COURS
// ========================================

function modifierCours(index, nouveauCours) {

    const cours = recupererCours();

    cours[index] = nouveauCours;

    sauvegarderCours(cours);
}


// ========================================
// FORMULAIRE D'AJOUT
// ========================================

const formulaire = document.getElementById("course-form");

if (formulaire) {

    formulaire.addEventListener("submit", function (event) {

        event.preventDefault();


        const date =
            document.getElementById("course-date").value;

        const titre =
            document.getElementById("course-title").value;

        const contenu =
            document.getElementById("course-content").value;

        const devoir =
            document.getElementById("course-homework").value;

        const lien =
            document.getElementById("course-link").value;


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


        afficherCours();

    });

}


// ========================================
// AFFICHER LES COURS
// ========================================

function afficherCours() {

    const liste =
        document.getElementById("courses-list");


    if (!liste) {
        return;
    }


    const cours = recupererCours();


    // Aucun cours
    if (cours.length === 0) {

        liste.innerHTML = `
            <p class="empty-courses">
                Aucun cours enregistré pour le moment.
            </p>
        `;

        return;
    }


    // Nettoyage
    liste.innerHTML = "";


    // Affichage
    cours.forEach(function (cours, index) {

        const bloc =
            document.createElement("div");


        bloc.className = "lesson";


        bloc.innerHTML = `

            <strong>
                ${echapperHTML(cours.titre)}
            </strong>


            <span>
                📅 ${echapperHTML(cours.date)}
            </span>


            <p>
                ${echapperHTML(cours.contenu)}
            </p>


            ${
                cours.devoir
                ? `
                    <p>
                        <strong>📚 Devoir :</strong>
                        ${echapperHTML(cours.devoir)}
                    </p>
                `
                : ""
            }


            ${
                cours.lien
                ? `
                    <p>
                        🔗
                        <a
                            href="${echapperHTML(cours.lien)}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ouvrir le document
                        </a>
                    </p>
                `
                : ""
            }


            <div class="course-actions">

                <button
                    type="button"
                    onclick="ouvrirModification(${index})"
                >
                    ✏️ Modifier
                </button>


                <button
                    type="button"
                    onclick="supprimerEtActualiser(${index})"
                >
                    🗑️ Supprimer
                </button>

            </div>

        `;


        liste.appendChild(bloc);

    });

}


// ========================================
// PROTECTION DU TEXTE HTML
// ========================================

function echapperHTML(texte) {

    if (!texte) {
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
// OUVRIR LE FORMULAIRE DE MODIFICATION
// ========================================

function ouvrirModification(index) {

    const cours = recupererCours();

    const coursActuel = cours[index];


    if (!coursActuel) {
        return;
    }


    const sectionModification =
        document.getElementById("edit-course-section");


    const date =
        document.getElementById("edit-course-date");

    const titre =
        document.getElementById("edit-course-title");

    const contenu =
        document.getElementById("edit-course-content");

    const devoir =
        document.getElementById("edit-course-homework");

    const lien =
        document.getElementById("edit-course-link");


    if (!sectionModification) {
        alert(
            "⚠️ Le formulaire de modification est introuvable."
        );

        return;
    }


    // Remplir le formulaire
    date.value =
        coursActuel.date || "";

    titre.value =
        coursActuel.titre || "";

    contenu.value =
        coursActuel.contenu || "";

    devoir.value =
        coursActuel.devoir || "";

    lien.value =
        coursActuel.lien || "";


    // Enregistrer l'index du cours
    sectionModification.dataset.index = index;


    // Afficher le formulaire
    sectionModification.style.display = "block";


    // Faire défiler automatiquement vers le formulaire
    sectionModification.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// ========================================
// FORMULAIRE DE MODIFICATION
// ========================================

const formulaireModification =
    document.getElementById("edit-course-form");


if (formulaireModification) {

    formulaireModification.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const sectionModification =
                document.getElementById(
                    "edit-course-section"
                );


            const index =
                Number(
                    sectionModification.dataset.index
                );


            const nouveauCours = {

                date:
                    document.getElementById(
                        "edit-course-date"
                    ).value,

                titre:
                    document.getElementById(
                        "edit-course-title"
                    ).value,

                contenu:
                    document.getElementById(
                        "edit-course-content"
                    ).value,

                devoir:
                    document.getElementById(
                        "edit-course-homework"
                    ).value,

                lien:
                    document.getElementById(
                        "edit-course-link"
                    ).value

            };


            modifierCours(
                index,
                nouveauCours
            );


            // Cacher le formulaire
            sectionModification.style.display =
                "none";


            // Supprimer l'index enregistré
            delete sectionModification.dataset.index;


            // Actualiser la liste
            afficherCours();


            alert(
                "✅ Le cours a été modifié !"
            );

        }
    );

}


// ========================================
// ANNULER LA MODIFICATION
// ========================================

const boutonAnnuler =
    document.getElementById(
        "cancel-edit-button"
    );


if (boutonAnnuler) {

    boutonAnnuler.addEventListener(
        "click",
        function () {

            const sectionModification =
                document.getElementById(
                    "edit-course-section"
                );


            // Cacher le formulaire
            sectionModification.style.display =
                "none";


            // Réinitialiser le formulaire
            formulaireModification.reset();


            // Supprimer l'index
            delete sectionModification.dataset.index;

        }
    );

}


// ========================================
// SUPPRIMER ET ACTUALISER
// ========================================

function supprimerEtActualiser(index) {

    const confirmation = confirm(
        "Voulez-vous vraiment supprimer ce cours ?"
    );


    if (!confirmation) {
        return;
    }


    supprimerCours(index);


    afficherCours();

}


// ========================================
// AFFICHAGE AU CHARGEMENT
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        afficherCours();

    }
);
