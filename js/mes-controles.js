// =========================
// MES CONTRÔLES
// =========================

const STORAGE_KEY = "mes-controles";

let controles = JSON.parse(
    localStorage.getItem(STORAGE_KEY)
) || [];

let controleEnModification = null;


// =========================
// MATIÈRES
// =========================

const matieres = [
    "Mathématiques",
    "Anglais LV1",
    "Français / Histoire-Géo / EMC",
    "Sciences physiques",
    "Enseignement professionnel",
    "Pratique professionnelle",
    "Arts appliqués / Culture artistique",
    "Soutien au parcours",
    "Prévention-Santé-Environnement",
    "Économie & Gestion",
    "Réalisation projet",
    "Éducation physique & sportive"
];


// =========================
// ÉLÉMENTS
// =========================

const controlForm =
    document.getElementById("control-form");

const controlSubject =
    document.getElementById("control-subject");

const controlTitle =
    document.getElementById("control-title");

const controlDate =
    document.getElementById("control-date");

const controlTime =
    document.getElementById("control-time");

const controlRoom =
    document.getElementById("control-room");

const controlChapter =
    document.getElementById("control-chapter");

const controlDescription =
    document.getElementById("control-description");

const controlsList =
    document.getElementById("controls-list");

const searchControl =
    document.getElementById("search-control");

const subjectFilter =
    document.getElementById("subject-filter");

const statusFilter =
    document.getElementById("status-filter");

const editSection =
    document.getElementById("edit-control-section");

const editForm =
    document.getElementById("edit-control-form");

const editSubject =
    document.getElementById("edit-control-subject");

const editTitle =
    document.getElementById("edit-control-title");

const editDate =
    document.getElementById("edit-control-date");

const editTime =
    document.getElementById("edit-control-time");

const editRoom =
    document.getElementById("edit-control-room");

const editChapter =
    document.getElementById("edit-control-chapter");

const editDescription =
    document.getElementById("edit-control-description");

const cancelEdit =
    document.getElementById("cancel-edit");


// =========================
// SAUVEGARDE
// =========================

function sauvegarderControles() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(controles)
    );

}


// =========================
// PROTECTION HTML
// =========================

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


// =========================
// DATE LOCALE
// =========================

function obtenirDateLocale() {

    const maintenant = new Date();

    const annee =
        maintenant.getFullYear();

    const mois =
        String(
            maintenant.getMonth() + 1
        ).padStart(2, "0");

    const jour =
        String(
            maintenant.getDate()
        ).padStart(2, "0");

    return `${annee}-${mois}-${jour}`;

}


// =========================
// STATUT DU CONTRÔLE
// =========================

function obtenirStatut(controle) {

    const aujourdHui =
        obtenirDateLocale();

    if (controle.date < aujourdHui) {

        return "passed";

    }

    if (controle.date === aujourdHui) {

        return "today";

    }

    return "upcoming";

}


// =========================
// TEXTE DU STATUT
// =========================

function obtenirTexteStatut(statut) {

    if (statut === "today") {
        return "🟠 Aujourd'hui";
    }

    if (statut === "passed") {
        return "✅ Passé";
    }

    return "🔵 À venir";

}


// =========================
// FORMATAGE DATE
// =========================

function formaterDate(date) {

    if (!date) {
        return "";
    }

    const morceaux =
        date.split("-");

    if (morceaux.length !== 3) {
        return date;
    }

    return (
        morceaux[2] +
        "/" +
        morceaux[1] +
        "/" +
        morceaux[0]
    );

}


// =========================
// DATE + HEURE POUR TRI
// =========================

function obtenirDateTri(controle) {

    const heure =
        controle.time || "00:00";

    return new Date(
        `${controle.date}T${heure}`
    );

}


// =========================
// AFFICHER LES STATISTIQUES
// =========================

