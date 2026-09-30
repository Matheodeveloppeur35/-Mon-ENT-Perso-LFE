// ==========================================
// MON ENT PERSO LFE
// EMPLOI DU TEMPS
// ==========================================


// ==========================================
// EMPLOI DU TEMPS DE BASE
// ==========================================

const emploiDuTemps = {

    // ==========================================
    // Q1
    // ==========================================

    Q1: {

        lundi: [
            {
                id: "q1-lundi-1",
                debut: "08:55",
                fin: "09:50",
                matiere: "Soutien au parcours",
                professeur: "LE PAPE D.",
                salle: "S.32 info"
            },
            {
                id: "q1-lundi-2",
                debut: "10:10",
                fin: "12:00",
                matiere: "Français / Histoire-Géo / EMC",
                professeur: "FREVILLE C.",
                salle: "I173 LP FCS HG"
            },
            {
                id: "q1-lundi-4",
                debut: "13:40",
                fin: "14:35",
                matiere: "Économie & Gestion",
                professeur: "LINDAUER A.",
                salle: "I460"
            },
            {
                id: "q1-lundi-5",
                debut: "14:35",
                fin: "15:30",
                matiere: "Réalisation projet",
                professeur: "LE PAPE D.",
                salle: "S.31 info"
            },
            {
                id: "q1-lundi-6",
                debut: "15:45",
                fin: "16:40",
                matiere: "Réalisation projet",
                professeur: "LE PAPE D.",
                salle: "S.31 info"
            }
        ],

        mardi: [
            {
                id: "q1-mardi-1",
                debut: "08:55",
                fin: "11:35",
                matiere: "Enseignement professionnel",
                professeur: "LUCIEN E.",
                salle: "S.31 info"
            },
            {
                id: "q1-mardi-2",
                debut: "11:40",
                fin: "12:30",
                matiere: "Co-intervention",
                professeur: "LE PAPE D. / FREVILLE C.",
                salle: "E220/At S.30.1"
            },
            {
                id: "q1-mardi-4",
                debut: "13:40",
                fin: "14:35",
                matiere: "Arts appliqués / Culture artistique",
                professeur: "NIEDERGANG L.",
                salle: "E205 LP"
            },
            {
                id: "q1-mardi-5",
                debut: "14:40",
                fin: "15:30",
                matiere: "Arts appliqués / Culture artistique",
                professeur: "NIEDERGANG L.",
                salle: "E205 LP"
            }
        ],

        mercredi: [
            {
                id: "q1-mercredi-1",
                debut: "08:30",
                fin: "08:55",
                matiere: "Éducation physique & sportive",
                professeur: "HAMON F.",
                salle: "Lycée ou Salle ext"
            },
            {
                id: "q1-mercredi-2",
                debut: "08:55",
                fin: "09:50",
                matiere: "Éducation physique & sportive",
                professeur: "HAMON F.",
                salle: "Lycée ou Salle ext"
            },
            {
                id: "q1-mercredi-3",
                debut: "10:10",
                fin: "11:05",
                matiere: "Anglais LV1",
                professeur: "COLOMBEL S.",
                salle: "I358"
            },
            {
                id: "q1-mercredi-4",
                debut: "11:10",
                fin: "12:00",
                matiere: "Mathématiques",
                professeur: "MESLARD S.",
                salle: "E218 (MECA)"
            }
        ],

        jeudi: [
            {
                id: "q1-jeudi-1",
                debut: "08:00",
                fin: "08:55",
                matiere: "Français / Histoire-Géo / EMC",
                professeur: "FREVILLE C.",
                salle: "173 LP FCS HG"
            },
            {
                id: "q1-jeudi-2",
                debut: "08:55",
                fin: "09:50",
                matiere: "Français / Histoire-Géo / EMC",
                professeur: "FREVILLE C.",
                salle: "173 LP FCS HG"
            },
            {
                id: "q1-jeudi-3",
                debut: "10:10",
                fin: "11:10",
                matiere: "Sciences physiques",
                professeur: "MESLARD S.",
                salle: "E224"
            },
            {
                id: "q1-jeudi-4",
                debut: "11:10",
                fin: "12:00",
                matiere: "Sciences physiques",
                professeur: "MESLARD S.",
                salle: "E224"
            },
            {
                id: "q1-jeudi-5",
                debut: "14:40",
                fin: "15:30",
                matiere: "Pratique professionnelle",
                professeur: "LUCIEN E.",
                salle: "S.29 AEPA"
            },
            {
                id: "q1-jeudi-6",
                debut: "15:45",
                fin: "16:40",
                matiere: "Pratique professionnelle",
                professeur: "LUCIEN E.",
                salle: "S.29 AEPA"
            },
            {
                id: "q1-jeudi-7",
                debut: "16:40",
                fin: "17:40",
                matiere: "Pratique professionnelle",
                professeur: "LUCIEN E. / LE PAPE D.",
                salle: "S.29 AEPA ou S.30"
            }
        ],

        vendredi: [
            {
                id: "q1-vendredi-1",
                debut: "08:00",
                fin: "08:55",
                matiere: "Pratique professionnelle",
                professeur: "LETTELIER J. ou LUCIEN E.",
                salle: "S.29 AEPA ou S.29B AEPA"
            },
            {
                id: "q1-vendredi-2",
                debut: "08:55",
                fin: "09:50",
                matiere: "Pratique professionnelle",
                professeur: "LETTELIER J. ou LUCIEN E.",
                salle: "S.29 AEPA ou S.29B AEPA"
            },
            {
                id: "q1-vendredi-3",
                debut: "10:10",
                fin: "11:10",
                matiere: "Pratique professionnelle",
                professeur: "LETTELIER J. ou LUCIEN E.",
                salle: "S.29 AEPA ou S.29B AEPA"
            },
            {
                id: "q1-vendredi-4",
                debut: "11:10",
                fin: "12:00",
                matiere: "Pratique professionnelle",
                professeur: "LETTELIER J. ou LUCIEN E.",
                salle: "S.29 AEPA ou S.29B AEPA"
            },
            {
                id: "q1-vendredi-5",
                debut: "14:40",
                fin: "15:30",
                matiere: "Anglais LV1",
                professeur: "COLOMBEL S.",
                salle: "I366"
            },
            {
                id: "q1-vendredi-6",
                debut: "15:45",
                fin: "16:40",
                matiere: "Éducation physique & sportive",
                professeur: "HAMON F.",
                salle: "Lycée ou Salle ext"
            },
            {
                id: "q1-vendredi-7",
                debut: "16:40",
                fin: "17:25",
                matiere: "Éducation physique & sportive",
                professeur: "HAMON F.",
                salle: "Lycée ou Salle ext"
            }
        ]
    },


    // ==========================================
    // Q2
    // ==========================================

    Q2: {

        lundi: [
            {
                id: "q2-lundi-1",
                debut: "08:00",
                fin: "09:50",
                matiere: "Soutien au parcours",
                professeur: "LE PAPE D.",
                salle: "S.32 info"
            },
            {
                id: "q2-lundi-2",
                debut: "10:10",
                fin: "12:00",
                matiere: "Prévention-Santé-Environnement",
                professeur: "BASSO K.",
                salle: "E014"
            },
            {
                id: "q2-lundi-3",
                debut: "13:40",
                fin: "14:35",
                matiere: "Économie & Gestion",
                professeur: "LINDAUER A.",
                salle: "I460"
            },
            {
                id: "q2-lundi-4",
                debut: "14:40",
                fin: "16:10",
                matiere: "Réalisation projet",
                professeur: "LE PAPE D. / MESLARD S.",
                salle: "S.31 info"
            }
        ],

        mardi: [
            {
                id: "q2-mardi-1",
                debut: "08:30",
                fin: "11:10",
                matiere: "Enseignement technologique professionnel",
                professeur: "LUCIEN E.",
                salle: "S.31 info"
            },
            {
                id: "q2-mardi-2",
                debut: "11:40",
                fin: "12:30",
                matiere: "Co-intervention",
                professeur: "LE PAPE D. / MESLARD S.",
                salle: "E218 ou Atelier"
            },
            {
                id: "q2-mardi-3",
                debut: "13:40",
                fin: "14:35",
                matiere: "Mathématiques",
                professeur: "MESLARD S.",
                salle: "E218 ou E214"
            }
        ],

        mercredi: [
            {
                id: "q2-mercredi-1",
                debut: "08:00",
                fin: "09:50",
                matiere: "Français / Histoire-Géo / EMC",
                professeur: "FREVILLE C.",
                salle: "I173 LP FCS HG"
            },
            {
                id: "q2-mercredi-2",
                debut: "10:10",
                fin: "11:10",
                matiere: "Anglais LV1",
                professeur: "COLOMBEL S.",
                salle: "I358"
            },
            {
                id: "q2-mercredi-3",
                debut: "11:10",
                fin: "12:00",
                matiere: "Mathématiques",
                professeur: "MESLARD S.",
                salle: "E218"
            }
        ],

        jeudi: [
            {
                id: "q2-jeudi-1",
                debut: "08:00",
                fin: "09:50",
                matiere: "Français / Histoire-Géo / EMC",
                professeur: "FREVILLE C.",
                salle: "I173 LP FCS HG"
            },
            {
                id: "q2-jeudi-2",
                debut: "10:10",
                fin: "12:00",
                matiere: "Sciences physiques",
                professeur: "MESLARD S.",
                salle: "E224"
            },
            {
                id: "q2-jeudi-3",
                debut: "14:40",
                fin: "17:40",
                matiere: "Pratique professionnelle",
                professeur: "LUCIEN E. ou LE PAPE D.",
                salle: "S.29 AEPA ou S.30 INFO"
            }
        ],

        vendredi: [
            {
                id: "q2-vendredi-1",
                debut: "08:00",
                fin: "12:00",
                matiere: "Pratique professionnelle",
                professeur: "LETTELIER J. ou LUCIEN E.",
                salle: "S.29B AEPA ou S.29 AEPA"
            },
            {
                id: "q2-vendredi-2",
                debut: "14:40",
                fin: "15:30",
                matiere: "Anglais LV1",
                professeur: "COLOMBEL S.",
                salle: "I366"
            },
            {
                id: "q2-vendredi-3",
                debut: "15:45",
                fin: "17:25",
                matiere: "Éducation physique & sportive",
                professeur: "HAMON F.",
                salle: ""
            }
        ]
    }
};


