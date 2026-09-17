/* =========================
   EMPLOI DU TEMPS
========================= */


/* =========================
   DONNÉES
========================= */

const emploiDuTemps = {

    Q1: {

        lundi: [
            {
                debut: "08:00",
                fin: "08:55",
                matiere: "À compléter",
                professeur: "",
                salle: ""
            },

            {
                debut: "08:55",
                fin: "09:50",
                matiere: "À compléter",
                professeur: "",
                salle: ""
            },

            {
                debut: "10:10",
                fin: "11:10",
                matiere: "À compléter",
                professeur: "",
                salle: ""
            },

            {
                debut: "11:10",
                fin: "12:00",
                matiere: "À compléter",
                professeur: "",
                salle: ""
            },

            {
                debut: "13:00",
                fin: "13:35",
                matiere: "À compléter",
                professeur: "",
                salle: ""
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
                professeur: "",
                salle: ""
            }
        ],

        mardi: [],

        mercredi: [],

        jeudi: [],

        vendredi: []

    },


    Q2: {

        lundi: [],

        mardi: [],

        mercredi: [],

        jeudi: [],

        vendredi: []

    }

};


/* =========================
   HORAIRES
========================= */

const horaires = [

    {
        debut: "08:00",
        fin: "08:55"
    },

    {
        debut: "08:55",
        fin: "09:50"
    },

    {
        debut: "09:50",
        fin: "10:10",
        type: "pause",
        texte: "Pause"
    },

    {
        debut: "10:10",
        fin: "11:10"
    },

    {
        debut: "11:10",
        fin: "12:00"
    },

    {
        debut: "12:00",
        fin: "13:00",
        type: "repas",
        texte: "Pause déjeuner"
    },

    {
        debut: "13:00",
        fin: "13:35"
    },

    {
        debut: "13:35",
        fin: "13:40"
    },

    {
        debut: "13:40",
        fin: "14:35"
    },

    {
        debut: "14:35",
        fin: "14:40"
    },

    {
        debut: "14:40",
        fin: "15:30"
    },

    {
        debut: "15:30",
        fin: "15:45",
        type: "pause",
        texte: "Pause"
    },

    {
        debut: "15:45",
        fin: "16:40"
    },

    {
        debut: "16:40",
        fin: "17:40"
    },

    {
        debut: "17:40",
        fin: "17:55",
        type: "fin",
        texte: "Fin"
    }

];


/* =========================
   JOURS
========================= */

const jours = [
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi"
];


/* =========================
   CONVERSION HEURE
========================= */

function convertirMinutes(heure) {

    const [heures, minutes] = heure.split(":").map(Number);

    return heures * 60 + minutes;

}


/* =========================
   AFFICHAGE
========================= */

function afficherEmploiDuTemps(periode) {

    const tbody = document.getElementById("schedule-body");
    const titre = document.getElementById("schedule-title");

    if (!tbody) {
        return;
    }

    tbody.innerHTML = "";


    /* TITRE */

    if (titre) {
        titre.textContent = `Emploi du temps — ${periode}`;
    }


    /* PARCOURS DES HORAIRES */

    horaires.forEach((horaire) => {

        const ligne = document.createElement("tr");


        /* CELLULE HORAIRE */

        const celluleHoraire = document.createElement("td");

        celluleHoraire.innerHTML = `
            <strong>${horaire.debut}</strong><br>
            ${horaire.fin}
        `;

        ligne.appendChild(celluleHoraire);


        /* CELLULES DES JOURS */

        jours.forEach((jour) => {

            const cellule = document.createElement("td");


            /* PAUSE */

            if (horaire.type === "pause") {

                cellule.classList.add("break-cell");

                cellule.innerHTML = `
                    🕐 ${horaire.texte}
                `;

                ligne.appendChild(cellule);

                return;
            }


            /* REPAS */

            if (horaire.type === "repas") {

                cellule.classList.add("lunch-cell");

                cellule.innerHTML = `
                    🍴 ${horaire.texte}
                `;

                ligne.appendChild(cellule);

                return;
            }


            /* FIN DE JOURNÉE */

            if (horaire.type === "fin") {

                cellule.classList.add("end-cell");

                cellule.innerHTML = `
                    🏁 ${horaire.texte}
                `;

                ligne.appendChild(cellule);

                return;
            }


            /* RECHERCHE DU COURS */

            const coursJour = emploiDuTemps[periode]?.[jour] || [];

            const debutHoraire = convertirMinutes(horaire.debut);
            const finHoraire = convertirMinutes(horaire.fin);


            /*
                On cherche un cours qui couvre
                le créneau actuel.

                Exemple :

                Cours :
                14:40 → 16:10

                Créneau :
                14:40 → 15:30

                Le cours est affiché.

                Créneau :
                15:45 → 16:40

                Le cours est également détecté.
            */

            const cours = coursJour.find((element) => {

                const debutCours = convertirMinutes(element.debut);
                const finCours = convertirMinutes(element.fin);

                return (
                    debutCours < finHoraire &&
                    finCours > debutHoraire
                );

            });


            /* AFFICHAGE DU COURS */

            if (cours) {

                cellule.innerHTML = `
                    <div class="course">

                        <strong>
                            ${cours.matiere}
                        </strong>

                        ${
                            cours.professeur
                                ? `<span>👨‍🏫 ${cours.professeur}</span>`
                                : ""
                        }

                        ${
                            cours.salle
                                ? `<small>📍 ${cours.salle}</small>`
                                : ""
                        }

                    </div>
                `;

            }


            ligne.appendChild(cellule);

        });


        tbody.appendChild(ligne);

    });

}


/* =========================
   CHANGEMENT DE PÉRIODE
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const boutonQ1 = document.getElementById("q1-button");
    const boutonQ2 = document.getElementById("q2-button");


    /* AFFICHAGE INITIAL */

    afficherEmploiDuTemps("Q1");


    /* Q1 */

    if (boutonQ1) {

        boutonQ1.addEventListener("click", () => {

            afficherEmploiDuTemps("Q1");

            boutonQ1.classList.add("selected");

            if (boutonQ2) {
                boutonQ2.classList.remove("selected");
            }

        });

    }


    /* Q2 */

    if (boutonQ2) {

        boutonQ2.addEventListener("click", () => {

            afficherEmploiDuTemps("Q2");

            boutonQ2.classList.add("selected");

            if (boutonQ1) {
                boutonQ1.classList.remove("selected");
            }

        });

    }

});
