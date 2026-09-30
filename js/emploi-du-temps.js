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
                debut: "08:55",
                fin: "09:50",
                matiere: "Soutien au parcours",
                professeur: "LE PAPE D.",
                salle: "S.32 info"
            },
            {
                debut: "10:10",
                fin: "11:10",
                matiere: "Français / Histoire-Géo / EMC",
                professeur: "FREVILLE C.",
                salle: "I173 LP FCS HG"
            },
            {
                debut: "11:10",
                fin: "12:00",
                matiere: "Prévention-Santé-Environnement",
                professeur: "BASSO K.",
                salle: "E014 HP"
            },
            {
                debut: "13:40",
                fin: "14:35",
                matiere: "Économie & Gestion",
                professeur: "LINDAUER A.",
                salle: "I460"
            },
            {
                debut: "14:35",
                fin: "15:30",
                matiere: "Réalisation projet",
                professeur: "LE PAPE D.",
                salle: "S.31 info"
            },
            {
                debut: "15:45",
                fin: "16:40",
                matiere: "Réalisation projet",
                professeur: "LE PAPE D.",
                salle: "S.31 info"
            }
        ],

        mardi: [
            {
                debut: "08:55",
                fin: "09:50",
                matiere: "Enseignement professionnel",
                professeur: "LUCIEN E.",
                salle: "S.31 info"
            },
            {
                debut: "10:10",
                fin: "11:10",
                matiere: "Co-intervention",
                professeur: "LE PAPE D. / MESLARD S.",
                salle: "E220"
            },
            {
                debut: "11:10",
                fin: "12:00",
                matiere: "Mathématiques",
                professeur: "MESLARD S.",
                salle: "E218 (MECA)"
            },
            {
                debut: "13:40",
                fin: "14:35",
                matiere: "Arts appliqués / Culture artistique",
                professeur: "NIEDERGANG L.",
                salle: "E205 LP"
            },
            {
                debut: "14:40",
                fin: "15:30",
                matiere: "Arts appliqués / Culture artistique",
                professeur: "NIEDERGANG L.",
                salle: "E205 LP"
            }
        ],

        mercredi: [
            {
                debut: "08:30",
                fin: "08:55",
                matiere: "Éducation physique & sportive",
                professeur: "HAMON F.",
                salle: ""
            },
            {
                debut: "08:55",
                fin: "09:50",
                matiere: "Éducation physique & sportive",
                professeur: "HAMON F.",
                salle: ""
            },
            {
                debut: "10:10",
                fin: "11:05",
                matiere: "Anglais LV1",
                professeur: "COLOMBEL S.",
                salle: "I366"
            },
            {
                debut: "11:10",
                fin: "12:00",
                matiere: "Mathématiques",
                professeur: "MESLARD S.",
                salle: "E218 (MECA)"
            }
        ],

        jeudi: [
            {
                debut: "08:00",
                fin: "08:55",
                matiere: "Français / Histoire-Géo / EMC",
                professeur: "FREVILLE C.",
                salle: "173 LP FCS HG"
            },
            {
                debut: "08:55",
                fin: "09:50",
                matiere: "Français / Histoire-Géo / EMC",
                professeur: "FREVILLE C.",
                salle: "173 LP FCS HG"
            },
            {
                debut: "10:10",
                fin: "11:10",
                matiere: "Sciences physiques",
                professeur: "MESLARD S.",
                salle: "E224"
            },
            {
                debut: "11:10",
                fin: "12:00",
                matiere: "Sciences physiques",
                professeur: "MESLARD S.",
                salle: "E224"
            },
            {
                debut: "14:40",
                fin: "15:30",
                matiere: "Pratique professionnelle",
                professeur: "LUCIEN E.",
                salle: "S.29 AEPA"
            },
            {
                debut: "15:45",
                fin: "16:40",
                matiere: "Pratique professionnelle",
                professeur: "LUCIEN E.",
                salle: "S.29 AEPA"
            },
            {
                debut: "16:40",
                fin: "17:40",
                matiere: "Pratique professionnelle",
                professeur: "LUCIEN E.",
                salle: "S.29 AEPA"
            }
        ],

        vendredi: [
            {
                debut: "08:00",
                fin: "08:55",
                matiere: "Pratique professionnelle",
                professeur: "LETTELIER J.",
                salle: "S.29 AEPA"
            },
            {
                debut: "08:55",
                fin: "09:50",
                matiere: "Pratique professionnelle",
                professeur: "LETTELIER J.",
                salle: "S.29 AEPA"
            },
            {
                debut: "10:10",
                fin: "11:10",
                matiere: "Pratique professionnelle",
                professeur: "LETTELIER J.",
                salle: "S.29 AEPA"
            },
            {
                debut: "11:10",
                fin: "12:00",
                matiere: "Pratique professionnelle",
                professeur: "LETTELIER J.",
                salle: "S.29 AEPA"
            },
            {
                debut: "14:40",
                fin: "15:30",
                matiere: "Anglais LV1",
                professeur: "COLOMBEL S.",
                salle: "I366"
            },
            {
                debut: "15:45",
                fin: "16:40",
                matiere: "Éducation physique & sportive",
                professeur: "HAMON F.",
                salle: ""
            },
            {
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
                debut: "08:00",
                fin: "10:10",
                matiere: "Soutien au parcours",
                professeur: "LE PAPE D.",
                salle: "S.32 info"
            },
            {
                debut: "10:10",
                fin: "12:00",
                matiere: "Prévention-Santé-Environnement",
                professeur: "BASSO K.",
                salle: "E014"
            },
            {
                debut: "13:40",
                fin: "14:35",
                matiere: "Économie & Gestion",
                professeur: "LINDAUER A.",
                salle: "I460"
            },
            {
                debut: "14:40",
                fin: "16:10",
                matiere: "Réalisation projet",
                professeur: "LE PAPE D. / MESLARD S.",
                salle: "S.31 info"
            }
        ],

        mardi: [
            {
                debut: "08:00",
                fin: "10:10",
                matiere: "Enseignement technologique professionnel",
                professeur: "LUCIEN E.",
                salle: "S.31 info"
            },
            {
                debut: "10:10",
                fin: "12:00",
                matiere: "Co-intervention",
                professeur: "LE PAPE D. / MESLARD S.",
                salle: "E220"
            },
            {
                debut: "13:40",
                fin: "14:35",
                matiere: "Mathématiques",
                professeur: "MESLARD S.",
                salle: "E218 ou E214"
            }
        ],

        mercredi: [
            {
                debut: "08:00",
                fin: "09:50",
                matiere: "Français / Histoire-Géo / EMC",
                professeur: "FREVILLE C.",
                salle: "I173 LP FCS HG"
            },
            {
                debut: "10:10",
                fin: "11:10",
                matiere: "Anglais LV1",
                professeur: "COLOMBEL S.",
                salle: "I358"
            },
            {
                debut: "11:10",
                fin: "12:00",
                matiere: "Mathématiques",
                professeur: "MESLARD S.",
                salle: "E218"
            }
        ],

        jeudi: [
            {
                debut: "08:00",
                fin: "09:50",
                matiere: "Français / Histoire-Géo / EMC",
                professeur: "FREVILLE C.",
                salle: "I173 LP FCS HG"
            },
            {
                debut: "10:10",
                fin: "12:00",
                matiere: "Sciences physiques",
                professeur: "MESLARD S.",
                salle: "E224"
            },
            {
                debut: "14:40",
                fin: "17:40",
                matiere: "Pratique professionnelle",
                professeur: "LUCIEN E.",
                salle: "S.29 AEPA"
            }
        ],

        vendredi: [
            {
                debut: "08:00",
                fin: "12:00",
                matiere: "Pratique professionnelle",
                professeur: "LETTELIER J.",
                salle: "S.29B AEPA"
            },
            {
                debut: "14:40",
                fin: "15:40",
                matiere: "Anglais LV1",
                professeur: "COLOMBEL S.",
                salle: "I366"
            },
            {
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
// RÉCUPÉRER LES COURS AJOUTÉS
// ==========================================

function recupererCoursAjoutes() {

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


// ==========================================
// SAUVEGARDER
// ==========================================

function sauvegarderCoursAjoutes(cours) {

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

    const coursAjoutes =
        recupererCoursAjoutes().filter(
            cours =>
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

                            ${
                                estAjoute
                                    ? `
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
                                      `
                                    : ""
                            }

                        </div>
                    `;


                    // ==================================
                    // MODIFIER
                    // ==================================

                    if (estAjoute) {

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


                        // ==============================
                        // SUPPRIMER
                        // ==============================

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
        recupererCoursAjoutes();

    coursExistants.push(cours);

    sauvegarderCoursAjoutes(
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
    }


    document.querySelector(
        "#schedule-period"
    ).value = periode;


    alert(
        `✅ ${matiere} a été ajouté à ton emploi du temps ${periode}.`
    );
}


// ==========================================
// MODIFIER UN COURS
// ==========================================

function modifierCours(id) {

    const cours =
        recupererCoursAjoutes();

    const index =
        cours.findIndex(
            cours => cours.id === id
        );

    if (index === -1) {
        return;
    }


    const coursAModifier =
        cours[index];


    // ======================================
    // AFFICHER LE FORMULAIRE
    // ======================================

    const section =
        document.querySelector(
            "#add-schedule-section"
        );

    if (section) {
        section.style.display = "block";
    }


    // ======================================
    // REMPLIR LE FORMULAIRE
    // ======================================

    document.querySelector(
        "#schedule-period"
    ).value = coursAModifier.periode;

    document.querySelector(
        "#schedule-day"
    ).value = coursAModifier.jour;

    document.querySelector(
        "#schedule-subject"
    ).value = coursAModifier.matiere;

    document.querySelector(
        "#schedule-start"
    ).value = coursAModifier.debut;

    document.querySelector(
        "#schedule-end"
    ).value = coursAModifier.fin;

    document.querySelector(
        "#schedule-teacher"
    ).value = coursAModifier.professeur || "";

    document.querySelector(
        "#schedule-room"
    ).value = coursAModifier.salle || "";

    document.querySelector(
        "#schedule-description"
    ).value =
        coursAModifier.description || "";


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
    // MODIFIER LE BOUTON
    // ======================================

    const bouton =
        formulaire.querySelector(
            'button[type="submit"]'
        );

    if (bouton) {

        bouton.textContent =
            "💾 Enregistrer les modifications";
    }


    // ======================================
    // REMONTER AU FORMULAIRE
    // ======================================

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
        Number(
            formulaire.dataset.editingId
        );


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


    // ======================================
    // MODIFICATION
    // ======================================

    const cours =
        recupererCoursAjoutes();

    const index =
        cours.findIndex(
            cours => cours.id === id
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


    sauvegarderCoursAjoutes(
        cours
    );


    // ======================================
    // FIN DU MODE MODIFICATION
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


    // ======================================
    // RAFRAÎCHIR
    // ======================================

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


    // ======================================
    // FORMULAIRE
    // ======================================

    const formulaire =
        document.querySelector(
            "#schedule-form"
        );


    if (formulaire) {

        formulaire.addEventListener(
            "submit",
            evenement => {

                evenement.preventDefault();


                // Si on est en mode modification
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


        initialiserFormulaire();


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