// ==========================================
// STOCKAGE
// ==========================================

const STORAGE_KEY = "mon-ent-emploi-du-temps";


// ==========================================
// HORAIRES EXACTS
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
// CONVERSION HEURE
// ==========================================

function convertirMinutes(heure) {

    const [heures, minutes] =
        heure.split(":").map(Number);

    return heures * 60 + minutes;
}


// ==========================================
// COULEURS DES MATIÈRES
// ==========================================

function obtenirClasseCouleur(matiere) {

    const couleurs = {

        "Français / Histoire-Géo / EMC":
            "course-francais",

        "Mathématiques":
            "course-mathematiques",

        "Anglais LV1":
            "course-anglais",

        "Sciences physiques":
            "course-sciences",

        "Enseignement professionnel":
            "course-enseignement",

        "Enseignement technologique professionnel":
            "course-enseignement",

        "Pratique professionnelle":
            "course-pratique",

        "Arts appliqués / Culture artistique":
            "course-arts",

        "Soutien au parcours":
            "course-soutien",

        "Prévention-Santé-Environnement":
            "course-pse",

        "Économie & Gestion":
            "course-economie",

        "Réalisation projet":
            "course-projet",

        "Éducation physique & sportive":
            "course-eps",

        "Co-intervention":
            "course-cointervention"
    };

    return couleurs[matiere] || "";
}


