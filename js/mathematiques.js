// =========================
// MATHÉMATIQUES
// COURS + DEVOIRS
// =========================

const STORAGE_KEY = "cours-mathematiques";
const HOMEWORK_STORAGE_KEY = "mes-devoirs";

let cours = JSON.parse(
    localStorage.getItem(STORAGE_KEY)
) || [];

let devoirs = JSON.parse(
    localStorage.getItem(HOMEWORK_STORAGE_KEY)
) || [];

let coursEnModification = null;


// =========================
// ÉLÉMENTS COURS
// =========================

const courseForm =
    document.getElementById("course-form");

const courseDate =
    document.getElementById("course-date");

const courseTitle =
    document.getElementById("course-title");

const courseContent =
    document.getElementById("course-content");

const courseHomework =
    document.getElementById("course-homework");

const courseLink =
    document.getElementById("course-link");

const coursesList =
    document.getElementById("courses-list");

const editCourseSection =
    document.getElementById("edit-course-section");

const editCourseForm =
    document.getElementById("edit-course-form");

const editCourseDate =
    document.getElementById("edit-course-date");

const editCourseTitle =
    document.getElementById("edit-course-title");

const editCourseContent =
    document.getElementById("edit-course-content");

const editCourseHomework =
    document.getElementById("edit-course-homework");

const editCourseLink =
    document.getElementById("edit-course-link");

const cancelEditButton =
    document.getElementById("cancel-edit-button");


// =========================
// ÉLÉMENTS DEVOIRS
// =========================

const homeworkForm =
    document.getElementById("math-homework-form");

const homeworkTitle =
    document.getElementById("math-homework-title");

const homeworkDate =
    document.getElementById("math-homework-date");

const homeworkDescription =
    document.getElementById("math-homework-description");

const homeworkList =
    document.getElementById("math-homework-list");


// =========================
// SAUVEGARDE
// =========================

function sauvegarderCours() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(cours)
    );

}


function sauvegarderDevoirs() {

    localStorage.setItem(
        HOMEWORK_STORAGE_KEY,
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
// AFFICHER LES COURS
// =========================

function afficherCours() {

    coursesList.innerHTML = "";

    if (cours.length === 0) {

        coursesList.innerHTML = `
            <p class="empty-courses">
                Aucun cours enregistré pour le moment.
            </p>
        `;

        return;
    }


    cours
        .slice()
        .reverse()
        .forEach(function(leCours) {

            const index =
                cours.indexOf(leCours);

            const lesson =
                document.createElement("article");

            lesson.className = "lesson";

            lesson.innerHTML = `

                <strong>
                    ${echapperHTML(leCours.title)}
                </strong>

                <span>
                    📅 ${echapperHTML(leCours.date)}
                </span>

                <p>
                    ${echapperHTML(leCours.content)}
                </p>

                ${
                    leCours.homework
                        ? `
                            <p>
                                📚 <strong>Devoir :</strong><br>
                                ${echapperHTML(leCours.homework)}
                            </p>
                          `
                        : ""
                }

                ${
                    leCours.link
                        ? `
                            <a
                                href="${echapperHTML(leCours.link)}"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                🔗 Ouvrir le document
                            </a>
                          `
                        : ""
                }

                <div class="course-actions">

                    <button
                        onclick="ouvrirModification(${index})"
                    >
                        ✏️ Modifier
                    </button>

                    <button
                        onclick="supprimerEtActualiser(${index})"
                    >
                        🗑️ Supprimer
                    </button>

                </div>
            `;

            coursesList.appendChild(lesson);

        });

}


// =========================
// AJOUTER UN COURS
// =========================

if (courseForm) {

    courseForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const nouveauCours = {

                date:
                    courseDate.value,

                title:
                    courseTitle.value.trim(),

                content:
                    courseContent.value.trim(),

                homework:
                    courseHomework.value.trim(),

                link:
                    courseLink.value.trim()

            };

            cours.push(nouveauCours);

            sauvegarderCours();

            afficherCours();

            courseForm.reset();

        }
    );

}


// =========================
// MODIFIER UN COURS
// =========================

function ouvrirModification(index) {

    const leCours =
        cours[index];

    coursEnModification =
        index;

    editCourseDate.value =
        leCours.date;

    editCourseTitle.value =
        leCours.title;

    editCourseContent.value =
        leCours.content;

    editCourseHomework.value =
        leCours.homework || "";

    editCourseLink.value =
        leCours.link || "";

    editCourseSection.style.display =
        "block";

    editCourseSection.scrollIntoView({
        behavior: "smooth"
    });

}


// =========================
// ENREGISTRER MODIFICATION
// =========================

if (editCourseForm) {

    editCourseForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            if (coursEnModification === null) {
                return;
            }

            cours[coursEnModification] = {

                date:
                    editCourseDate.value,

                title:
                    editCourseTitle.value.trim(),

                content:
                    editCourseContent.value.trim(),

                homework:
                    editCourseHomework.value.trim(),

                link:
                    editCourseLink.value.trim()

            };

            sauvegarderCours();

            afficherCours();

            coursEnModification =
                null;

            editCourseForm.reset();

            editCourseSection.style.display =
                "none";

        }
    );

}


// =========================
// ANNULER MODIFICATION
// =========================

if (cancelEditButton) {

    cancelEditButton.addEventListener(
        "click",
        function() {

            coursEnModification =
                null;

            editCourseForm.reset();

            editCourseSection.style.display =
                "none";

        }
    );

}


// =========================
// SUPPRIMER UN COURS
// =========================

function supprimerEtActualiser(index) {

    cours.splice(index, 1);

    sauvegarderCours();

    afficherCours();

}


// =========================
// AJOUTER UN DEVOIR
// =========================

if (homeworkForm) {

    homeworkForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const nouveauDevoir = {

                subject:
                    "Mathématiques",

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

}


// =========================
// AFFICHER LES DEVOIRS
// =========================

function afficherDevoirs() {

    if (!homeworkList) {
        return;
    }

    homeworkList.innerHTML = "";


    const devoirsMaths =
        devoirs.filter(function(devoir) {

            return devoir.subject === "Mathématiques";

        });


    if (devoirsMaths.length === 0) {

        homeworkList.innerHTML = `
            <p class="empty-courses">
                Aucun devoir de mathématiques enregistré.
            </p>
        `;

        return;
    }


    devoirsMaths
        .slice()
        .reverse()
        .forEach(function(devoir) {

            const index =
                devoirs.indexOf(devoir);

            const bloc =
                document.createElement("div");

            bloc.className = "lesson";


            bloc.innerHTML = `

                <strong>
                    ${echapperHTML(devoir.title)}
                </strong>

                <span>
                    📅 À rendre le ${echapperHTML(devoir.date)}
                </span>

                ${
                    devoir.description
                        ? `
                            <p>
                                ${echapperHTML(
                                    devoir.description
                                )}
                            </p>
                          `
                        : ""
                }

                <p>
                    ${
                        devoir.done
                            ? "🟢 Devoir terminé"
                            : "🔴 Devoir à faire"
                    }
                </p>

            `;

            homeworkList.appendChild(bloc);

        });

}


// =========================
// INITIALISATION
// =========================

afficherCours();

afficherDevoirs();
