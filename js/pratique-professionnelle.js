// =========================
// PRATIQUE PROFESSIONNELLE
// DEVOIRS
// =========================

const HOMEWORK_STORAGE_KEY = "mes-devoirs";

// =========================
// ÉLÉMENTS DE LA PAGE
// =========================

const homeworkForm =
    document.getElementById(
        "professional-practice-homework-form"
    );

const homeworkTitle =
    document.getElementById(
        "professional-practice-homework-title"
    );

const homeworkDate =
    document.getElementById(
        "professional-practice-homework-date"
    );

const homeworkDescription =
    document.getElementById(
        "professional-practice-homework-description"
    );

const homeworkList =
    document.getElementById(
        "professional-practice-homework-list"
    );

// =========================
// CHARGER LES DEVOIRS
// =========================

let devoirs =
    JSON.parse(
        localStorage.getItem(HOMEWORK_STORAGE_KEY)
    ) || [];

// =========================
// SAUVEGARDER
// =========================

function sauvegarderDevoirs() {

    localStorage.setItem(
        HOMEWORK_STORAGE_KEY,
        JSON.stringify(devoirs)
    );

}

// =========================
// PROTECTION HTML
// =========================

function echapperHTML(texte) {

    if (!texte) return "";

    return texte
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}

// =========================
// AJOUTER UN DEVOIR
// =========================

if (homeworkForm) {

    homeworkForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            devoirs.push({

                subject:
                    "Pratique professionnelle",

                title:
                    homeworkTitle.value.trim(),

                date:
                    homeworkDate.value,

                description:
                    homeworkDescription.value.trim(),

                done:
                    false

            });

            sauvegarderDevoirs();

            afficherDevoirs();

            homeworkForm.reset();

        }
    );

}

// =========================
// AFFICHER LES DEVOIRS
// =========================

function afficherDevoirs() {

    if (!homeworkList) {
        return;
    }

    homeworkList.innerHTML = "";

    const devoirsPratique =
        devoirs.filter(function(devoir) {

            return devoir.subject ===
                "Pratique professionnelle";

        });

    if (devoirsPratique.length === 0) {

        homeworkList.innerHTML = `
            <div class="empty-courses">
                📭 Aucun devoir de pratique professionnelle
                enregistré pour le moment.
            </div>
        `;

        return;

    }

    devoirsPratique
        .slice()
        .reverse()
        .forEach(function(devoir) {

            const vraiIndex =
                devoirs.indexOf(devoir);

            const bloc =
                document.createElement("div");

            bloc.style.background = "#f8fafc";
            bloc.style.border = "1px solid #e5e7eb";
            bloc.style.borderRadius = "12px";
            bloc.style.padding = "16px";
            bloc.style.marginBottom = "12px";

            bloc.innerHTML = `

                <h3 style="margin-top:0;">
                    📝 ${echapperHTML(devoir.title)}
                </h3>

                <p>
                    📅 <strong>Date de rendu :</strong>
                    ${echapperHTML(devoir.date)}
                </p>

                ${
                    devoir.description
                    ?
                    `
                    <p>
                        📖 <strong>Description :</strong><br>
                        ${echapperHTML(
                            devoir.description
                        )}
                    </p>
                    `
                    :
                    ""
                }

                <p>
                    ${
                        devoir.done
                        ? "🟢 <strong>Devoir terminé</strong>"
                        : "🔴 <strong>Devoir à faire</strong>"
                    }
                </p>

                <button
                    type="button"
                    class="homework-status-button"
                    data-index="${vraiIndex}"
                >
                    ${
                        devoir.done
                        ? "↩️ Remettre à faire"
                        : "✅ Marquer comme terminé"
                    }
                </button>

            `;

            homeworkList.appendChild(bloc);

        });

    // =========================
    // BOUTONS TERMINÉ / À FAIRE
    // =========================

    const boutons =
        homeworkList.querySelectorAll(
            ".homework-status-button"
        );

    boutons.forEach(function(bouton) {

        bouton.addEventListener(
            "click",
            function() {

                const index =
                    Number(
                        bouton.dataset.index
                    );

                if (!devoirs[index]) {
                    return;
                }

                devoirs[index].done =
                    !devoirs[index].done;

                sauvegarderDevoirs();

                afficherDevoirs();

            }
        );

    });

}

// =========================
// INITIALISATION
// =========================

afficherDevoirs();
