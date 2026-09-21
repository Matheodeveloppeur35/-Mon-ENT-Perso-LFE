// ========================================
// FICHE DE COURS — ANGLAIS LV1
// ========================================


// ========================================
// RÉCUPÉRER LES COURS
// ========================================

function recupererCours() {

    const cours = localStorage.getItem("cours-anglais");

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
        "cours-anglais",
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
// ÉCHAPPER LE HTML
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
// FORMULAIRE D'AJOUT
// ========================================

const formulaire =
    document.getElementById("course-form");


if (formulaire) {

    formulaire.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const date =
                document.getElementById(
                    "course-date"
                ).value;


            const titre =
                document.getElementById(
                    "course-title"
                ).value;


            const contenu =
                document.getElementById(
                    "course-content"
                ).value;


            const devoir =
                document.getElementById(
                    "course-homework"
                ).value;


            const lien =
                document.getElementById(
                    "course-link"
                ).value;


            const nouveauCours = {

                date: date,

                titre: titre,

                contenu: contenu,

                devoir: devoir,

                lien: lien

            };


            ajouterCours(nouveauCours);


            alert(
                "✅ Le cours d'anglais a été enregistré !"
            );


            formulaire.reset();


            afficherCours();

        }
    );

}


// ========================================
// AFFICHER LES COURS
// ========================================

function afficherCours() {

    const liste =
        document.getElementById(
            "courses-list"
        );


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
    cours.forEach(
        function (cours, index) {

            const bloc =
                document.createElement(
                    "div"
                );


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
                            <strong>
                                📚 Devoir :
                            </strong>

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

        }
    );

}


// ========================================
// OUVRIR LA MODIFICATION
// ========================================

function ouvrirModification(index) {

    const cours = recupererCours();

    const coursActuel = cours[index];


    if (!coursActuel) {
        return;
    }


    const section =
        document.getElementById(
            "edit-course-section"
        );


    if (!section) {

        alert(
            "⚠️ Le formulaire de modification est introuvable."
        );

        return;
    }


    document.getElementById(
        "edit-course-date"
    ).value =
        coursActuel.date || "";


    document.getElementById(
        "edit-course-title"
    ).value =
        coursActuel.titre || "";


    document.getElementById(
        "edit-course-content"
    ).value =
        coursActuel.contenu || "";


    document.getElementById(
        "edit-course-homework"
    ).value =
        coursActuel.devoir || "";


    document.getElementById(
        "edit-course-link"
    ).value =
        coursActuel.lien || "";


    section.dataset.index = index;


    section.style.display = "block";


    section.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

}


// ========================================
// FORMULAIRE DE MODIFICATION
// ========================================

const formulaireModification =
    document.getElementById(
        "edit-course-form"
    );


if (formulaireModification) {

    formulaireModification.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const section =
                document.getElementById(
                    "edit-course-section"
                );


            const index =
                Number(
                    section.dataset.index
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


            section.style.display =
                "none";


            delete section.dataset.index;


            formulaireModification.reset();


            afficherCours();


            alert(
                "✅ Le cours d'anglais a été modifié !"
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

            const section =
                document.getElementById(
                    "edit-course-section"
                );


            section.style.display =
                "none";


            formulaireModification.reset();


            delete section.dataset.index;

        }
    );

}


// ========================================
// SUPPRIMER UN COURS
// ========================================

function supprimerEtActualiser(index) {

    const confirmation =
        confirm(
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
