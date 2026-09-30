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
                fin: "11:10",
                matiere: "Français / Histoire-Géo / EMC",
                professeur: "FREVILLE C.",
                salle: "I173 LP FCS HG"
            },
            {
                id: "q1-lundi-3",
                debut: "11:10",
                fin: "12:00",
                matiere: "Prévention-Santé-Environnement",
                professeur: "BASSO K.",
                salle: "E014 HP"
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
                fin: "09:50",
                matiere: "Enseignement professionnel",
                professeur: "LUCIEN E.",
                salle: "S.31 info"
            },
            {
                id: "q1-mardi-2",
                debut: "10:10",
                fin: "11:10",
                matiere: "Co-intervention",
                professeur: "LE PAPE D. / MESLARD S.",
                salle: "E220"
            },
            {
                id: "q1-mardi-3",
                debut: "11:10",
                fin: "12:00",
                matiere: "Mathématiques",
                professeur: "MESLARD S.",
                salle: "E218 (MECA)"
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
                salle: ""
            },
            {
                id: "q1-mercredi-2",
                debut: "08:55",
                fin: "09:50",
                matiere: "Éducation physique & sportive",
                professeur: "HAMON F.",
                salle: ""
            },
            {
                id: "q1-mercredi-3",
                debut: "10:10",
                fin: "11:05",
                matiere: "Anglais LV1",
                professeur: "COLOMBEL S.",
                salle: "I366"
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
                professeur: "LUCIEN E.",
                salle: "S.29 AEPA"
            }
        ],

        vendredi: [
            {
                id: "q1-vendredi-1",
                debut: "08:00",
                fin: "08:55",
                matiere: "Pratique professionnelle",
                professeur: "LETTELIER J.",
                salle: "S.29 AEPA"
            },
            {
                id: "q1-vendredi-2",
                debut: "08:55",
                fin: "09:50",
                matiere: "Pratique professionnelle",
                professeur: "LETTELIER J.",
                salle: "S.29 AEPA"
            },
            {
                id: "q1-vendredi-3",
                debut: "10:10",
                fin: "11:10",
                matiere: "Pratique professionnelle",
                professeur: "LETTELIER J.",
                salle: "S.29 AEPA"
            },
            {
                id: "q1-vendredi-4",
                debut: "11:10",
                fin: "12:00",
                matiere: "Pratique professionnelle",
                professeur: "LETTELIER J.",
                salle: "S.29 AEPA"
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
                salle: ""
            },
            {
                id: "q1-vendredi-7",
                debut: "16:40",
                fin: "17:25",
                matiere: "Éducation physique & sportive",
                professeur: "HAMON F.",
                salle: ""
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
                fin: "10:10",
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
                debut: "08:00",
                fin: "10:10",
                matiere: "Enseignement technologique professionnel",
                professeur: "LUCIEN E.",
                salle: "S.31 info"
            },
            {
                id: "q2-mardi-2",
                debut: "10:10",
                fin: "12:00",
                matiere: "Co-intervention",
                professeur: "LE PAPE D. / MESLARD S.",
                salle: "E220"
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
                professeur: "LUCIEN E.",
                salle: "S.29 AEPA"
            }
        ],

        vendredi: [
            {
                id: "q2-vendredi-1",
                debut: "08:00",
                fin: "12:00",
                matiere: "Pratique professionnelle",
                professeur: "LETTELIER J.",
                salle: "S.29B AEPA"
            },
            {
                id: "q2-vendredi-2",
                debut: "14:40",
                fin: "15:40",
                matiere: "Anglais LV1",
                professeur: "COLOMBEL S.",
                salle: "I366"
            },
            {
                id: "q2-vendredi-3",
                debut: "15:40",
                fin: "17:40",
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
// COURS MODIFIÉS / AJOUTÉS
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
// OBTENIR LES COURS
// ==========================================

function obtenirCours(periode, jour) {

    const coursDeBase =
        emploiDuTemps[periode]?.[jour] || [];

    const coursPersonnalises =
        recupererCoursPersonnalises().filter(
            cours =>
                cours.periode === periode &&
                cours.jour === jour
        );

    return [
        ...coursDeBase,
        ...coursPersonnalises
    ];
}


// ==========================================
// TROUVER UN COURS
// ==========================================

function trouverCours(id) {

    // Chercher dans les cours personnalisés
    const personnalises =
        recupererCoursPersonnalises();

    const personnalise =
        personnalises.find(
            cours => String(cours.id) === String(id)
        );

    if (personnalise) {

        return {
            cours: personnalise,
            type: "personnalise"
        };
    }


    // Chercher dans les cours de base
    for (const periode of ["Q1", "Q2"]) {

        for (const jour of jours) {

            const liste =
                emploiDuTemps[periode]?.[jour] || [];

            const index =
                liste.findIndex(
                    cours =>
                        String(cours.id) === String(id)
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

        const celluleHoraire =
            document.createElement("td");

        celluleHoraire.innerHTML = `
            <strong>${horaire[0]}</strong>
            <br>
            ${horaire[1]}
        `;

        ligne.appendChild(celluleHoraire);


        jours.forEach(jour => {

            const cellule =
                document.createElement("td");

            const debut =
                convertirMinutes(horaire[0]);

            const fin =
                convertirMinutes(horaire[1]);
// ==========================================
// COULEUR DE CHAQUE MATIÈRE
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

    return couleurs[matiere] || "course";
}

            // ======================================
            // PAUSES
            // ======================================

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


                if (cours) {

                    cellule.innerHTML = `
                        <div class="course">

                            <strong>
                                ${cours.matiere}
                            </strong>

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

                    if (boutonModifier) {

                        boutonModifier.addEventListener(
                            "click",
                            evenement => {

                                evenement.stopPropagation();

                                modifierCours(
                                    cours.id
                                );
                            }
                        );
                    }


                    // ==================================
                    // SUPPRIMER
                    // ==================================

                    const boutonSupprimer =
                        cellule.querySelector(
                            ".delete-schedule-course"
                        );

                    if (boutonSupprimer) {

                        boutonSupprimer.addEventListener(
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

    coursExistants.push(cours);

    sauvegarderCoursPersonnalises(
        coursExistants
    );


    afficherEmploiDuTemps(
        periode
    );


    const formulaire =
        document.querySelector(
            "#schedule-form"
        );

    if (formulaire) {

        formulaire.reset();

        formulaire.removeAttribute(
            "data-editing-id"
        );
    }


    document.querySelector(
        "#schedule-period"
    ).value = periode;


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


    // ======================================
    // REMPLIR LE FORMULAIRE
    // ======================================

    document.querySelector(
        "#schedule-period"
    ).value =
        resultat.periode || cours.periode;

    document.querySelector(
        "#schedule-day"
    ).value =
        resultat.jour || cours.jour;

    document.querySelector(
        "#schedule-subject"
    ).value =
        cours.matiere;

    document.querySelector(
        "#schedule-start"
    ).value =
        cours.debut;

    document.querySelector(
        "#schedule-end"
    ).value =
        cours.fin;

    document.querySelector(
        "#schedule-teacher"
    ).value =
        cours.professeur || "";

    document.querySelector(
        "#schedule-room"
    ).value =
        cours.salle || "";

    document.querySelector(
        "#schedule-description"
    ).value =
        cours.description || "";


    // ======================================
    // MODE MODIFICATION
    // ======================================

    const formulaire =
        document.querySelector(
            "#schedule-form"
        );

    if (!formulaire) {
        return;
    }


    formulaire.dataset.editingId =
        id;


    // ======================================
    // BOUTON
    // ======================================

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


    // ======================================
    // VÉRIFICATIONS
    // ======================================

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


    // ======================================
    // COURS PERSONNALISÉ
    // ======================================

    if (resultat.type === "personnalise") {

        const cours =
            recupererCoursPersonnalises();

        const index =
            cours.findIndex(
                element =>
                    String(element.id) === String(id)
            );

        if (index === -1) {
            return;
        }


        cours[index] = {

            ...cours[index],

            periode,
            jour,
            matiere,
            debut,
            fin,
            professeur,
            salle,
            description
        };


        sauvegarderCoursPersonnalises(
            cours
        );
    }


    // ======================================
    // COURS DE BASE
    // ======================================

    else {

        const ancienPeriode =
            resultat.periode;

        const ancienJour =
            resultat.jour;

        const cours =
            emploiDuTemps[
                ancienPeriode
            ][ancienJour][resultat.index];


        cours.debut =
            debut;

        cours.fin =
            fin;

        cours.matiere =
            matiere;

        cours.professeur =
            professeur;

        cours.salle =
            salle;

        cours.description =
            description;


        // Si on déplace le cours vers une
        // autre période ou un autre jour,
        // on le retire de sa position initiale
        // et on l'enregistre comme personnalisé.

        if (
            ancienPeriode !== periode ||
            ancienJour !== jour
        ) {

            emploiDuTemps[
                ancienPeriode
            ][ancienJour].splice(
                resultat.index,
                1
            );


            const coursDeplace = {

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


            const personnalises =
                recupererCoursPersonnalises();

            personnalises.push(
                coursDeplace
            );

            sauvegarderCoursPersonnalises(
                personnalises
            );
        }

        else {

            // Sauvegarder aussi la modification
            // du cours de base afin qu'elle reste
            // après actualisation.

            const personnalises =
                recupererCoursPersonnalises();

            const indexExistant =
                personnalises.findIndex(
                    element =>
                        String(element.id) ===
                        String(id)
                );

            const copie = {

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


            if (indexExistant === -1) {

                personnalises.push(
                    copie
                );

            } else {

                personnalises[
                    indexExistant
                ] = copie;
            }


            sauvegarderCoursPersonnalises(
                personnalises
            );
        }
    }


    // ======================================
    // FIN MODIFICATION
    // ======================================

    delete formulaire.dataset.editingId;


    const bouton =
        formulaire.querySelector(
            'button[type="submit"]'
        );

    if (bouton) {

        bouton.textContent =
            "➕ Ajouter le cours";
    }


    formulaire.reset();

    document.querySelector(
        "#schedule-period"
    ).value = periode;


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


    // ======================================
    // COURS PERSONNALISÉ
    // ======================================

    if (resultat.type === "personnalise") {

        const cours =
            recupererCoursPersonnalises();

        const nouveauxCours =
            cours.filter(
                element =>
                    String(element.id) !==
                    String(id)
            );

        sauvegarderCoursPersonnalises(
            nouveauxCours
        );
    }


    // ======================================
    // COURS DE BASE
    // ======================================

    else {

        const personnalises =
            recupererCoursPersonnalises();


        // On ajoute une instruction spéciale
        // pour mémoriser que ce cours de base
        // a été supprimé.

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


    // Cours de base non supprimés
    const coursVisibles =
        coursDeBase.filter(
            cours => {

                const suppression =
                    personnalises.find(
                        element =>
                            String(element.id) ===
                            String(cours.id) &&
                            element.supprime === true
                    );

                return !suppression;
            }
        );


    // Modifications de cours de base
    const modifications =
        personnalises.filter(
            cours =>
                cours.periode === periode &&
                cours.jour === jour &&
                !cours.supprime
        );


    // Remplacer les cours de base
    // lorsqu'une modification existe

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
            }
        }
    );


    // Ajouter les nouveaux cours
    const nouveaux =
        modifications.filter(
            modification =>
                !coursDeBase.some(
                    cours =>
                        String(cours.id) ===
                        String(modification.id)
                )
        );


    return [
        ...coursVisibles,
        ...nouveaux
    ];
}


// ==========================================
// REMPLACER LA FONCTION D'AFFICHAGE
// ==========================================

const ancienneFonctionAfficher =
    afficherEmploiDuTemps;


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


        // Q1 sélectionné par défaut

        boutonQ1?.classList.add(
            "selected"
        );


        afficherEmploiDuTemps(
            "Q1"
        );


        // ======================================
        // Q1
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
        // Q2
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
