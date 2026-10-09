
document.addEventListener("DOMContentLoaded", () => {
    const STORAGE_KEY = "mes-devoirs";

    const form = document.getElementById("homework-form");
    const subjectInput = document.getElementById("homework-subject");
    const dateInput = document.getElementById("homework-date");
    const titleInput = document.getElementById("homework-title");
    const descriptionInput = document.getElementById("homework-description");
    const submitButton = document.getElementById("homework-submit");
    const cancelButton = document.getElementById("cancel-homework-edit");
    const formHeading = document.getElementById("homework-form-heading");

    const searchInput = document.getElementById("search-homework");
    const statusFilter = document.getElementById("status-filter");
    const subjectFilter = document.getElementById("subject-filter");
    const homeworkList = document.getElementById("homework-list");
    const emptyMessage = document.getElementById("homework-empty");
    const countElement = document.getElementById("homework-count");

    if (
        !form || !subjectInput || !dateInput || !titleInput ||
        !descriptionInput || !submitButton || !cancelButton ||
        !searchInput || !statusFilter || !subjectFilter ||
        !homeworkList || !emptyMessage || !countElement
    ) {
        console.error("Mon ENT : un élément de la page Mes devoirs est manquant.");
        return;
    }

    let devoirs = chargerDevoirs();
    let devoirEnModification = null;

    function chargerDevoirs() {
        try {
            const donnees = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
            if (!Array.isArray(donnees)) return [];

            return donnees
                .filter((devoir) => devoir && typeof devoir === "object")
                .map((devoir, index) => ({
                    id: String(devoir.id ?? `devoir-${index}-${Date.now()}`),
                    matiere: String(devoir.matiere ?? ""),
                    titre: String(devoir.titre ?? ""),
                    date: String(devoir.date ?? ""),
                    description: String(devoir.description ?? ""),
                    termine: devoir.termine === true ||
                        devoir.done === true ||
                        devoir.statut === "termine"
                }));
        } catch (erreur) {
            console.error("Impossible de lire les devoirs enregistrés.", erreur);
            return [];
        }
    }

    function sauvegarderDevoirs() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(devoirs));
            return true;
        } catch (erreur) {
            alert("Impossible d'enregistrer les devoirs dans ce navigateur.");
            console.error(erreur);
            return false;
        }
    }

    function echapperHTML(valeur) {
        return String(valeur).replace(/[&<>"']/g, (caractere) => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        })[caractere]);
    }

    function normaliser(texte) {
        return String(texte)
            .toLocaleLowerCase("fr")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();
    }

    function dateAujourdhui() {
        const maintenant = new Date();
        const annee = maintenant.getFullYear();
        const mois = String(maintenant.getMonth() + 1).padStart(2, "0");
        const jour = String(maintenant.getDate()).padStart(2, "0");
        return `${annee}-${mois}-${jour}`;
    }

    function formaterDate(date) {
        if (!date) return "Date non renseignée";

        const resultat = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
        if (!resultat) return echapperHTML(date);

        return `${resultat[3]}/${resultat[2]}/${resultat[1]}`;
    }

    function estEnRetard(devoir) {
        return !devoir.termine && devoir.date && devoir.date < dateAujourdhui();
    }

    function reinitialiserFormulaire() {
        devoirEnModification = null;
        form.reset();
        formHeading.textContent = "➕ Ajouter un devoir";
        submitButton.textContent = "Ajouter le devoir";
        cancelButton.hidden = true;
    }

    function commencerModification(id) {
        const devoir = devoirs.find((element) => element.id === id);
        if (!devoir) return;

        devoirEnModification = id;
        subjectInput.value = devoir.matiere;
        dateInput.value = devoir.date;
        titleInput.value = devoir.titre;
        descriptionInput.value = devoir.description;

        formHeading.textContent = "✏️ Modifier le devoir";
        submitButton.textContent = "Enregistrer les modifications";
        cancelButton.hidden = false;

        form.scrollIntoView({ behavior: "smooth", block: "start" });
        titleInput.focus();
    }

    function creerCarte(devoir) {
        const carte = document.createElement("article");
        carte.className = "homework-card";

        if (devoir.termine) carte.classList.add("is-done");
        else if (estEnRetard(devoir)) carte.classList.add("is-late");

        const statut = devoir.termine
            ? "✅ Terminé"
            : estEnRetard(devoir)
                ? "⚠️ En retard"
                : "📝 À faire";

        carte.innerHTML = `
            <h3>${echapperHTML(devoir.titre || "Devoir sans titre")}</h3>
            <div class="homework-meta">
                ${echapperHTML(devoir.matiere)} ·
                À rendre le ${formaterDate(devoir.date)} · ${statut}
            </div>
            <div class="homework-description">${echapperHTML(devoir.description || "Aucune consigne ajoutée.")}</div>
            <div class="homework-actions">
                <button class="homework-button primary-button"
                    type="button" data-action="toggle" data-id="${echapperHTML(devoir.id)}">
                    ${devoir.termine ? "↩️ Remettre à faire" : "✅ Marquer terminé"}
                </button>
                <button class="homework-button secondary-button"
                    type="button" data-action="edit" data-id="${echapperHTML(devoir.id)}">
                    ✏️ Modifier
                </button>
                <button class="homework-button danger-button"
                    type="button" data-action="delete" data-id="${echapperHTML(devoir.id)}">
                    🗑️ Supprimer
                </button>
            </div>
        `;

        return carte;
    }

    function afficherDevoirs() {
        const recherche = normaliser(searchInput.value);
        const statutChoisi = statusFilter.value;
        const matiereChoisie = subjectFilter.value;

        const filtres = devoirs.filter((devoir) => {
            const texte = normaliser(
                `${devoir.titre} ${devoir.matiere} ${devoir.description}`
            );

            const correspondRecherche = texte.includes(recherche);
            const correspondMatiere =
                matiereChoisie === "all" || devoir.matiere === matiereChoisie;

            let correspondStatut = true;

            if (statutChoisi === "todo") correspondStatut = !devoir.termine;
            if (statutChoisi === "done") correspondStatut = devoir.termine;
            if (statutChoisi === "late") correspondStatut = estEnRetard(devoir);

            return correspondRecherche && correspondMatiere && correspondStatut;
        });

        filtres.sort((a, b) => {
            if (!a.date) return 1;
            if (!b.date) return -1;
            return a.date.localeCompare(b.date);
        });

        homeworkList.replaceChildren(
            ...filtres.map((devoir) => creerCarte(devoir))
        );

        countElement.textContent =
            `${filtres.length} devoir${filtres.length > 1 ? "s" : ""} affiché${filtres.length > 1 ? "s" : ""}`;

        emptyMessage.hidden = filtres.length !== 0;
    }

    form.addEventListener("submit", (evenement) => {
        evenement.preventDefault();

        const matiere = subjectInput.value.trim();
        const date = dateInput.value;
        const titre = titleInput.value.trim();
        const description = descriptionInput.value.trim();

        if (!matiere || !date || !titre) {
            alert("Renseigne la matière, la date et le titre du devoir.");
            return;
        }

        const donnees = { matiere, date, titre, description };

        if (devoirEnModification !== null) {
            const index = devoirs.findIndex(
                (devoir) => devoir.id === devoirEnModification
            );

            if (index === -1) {
                alert("Ce devoir n'a pas été retrouvé.");
                reinitialiserFormulaire();
                return;
            }

            const anciensDonnees = devoirs[index];
            devoirs[index] = { ...anciensDonnees, ...donnees };

            if (!sauvegarderDevoirs()) {
                devoirs[index] = anciensDonnees;
                return;
            }
        } else {
            const nouveauDevoir = {
                id: (window.crypto && crypto.randomUUID)
                    ? crypto.randomUUID()
                    : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
                ...donnees,
                termine: false
            };

            devoirs.push(nouveauDevoir);

            if (!sauvegarderDevoirs()) {
                devoirs.pop();
                return;
            }
        }

        reinitialiserFormulaire();
        afficherDevoirs();
    });

    cancelButton.addEventListener("click", reinitialiserFormulaire);

    searchInput.addEventListener("input", afficherDevoirs);
    statusFilter.addEventListener("change", afficherDevoirs);
    subjectFilter.addEventListener("change", afficherDevoirs);

    homeworkList.addEventListener("click", (evenement) => {
        const bouton = evenement.target.closest("button[data-action]");
        if (!bouton) return;

        const id = bouton.dataset.id;
        const action = bouton.dataset.action;
        const index = devoirs.findIndex((devoir) => devoir.id === id);

        if (index === -1) return;

        if (action === "edit") {
            commencerModification(id);
            return;
        }

        if (action === "toggle") {
            const ancienneValeur = devoirs[index].termine;
            devoirs[index].termine = !ancienneValeur;

            if (!sauvegarderDevoirs()) {
                devoirs[index].termine = ancienneValeur;
                return;
            }

            afficherDevoirs();
            return;
        }

        if (action === "delete") {
            const confirmation = confirm(
                `Supprimer le devoir « ${devoirs[index].titre} » ?`
            );

            if (!confirmation) return;

            const devoirSupprime = devoirs.splice(index, 1)[0];

            if (!sauvegarderDevoirs()) {
                devoirs.splice(index, 0, devoirSupprime);
                return;
            }

            if (devoirEnModification === id) reinitialiserFormulaire();
            afficherDevoirs();
        }
    });

    afficherDevoirs();
});
