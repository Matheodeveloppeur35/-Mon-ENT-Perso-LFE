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
// RÉCUPÉRER TOUS LES COURS
// ========================================

function obtenirTousLesCours() {

    return recupererCours();
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


    // Nettoyage de la liste
    liste.innerHTML = "";


    // Affichage des cours
    cours.forEach(function (cours, index) {

        const bloc =
            document.createElement("div");


        bloc.className = "lesson";


        bloc.innerHTML = `

            <strong>
                ${cours.titre}
            </strong>

            <span>
                📅 ${cours.date}
            </span>

            <p>
                ${cours.contenu}
            </p>


            ${
                cours.devoir
                ? `
                    <p>
                        <strong>📚 Devoir :</strong>
                        ${cours.devoir}
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
                            href="${cours.lien}"
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
                    onclick="modifierEtActualiser(${index})"
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
// MODIFIER ET ACTUALISER
// ========================================

function modifierEtActualiser(index) {

    const cours = recupererCours();

    const coursActuel = cours[index];


    if (!coursActuel) {
        return;
    }


    const nouveauTitre = prompt(
        "📝 Titre du cours :",
        coursActuel.titre
    );


    if (nouveauTitre === null) {
        return;
    }


    const nouveauContenu = prompt(
        "📖 Contenu du cours :",
        coursActuel.contenu
    );


    if (nouveauContenu === null) {
        return;
    }


    const nouveauDevoir = prompt(
        "📚 Devoir à faire :",
        coursActuel.devoir || ""
    );


    if (nouveauDevoir === null) {
        return;
    }


    const nouveauLien = prompt(
        "🔗 Document ou lien :",
        coursActuel.lien || ""
    );


    if (nouveauLien === null) {
        return;
    }


    const nouveauCours = {

        date: coursActuel.date,

        titre: nouveauTitre,

        contenu: nouveauContenu,

        devoir: nouveauDevoir,

        lien: nouveauLien

    };


    modifierCours(index, nouveauCours);

    afficherCours();


    alert("✅ Le cours a été modifié !");

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