// ==========================================
// STOCKAGE DES COURS PERSONNALISÉS
// ==========================================

function recupererCoursPersonnalises() {

    try {

        return JSON.parse(
            localStorage.getItem(STORAGE_KEY)
        ) || [];

    } catch (erreur) {

        console.error(
            "Erreur de récupération :",
            erreur
        );

        return [];
    }
}


function sauvegarderCoursPersonnalises(cours) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(cours)
    );
}


// ==========================================
// OBTENIR LES COURS AVEC MODIFICATIONS
// ==========================================

function obtenirCoursAvecModifications(
    periode,
    jour
) {

    const coursDeBase =
        emploiDuTemps[periode]?.[jour] || [];

    const personnalises =
        recupererCoursPersonnalises();


    // Cours de base visibles
    const coursVisibles =
        coursDeBase.filter(cours => {

            const suppression =
                personnalises.find(
                    element =>
                        String(element.id) ===
                        String(cours.id) &&
                        element.supprime === true
                );

            return !suppression;
        });


    // Modifications / nouveaux cours
    const modifications =
        personnalises.filter(
            cours =>
                cours.periode === periode &&
                cours.jour === jour &&
                !cours.supprime
        );


    modifications.forEach(
        modification => {

            const index =
                coursVisibles.findIndex(
                    cours =>
                        String(cours.id) ===
                        String(modification.id)
                );

            if (index !== -1) {

                coursVisibles[index] =
                    modification;

            } else {

                coursVisibles.push(
                    modification
                );
            }
        }
    );


    return coursVisibles;
}