function afficherStatistiques() {

    const total =
        controles.length;

    const upcoming =
        controles.filter(
            controle =>
                obtenirStatut(controle) === "upcoming"
        ).length;

    const today =
        controles.filter(
            controle =>
                obtenirStatut(controle) === "today"
        ).length;

    const passed =
        controles.filter(
            controle =>
                obtenirStatut(controle) === "passed"
        ).length;


    document.getElementById(
        "total-controls"
    ).textContent = total;

    document.getElementById(
        "upcoming-controls"
    ).textContent = upcoming;

    document.getElementById(
        "today-controls"
    ).textContent = today;

    document.getElementById(
        "passed-controls"
    ).textContent = passed;

}


// =========================
// AFFICHER LES CONTRÔLES
// =========================

function afficherControles() {

    const recherche =
        searchControl.value
            .trim()
            .toLowerCase();

    const matiere =
        subjectFilter.value;

    const statutFiltre =
        statusFilter.value;


    let controlesFiltres =
        controles.filter(controle => {

            const texteRecherche = (

                controle.titre +
                " " +
                controle.matiere +
                " " +
                controle.chapitre +
                " " +
                controle.description +
                " " +
                controle.salle

            ).toLowerCase();


            const correspondRecherche =
                texteRecherche.includes(
                    recherche
                );


            const correspondMatiere =
                matiere === "all" ||
                controle.matiere === matiere;


            const statut =
                obtenirStatut(controle);


            const correspondStatut =
                statutFiltre === "all" ||
                statut === statutFiltre;


            return (
                correspondRecherche &&
                correspondMatiere &&
                correspondStatut
            );

        });


    // =========================
    // TRI PAR DATE
    // =========================

    controlesFiltres.sort(
        (a, b) =>
            obtenirDateTri(a) -
            obtenirDateTri(b)
    );


    // =========================
    // LISTE VIDE
    // =========================

    if (controlesFiltres.length === 0) {

        controlsList.innerHTML = `
            <div class="empty-message">
                📭 Aucun contrôle ne correspond à ta recherche.
            </div>
        `;

        return;

    }


    // =========================
    // AFFICHAGE
    // =========================

    controlsList.innerHTML =
        controlesFiltres.map(controle => {

            const statut =
                obtenirStatut(controle);

            const classe =
                statut === "today"
                    ? "today"
                    : statut === "passed"
                        ? "passed"
                        : "";


            const texteStatut =
                obtenirTexteStatut(
                    statut
                );


            const heure =
                controle.time
                    ? `🕐 ${echapperHTML(controle.time)}`
                    : "";


            const salle =
                controle.room
                    ? `📍 ${echapperHTML(controle.room)}`
                    : "";


            const chapitre =
                controle.chapitre
                    ? `
                        <div class="control-description">
                            📖 <strong>Chapitre :</strong>
                            ${echapperHTML(controle.chapitre)}
                        </div>
                    `
                    : "";


            const description =
                controle.description
                    ? `
                        <div class="control-description">
                            ${echapperHTML(controle.description)}
                        </div>
                    `
                    : "";


            return `

                <article
                    class="control-card ${classe}"
                >

                    <h3>
                        ${echapperHTML(controle.titre)}
                    </h3>


                    <div class="control-meta">

                        <span class="control-badge">
                            📚 ${echapperHTML(controle.matiere)}
                        </span>

                        <span class="control-badge">
                            📅 ${formaterDate(controle.date)}
                        </span>

                        ${
                            heure
                                ? `
                                    <span class="control-badge">
                                        ${heure}
                                    </span>
                                `
                                : ""
                        }

                        ${
                            salle
                                ? `
                                    <span class="control-badge">
                                        ${salle}
                                    </span>
                                `
                                : ""
                        }

                        <span class="control-badge ${classe}">
                            ${texteStatut}
                        </span>

                    </div>


                    ${chapitre}

                    ${description}


                    <div class="control-actions">

                        <button
                            type="button"
                            class="edit-button"
                            onclick="modifierControle('${controle.id}')"
                        >
                            ✏️ Modifier
                        </button>


                        <button
                            type="button"
                            class="delete-button"
                            onclick="supprimerControle('${controle.id}')"
                        >
                            🗑️ Supprimer
                        </button>

                    </div>

                </article>

            `;

        }).join("");

}


