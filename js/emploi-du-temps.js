// ==========================================
// MON ENT PERSO LFE
// DONNÉES DE L'EMPLOI DU TEMPS
// ==========================================

const emploiDuTemps = {

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
                debut: "09:50",
                fin: "10:10",
                matiere: "Français / Histoire-Géo / EMC",
                professeur: "FREVILLE C.",
                salle: "173 LP FCS HG"
            },
            {
                debut: "09:50",
                fin: "12:00",
                matiere: "Prévention-Santé-Environnement",
                professeur: "BASSO K.",
                salle: "E014-0014 HP"
            },
            {
                debut: "13:40",
                fin: "14:35",
                matiere: "Économie & Gestion",
                professeur: "LINDAUER A."
            },
            {
                debut: "14:35",
                fin: "15:30",
                matiere: "Réalisation projet",
                professeur: "LE PAPE D.",
                salle: "S.31 info"
            }
        ],

        mardi: [
            {
                debut: "08:55",
                fin: "10:10",
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
                fin: "15:40",
                matiere: "Arts appliqués / Culture artistique",
                professeur: "NIEDERGANG L.",
                salle: "E205 LP"
            }
        ],

        mercredi: [
            {
                debut: "08:00",
                fin: "09:50",
                matiere: "Éducation physique & sportive",
                professeur: "HAMON F."
            },
            {
                debut: "09:50",
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

        jeudi: [
            {
                debut: "08:00",
                fin: "10:10",
                matiere: "Français / Histoire-Géo / EMC",
                professeur: "FREVILLE C.",
                salle: "173 LP FCS HG"
            },
            {
                debut: "10:10",
                fin: "12:00",
                matiere: "Sciences physiques",
                professeur: "MESLARD S.",
                salle: "E224"
            },
            {
                debut: "14:35",
                fin: "17:40",
                matiere: "Pratique professionnelle",
                professeur: "LUCIEN E.",
                salle: "S.29 AEP"
            }
        ],

        vendredi: [
            {
                debut: "08:00",
                fin: "13:00",
                matiere: "Pratique professionnelle",
                professeur: "LETTELIER J.",
                salle: "S.29 AEP"
            },
            {
                debut: "13:40",
                fin: "15:30",
                matiere: "Anglais LV1",
                professeur: "COLOMBEL S.",
                salle: "I366"
            },
            {
                debut: "15:45",
                fin: "17:40",
                matiere: "Éducation physique & sportive",
                professeur: "HAMON F."
            }
        ]

    },

    Q2: {

        // La structure Q2 est préparée.
        // Nous compléterons les différences Q1/Q2
        // à partir de ton EDT.

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

    jours.forEach(jour => {

        const coursDuJour = emploiDuTemps[periode][jour] || [];

        coursDuJour.forEach(cours => {

            const ligne = document.createElement("tr");

            ligne.innerHTML = `
                <td>
                    <strong>${cours.debut}</strong><br>
                    ${cours.fin}
                </td>

                <td>
                    <div class="course">
                        <strong>${cours.matiere}</strong>
                        <span>${cours.professeur || ""}</span>
                        <small>${cours.salle || ""}</small>
                    </div>
                </td>
            `;

            tableau.appendChild(ligne);
        });

    });
}


// Affichage initial
document.addEventListener("DOMContentLoaded", () => {
    afficherEmploiDuTemps("Q1");
});