// ==========================================
// TROUVER UN COURS
// ==========================================

function trouverCours(id) {

    const personnalises =
        recupererCoursPersonnalises();


    const personnalise =
        personnalises.find(
            cours =>
                String(cours.id) === String(id) &&
                !cours.supprime
        );


    if (personnalise) {

        return {
            cours: personnalise,
            type: "personnalise",
            periode: personnalise.periode,
            jour: personnalise.jour
        };
    }


    for (const periode of ["Q1", "Q2"]) {

        for (const jour of jours) {

            const liste =
                emploiDuTemps[periode]?.[jour] || [];


            const index =
                liste.findIndex(
                    cours =>
                        String(cours.id) ===
                        String(id)
                );


            if (index !== -1) {

                const suppression =
                    personnalises.find(
                        element =>
                            String(element.id) ===
                            String(id) &&
                            element.supprime === true
                    );


                if (suppression) {
                    return null;
                }


                return {
                    cours: liste[index],
                    type: "base",
                    periode,
                    jour,
                    index
                };
            }
        }
    }


    return null;
}


// ==========================================
// AFFICHAGE DE L'EMPLOI DU TEMPS
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


    // Pour chaque jour, mémoriser les lignes
    // déjà occupées par un rowspan
    const cellulesOccupees = {

        lundi: {},
        mardi: {},
        mercredi: {},
        jeudi: {},
        vendredi: {}
    };


    horaires.forEach(
        (horaire, indexHoraire) => {

            const ligne =
                document.createElement("tr");


            // ======================================
            // COLONNE DES HORAIRES
            // ======================================

            const celluleHoraire =
                document.createElement("td");


            celluleHoraire.className =
                "schedule-time";


            celluleHoraire.innerHTML = `
                <strong>${horaire[0]}</strong>
                <br>
                ${horaire[1]}
            `;


            ligne.appendChild(
                celluleHoraire
            );


            const debutTranche =
                convertirMinutes(
                    horaire[0]
                );

            const finTranche =
                convertirMinutes(
                    horaire[1]
                );


            // ======================================
            // JOURS
            // ======================================

            jours.forEach(jour => {

                // Cette cellule est déjà couverte
                // par un cours précédent
                if (
                    cellulesOccupees[jour]
                    [indexHoraire]
                ) {

                    return;
                }


                const cellule =
                    document.createElement("td");


                // ==================================
                // PAUSES
                // ==================================

                if (
                    horaire[0] === "09:50" &&
                    horaire[1] === "10:10"
                ) {

                    cellule.innerHTML =
                        "🔔 Récréation";

                    cellule.classList.add(
                        "break-cell"
                    );

                    ligne.appendChild(
                        cellule
                    );

                    return;
                }


                if (
                    horaire[0] === "12:00" &&
                    horaire[1] === "13:00"
                ) {

                    cellule.innerHTML =
                        "🍽️ Pause déjeuner";

                    cellule.classList.add(
                        "lunch-cell"
                    );

                    ligne.appendChild(
                        cellule
                    );

                    return;
                }


                if (
                    (
                        horaire[0] === "13:35" &&
                        horaire[1] === "13:40"
                    ) ||
                    (
                        horaire[0] === "14:35" &&
                        horaire[1] === "14:40"
                    ) ||
                    (
                        horaire[0] === "15:30" &&
                        horaire[1] === "15:45"
                    )
                ) {

                    cellule.innerHTML =
                        "⏸️ Pause";

                    cellule.classList.add(
                        "break-cell"
                    );

                    ligne.appendChild(
                        cellule
                    );

                    return;
                }


                if (
                    horaire[0] === "17:40" &&
                    horaire[1] === "17:55"
                ) {

                    cellule.innerHTML =
                        "🏁 Fin";

                    cellule.classList.add(
                        "end-cell"
                    );

                    ligne.appendChild(
                        cellule
                    );

                    return;
                }


                // ==================================
                // RECHERCHER LE COURS
                // ==================================

                const cours =
                    obtenirCoursAvecModifications(
                        periode,
                        jour
                    ).find(cours => {

                        const debutCours =
                            convertirMinutes(
                                cours.debut
                            );

                        const finCours =
                            convertirMinutes(
                                cours.fin
                            );


                        return (
                            debutCours <= debutTranche &&
                            finCours >= finTranche
                        );
                    });


                // Aucun cours
                if (!cours) {

                    ligne.appendChild(
                        cellule
                    );

                    return;
                }


                const debutCours =
                    convertirMinutes(
                        cours.debut
                    );

                const finCours =
                    convertirMinutes(
                        cours.fin
                    );


                // ==================================
                // CALCUL DU ROWSPAN
                // ==================================

                let rowspan = 1;


                for (
                    let i = indexHoraire + 1;
                    i < horaires.length;
                    i++
                ) {

                    const prochainDebut =
                        convertirMinutes(
                            horaires[i][0]
                        );

                    const prochaineFin =
                        convertirMinutes(
                            horaires[i][1]
                        );


                    if (
                        prochainDebut >= debutCours &&
                        prochaineFin <= finCours
                    ) {

                        rowspan++;

                    } else {

                        break;
                    }
                }


                if (rowspan > 1) {

                    cellule.rowSpan =
                        rowspan;


                    // Marquer les lignes couvertes
                    for (
                        let i = indexHoraire + 1;
                        i <
                        indexHoraire + rowspan;
                        i++
                    ) {

                        cellulesOccupees[jour][i] =
                            true;
                    }
                }


                // ==================================
                // COULEUR
                // ==================================

                const classeCouleur =
                    obtenirClasseCouleur(
                        cours.matiere
                    );


                // ==================================
                // CONTENU
                // ==================================

                cellule.innerHTML = `

                    <div class="course ${classeCouleur}">

                        <strong>
                            ${cours.matiere}
                        </strong>

                        <span>
                            🕐 ${cours.debut} → ${cours.fin}
                        </span>

                        ${
                            cours.professeur
                                ? `
                                    <span>
                                        👨‍🏫 ${cours.professeur}
                                    </span>
                                  `
                                : ""
                        }

                        ${
                            cours.salle
                                ? `
                                    <small>
                                        📍 ${cours.salle}
                                    </small>
                                  `
                                : ""
                        }

                        ${
                            cours.description
                                ? `
                                    <small>
                                        📝 ${cours.description}
                                    </small>
                                  `
                                : ""
                        }

                        <div class="schedule-actions">

                            <button
                                type="button"
                                class="edit-schedule-course"
                                data-id="${cours.id}"
                            >
                                ✏️ Modifier
                            </button>

                            <button
                                type="button"
                                class="delete-schedule-course"
                                data-id="${cours.id}"
                            >
                                🗑️ Supprimer
                            </button>

                        </div>

                    </div>
                `;


                // ==================================
                // MODIFIER
                // ==================================

                const boutonModifier =
                    cellule.querySelector(
                        ".edit-schedule-course"
                    );


                boutonModifier?.addEventListener(
                    "click",
                    evenement => {

                        evenement.stopPropagation();

                        modifierCours(
                            cours.id
                        );
                    }
                );


                // ==================================
                // SUPPRIMER
                // ==================================

                const boutonSupprimer =
                    cellule.querySelector(
                        ".delete-schedule-course"
                    );


                boutonSupprimer?.addEventListener(
                    "click",
                    evenement => {

                        evenement.stopPropagation();

                        supprimerCours(
                            cours.id
                        );
                    }
                );


                ligne.appendChild(
                    cellule
                );

            });


            tableau.appendChild(
                ligne
            );

        }
    );
}


