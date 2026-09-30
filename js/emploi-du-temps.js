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
// CLÉS DE STOCKAGE
// ==========================================

const STORAGE_KEY = "mon-ent-emploi-du-temps";
const ABSENCES_KEY = "mon-ent-absences-professeurs";


// ==========================================
// HORAIRES
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

    const [heures, minutes] =
        heure.split(":").map(Number);

    return heures * 60 + minutes;
}


// ==========================================
// COULEURS
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
// STOCKAGE DES MODIFICATIONS
// ==========================================

function recupererCoursPersonnalises() {

    try {

        const donnees =
            JSON.parse(
                localStorage.getItem(STORAGE_KEY)
            );

        if (!Array.isArray(donnees)) {
            return [];
        }

        // Garde uniquement la dernière
        // modification de chaque cours.
        const map = new Map();

        donnees.forEach(cours => {

            if (
                cours &&
                cours.id !== undefined
            ) {

                map.set(
                    String(cours.id),
                    cours
                );
            }
        });

        return Array.from(map.values());

    } catch (erreur) {

        console.error(
            "Erreur de récupération des cours :",
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
// TOUS LES IDS DES COURS DE BASE
// ==========================================

function obtenirIdsCoursDeBase() {

    const ids = new Set();

    ["Q1", "Q2"].forEach(periode => {

        jours.forEach(jour => {

            const liste =
                emploiDuTemps[periode]?.[jour] || [];

            liste.forEach(cours => {

                ids.add(
                    String(cours.id)
                );
            });
        });
    });

    return ids;
}


// ==========================================
// OBTENIR LES COURS D'UN JOUR
// ==========================================

function obtenirCoursAvecModifications(
    periode,
    jour
) {

    const coursDeBase =
        emploiDuTemps[periode]?.[jour] || [];

    const personnalisations =
        recupererCoursPersonnalises();

    const map =
        new Map(
            personnalisations.map(
                cours => [
                    String(cours.id),
                    cours
                ]
            )
        );


    const resultat = [];


    // ==========================================
    // COURS DE BASE
    // ==========================================

    coursDeBase.forEach(coursBase => {

        const modification =
            map.get(
                String(coursBase.id)
            );


        // Supprimé
        if (
            modification &&
            modification.supprime === true
        ) {

            return;
        }


        // Cours modifié
        if (modification) {

            // Si le cours a été déplacé
            // ailleurs, il ne doit plus apparaître ici.
            if (
                modification.periode !== periode ||
                modification.jour !== jour
            ) {

                return;
            }


            resultat.push(
                modification
            );

            return;
        }


        // Cours normal
        resultat.push(
            coursBase
        );
    });


    // ==========================================
    // COURS MODIFIÉS/DÉPLACÉS
    // ==========================================

    personnalisations.forEach(cours => {

        if (cours.supprime) {
            return;
        }


        if (
            cours.periode !== periode ||
            cours.jour !== jour
        ) {

            return;
        }


        const existeDansLaBaseDuJour =
            coursDeBase.some(
                base =>
                    String(base.id) ===
                    String(cours.id)
            );


        // Si le cours n'est pas dans la base
        // de ce jour, il s'agit soit :
        // - d'un nouveau cours
        // - d'un cours déplacé.
        if (!existeDansLaBaseDuJour) {

            resultat.push(
                cours
            );
        }
    });


    // ==========================================
    // TRI PAR HEURE
    // ==========================================

    resultat.sort(
        (a, b) =>
            convertirMinutes(a.debut) -
            convertirMinutes(b.debut)
    );


    return resultat;
}


// ==========================================
// TROUVER UN COURS
// ==========================================

function trouverCours(id) {

    const personnalisations =
        recupererCoursPersonnalises();


    const personnalisation =
        personnalisations.find(
            cours =>
                String(cours.id) ===
                String(id)
        );


    if (
        personnalisation &&
        personnalisation.supprime
    ) {

        return null;
    }


    if (personnalisation) {

        return {

            cours: personnalisation,

            type: "personnalise",

            periode:
                personnalisation.periode,

            jour:
                personnalisation.jour
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
// AFFICHAGE
// ==========================================

function afficherEmploiDuTemps(
    periode = "Q1"
) {

    const tableau =
        document.querySelector(
            "#schedule-body"
        );

    const titre =
        document.querySelector(
            "#schedule-title"
        );


    if (!tableau) {
        return;
    }


    tableau.innerHTML = "";


    if (titre) {

        titre.textContent =
            `Emploi du temps — ${periode}`;
    }


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


            jours.forEach(jour => {

                if (
                    cellulesOccupees[jour]
                    [indexHoraire]
                ) {

                    return;
                }


                const cellule =
                    document.createElement("td");


                // Pauses
                if (
                    horaire[0] === "09:50" &&
                    horaire[1] === "10:10"
                ) {

                    cellule.innerHTML =
                        "🔔 Récréation";

                    cellule.className =
                        "break-cell";

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

                    cellule.className =
                        "lunch-cell";

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

                    cellule.className =
                        "break-cell";

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

                    cellule.className =
                        "end-cell";

                    ligne.appendChild(
                        cellule
                    );

                    return;
                }


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


                const classeCouleur =
                    obtenirClasseCouleur(
                        cours.matiere
                    );


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


                cellule
                    .querySelector(
                        ".edit-schedule-course"
                    )
                    ?.addEventListener(
                        "click",
                        evenement => {

                            evenement.stopPropagation();

                            modifierCours(
                                cours.id
                            );
                        }
                    );


                cellule
                    .querySelector(
                        ".delete-schedule-course"
                    )
                    ?.addEventListener(
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

        id:
            `perso-${Date.now()}`,

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


    const bouton =
        formulaire?.querySelector(
            'button[type="submit"]'
        );


    if (bouton) {

        bouton.textContent =
            "➕ Ajouter le cours";
    }


    alert(
        `✅ ${matiere} a été ajouté.`
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


    const champs = {

        periode:
            document.querySelector(
                "#schedule-period"
            ),

        jour:
            document.querySelector(
                "#schedule-day"
            ),

        matiere:
            document.querySelector(
                "#schedule-subject"
            ),

        debut:
            document.querySelector(
                "#schedule-start"
            ),

        fin:
            document.querySelector(
                "#schedule-end"
            ),

        professeur:
            document.querySelector(
                "#schedule-teacher"
            ),

        salle:
            document.querySelector(
                "#schedule-room"
            ),

        description:
            document.querySelector(
                "#schedule-description"
            )
    };


    if (champs.periode) {
        champs.periode.value =
            resultat.periode;
    }

    if (champs.jour) {
        champs.jour.value =
            resultat.jour;
    }

    if (champs.matiere) {
        champs.matiere.value =
            cours.matiere;
    }

    if (champs.debut) {
        champs.debut.value =
            cours.debut;
    }

    if (champs.fin) {
        champs.fin.value =
            cours.fin;
    }

    if (champs.professeur) {
        champs.professeur.value =
            cours.professeur || "";
    }

    if (champs.salle) {
        champs.salle.value =
            cours.salle || "";
    }

    if (champs.description) {
        champs.description.value =
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


    const personnalises =
        recupererCoursPersonnalises();


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


    // IMPORTANT :
    // on supprime toutes les anciennes versions
    // du même cours.
    const autresCours =
        personnalises.filter(
            cours =>
                String(cours.id) !==
                String(id)
        );


    autresCours.push(
        nouveauCours
    );


    sauvegarderCoursPersonnalises(
        autresCours
    );


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


    if (
        document.querySelector(
            "#schedule-period"
        )
    ) {

        document.querySelector(
            "#schedule-period"
        ).value =
            periode;
    }


    afficherEmploiDuTemps(
        periode
    );


    alert(
        `✅ ${matiere} a bien été modifié.`
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


    const idsBase =
        obtenirIdsCoursDeBase();


    // ==========================================
    // COURS AJOUTÉ PERSONNELLEMENT
    // ==========================================

    if (
        !idsBase.has(
            String(id)
        )
    ) {

        const nouveaux =
            personnalises.filter(
                cours =>
                    String(cours.id) !==
                    String(id)
            );


        sauvegarderCoursPersonnalises(
            nouveaux
        );

    } else {

        // ======================================
        // COURS DE BASE
        // ======================================

        const sansAncienneVersion =
            personnalises.filter(
                cours =>
                    String(cours.id) !==
                    String(id)
            );


        sansAncienneVersion.push({

            id,

            periode:
                resultat.periode,

            jour:
                resultat.jour,

            supprime: true
        });


        sauvegarderCoursPersonnalises(
            sansAncienneVersion
        );
    }


    afficherEmploiDuTemps(
        resultat.periode || "Q1"
    );


    alert(
        "🗑️ Le cours a été supprimé."
    );
}


// ==========================================
// GESTION DES ABSENCES DES PROFESSEURS
// ==========================================

function recupererAbsencesProfesseurs() {

    try {

        const donnees =
            JSON.parse(
                localStorage.getItem(
                    ABSENCES_KEY
                )
            );

        return Array.isArray(donnees)
            ? donnees
            : [];

    } catch (erreur) {

        console.error(
            "Erreur absences :",
            erreur
        );

        return [];
    }
}


function sauvegarderAbsencesProfesseurs(
    absences
) {

    localStorage.setItem(
        ABSENCES_KEY,
        JSON.stringify(absences)
    );
}


// ==========================================
// OBTENIR LE LUNDI D'UNE SEMAINE
// ==========================================

function obtenirLundi(date) {

    const resultat =
        new Date(date);


    const jour =
        resultat.getDay();


    const difference =
        jour === 0
            ? -6
            : 1 - jour;


    resultat.setDate(
        resultat.getDate() +
        difference
    );


    return resultat;
}


function formatDateLocale(date) {

    return date.toLocaleDateString(
        "fr-FR",
        {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }
    );
}


function obtenirCleSemaine(date) {

    const lundi =
        obtenirLundi(date);


    return lundi
        .toISOString()
        .split("T")[0];
}


// ==========================================
// CRÉER LA SECTION ABSENCES
// ==========================================

function creerSectionAbsences() {

    if (
        document.querySelector(
            "#prof-absences-section"
        )
    ) {

        return;
    }


    const section =
        document.createElement("section");


    section.id =
        "prof-absences-section";


    section.innerHTML = `

        <div class="prof-absence-header">

            <h2>
                👨‍🏫 Absences des professeurs
            </h2>

            <p>
                Note ici les professeurs absents chaque semaine.
            </p>

        </div>


        <form
            id="prof-absence-form"
            class="prof-absence-form"
        >

            <div class="absence-field">

                <label for="absence-week">
                    📅 Semaine du
                </label>

                <input
                    type="date"
                    id="absence-week"
                    required
                >

            </div>


            <div class="absence-field">

                <label for="absence-period">
                    📚 Trimestre
                </label>

                <select id="absence-period">

                    <option value="Q1">
                        Q1
                    </option>

                    <option value="Q2">
                        Q2
                    </option>

                </select>

            </div>


            <div class="absence-field">

                <label for="absence-day">
                    📆 Jour
                </label>

                <select id="absence-day">

                    <option value="lundi">
                        Lundi
                    </option>

                    <option value="mardi">
                        Mardi
                    </option>

                    <option value="mercredi">
                        Mercredi
                    </option>

                    <option value="jeudi">
                        Jeudi
                    </option>

                    <option value="vendredi">
                        Vendredi
                    </option>

                </select>

            </div>


            <div class="absence-field">

                <label for="absence-course">
                    📚 Cours
                </label>

                <select
                    id="absence-course"
                    required
                ></select>

            </div>


            <div class="absence-field">

                <label for="absence-replacement">
                    🔄 Remplacement
                </label>

                <select id="absence-replacement">

                    <option value="non">
                        ❌ Pas de remplacement
                    </option>

                    <option value="oui">
                        ✅ Professeur remplacé
                    </option>

                </select>

            </div>


            <div class="absence-field absence-comment">

                <label for="absence-comment">
                    📝 Remarque
                </label>

                <textarea
                    id="absence-comment"
                    rows="3"
                    placeholder="Ex : cours annulé, heure libre..."
                ></textarea>

            </div>


            <button
                type="submit"
                class="absence-save-button"
            >
                ➕ Enregistrer l'absence
            </button>

        </form>


        <div
            id="absence-current-week"
            class="absence-current-week"
        ></div>


        <div
            id="absence-history"
            class="absence-history"
        ></div>

    `;


    const emploi =
        document.querySelector(
            "#schedule-body"
        );


    const tableau =
        emploi?.closest("table");


    if (
        tableau &&
        tableau.parentElement
    ) {

        tableau.parentElement.appendChild(
            section
        );

    } else {

        document.body.appendChild(
            section
        );
    }


    initialiserFormulaireAbsences();
}


// ==========================================
// METTRE À JOUR LES COURS DU FORMULAIRE
// ==========================================

function mettreAJourListeCoursAbsence() {

    const periode =
        document.querySelector(
            "#absence-period"
        )?.value || "Q1";


    const jour =
        document.querySelector(
            "#absence-day"
        )?.value || "lundi";


    const select =
        document.querySelector(
            "#absence-course"
        );


    if (!select) {
        return;
    }


    const cours =
        obtenirCoursAvecModifications(
            periode,
            jour
        );


    select.innerHTML = "";


    if (cours.length === 0) {

        select.innerHTML = `
            <option value="">
                Aucun cours ce jour
            </option>
        `;

        return;
    }


    cours.forEach(coursItem => {

        const option =
            document.createElement(
                "option"
            );


        option.value =
            coursItem.id;


        option.textContent =
            `${coursItem.debut}–${coursItem.fin} — ${coursItem.matiere} — ${coursItem.professeur || "Professeur non indiqué"}`;


        select.appendChild(
            option
        );
    });
}


// ==========================================
// ENREGISTRER UNE ABSENCE
// ==========================================

function enregistrerAbsenceProfesseur() {

    const semaine =
        document.querySelector(
            "#absence-week"
        )?.value;


    const periode =
        document.querySelector(
            "#absence-period"
        )?.value;


    const jour =
        document.querySelector(
            "#absence-day"
        )?.value;


    const courseId =
        document.querySelector(
            "#absence-course"
        )?.value;


    const remplacement =
        document.querySelector(
            "#absence-replacement"
        )?.value;


    const commentaire =
        document.querySelector(
            "#absence-comment"
        )?.value.trim();


    if (
        !semaine ||
        !periode ||
        !jour ||
        !courseId
    ) {

        alert(
            "⚠️ Merci de remplir les informations de l'absence."
        );

        return;
    }


    const cours =
        obtenirCoursAvecModifications(
            periode,
            jour
        ).find(
            element =>
                String(element.id) ===
                String(courseId)
        );


    if (!cours) {

        alert(
            "❌ Impossible de trouver le cours."
        );

        return;
    }


    const absences =
        recupererAbsencesProfesseurs();


    const nouvelleAbsence = {

        id:
            `absence-${Date.now()}`,

        semaine:
            obtenirCleSemaine(semaine),

        periode,

        jour,

        coursId:
            courseId,

        debut:
            cours.debut,

        fin:
            cours.fin,

        matiere:
            cours.matiere,

        professeur:
            cours.professeur,

        salle:
            cours.salle,

        remplacement:
            remplacement === "oui",

        commentaire,

        dateCreation:
            new Date().toISOString()
    };


    absences.push(
        nouvelleAbsence
    );


    sauvegarderAbsencesProfesseurs(
        absences
    );


    document.querySelector(
        "#absence-comment"
    ).value = "";


    afficherHistoriqueAbsences();


    alert(
        `✅ Absence de ${cours.professeur || "professeur"} enregistrée.`
    );
}


// ==========================================
// SUPPRIMER UNE ABSENCE
// ==========================================

function supprimerAbsence(id) {

    const confirmation =
        confirm(
            "Voulez-vous supprimer cette absence ?"
        );


    if (!confirmation) {
        return;
    }


    const absences =
        recupererAbsencesProfesseurs();


    const nouvellesAbsences =
        absences.filter(
            absence =>
                String(absence.id) !==
                String(id)
        );


    sauvegarderAbsencesProfesseurs(
        nouvellesAbsences
    );


    afficherHistoriqueAbsences();
}


// ==========================================
// AFFICHER L'HISTORIQUE
// ==========================================

function afficherHistoriqueAbsences() {

    const conteneur =
        document.querySelector(
            "#absence-history"
        );


    if (!conteneur) {
        return;
    }


    const absences =
        recupererAbsencesProfesseurs();


    if (absences.length === 0) {

        conteneur.innerHTML = `

            <div class="absence-empty">

                <h3>
                    📋 Historique des absences
                </h3>

                <p>
                    Aucune absence de professeur enregistrée pour le moment.
                </p>

            </div>

        `;

        return;
    }


    // Regrouper par semaine
    const semaines = {};


    absences.forEach(absence => {

        if (!semaines[absence.semaine]) {

            semaines[absence.semaine] = [];
        }


        semaines[absence.semaine].push(
            absence
        );
    });


    const cles =
        Object.keys(
            semaines
        ).sort().reverse();


    conteneur.innerHTML = `

        <h3>
            📋 Historique des absences
        </h3>

    `;


    cles.forEach(semaine => {

        const dateLundi =
            obtenirLundi(
                `${semaine}T00:00:00`
            );


        const bloc =
            document.createElement(
                "div"
            );


        bloc.className =
            "absence-week";


        const nombre =
            semaines[semaine].length;


        bloc.innerHTML = `

            <div class="absence-week-title">

                <strong>
                    📅 Semaine du
                    ${formatDateLocale(dateLundi)}
                </strong>

                <span>
                    ${nombre}
                    absence${nombre > 1 ? "s" : ""}
                </span>

            </div>

            <div class="absence-week-list"></div>

        `;


        const liste =
            bloc.querySelector(
                ".absence-week-list"
            );


        semaines[semaine]
            .sort(
                (a, b) =>
                    jours.indexOf(a.jour) -
                    jours.indexOf(b.jour)
            )
            .forEach(absence => {

                const element =
                    document.createElement(
                        "div"
                    );


                element.className =
                    "absence-item";


                const remplacement =
                    absence.remplacement
                        ? "🔄 Professeur remplacé"
                        : "❌ Aucun remplacement";


                element.innerHTML = `

                    <div>

                        <strong>
                            ${absence.matiere}
                        </strong>

                        <span>
                            ${absence.jour}
                            •
                            ${absence.debut}
                            → ${absence.fin}
                        </span>

                        <span>
                            👨‍🏫
                            ${absence.professeur || "Professeur non indiqué"}
                        </span>

                        <span>
                            ${remplacement}
                        </span>

                        ${
                            absence.commentaire
                                ? `
                                    <small>
                                        📝 ${absence.commentaire}
                                    </small>
                                  `
                                : ""
                        }

                    </div>

                    <button
                        type="button"
                        class="delete-absence"
                        data-id="${absence.id}"
                    >
                        🗑️
                    </button>

                `;


                element
                    .querySelector(
                        ".delete-absence"
                    )
                    ?.addEventListener(
                        "click",
                        () => {

                            supprimerAbsence(
                                absence.id
                            );
                        }
                    );


                liste.appendChild(
                    element
                );
            });


        conteneur.appendChild(
            bloc
        );
    });
}


// ==========================================
// INITIALISER LES ABSENCES
// ==========================================

function initialiserFormulaireAbsences() {

    const formulaire =
        document.querySelector(
            "#prof-absence-form"
        );


    if (!formulaire) {
        return;
    }


    // Semaine actuelle
    const inputSemaine =
        document.querySelector(
            "#absence-week"
        );


    if (inputSemaine) {

        const aujourdHui =
            new Date();


        const lundi =
            obtenirLundi(
                aujourdHui
            );


        inputSemaine.value =
            lundi
                .toISOString()
                .split("T")[0];
    }


    document.querySelector(
        "#absence-period"
    )?.addEventListener(
        "change",
        mettreAJourListeCoursAbsence
    );


    document.querySelector(
        "#absence-day"
    )?.addEventListener(
        "change",
        mettreAJourListeCoursAbsence
    );


    formulaire.addEventListener(
        "submit",
        evenement => {

            evenement.preventDefault();

            enregistrerAbsenceProfesseur();
        }
    );


    mettreAJourListeCoursAbsence();

    afficherHistoriqueAbsences();
}


// ==========================================
// STYLE ABSENCES
// ==========================================

function ajouterStyleAbsences() {

    if (
        document.querySelector(
            "#style-absences-professeurs"
        )
    ) {

        return;
    }


    const style =
        document.createElement("style");


    style.id =
        "style-absences-professeurs";


    style.textContent = `

        #prof-absences-section {

            margin-top: 30px;
            padding: 24px;

            border-radius: 18px;

            background:
                linear-gradient(
                    135deg,
                    #ffffff,
                    #f5f7ff
                );

            box-shadow:
                0 8px 25px
                rgba(0,0,0,0.08);

        }


        #prof-absences-section h2 {

            margin-bottom: 5px;

        }


        .prof-absence-header p {

            margin-top: 0;

            opacity: .7;

        }


        .prof-absence-form {

            display: grid;

            grid-template-columns:
                repeat(
                    auto-fit,
                    minmax(
                        190px,
                        1fr
                    )
                );

            gap: 15px;

            margin-top: 20px;

        }


        .absence-field {

            display: flex;

            flex-direction: column;

            gap: 6px;

        }


        .absence-field label {

            font-weight: 600;

        }


        .absence-field input,
        .absence-field select,
        .absence-field textarea {

            padding: 10px 12px;

            border: 1px solid
                #d7dbe8;

            border-radius: 10px;

            font: inherit;

        }


        .absence-comment {

            grid-column:
                1 / -1;

        }


        .absence-save-button {

            padding: 12px 18px;

            border: 0;

            border-radius: 10px;

            cursor: pointer;

            font-weight: 700;

        }


        .absence-current-week {

            margin-top: 25px;

        }


        .absence-history {

            margin-top: 25px;

        }


        .absence-week {

            margin-top: 15px;

            padding: 15px;

            border-radius: 14px;

            background: #fff;

            border: 1px solid
                #e2e5ee;

        }


        .absence-week-title {

            display: flex;

            justify-content:
                space-between;

            align-items: center;

            gap: 10px;

            margin-bottom: 12px;

        }


        .absence-week-title span {

            padding: 5px 10px;

            border-radius: 20px;

            background: #eef1ff;

            font-size: .9em;

        }


        .absence-item {

            display: flex;

            justify-content:
                space-between;

            gap: 15px;

            padding: 12px;

            margin-top: 8px;

            border-radius: 10px;

            background: #f7f8fc;

        }


        .absence-item > div {

            display: flex;

            flex-direction: column;

            gap: 3px;

        }


        .absence-item span {

            font-size: .9em;

            opacity: .8;

        }


        .absence-item small {

            margin-top: 4px;

        }


        .delete-absence {

            align-self: center;

            border: 0;

            background: transparent;

            cursor: pointer;

            font-size: 1.1em;

        }


        .absence-empty {

            padding: 20px;

            text-align: center;

            opacity: .7;

        }

    `;


    document.head.appendChild(
        style
    );
}


// ==========================================
// FORMULAIRE EMPLOI DU TEMPS
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

                const cache =
                    section.style.display ===
                        "none" ||
                    section.style.display === "";


                section.style.display =
                    cache
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
// INITIALISATION GÉNÉRALE
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


        // Absences
        ajouterStyleAbsences();
        creerSectionAbsences();


        // Q1 par défaut
        boutonQ1?.classList.add(
            "selected"
        );


        afficherEmploiDuTemps(
            "Q1"
        );


        // Q1
        boutonQ1?.addEventListener(
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


        // Q2
        boutonQ2?.addEventListener(
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
);
