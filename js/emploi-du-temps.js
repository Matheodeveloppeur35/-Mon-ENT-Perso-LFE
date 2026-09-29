// ==========================================
// MON ENT PERSO LFE
// EMPLOI DU TEMPS
// ==========================================

// ==========================================
// STOCKAGE DES COURS AJOUTÉS
// ==========================================

const STORAGE_KEY = "mon-ent-emploi-du-temps";


// ==========================================
// HORAIRES DU TABLEAU
// ==========================================

const horaires = [
    ["08:00", "08:55"],
    ["08:55", "09:50"],
    ["09:50", "10:10"],
    ["10:10", "11:10"],
    ["11:10", "12:00"],
    ["12:00", "13:00"],
    ["13:00", "13:35"],
    ["13:35", "13:40"],
    ["13:40", "14:35"],
    ["14:35", "14:40"],
    ["14:40", "15:30"],
    ["15:30", "15:45"],
    ["15:45", "16:40"],
    ["16:40", "17:40"],
    ["17:40", "17:55"]
];


// ==========================================
// JOURS
// ==========================================

const jours = [
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi"
];


// ==========================================
// CONVERSION DES HEURES
// ==========================================

function convertirMinutes(heure) {

    const [heures, minutes] = heure.split(":").map(Number);

    return heures * 60 + minutes;
}


// ==========================================
// RÉCUPÉRER LES COURS AJOUTÉS
// ==========================================

function recupererCoursAjoutes() {

    try {

        return JSON.parse(
            localStorage.getItem(STORAGE_KEY)
        ) || [];

    } catch (erreur) {

        console.error(
            "Erreur lors de la récupération des cours :",
            erreur
        );

        return [];
    }
}


// ==========================================
// SAUVEGARDER LES COURS AJOUTÉS
// ==========================================

function sauvegarderCoursAjoutes(cours) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(cours)
    );
}


// ==========================================
// OBTENIR TOUS LES COURS D'UNE PÉRIODE
// ==========================================

function obtenirCours(periode, jour) {

    const coursDeBase =
        emploiDuTemps[periode]?.[jour] || [];

    const coursAjoutes =
        recupererCoursAjoutes()
            .filter(cours =>
                cours.periode === periode &&
                cours.jour === jour
            );

    return [
        ...coursDeBase,
        ...coursAjoutes
    ];
}


// ==========================================
// AFFICHAGE
// ==========================================