// =========================
// AJOUTER UN CONTRÔLE
// =========================

controlForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const nouveauControle = {

            id:
                Date.now().toString(),

            matiere:
                controlSubject.value,

            titre:
                controlTitle.value.trim(),

            date:
                controlDate.value,

            time:
                controlTime.value,

            room:
                controlRoom.value.trim(),

            chapitre:
                controlChapter.value.trim(),

            description:
                controlDescription.value.trim()

        };


        controles.push(
            nouveauControle
        );


        sauvegarderControles();

        controlForm.reset();

        afficherControles();

        afficherStatistiques();

    }
);


// =========================
// MODIFIER
// =========================

function modifierControle(id) {

    const controle =
        controles.find(
            item => item.id === id
        );


    if (!controle) {
        return;
    }


    controleEnModification =
        id;


    editSubject.innerHTML =
        matieres.map(matiere => `

            <option
                value="${echapperHTML(matiere)}"
                ${controle.matiere === matiere ? "selected" : ""}
            >
                ${echapperHTML(matiere)}
            </option>

        `).join("");


    editTitle.value =
        controle.titre || "";

    editDate.value =
        controle.date || "";

    editTime.value =
        controle.time || "";

    editRoom.value =
        controle.room || "";

    editChapter.value =
        controle.chapitre || "";

    editDescription.value =
        controle.description || "";


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


        if (!controleEnModification) {
            return;
        }


        const index =
            controles.findIndex(
                item =>
                    item.id ===
                    controleEnModification
            );


        if (index === -1) {
            return;
        }


        controles[index] = {

            id:
                controleEnModification,

            matiere:
                editSubject.value,

            titre:
                editTitle.value.trim(),

            date:
                editDate.value,

            time:
                editTime.value,

            room:
                editRoom.value.trim(),

            chapitre:
                editChapter.value.trim(),

            description:
                editDescription.value.trim()

        };


        sauvegarderControles();


        controleEnModification =
            null;


        editForm.reset();

        editSection.style.display =
            "none";


        afficherControles();

        afficherStatistiques();

    }
);


// =========================
// ANNULER MODIFICATION
// =========================

cancelEdit.addEventListener(
    "click",
    function() {

        controleEnModification =
            null;

        editForm.reset();

        editSection.style.display =
            "none";

    }
);


// =========================
// SUPPRIMER
// =========================

function supprimerControle(id) {

    const controle =
        controles.find(
            item => item.id === id
        );


    if (!controle) {
        return;
    }


    const confirmation =
        confirm(
            `Supprimer le contrôle "${controle.titre}" ?`
        );


    if (!confirmation) {
        return;
    }


    controles =
        controles.filter(
            item => item.id !== id
        );


    sauvegarderControles();

    afficherControles();

    afficherStatistiques();

}


// =========================
// RECHERCHE
// =========================

searchControl.addEventListener(
    "input",
    afficherControles
);


// =========================
// FILTRE MATIÈRE
// =========================

subjectFilter.addEventListener(
    "change",
    afficherControles
);


// =========================
// FILTRE STATUT
// =========================

statusFilter.addEventListener(
    "change",
    afficherControles
);


// =========================
// INITIALISATION
// =========================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        afficherControles();

        afficherStatistiques();

    }
);


// =========================
// PAGESHOW
// =========================

window.addEventListener(
    "pageshow",
    function() {

        controles =
            JSON.parse(
                localStorage.getItem(
                    STORAGE_KEY
                )
            ) || [];


        afficherControles();

        afficherStatistiques();

    }
);
