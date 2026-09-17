// ==========================================
// MON ENT PERSO LFE
// DONNÉES DE L'EMPLOI DU TEMPS
// ==========================================

const emploiDuTemps = {

    Q1: {

        // ==============================
        // LUNDI
        // ==============================

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
                salle: "173 LP FCS HG"
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
            }
        ],


        // ==============================
        // MARDI
        // ==============================

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


        // ==============================
        // MERCREDI
        // ==============================

        mercredi: [
            {
                debut: "08:00",
                fin: "08:55",
                matiere: "Éducation physique & sportive",
                professeur: "HAMON F."
            },
            {
                debut: "08:55",
                fin: "09:50",
                matiere: "Éducation physique & sportive",
                professeur: "HAMON F."
            },
            {
                debut: "10:10",
                fin: "11:10",
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


        // ==============================
        // JEUDI
        // ==============================

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
                salle: "S.29 AEP"
            },
            {
                debut: "15:45",
                fin: "16:40",
                matiere: "Pratique professionnelle",
                professeur: "LUCIEN E.",
                salle: "S.29 AEP"
            },
            {
                debut: "16:40",
                fin: "17:40",
                matiere: "Pratique professionnelle",
                professeur: "LUCIEN E.",
                salle: "S.29 AEP"
            }
        ],


        // ==============================
        // VENDREDI
        // ==============================

        vendredi: [
            {
                debut: "08:00",
                fin: "08:55",
                matiere: "Pratique professionnelle",
                professeur: "LETTELIER J.",
                salle: "S.29 AEP"
            },
            {
                debut: "08:55",
                fin: "09:50",
                matiere: "Pratique professionnelle",
                professeur: "LETTELIER J.",
                salle: "S.29 AEP"
            },
            {
                debut: "10:10",
                fin: "11:10",
                matiere: "Pratique professionnelle",
                professeur: "LETTELIER J.",
                salle: "S.29 AEP"
            },
            {
                debut: "11:10",
                fin: "12:00",
                matiere: "Pratique professionnelle",
                professeur: "LETTELIER J.",
                salle: "S.29 AEP"
            },
            {
                debut: "13:40",
                fin: "14:35",
                matiere: "Anglais LV1",
                professeur: "COLOMBEL S.",
                salle: "I366"
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
                professeur: "HAMON F."
            },
            {
                debut: "16:40",
                fin: "17:40",
                matiere: "Éducation physique & sportive",
                professeur: "HAMON F."
            }
        ]

    },


    // ==========================================
    // Q2
    // ==========================================

    Q2: {

        lundi: [],
        mardi: [],
        mercredi: [],
        jeudi: [],
        vendredi: []

    }

};


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
// AFFICHAGE DE L'EMPLOI DU TEMPS
// ==========================================

function afficherEmploiDuTemps(periode = "Q1") {

    const tableau = document.querySelector("#schedule-body");

    if (!tableau) {
        return;
    }

    tableau.innerHTML = "";


    // Parcours des horaires
    horaires.forEach(horaire => {

        const ligne = document.createElement("tr");

        // ==============================
        // COLONNE HORAIRE
        // ==============================

        const celluleHoraire = document.createElement("td");

        celluleHoraire.innerHTML = `
            <strong>${horaire[0]}</strong>
            <br>
            ${horaire[1]}
        `;

        ligne.appendChild(celluleHoraire);


        // ==============================
        // COLONNES DES JOURS
        // ==============================

        jours.forEach(jour => {

            const cellule = document.createElement("td");

            // Récréation
            if (horaire[0] === "09:50" && horaire[1] === "10:10") {

                cellule.innerHTML = "🔔 Récréation";
                cellule.classList.add("break-cell");

            }

            // Pause déjeuner
            else if (horaire[0] === "12:00" && horaire[1] === "13:00") {

                cellule.innerHTML = "🍽️ Pause déjeuner";
                cellule.classList.add("lunch-cell");

            }

            // Petite pause
            else if (
                (horaire[0] === "13:35" && horaire[1] === "13:40") ||
                (horaire[0] === "14:35" && horaire[1] === "14:40") ||
                (horaire[0] === "15:30" && horaire[1] === "15:45")
            ) {

                cellule.innerHTML = "⏸️ Pause";
                cellule.classList.add("break-cell");

            }

            // Fin de journée
            else if (horaire[0] === "17:40") {

                cellule.innerHTML = "🏁 Fin";
                cellule.classList.add("end-cell");

            }

            // Recherche du cours
            else {

                const cours = emploiDuTemps[periode][jour]?.find(
                    cours =>
                        cours.debut === horaire[0] &&
                        cours.fin === horaire[1]
                );


                if (cours) {

                    cellule.innerHTML = `
                        <div class="course">

                            <strong>
                                ${cours.matiere}
                            </strong>

                            <span>
                                👨‍🏫 ${cours.professeur || ""}
                            </span>

                            <small>
                                📍 ${cours.salle || "Salle non renseignée"}
                            </small>

                        </div>
                    `;

                }

            }

            ligne.appendChild(cellule);

        });


        tableau.appendChild(ligne);

    });

}


// ==========================================
// LANCEMENT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    afficherEmploiDuTemps("Q1");

});