function afficherEmploiDuTemps(periode = "Q1") {

    const tableau =
        document.querySelector("#schedule-body");

    const titre =
        document.querySelector("#schedule-title");

    if (!tableau) {
        return;
    }

    tableau.innerHTML = "";

    if (titre) {
        titre.textContent =
            `Emploi du temps — ${periode}`;
    }


    horaires.forEach(horaire => {

        const ligne =
            document.createElement("tr");


        // ------------------------------------------
        // HORAIRE
        // ------------------------------------------

        const celluleHoraire =
            document.createElement("td");

        celluleHoraire.innerHTML = `
            <strong>${horaire[0]}</strong>
            <br>
            ${horaire[1]}
        `;

        ligne.appendChild(celluleHoraire);


        // ------------------------------------------
        // JOURS
        // ------------------------------------------

        jours.forEach(jour => {

            const cellule =
                document.createElement("td");

            const debut =
                convertirMinutes(horaire[0]);

            const fin =
                convertirMinutes(horaire[1]);


            // --------------------------------------
            // RÉCRÉATION
            // --------------------------------------

            if (
                horaire[0] === "09:50" &&
                horaire[1] === "10:10"
            ) {

                cellule.innerHTML =
                    "🔔 Récréation";

                cellule.classList.add(
                    "break-cell"
                );
            }


            // --------------------------------------
            // PAUSE DÉJEUNER
            // --------------------------------------

            else if (
                horaire[0] === "12:00" &&
                horaire[1] === "13:00"
            ) {

                cellule.innerHTML =
                    "🍽️ Pause déjeuner";

                cellule.classList.add(
                    "lunch-cell"
                );
            }


            // --------------------------------------
            // PETITES PAUSES
            // --------------------------------------

            else if (
                (horaire[0] === "13:35" &&
                    horaire[1] === "13:40") ||

                (horaire[0] === "14:35" &&
                    horaire[1] === "14:40") ||

                (horaire[0] === "15:30" &&
                    horaire[1] === "15:45")
            ) {

                cellule.innerHTML =
                    "⏸️ Pause";

                cellule.classList.add(
                    "break-cell"
                );
            }


            // --------------------------------------
            // FIN
            // --------------------------------------

            else if (
                horaire[0] === "17:40" &&
                horaire[1] === "17:55"
            ) {

                cellule.innerHTML =
                    "🏁 Fin";

                cellule.classList.add(
                    "end-cell"
                );
            }


            // --------------------------------------
            // RECHERCHE DU COURS
            // --------------------------------------

            else {

                const coursJour =
                    obtenirCours(
                        periode,
                        jour
                    );

                const cours =
                    coursJour.find(cours => {

                        const debutCours =
                            convertirMinutes(
                                cours.debut
                            );

                        const finCours =
                            convertirMinutes(
                                cours.fin
                            );

                        return (
                            debutCours < fin &&
                            finCours > debut
                        );
                    });


                // ----------------------------------
                // AFFICHAGE DU COURS
                // ----------------------------------

                if (cours) {

                    const estAjoute =
                        cours.id !== undefined;

                    cellule.innerHTML = `
                        <div class="course">

                            <strong>
                                ${cours.matiere}
                            </strong>

                            ${
                                cours.professeur
                                    ? `
                                        <span>
                                            👨‍🏫
                                            ${cours.professeur}
                                        </span>
                                      `
                                    : ""
                            }

                            ${
                                cours.salle
                                    ? `
                                        <small>
                                            📍
                                            ${cours.salle}
                                        </small>
                                      `
                                    : ""
                            }

                            ${
                                estAjoute
                                    ? `
                                        <button
                                            class="delete-schedule-course"
                                            data-id="${cours.id}"
                                            title="Supprimer ce cours"
                                        >
                                            🗑️
                                        </button>
                                      `
                                    : ""
                            }

                        </div>
                    `;


                    // ----------------------------------
                    // SUPPRESSION
                    // ----------------------------------

                    if (estAjoute) {

                        const bouton =
                            cellule.querySelector(
                                ".delete-schedule-course"
                            );

                        bouton.addEventListener(
                            "click",
                            evenement => {

                                evenement.stopPropagation();

                                supprimerCours(
                                    cours.id
                                );
                            }
                        );
                    }
                }
            }


            ligne.appendChild(cellule);

        });


        tableau.appendChild(ligne);

    });
}


// ==========================================
// AJOUTER UN COURS
// ==========================================

function ajouterCours() {

    const periode =
        document.querySelector(
            "#schedule-period"
        )?.value;

    const jour =
        document.querySelector(
            "#schedule-day"
        )?.value;

    const matiere =
        document.querySelector(
            "#schedule-subject"
        )?.value;

    const debut =
        document.querySelector(
            "#schedule-start"
        )?.value;

    const fin =
        document.querySelector(
            "#schedule-end"
        )?.value;

    const professeur =
        document.querySelector(
            "#schedule-teacher"
        )?.value.trim();

    const salle =
        document.querySelector(
            "#schedule-room"
        )?.value.trim();

    const description =
        document.querySelector(
            "#schedule-description"
        )?.value.trim();


    // ------------------------------------------
    // VÉRIFICATIONS
    // ------------------------------------------

    if (
        !periode ||
        !jour ||
        !matiere ||
        !debut ||
        !fin
    ) {

        alert(
            "⚠️ Merci de remplir la période, le jour, la matière, l'heure de début et l'heure de fin."
        );

        return;
    }


    if (
        convertirMinutes(fin) <=
        convertirMinutes(debut)
    ) {

        alert(
            "⚠️ L'heure de fin doit être après l'heure de début."
        );

        return;
    }


    // ------------------------------------------
    // NOUVEAU COURS
    // ------------------------------------------

    const cours = {

        id: Date.now(),

        periode,
        jour,

        debut,
        fin,

        matiere,

        professeur,
        salle,
        description
    };


    // ------------------------------------------
    // SAUVEGARDE
    // ------------------------------------------

    const coursExistants =
        recupererCoursAjoutes();

    coursExistants.push(cours);

    sauvegarderCoursAjoutes(
        coursExistants
    );


    // ------------------------------------------
    // RAFRAÎCHISSEMENT
    // ------------------------------------------

    afficherEmploiDuTemps(
        periode
    );


    // ------------------------------------------
    // RÉINITIALISER LE FORMULAIRE
    // ------------------------------------------

    const formulaire =
        document.querySelector(
            "#schedule-form"
        );

    if (formulaire) {
        formulaire.reset();
    }


    // On remet Q1 par défaut
    const periodeForm =
        document.querySelector(
            "#schedule-period"
        );

    if (periodeForm) {
        periodeForm.value = periode;
    }


    alert(
        `✅ ${matiere} a été ajouté à ton emploi du temps ${periode}.`
    );
}


