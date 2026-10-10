
"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const periodeSelect = document.getElementById("periode");
    const jourSelect = document.getElementById("jour-filtre");
    const tableBody = document.getElementById("edt-body");
    const message = document.getElementById("edt-message");
    const printButton = document.getElementById("imprimer-edt");

    const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];

    /*
     * Chaque cours possède :
     * jour, debut, fin, matiere, professeur et salle.
     * Les horaires sont au format HH:MM.
     */

    const emploisDuTemps = {
        Q1: [
            { jour: "Lundi", debut: "08:55", fin: "09:50", matiere: "Soutien au parcours", professeur: "LE PAPE D.", salle: "S.32 info" },
            { jour: "Lundi", debut: "10:10", fin: "12:00", matiere: "Français / Histoire-Géo / EMC", professeur: "FREVILLE C.", salle: "I173 LP FCS HG" },
            { jour: "Lundi", debut: "13:40", fin: "14:35", matiere: "Économie & Gestion", professeur: "LINDAUER A.", salle: "I460" },
            { jour: "Lundi", debut: "14:35", fin: "15:30", matiere: "Réalisation projet", professeur: "LE PAPE D.", salle: "S.31 info" },
            { jour: "Lundi", debut: "15:45", fin: "16:40", matiere: "Réalisation projet", professeur: "LE PAPE D.", salle: "S.31 info" },

            { jour: "Mardi", debut: "08:55", fin: "11:35", matiere: "Enseignement professionnel", professeur: "LUCIEN E.", salle: "S.31 info" },
            { jour: "Mardi", debut: "11:40", fin: "12:30", matiere: "Co-intervention", professeur: "LE PAPE D. / FREVILLE C.", salle: "E220 / Atelier S.30.1" },
            { jour: "Mardi", debut: "13:40", fin: "14:35", matiere: "Arts appliqués / Culture artistique", professeur: "NIEDERGANG L.", salle: "E205 LP" },
            { jour: "Mardi", debut: "14:40", fin: "15:30", matiere: "Arts appliqués / Culture artistique", professeur: "NIEDERGANG L.", salle: "E205 LP" },

            { jour: "Mercredi", debut: "08:30", fin: "08:55", matiere: "EPS", professeur: "HAMON F.", salle: "Lycée ou salle extérieure" },
            { jour: "Mercredi", debut: "08:55", fin: "09:50", matiere: "EPS", professeur: "HAMON F.", salle: "Lycée ou salle extérieure" },
            { jour: "Mercredi", debut: "10:10", fin: "11:05", matiere: "Anglais LV1", professeur: "COLOMBEL S.", salle: "I358" },
            { jour: "Mercredi", debut: "11:10", fin: "12:00", matiere: "Mathématiques", professeur: "MESLARD S.", salle: "E218 (MECA)" },

            { jour: "Jeudi", debut: "08:00", fin: "09:50", matiere: "Français / Histoire-Géo / EMC", professeur: "FREVILLE C.", salle: "I173 LP FCS HG" },
            { jour: "Jeudi", debut: "10:10", fin: "12:00", matiere: "Sciences physiques", professeur: "MESLARD S.", salle: "E224" },
            { jour: "Jeudi", debut: "14:40", fin: "16:40", matiere: "Pratique professionnelle", professeur: "LUCIEN E.", salle: "S.29 AEPA" },
            { jour: "Jeudi", debut: "16:40", fin: "17:40", matiere: "Pratique professionnelle", professeur: "LUCIEN E. / LE PAPE D.", salle: "S.29 AEPA ou S.30" },

            { jour: "Vendredi", debut: "08:00", fin: "12:00", matiere: "Pratique professionnelle", professeur: "LETTELIER J. ou LUCIEN E.", salle: "S.29 AEPA ou S.29B AEPA" },
            { jour: "Vendredi", debut: "14:40", fin: "15:30", matiere: "Anglais LV1", professeur: "COLOMBEL S.", salle: "I366" },
            { jour: "Vendredi", debut: "15:45", fin: "17:25", matiere: "EPS", professeur: "HAMON F.", salle: "Lycée ou salle extérieure" }
        ],

        Q2: [
            { jour: "Lundi", debut: "08:00", fin: "09:50", matiere: "Soutien au parcours", professeur: "LE PAPE D.", salle: "S.32 info" },
            { jour: "Lundi", debut: "10:10", fin: "12:00", matiere: "Prévention-Santé-Environnement (PSE)", professeur: "BASSO K.", salle: "E014" },
            { jour: "Lundi", debut: "13:40", fin: "14:35", matiere: "Économie & Gestion", professeur: "LINDAUER A.", salle: "I460" },
            { jour: "Lundi", debut: "14:40", fin: "16:10", matiere: "Réalisation projet", professeur: "LE PAPE D. / MESLARD S.", salle: "S.31 info" },

            { jour: "Mardi", debut: "08:30", fin: "11:10", matiere: "Enseignement technologique professionnel", professeur: "LUCIEN E.", salle: "S.31 info" },
            { jour: "Mardi", debut: "11:40", fin: "12:30", matiere: "Co-intervention", professeur: "LE PAPE D. / MESLARD S.", salle: "E218 ou atelier" },
            { jour: "Mardi", debut: "13:40", fin: "14:35", matiere: "Mathématiques", professeur: "MESLARD S.", salle: "E218 ou E214" },

            { jour: "Mercredi", debut: "08:00", fin: "09:50", matiere: "Français / Histoire-Géo / EMC", professeur: "FREVILLE C.", salle: "I173 LP FCS HG" },
            { jour: "Mercredi", debut: "10:10", fin: "11:10", matiere: "Anglais LV1", professeur: "COLOMBEL S.", salle: "I358" },
            { jour: "Mercredi", debut: "11:10", fin: "12:00", matiere: "Mathématiques", professeur: "MESLARD S.", salle: "E218" },

            { jour: "Jeudi", debut: "08:00", fin: "09:50", matiere: "Français / Histoire-Géo / EMC", professeur: "FREVILLE C.", salle: "I173 LP FCS HG" },
            { jour: "Jeudi", debut: "10:10", fin: "12:00", matiere: "Sciences physiques", professeur: "MESLARD S.", salle: "E224" },
            { jour: "Jeudi", debut: "14:40", fin: "17:40", matiere: "Pratique professionnelle", professeur: "LUCIEN E. ou LE PAPE D.", salle: "S.29 AEPA ou S.30 INFO" },

            { jour: "Vendredi", debut: "08:00", fin: "12:00", matiere: "Pratique professionnelle", professeur: "LETTELIER J. ou LUCIEN E.", salle: "S.29B AEPA ou S.29 AEPA" },
            { jour: "Vendredi", debut: "14:40", fin: "15:30", matiere: "Anglais LV1", professeur: "COLOMBEL S.", salle: "I366" },
            { jour: "Vendredi", debut: "15:45", fin: "17:25", matiere: "EPS", professeur: "HAMON F.", salle: "À confirmer" }
        ]
    };

    const pauses = [
        { debut: "09:50", fin: "10:10", matiere: "Récréation", type: "pause" },
        { debut: "12:00", fin: "13:00", matiere: "Déjeuner", type: "dejeuner" },
        { debut: "15:30", fin: "15:45", matiere: "Récréation", type: "pause" }
    ];

    function escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, character => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        })[character]);
    }

    function minutes(horaire) {
        const [heures, minutesValue] = horaire.split(":").map(Number);
        return heures * 60 + minutesValue;
    }

    function afficherCours(cours) {
        if (!cours) return "";

        const typeClass = cours.type === "pause"
            ? "edt-pause"
            : cours.type === "dejeuner"
                ? "edt-dejeuner"
                : "edt-cours";

        if (cours.type) {
            return `
                <div class="edt-event ${typeClass}">
                    <strong>${escapeHTML(cours.matiere)}</strong>
                    <span>${escapeHTML(cours.debut)} – ${escapeHTML(cours.fin)}</span>
                </div>
            `;
        }

        return `
            <div class="edt-event ${typeClass}">
                <strong>${escapeHTML(cours.matiere)}</strong>
                <span class="edt-time">${escapeHTML(cours.debut)} – ${escapeHTML(cours.fin)}</span>
                <span>👤 ${escapeHTML(cours.professeur)}</span>
                <span>📍 ${escapeHTML(cours.salle)}</span>
            </div>
        `;
    }

    function afficherEmploiDuTemps() {
        const periode = periodeSelect.value;
        const jourChoisi = jourSelect.value;
        const cours = emploisDuTemps[periode] || [];

        const tousLesEvenements = [
            ...cours,
            ...pauses.map(pause => ({ ...pause }))
        ];

        const heures = [...new Set(tousLesEvenements.map(item => item.debut))]
            .sort((a, b) => minutes(a) - minutes(b));

        const joursVisibles = jourChoisi === "tous" ? jours : [jourChoisi];

        const entetes = document.querySelectorAll("#edt-table thead th[data-day]");

        entetes.forEach(entete => {
            entete.hidden = jourChoisi !== "tous" &&
                entete.dataset.day !== jourChoisi;
        });

        tableBody.innerHTML = heures.map(heure => {
            const evenementReference = tousLesEvenements.find(item => item.debut === heure);
            const heureFin = evenementReference?.fin || "";

            const cellules = joursVisibles.map(jour => {
                const evenementsDuJour = tousLesEvenements.filter(item =>
                    item.jour === jour && item.debut === heure
                );

                return `
                    <td data-day="${escapeHTML(jour)}">
                        ${evenementsDuJour.map(afficherCours).join("") || "—"}
                    </td>
                `;
            }).join("");

            return `
                <tr>
                    <th scope="row">${escapeHTML(heure)}${heureFin ? `<br><small>${escapeHTML(heureFin)}</small>` : ""}</th>
                    ${cellules}
                </tr>
            `;
        }).join("");

        if (message) {
            message.textContent =
                `${periode} : ${cours.length} cours enregistrés.`;
        }
    }

    periodeSelect.addEventListener("change", afficherEmploiDuTemps);
    jourSelect.addEventListener("change", afficherEmploiDuTemps);

    printButton.addEventListener("click", () => {
        window.print();
    });

    afficherEmploiDuTemps();
});
