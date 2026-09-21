// =========================
// GESTION DES COURS
// SCIENCES PHYSIQUES
// =========================

const STORAGE_KEY = "cours-sciences-physiques";

let courses = JSON.parse(
    localStorage.getItem(STORAGE_KEY)
) || [];


// =========================
// ÉLÉMENTS HTML
// =========================

const courseForm = document.getElementById("course-form");

const courseDate = document.getElementById("course-date");
const courseTitle = document.getElementById("course-title");
const courseContent = document.getElementById("course-content");
const courseHomework = document.getElementById("course-homework");
const courseLink = document.getElementById("course-link");

const coursesList = document.getElementById("courses-list");

const editSection = document.getElementById("edit-course-section");
const editForm = document.getElementById("edit-course-form");

const editDate = document.getElementById("edit-course-date");
const editTitle = document.getElementById("edit-course-title");
const editContent = document.getElementById("edit-course-content");
const editHomework = document.getElementById("edit-course-homework");
const editLink = document.getElementById("edit-course-link");

const cancelEditButton =
    document.getElementById("cancel-edit-button");

let courseToEdit = null;


// =========================
// SAUVEGARDE
// =========================

function sauvegarderCours() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(courses)
    );

}


// =========================
// ÉCHAPPER LE HTML
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
// AFFICHER LES COURS
// =========================

function afficherCours() {

    coursesList.innerHTML = "";

    if (courses.length === 0) {

        coursesList.innerHTML = `
            <p>
                Aucun cours enregistré pour le moment.
            </p>
        `;

        return;
    }


    courses.forEach(function(course, index) {

        const courseElement =
            document.createElement("div");

        courseElement.className = "saved-course";

        let lienHTML = "";

        if (course.link) {

            lienHTML = `
                <p>
                    📎
                    <a
                        href="${echapperHTML(course.link)}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ouvrir le document
                    </a>
                </p>
            `;

        }


        courseElement.innerHTML = `

            <h3>
                ${echapperHTML(course.title)}
            </h3>

            <p>
                📅
                ${echapperHTML(course.date)}
            </p>

            <p>
                <strong>📖 Contenu :</strong>
            </p>

            <p>
                ${echapperHTML(course.content)
                    .replace(/\n/g, "<br>")}
            </p>

            ${
                course.homework
                ?
                `
                <p>
                    <strong>📝 Devoirs :</strong>
                </p>

                <p>
                    ${echapperHTML(course.homework)
                        .replace(/\n/g, "<br>")}
                </p>
                `
                :
                ""
            }

            ${lienHTML}

            <div class="course-actions">

                <button
                    class="edit-button"
                    onclick="ouvrirModification(${index})"
                >
                    ✏️ Modifier
                </button>

                <button
                    class="delete-button"
                    onclick="supprimerEtActualiser(${index})"
                >
                    🗑️ Supprimer
                </button>

            </div>
        `;


        coursesList.appendChild(courseElement);

    });

}


// =========================
// AJOUTER UN COURS
// =========================

courseForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const nouveauCours = {

            date: courseDate.value,

            title: courseTitle.value.trim(),

            content: courseContent.value.trim(),

            homework: courseHomework.value.trim(),

            link: courseLink.value.trim()

        };


        courses.push(nouveauCours);

        sauvegarderCours();

        afficherCours();

        courseForm.reset();

    }
);


// =========================
// OUVRIR MODIFICATION
// =========================

function ouvrirModification(index) {

    const course = courses[index];

    courseToEdit = index;


    editDate.value = course.date;

    editTitle.value = course.title;

    editContent.value = course.content;

    editHomework.value = course.homework;

    editLink.value = course.link;


    editSection.style.display = "block";


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


        if (courseToEdit === null) {
            return;
        }


        courses[courseToEdit] = {

            date: editDate.value,

            title: editTitle.value.trim(),

            content: editContent.value.trim(),

            homework: editHomework.value.trim(),

            link: editLink.value.trim()

        };


        sauvegarderCours();

        afficherCours();


        courseToEdit = null;

        editForm.reset();

        editSection.style.display = "none";

    }
);


// =========================
// ANNULER MODIFICATION
// =========================

cancelEditButton.addEventListener(
    "click",
    function() {

        courseToEdit = null;

        editForm.reset();

        editSection.style.display = "none";

    }
);


// =========================
// SUPPRIMER UN COURS
// =========================

function supprimerEtActualiser(index) {

    courses.splice(index, 1);

    sauvegarderCours();

    afficherCours();

}


// =========================
// AFFICHAGE INITIAL
// =========================

afficherCours();