// ==========================================
// SUPPRIMER UN COURS AJOUTÉ
// ==========================================

function supprimerCours(id) {

    const confirmation =
        confirm(
            "Voulez-vous vraiment supprimer ce cours ?"
        );

    if (!confirmation) {
        return;
    }


    const cours =
        recupererCoursAjoutes();

    const nouveauxCours =
        cours.filter(
            cours => cours.id !== id
        );

    sauvegarderCoursAjoutes(
        nouveauxCours
    );


    // Récupérer la période actuellement affichée
    const boutonQ2 =
        document.querySelector(
            "#q2-button"
        );

    const periode =
        boutonQ2?.classList.contains("selected")
            ? "Q2"
            : "Q1";


    afficherEmploiDuTemps(
        periode
    );
}


// ==========================================
// BOUTON AFFICHER LE FORMULAIRE
// ==========================================

function initialiserFormulaire() {

    const bouton =
        document.querySelector(
            "#show-add-schedule"
        );

    const section =
        document.querySelector(
            "#add-schedule-section"
        );


    if (bouton && section) {

        bouton.addEventListener(
            "click",
            () => {

                const estCache =
                    section.style.display === "none" ||
                    section.style.display === "";

                section.style.display =
                    estCache
                        ? "block"
                        : "none";
            }
        );
    }


    // ------------------------------------------
    // FORMULAIRE
    // ------------------------------------------

    const formulaire =
        document.querySelector(
            "#schedule-form"
        );


    if (formulaire) {

        formulaire.addEventListener(
            "submit",
            evenement => {

                evenement.preventDefault();

                ajouterCours();
            }
        );
    }
}


// ==========================================
// BOUTONS Q1 / Q2
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const boutonQ1 =
            document.querySelector(
                "#q1-button"
            );

        const boutonQ2 =
            document.querySelector(
                "#q2-button"
            );


        // --------------------------------------
        // FORMULAIRE
        // --------------------------------------

        initialiserFormulaire();


        // --------------------------------------
        // AFFICHAGE INITIAL
        // --------------------------------------

        afficherEmploiDuTemps(
            "Q1"
        );


        // --------------------------------------
        // Q1
        // --------------------------------------

        if (boutonQ1) {

            boutonQ1.addEventListener(
                "click",
                () => {

                    afficherEmploiDuTemps(
                        "Q1"
                    );

                    boutonQ1.classList.add(
                        "selected"
                    );

                    if (boutonQ2) {

                        boutonQ2.classList.remove(
                            "selected"
                        );
                    }
                }
            );
        }


        // --------------------------------------
        // Q2
        // --------------------------------------

        if (boutonQ2) {

            boutonQ2.addEventListener(
                "click",
                () => {

                    afficherEmploiDuTemps(
                        "Q2"
                    );

                    boutonQ2.classList.add(
                        "selected"
                    );

                    if (boutonQ1) {

                        boutonQ1.classList.remove(
                            "selected"
                        );
                    }
                }
            );
        }

    }
);
