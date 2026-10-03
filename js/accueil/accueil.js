// ==========================================
// 🏠 ACCUEIL - MON ENT PERSO LFE
// ==========================================


// ==========================================
// 📅 DATE DU JOUR
// ==========================================

function afficherDate() {

    const element =
        document.getElementById("current-date");

    if (!element) {
        return;
    }


    const maintenant = new Date();


    const date = maintenant.toLocaleDateString(
        "fr-FR",
        {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    );


    element.textContent =
        date.charAt(0).toUpperCase() +
        date.slice(1);
}



// ==========================================
// 📝 DEVOIRS
// ==========================================

function afficherDevoirs() {

    const container =
        document.getElementById(
            "upcoming-homework"
        );

    if (!container) {
        return;
    }


    let devoirs = [];


    try {

        devoirs = JSON.parse(
            localStorage.getItem("mes-devoirs")
        ) || [];

    } catch (erreur) {

        devoirs = [];

    }


    if (devoirs.length === 0) {

        return;

    }


    const aujourdHui =
        new Date();

    aujourdHui.setHours(
        0,
        0,
        0,
        0
    );


    const devoirsAVenir =
        devoirs
            .filter(devoir => {

                if (!devoir.date) {
                    return false;
                }

                const date =
                    new Date(
                        devoir.date
                    );

                return date >= aujourdHui;

            })
            .sort(
                (a, b) =>
                    new Date(a.date) -
                    new Date(b.date)
            )
            .slice(0, 3);


    if (devoirsAVenir.length === 0) {
        return;
    }


    container.innerHTML = "";


    devoirsAVenir.forEach(
        devoir => {

            const date =
                new Date(
                    devoir.date
                );


            const element =
                document.createElement(
                    "div"
                );

            element.className =
                "dashboard-item";


            element.innerHTML = `

                <div class="dashboard-item-icon">
                    📝
                </div>

                <div class="dashboard-item-content">

                    <strong>
                        ${echapperHTML(
                            devoir.titre ||
                            devoir.title ||
                            "Devoir"
                        )}
                    </strong>

                    <span>
                        📅 ${date.toLocaleDateString(
                            "fr-FR"
                        )}
                    </span>

                </div>

            `;


            container.appendChild(
                element
            );

        }
    );

}



// ==========================================
// 📚 COURS RÉCENTS
// ==========================================

function afficherCoursRecents() {

    const container =
        document.getElementById(
            "recent-courses"
        );

    if (!container) {
        return;
    }


    const sources = [

        {
            cle: "cours-mathematiques",
            matiere: "Mathématiques"
        },

        {
            cle: "cours-anglais",
            matiere: "Anglais LV1"
        },

        {
            cle: "cours-francais-histoire-geo",
            matiere:
                "Français / Histoire-Géo / EMC"
        },

        {
            cle: "cours-sciences-physiques",
            matiere:
                "Sciences physiques"
        },

        {
            cle:
                "cours-enseignement-professionnel",
            matiere:
                "Enseignement professionnel"
        },

        {
            cle:
                "cours-pratique-professionnelle",
            matiere:
                "Pratique professionnelle"
        },

        {
            cle:
                "cours-arts-appliques",
            matiere:
                "Arts appliqués"
        },

        {
            cle:
                "cours-soutien-au-parcours",
            matiere:
                "Soutien au parcours"
        },

        {
            cle:
                "cours-prevention-sante-environnement",
            matiere:
                "PSE"
        },

        {
            cle:
                "cours-economie-gestion",
            matiere:
                "Économie & Gestion"
        },

        {
            cle:
                "cours-realisation-projet",
            matiere:
                "Réalisation projet"
        },

        {
            cle:
                "cours-education-physique-sportive",
            matiere:
                "EPS"
        }

    ];


    let tousLesCours = [];


    sources.forEach(source => {

        try {

            const cours =
                JSON.parse(
                    localStorage.getItem(
                        source.cle
                    )
                ) || [];


            cours.forEach(coursItem => {

                tousLesCours.push({

                    ...coursItem,

                    matiere:
                        source.matiere

                });

            });

        } catch (erreur) {

            console.error(erreur);

        }

    });


    if (tousLesCours.length === 0) {
        return;
    }


    tousLesCours.sort(
        (a, b) => {

            const dateA =
                new Date(
                    a.date || 0
                );

            const dateB =
                new Date(
                    b.date || 0
                );

            return dateB - dateA;

        }
    );


    const derniersCours =
        tousLesCours.slice(0, 3);


    container.innerHTML = "";


    derniersCours.forEach(
        cours => {

            const element =
                document.createElement(
                    "div"
                );

            element.className =
                "dashboard-item";


            element.innerHTML = `

                <div class="dashboard-item-icon">
                    📚
                </div>

                <div class="dashboard-item-content">

                    <strong>
                        ${echapperHTML(
                            cours.title ||
                            cours.titre ||
                            "Cours"
                        )}
                    </strong>

                    <span>
                        ${echapperHTML(
                            cours.matiere
                        )}
                    </span>

                </div>

            `;


            container.appendChild(
                element
            );

        }
    );

}



// ==========================================
// 🧑‍🏫 ABSENCES
// ==========================================

function afficherAbsences() {

    const container =
        document.getElementById(
            "recent-absences"
        );

    if (!container) {
        return;
    }


    let absences = [];


    try {

        absences = JSON.parse(
            localStorage.getItem(
                "mon-ent-absences-professeurs"
            )
        ) || [];

    } catch (erreur) {

        absences = [];

    }


    if (absences.length === 0) {
        return;
    }


    const dernieresAbsences =
        absences.slice(-3).reverse();


    container.innerHTML = "";


    dernieresAbsences.forEach(
        absence => {

            const element =
                document.createElement(
                    "div"
                );

            element.className =
                "dashboard-item";


            element.innerHTML = `

                <div class="dashboard-item-icon">
                    🔄
                </div>

                <div class="dashboard-item-content">

                    <strong>
                        ${echapperHTML(
                            absence.teacher ||
                            absence.professeur ||
                            "Professeur"
                        )}
                    </strong>

                    <span>
                        ${echapperHTML(
                            absence.replacement ||
                            absence.remplacement ||
                            "Absence"
                        )}
                    </span>

                </div>

            `;


            container.appendChild(
                element
            );

        }
    );

}



// ==========================================
// 🧪 CONTRÔLES
// ==========================================

function afficherControles() {

    const container =
        document.getElementById(
            "upcoming-tests"
        );

    if (!container) {
        return;
    }


    let controles = [];


    try {

        controles = JSON.parse(
            localStorage.getItem(
                "mes-controles"
            )
        ) || [];

    } catch (erreur) {

        controles = [];

    }


    if (controles.length === 0) {
        return;
    }


    const aujourdHui =
        new Date();

    aujourdHui.setHours(
        0,
        0,
        0,
        0
    );


    const prochains =
        controles
            .filter(controle => {

                if (!controle.date) {
                    return false;
                }

                return new Date(
                    controle.date
                ) >= aujourdHui;

            })
            .sort(
                (a, b) =>
                    new Date(a.date) -
                    new Date(b.date)
            )
            .slice(0, 3);


    if (prochains.length === 0) {
        return;
    }


    container.innerHTML = "";


    prochains.forEach(
        controle => {

            const element =
                document.createElement(
                    "div"
                );

            element.className =
                "dashboard-item";


            const date =
                new Date(
                    controle.date
                );


            element.innerHTML = `

                <div class="dashboard-item-icon">
                    🧪
                </div>

                <div class="dashboard-item-content">

                    <strong>
                        ${echapperHTML(
                            controle.titre ||
                            controle.title ||
                            "Contrôle"
                        )}
                    </strong>

                    <span>
                        📅 ${date.toLocaleDateString(
                            "fr-FR"
                        )}
                    </span>

                </div>

            `;


            container.appendChild(
                element
            );

        }
    );

}



// ==========================================
// 🔐 PROTECTION HTML
// ==========================================

function echapperHTML(texte) {

    if (
        texte === undefined ||
        texte === null
    ) {

        return "";

    }


    return String(texte)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}



// ==========================================
// 🚀 INITIALISATION
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        afficherDate();

        afficherDevoirs();

        afficherCoursRecents();

        afficherAbsences();

        afficherControles();

    }
);
