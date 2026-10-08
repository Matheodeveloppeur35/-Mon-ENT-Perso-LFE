const courseSources = [

    ["cours-francais-histoire-geo", "Français / Histoire-Géo / EMC"],
    ["cours-mathematiques", "Mathématiques"],
    ["cours-anglais", "Anglais LV1"],
    ["cours-sciences-physiques", "Sciences physiques"],
    ["cours-enseignement-professionnel", "Enseignement professionnel"],
    ["cours-pratique-professionnelle", "Pratique professionnelle"],
    ["cours-arts-appliques", "Arts appliqués / Culture artistique"],
    ["cours-soutien-au-parcours", "Soutien au parcours"],
    ["cours-prevention-sante-environnement", "Prévention-Santé-Environnement"],
    ["cours-economie-gestion", "Économie & Gestion"],
    ["cours-realisation-projet", "Réalisation projet"],
    ["cours-education-physique-sportive", "Éducation physique & sportive"]

];


function chargerDonnees(cle) {

    try {

        return JSON.parse(localStorage.getItem(cle)) || [];

    } catch (erreur) {

        console.error("Erreur de lecture :", cle, erreur);

        return [];

    }

}


function echapperHTML(valeur) {

    return String(valeur ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

}


function convertirDate(date, heure = "00:00") {

    if (!date) {
        return null;
    }

    const resultat = new Date(`${date}T${heure}:00`);

    return isNaN(resultat) ? null : resultat;

}


function formaterDate(date) {

    if (!date) {
        return "";
    }

    const resultat = new Date(`${date}T12:00:00`);

    if (isNaN(resultat)) {
        return date;
    }

    return resultat.toLocaleDateString("fr-FR");
}


/* ================================
   DATE DU JOUR
================================ */

function afficherDate() {

    const element = document.getElementById("current-date");

    if (!element) {
        return;
    }

    const aujourdHui = new Date();

    element.textContent =
        new Intl.DateTimeFormat("fr-FR", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        }).format(aujourdHui);

}


/* ================================
   DEVOIRS
================================ */

function afficherDevoirs() {

    const element = document.getElementById("next-homework");

    if (!element) {
        return;
    }

    const aujourdHui = new Date();

    aujourdHui.setHours(0, 0, 0, 0);


    const devoirs = chargerDonnees("mes-devoirs")
        .filter(devoir => {

            const termine =
                devoir.termine === true ||
                devoir.done === true ||
                devoir.statut === "done";

            if (termine) {
                return false;
            }

            const dateDevoir = convertirDate(devoir.date);

            return dateDevoir && dateDevoir >= aujourdHui;

        })
        .sort((a, b) => {

            return convertirDate(a.date) - convertirDate(b.date);

        });


    if (devoirs.length === 0) {

        element.innerHTML =
            `<span class="muted">
                Aucun devoir à venir.
            </span>`;

        return;

    }


    const devoir = devoirs[0];


    element.innerHTML = `

        <div class="item">

            <strong>
                ${echapperHTML(devoir.matiere)}
            </strong>

            <br>

            ${echapperHTML(devoir.titre)}

            <br>

            <span class="muted">
                Pour le ${formaterDate(devoir.date)}
            </span>

        </div>

    `;

}


/* ================================
   CONTROLES
================================ */

function afficherControles() {

    const element = document.getElementById("next-control");

    if (!element) {
        return;
    }


    const maintenant = new Date();


    const controles = chargerDonnees("mes-controles")
        .map(controle => {

            return {
                ...controle,
                dateObjet:
                    convertirDate(
                        controle.date,
                        controle.time || "00:00"
                    )
            };

        })
        .filter(controle => {

            return controle.dateObjet &&
                   controle.dateObjet >= maintenant;

        })
        .sort((a, b) => {

            return a.dateObjet - b.dateObjet;

        });


    if (controles.length === 0) {

        element.innerHTML =
            `<span class="muted">
                Aucun contrôle programmé.
            </span>`;

        return;

    }


    const controle = controles[0];


    element.innerHTML = `

        <div class="item">

            <strong>
                ${echapperHTML(controle.matiere)}
            </strong>

            <br>

            ${echapperHTML(controle.titre)}

            <br>

            <span class="muted">

                ${formaterDate(controle.date)}

                ${controle.time
                    ? " à " + echapperHTML(controle.time)
                    : ""}

            </span>

        </div>

    `;

}


