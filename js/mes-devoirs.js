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

const dateSort =
    document.getElementById("date-sort");

const homeworkCount =
    document.getElementById("homework-count");

const statTotal =
    document.getElementById("stat-total");

const statTodo =
    document.getElementById("stat-todo");

const statDone =
    document.getElementById("stat-done");

const statLate =
    document.getElementById("stat-late");

const editSection =
    document.getElementById(
        "edit-homework-section"
    );

const editForm =
    document.getElementById(
        "edit-homework-form"
    );

const editSubject =
    document.getElementById(
        "edit-homework-subject"
    );

const editTitle =
    document.getElementById(
        "edit-homework-title"
    );

const editDate =
    document.getElementById(
        "edit-homework-date"
    );

const editDescription =
    document.getElementById(
        "edit-homework-description"
    );

const cancelEdit =
    document.getElementById(
        "cancel-homework-edit"
    );


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

    return String(texte)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


// =========================
// DATE
// =========================

function creerDateLocale(date) {

    if (!date) {
        return null;
    }

    const resultat =
        new Date(date + "T00:00:00");

    if (Number.isNaN(resultat.getTime())) {
        return null;
    }

    return resultat;
}


function devoirEnRetard(devoir) {

    if (devoir.done) {
        return false;
    }

    const dateDevoir =
        creerDateLocale(devoir.date);

    if (!dateDevoir) {
        return false;
    }

    const aujourdHui =
        new Date();

    aujourdHui.setHours(
        0,
        0,
        0,
        0
    );

    return dateDevoir < aujourdHui;
}


// =========================
// FORMAT DATE
// =========================

function formaterDate(date) {

    const dateObjet =
        creerDateLocale(date);

    if (!dateObjet) {
        return "Date inconnue";
    }

    return dateObjet.toLocaleDateString(
        "fr-FR",
        {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }
    );
}


// =========================
// STATISTIQUES
// =========================

function mettreAJourStatistiques() {

    const total =
        devoirs.length;

    const termines =
        devoirs.filter(
            devoir => devoir.done
        ).length;

    const enRetard =
        devoirs.filter(
            devoir => devoirEnRetard(devoir)
        ).length;

    const aFaire =
        devoirs.filter(
            devoir =>
                !devoir.done &&
                !devoirEnRetard(devoir)
        ).length;


    statTotal.textContent =
        total;

    statDone.textContent =
        termines;

    statLate.textContent =
        enRetard;

    statTodo.textContent =
        aFaire;

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

    const ordre =
        dateSort.value;


    // =========================
    // FILTRAGE
    // =========================

    let devoirsFiltres =
        devoirs.filter(
            function(devoir) {

                const texte = (

                    (devoir.title || "") +
                    " " +
                    (devoir.subject || "") +
                    " " +
                    (devoir.description || "")

                ).toLowerCase();


                const correspondRecherche =
                    texte.includes(
                        recherche
                    );


                const estEnRetard =
                    devoirEnRetard(devoir);


                let correspondStatut =
                    true;


                if (statut === "todo") {

                    correspondStatut =
                        !devoir.done &&
                        !estEnRetard;

                }

                if (statut === "done") {

                    correspondStatut =
                        devoir.done;

                }

                if (statut === "late") {

                    correspondStatut =
                        estEnRetard;

                }


                const correspondMatiere =
                    matiere === "all" ||
                    devoir.subject === matiere;


                return (

                    correspondRecherche &&
                    correspondStatut &&
                    correspondMatiere

                );

            }
        );


    // =========================
    // TRI PAR DATE
    // =========================

    devoirsFiltres.sort(
        function(a, b) {

            if (!a.date && !b.date) {
                return 0;
            }

            if (!a.date) {
                return 1;
            }

            if (!b.date) {
                return -1;
            }

            if (ordre === "desc") {

                return b.date.localeCompare(
                    a.date
                );

            }

            return a.date.localeCompare(
                b.date
            );

        }
    );


    // =========================
    // COMPTEUR
    // =========================

    homeworkCount.textContent =
        devoirsFiltres.length +
        (
            devoirsFiltres.length > 1
                ? " devoirs"
                : " devoir"
        );


    // =========================
    // AUCUN RÉSULTAT
    // =========================

    if (
        devoirsFiltres.length === 0
    ) {

        homeworkList.innerHTML = `

            <div class="empty-message">

                <div class="empty-message-icon">
                    📭
                </div>

                <h3>
                    Aucun devoir trouvé
                </h3>

                <p>
                    Aucun devoir ne correspond
                    aux filtres sélectionnés.
                </p>

            </div>

        `;

        return;
    }


    // =========================
    // AFFICHAGE
    // =========================

    devoirsFiltres.forEach(
        function(devoir) {

            const index =
                devoirs.indexOf(devoir);

            const estEnRetard =
                devoirEnRetard(devoir);


            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "homework-card" +
                (
                    devoir.done
                        ? " done"
                        : ""
                ) +
                (
                    estEnRetard
                        ? " overdue"
                        : ""
                );


            // =========================
            // STATUT
            // =========================

            let badgeStatut = "";


            if (devoir.done) {

                badgeStatut = `

                    <span
                        class="badge badge-done"
                    >
                        🟢 Terminé
                    </span>

                `;

            }

            else if (estEnRetard) {

                badgeStatut = `

                    <span
                        class="badge badge-late"
                    >
                        🚨 En retard
                    </span>

                `;

            }

            else {

                badgeStatut = `

                    <span
                        class="badge badge-todo"
                    >
                        🔴 À faire
                    </span>

                `;

            }


            // =========================
            // CARTE
            // =========================

            card.innerHTML = `

                <h3>
                    ${echapperHTML(
                        devoir.title
                    )}
                </h3>


                <div class="homework-info">

                    <span class="badge">

                        📚
                        ${echapperHTML(
                            devoir.subject
                        )}

                    </span>


                    <span class="badge badge-date">

                        📅
                        ${formaterDate(
                            devoir.date
                        )}

                    </span>


                    ${badgeStatut}

                </div>


                ${
                    devoir.description
                        ? `

                            <p
                                class="homework-description"
                            >
                                ${echapperHTML(
                                    devoir.description
                                ).replace(
                                    /\n/g,
                                    "<br>"
                                )}
                            </p>

                        `
                        : ""
                }


                <div class="homework-actions">

                    <button
                        class="complete-button"
                        onclick="
                            changerStatut(${index})
                        "
                    >

                        ${
                            devoir.done
                                ? "↩️ À refaire"
                                : "✅ Terminé"
                        }

                    </button>


                    <button
                        class="edit-button"
                        onclick="
                            modifierDevoir(${index})
                        "
                    >

                        ✏️ Modifier

                    </button>


                    <button
                        class="delete-button"
                        onclick="
                            supprimerDevoir(${index})
                        "
                    >

                        🗑️ Supprimer

                    </button>

                </div>

            `;


            homeworkList.appendChild(
                card
            );

        }
    );

}