// ==========================================
// AJOUTER UN COURS
// ==========================================

function ajouterCours() {

    const formulaire =
        document.querySelector(
            "#schedule-form"
        );


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


    if (
        !periode ||
        !jour ||
        !matiere ||
        !debut ||
        !fin
    ) {

        alert(
            "⚠️ Merci de remplir les champs obligatoires."
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


    const coursExistants =
        recupererCoursPersonnalises();


    coursExistants.push(
        cours
    );


    sauvegarderCoursPersonnalises(
        coursExistants
    );


    afficherEmploiDuTemps(
        periode
    );


    formulaire?.reset();


    if (formulaire) {

        formulaire.removeAttribute(
            "data-editing-id"
        );
    }


    const selectPeriode =
        document.querySelector(
            "#schedule-period"
        );


    if (selectPeriode) {

        selectPeriode.value =
            periode;
    }


    const bouton =
        formulaire?.querySelector(
            'button[type="submit"]'
        );


    if (bouton) {

        bouton.textContent =
            "➕ Ajouter le cours";
    }


    alert(
        `✅ ${matiere} a été ajouté à ton emploi du temps ${periode}.`
    );
}


// ==========================================
// MODIFIER UN COURS
// ==========================================

function modifierCours(id) {

    const resultat =
        trouverCours(id);


    if (!resultat) {

        alert(
            "❌ Impossible de trouver ce cours."
        );

        return;
    }


    const cours =
        resultat.cours;


    const section =
        document.querySelector(
            "#add-schedule-section"
        );


    if (section) {

        section.style.display =
            "block";
    }


    const periode =
        document.querySelector(
            "#schedule-period"
        );

    const jour =
        document.querySelector(
            "#schedule-day"
        );

    const matiere =
        document.querySelector(
            "#schedule-subject"
        );

    const debut =
        document.querySelector(
            "#schedule-start"
        );

    const fin =
        document.querySelector(
            "#schedule-end"
        );

    const professeur =
        document.querySelector(
            "#schedule-teacher"
        );

    const salle =
        document.querySelector(
            "#schedule-room"
        );

    const description =
        document.querySelector(
            "#schedule-description"
        );


    if (periode) {
        periode.value =
            resultat.periode || cours.periode;
    }

    if (jour) {
        jour.value =
            resultat.jour || cours.jour;
    }

    if (matiere) {
        matiere.value =
            cours.matiere;
    }

    if (debut) {
        debut.value =
            cours.debut;
    }

    if (fin) {
        fin.value =
            cours.fin;
    }

    if (professeur) {
        professeur.value =
            cours.professeur || "";
    }

    if (salle) {
        salle.value =
            cours.salle || "";
    }

    if (description) {
        description.value =
            cours.description || "";
    }


    const formulaire =
        document.querySelector(
            "#schedule-form"
        );


    if (!formulaire) {
        return;
    }


    formulaire.dataset.editingId =
        id;


    const bouton =
        formulaire.querySelector(
            'button[type="submit"]'
        );


    if (bouton) {

        bouton.textContent =
            "💾 Enregistrer les modifications";
    }


    section?.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// ==========================================
// ENREGISTRER UNE MODIFICATION
// ==========================================

function enregistrerModification() {

    const formulaire =
        document.querySelector(
            "#schedule-form"
        );


    if (!formulaire) {
        return;
    }


    const id =
        formulaire.dataset.editingId;


    if (!id) {
        return;
    }


    const periode =
        document.querySelector(
            "#schedule-period"
        ).value;

    const jour =
        document.querySelector(
            "#schedule-day"
        ).value;

    const matiere =
        document.querySelector(
            "#schedule-subject"
        ).value;

    const debut =
        document.querySelector(
            "#schedule-start"
        ).value;

    const fin =
        document.querySelector(
            "#schedule-end"
        ).value;

    const professeur =
        document.querySelector(
            "#schedule-teacher"
        ).value.trim();

    const salle =
        document.querySelector(
            "#schedule-room"
        ).value.trim();

    const description =
        document.querySelector(
            "#schedule-description"
        ).value.trim();


    if (
        !periode ||
        !jour ||
        !matiere ||
        !debut ||
        !fin
    ) {

        alert(
            "⚠️ Merci de remplir les champs obligatoires."
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


    const resultat =
        trouverCours(id);


    if (!resultat) {

        alert(
            "❌ Impossible de trouver ce cours."
        );

        return;
    }


    const personnalises =
        recupererCoursPersonnalises();


    // ======================================
    // SAUVEGARDER LA MODIFICATION
    // ======================================

    const index =
        personnalises.findIndex(
            cours =>
                String(cours.id) ===
                String(id)
        );


    const nouveauCours = {

        id,

        periode,
        jour,
        debut,
        fin,
        matiere,
        professeur,
        salle,
        description
    };


    if (index !== -1) {

        personnalises[index] =
            nouveauCours;

    } else {

        personnalises.push(
            nouveauCours
        );
    }


    sauvegarderCoursPersonnalises(
        personnalises
    );


    // ======================================
    // FIN
    // ======================================

    formulaire.removeAttribute(
        "data-editing-id"
    );


    const bouton =
        formulaire.querySelector(
            'button[type="submit"]'
        );


    if (bouton) {

        bouton.textContent =
            "➕ Ajouter le cours";
    }


    formulaire.reset();


    const selectPeriode =
        document.querySelector(
            "#schedule-period"
        );


    if (selectPeriode) {

        selectPeriode.value =
            periode;
    }


    afficherEmploiDuTemps(
        periode
    );


    alert(
        `✅ ${matiere} a été modifié.`
    );
}


// ==========================================
// SUPPRIMER UN COURS
// ==========================================

function supprimerCours(id) {

    const resultat =
        trouverCours(id);


    if (!resultat) {

        alert(
            "❌ Impossible de trouver ce cours."
        );

        return;
    }


    const confirmation =
        confirm(
            `Voulez-vous vraiment supprimer "${resultat.cours.matiere}" ?`
        );


    if (!confirmation) {
        return;
    }


    const personnalises =
        recupererCoursPersonnalises();


    if (resultat.type === "personnalise") {

        const nouveauxCours =
            personnalises.filter(
                cours =>
                    String(cours.id) !==
                    String(id)
            );


        sauvegarderCoursPersonnalises(
            nouveauxCours
        );

    } else {

        personnalises.push({

            id,

            periode:
                resultat.periode,

            jour:
                resultat.jour,

            supprime: true
        });


        sauvegarderCoursPersonnalises(
            personnalises
        );
    }


    afficherEmploiDuTemps(
        resultat.periode || "Q1"
    );
}


// ==========================================
// INITIALISER LE FORMULAIRE
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


    const formulaire =
        document.querySelector(
            "#schedule-form"
        );


    if (formulaire) {

        formulaire.addEventListener(
            "submit",
            evenement => {

                evenement.preventDefault();


                if (
                    formulaire.dataset.editingId
                ) {

                    enregistrerModification();

                } else {

                    ajouterCours();
                }
            }
        );
    }
}


// ==========================================
// DOM CONTENT LOADED
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


        initialiserFormulaire();


        // Q1 par défaut

        boutonQ1?.classList.add(
            "selected"
        );


        afficherEmploiDuTemps(
            "Q1"
        );


        // ======================================
        // BOUTON Q1
        // ======================================

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


                    boutonQ2?.classList.remove(
                        "selected"
                    );
                }
            );
        }


        // ======================================
        // BOUTON Q2
        // ======================================

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


                    boutonQ1?.classList.remove(
                        "selected"
                    );
                }
            );
        }

    }
);