/* ================================
   NOTES
================================ */

function afficherNotes() {

    const element = document.getElementById("notes-summary");

    if (!element) {
        return;
    }


    const notes = chargerDonnees("mes-notes");


    if (notes.length === 0) {

        element.innerHTML =
            `<span class="muted">
                Aucune note enregistrée.
            </span>`;

        return;

    }


    let totalPoints = 0;
    let totalCoefficients = 0;


    notes.forEach(note => {

        const valeur = Number(note.note) || 0;
        const coefficient = Number(note.coefficient) || 1;

        totalPoints += valeur * coefficient;
        totalCoefficients += coefficient;

    });


    const moyenne =
        totalCoefficients > 0
            ? totalPoints / totalCoefficients
            : 0;


    element.innerHTML = `

        <strong>
            ${moyenne.toFixed(2)}/20
        </strong>

        <br>

        <span class="muted">

            ${notes.length}
            note${notes.length > 1 ? "s" : ""}

        </span>

    `;

}


/* ================================
   DERNIERS COURS
================================ */

function afficherCoursRecents() {

    const element = document.getElementById("recent-courses");

    if (!element) {
        return;
    }


    let tousLesCours = [];


    courseSources.forEach(([cle, matiere]) => {

        const cours = chargerDonnees(cle);


        cours.forEach(coursItem => {

            tousLesCours.push({

                ...coursItem,

                matiere: matiere

            });

        });

    });


    tousLesCours.sort((a, b) => {

        return new Date(b.date || 0) -
               new Date(a.date || 0);

    });


    const derniersCours =
        tousLesCours.slice(0, 3);


    if (derniersCours.length === 0) {

        element.innerHTML =
            `<span class="muted">
                Aucun cours enregistré.
            </span>`;

        return;

    }


    element.innerHTML = derniersCours
        .map(cours => {

            return `

                <div class="item">

                    <strong>
                        ${echapperHTML(cours.matiere)}
                    </strong>

                    <br>

                    ${echapperHTML(
                        cours.titre || "Cours"
                    )}

                    ${
                        cours.date
                            ? `<br>
                               <span class="muted">
                                   ${formaterDate(cours.date)}
                               </span>`
                            : ""
                    }

                </div>

            `;

        })
        .join("");

}


/* ================================
   ABSENCES
================================ */

function afficherAbsences() {

    const element =
        document.getElementById("absence-summary");


    if (!element) {
        return;
    }


    const absences =
        chargerDonnees("mon-ent-absences-professeurs");


    if (absences.length === 0) {

        element.innerHTML =
            `<span class="muted">
                Aucune absence signalée.
            </span>`;

        return;

    }


    const derniere =
        absences[absences.length - 1];


    const professeur =
        derniere.teacher ||
        derniere.professeur ||
        "Professeur";


    const remplacement =
        derniere.replacement ||
        derniere.remplacement ||
        "Absence signalée";


    element.innerHTML = `

        <div class="item">

            <strong>
                ${echapperHTML(professeur)}
            </strong>

            <br>

            ${echapperHTML(remplacement)}

        </div>

    `;

}


/* ================================
   INITIALISATION
================================ */

function initialiserAccueil() {

    afficherDate();
    afficherDevoirs();
    afficherControles();
    afficherNotes();
    afficherCoursRecents();
    afficherAbsences();

}


document.addEventListener(
    "DOMContentLoaded",
    initialiserAccueil
);


window.addEventListener(
    "pageshow",
    initialiserAccueil
);
