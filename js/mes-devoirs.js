// =========================
// MES DEVOIRS
// =========================

const STORAGE_KEY = "mes-devoirs";

let devoirs = JSON.parse(
    localStorage.getItem(STORAGE_KEY)
) || [];

let devoirEnModification = null;


// =========================
// ÉLÉMENTS
// =========================

const homeworkForm =
    document.getElementById("homework-form");

const homeworkSubject =
    document.getElementById("homework-subject");

const homeworkTitle =
    document.getElementById("homework-title");

const homeworkDate =
    document.getElementById("homework-date");

const homeworkDescription =
    document.getElementById("homework-description");

const homeworkList =
    document.getElementById("homework-list");

const searchHomework =
    document.getElementById("search-homework");

const statusFilter =
    document.getElementById("status-filter");

const subjectFilter =
    document.getElementById("subject-filter");

const editSection =
    document.getElementById("edit-homework-section");

const editForm =
    document.getElementById("edit-homework-form");

const editSubject =
    document.getElementById("edit-homework-subject");

const editTitle =
    document.getElementById("edit-homework-title");

const editDate =
    document.getElementById("edit-homework-date");

const editDescription =
    document.getElementById("edit-homework-description");

const cancelEdit =
    document.getElementById("cancel-homework-edit");


// =========================
// SAUVEGARDE
// =========================

function sauvegarderDevoirs() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(devoirs)
    );

}


// =========================
// PROTECTION HTML
// =========================

function echapperHTML(texte) {

    if (!texte) {
        return "";
    }

    return texte
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


// =========================
// AFFICHER LES DEVOIRS
// =========================

function afficherDevoirs() {

    homeworkList.innerHTML = "";

    const recherche =
        searchHomework.value
            .toLowerCase()
            .trim();

    const statut =
        statusFilter.value;

    const matiere =
        subjectFilter.value;

    const devoirsFiltres =
        devoirs.filter(function(devoir) {

            const texte = (
                devoir.title +
                " " +
                devoir.subject +
                " " +
                devoir.description
            ).toLowerCase();

            const correspondRecherche =
                texte.includes(recherche);

            const correspondStatut =
                statut === "all" ||
                (statut === "todo" && !devoir.done) ||
                (statut === "done" && devoir.done);

            const correspondMatiere =
                matiere === "all" ||
                devoir.subject === matiere;

            return (
                correspondRecherche &&
                correspondStatut &&
                correspondMatiere
            );

        });


    if (devoirsFiltres.length === 0) {

        homeworkList.innerHTML = `
            <div class="empty-message">
                <div style="font-size:40px;">📭</div>
                <h3>Aucun devoir trouvé</h3>
                <p>
                    Aucun devoir ne correspond aux filtres sélectionnés.
                </p>
            </div>
        `;

        return;
    }


    devoirsFiltres.forEach(function(devoir) {

        const index =
            devoirs.indexOf(devoir);

        const card =
            document.createElement("article");

        card.className =
            "homework-card" +
            (devoir.done ? " done" : "");


        const badgeStatut =
            devoir.done
                ? `
                    <span class="badge badge-done">
                        🟢 Terminé
                    </span>
                  `
                : `
                    <span class="badge badge-todo">
                        🔴 À faire
                    </span>
                  `;


        card.innerHTML = `

            <h3>
                ${echapperHTML(devoir.title)}
            </h3>

            <div class="homework-info">

                <span class="badge">
                    📚 ${echapperHTML(devoir.subject)}
                </span>

                <span class="badge badge-date">
                    📅 ${echapperHTML(devoir.date)}
                </span>

                ${badgeStatut}

            </div>

            ${
                devoir.description
                    ? `
                        <p>
                            ${echapperHTML(devoir.description)
                                .replace(/\n/g, "<br>")}
                        </p>
                      `
                    : ""
            }

            <div class="homework-actions">

                <button
                    class="complete-button"
                    onclick="changerStatut(${index})"
                >
                    ${
                        devoir.done
                            ? "↩️ À refaire"
                            : "✅ Terminé"
                    }
                </button>

                <button
                    class="edit-button"
                    onclick="modifierDevoir(${index})"
                >
                    ✏️ Modifier
                </button>

                <button
                    class="delete-button"
                    onclick="supprimerDevoir(${index})"
                >
                    🗑️ Supprimer
                </button>

            </div>

        `;

        homeworkList.appendChild(card);

    });

}


// =========================
// AJOUTER
// =========================

homeworkForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const nouveauDevoir = {

            subject:
                homeworkSubject.value,

            title:
                homeworkTitle.value.trim(),

            date:
                homeworkDate.value,

            description:
                homeworkDescription.value.trim(),

            done:
                false

        };

        devoirs.push(nouveauDevoir);

        sauvegarderDevoirs();

        afficherDevoirs();

        homeworkForm.reset();

    }
);


// =========================
// MODIFIER
// =========================

function modifierDevoir(index) {

    const devoir =
        devoirs[index];

    devoirEnModification =
        index;

    editSubject.value =
        devoir.subject;

    editTitle.value =
        devoir.title;

    editDate.value =
        devoir.date;

    editDescription.value =
        devoir.description;

    editSection.style.display =
        "block";

    editSection.scrollIntoView({
        behavior: "smooth"
    });

}


// =========================
// ENREGISTRER MODIFICATION
// =========================

editForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        if (devoirEnModification === null) {
            return;
        }

        devoirs[devoirEnModification] = {

            subject:
                editSubject.value,

            title:
                editTitle.value.trim(),

            date:
                editDate.value,

            description:
                editDescription.value.trim(),

            done:
                devoirs[devoirEnModification].done

        };

        sauvegarderDevoirs();

        afficherDevoirs();

        devoirEnModification =
            null;

        editForm.reset();

        editSection.style.display =
            "none";

    }
);


// =========================
// ANNULER
// =========================

cancelEdit.addEventListener(
    "click",
    function() {

        devoirEnModification =
            null;

        editForm.reset();

        editSection.style.display =
            "none";

    }
);


// =========================
// TERMINER / ROUVRIR
// =========================

function changerStatut(index) {

    devoirs[index].done =
        !devoirs[index].done;

    sauvegarderDevoirs();

    afficherDevoirs();

}


// =========================
// SUPPRIMER
// =========================

function supprimerDevoir(index) {

    devoirs.splice(index, 1);

    sauvegarderDevoirs();

    afficherDevoirs();

}


// =========================
// FILTRES
// =========================

searchHomework.addEventListener(
    "input",
    afficherDevoirs
);

statusFilter.addEventListener(
    "change",
    afficherDevoirs
);

subjectFilter.addEventListener(
    "change",
    afficherDevoirs
);


// =========================
// AFFICHAGE INITIAL
// =========================

afficherDevoirs();