// =========================
// AJOUTER UN DEVOIR
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


        devoirs.push(
            nouveauDevoir
        );


        sauvegarderDevoirs();

        homeworkForm.reset();

        mettreAJourStatistiques();

        afficherDevoirs();

    }
);


// =========================
// MODIFIER
// =========================

function modifierDevoir(index) {

    const devoir =
        devoirs[index];


    if (!devoir) {
        return;
    }


    devoirEnModification =
        index;


    editSubject.value =
        devoir.subject || "";

    editTitle.value =
        devoir.title || "";

    editDate.value =
        devoir.date || "";

    editDescription.value =
        devoir.description || "";


    editSection.style.display =
        "block";


    editSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// =========================
// ENREGISTRER MODIFICATION
// =========================

editForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        if (
            devoirEnModification === null
        ) {

            return;

        }


        const ancienDevoir =
            devoirs[
                devoirEnModification
            ];


        devoirs[
            devoirEnModification
        ] = {

            subject:
                editSubject.value,

            title:
                editTitle.value.trim(),

            date:
                editDate.value,

            description:
                editDescription.value.trim(),

            done:
                ancienDevoir.done

        };


        sauvegarderDevoirs();


        devoirEnModification =
            null;


        editForm.reset();


        editSection.style.display =
            "none";


        mettreAJourStatistiques();

        afficherDevoirs();

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

    if (!devoirs[index]) {
        return;
    }


    devoirs[index].done =
        !devoirs[index].done;


    sauvegarderDevoirs();

    mettreAJourStatistiques();

    afficherDevoirs();

}


// =========================
// SUPPRIMER
// =========================

function supprimerDevoir(index) {

    if (!devoirs[index]) {
        return;
    }


    const confirmation =
        confirm(
            "Supprimer ce devoir ?"
        );


    if (!confirmation) {
        return;
    }


    devoirs.splice(
        index,
        1
    );


    sauvegarderDevoirs();

    mettreAJourStatistiques();

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

dateSort.addEventListener(
    "change",
    afficherDevoirs
);


// =========================
// INITIALISATION
// =========================

mettreAJourStatistiques();

afficherDevoirs();
