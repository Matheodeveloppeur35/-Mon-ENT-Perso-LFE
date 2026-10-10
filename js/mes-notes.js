
document.addEventListener("DOMContentLoaded", () => {
    const STORAGE_KEY = "mes-notes";

    const form = document.getElementById("note-form");
    const subjectInput = document.getElementById("note-subject");
    const dateInput = document.getElementById("note-date");
    const titleInput = document.getElementById("note-title");
    const valueInput = document.getElementById("note-value");
    const coefficientInput = document.getElementById("note-coefficient");
    const submitButton = document.getElementById("note-submit");
    const cancelButton = document.getElementById("note-cancel");
    const formHeading = document.getElementById("note-form-heading");

    const searchInput = document.getElementById("search-note");
    const subjectFilter = document.getElementById("subject-note-filter");
    const notesList = document.getElementById("notes-list");
    const emptyMessage = document.getElementById("notes-empty");
    const countElement = document.getElementById("notes-count");

    const totalElement = document.getElementById("notes-total");
    const averageElement = document.getElementById("notes-average");
    const bestElement = document.getElementById("notes-best");
    const subjectsElement = document.getElementById("notes-subjects");

    if (
        !form || !subjectInput || !dateInput || !titleInput || !valueInput ||
        !coefficientInput || !submitButton || !cancelButton || !formHeading ||
        !searchInput || !subjectFilter || !notesList || !emptyMessage ||
        !countElement || !totalElement || !averageElement || !bestElement ||
        !subjectsElement
    ) {
        console.error("Mon ENT : un élément de la page Mes notes est manquant.");
        return;
    }

    let notes = chargerNotes();
    let noteEnModification = null;

    function chargerNotes() {
        try {
            const donnees = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
            if (!Array.isArray(donnees)) return [];

            return donnees
                .filter((note) => note && typeof note === "object")
                .map((note, index) => ({
                    id: String(note.id ?? `note-${index}-${Date.now()}`),
                    matiere: String(note.matiere ?? ""),
                    titre: String(note.titre ?? ""),
                    note: Number(note.note),
                    coefficient: Number(note.coefficient ?? 1),
                    date: String(note.date ?? "")
                }))
                .filter((note) =>
                    note.matiere &&
                    note.titre &&
                    Number.isFinite(note.note) &&
                    note.note >= 0 &&
                    note.note <= 20 &&
                    Number.isFinite(note.coefficient) &&
                    note.coefficient > 0
                );
        } catch (erreur) {
            console.error("Impossible de charger les notes.", erreur);
            return [];
        }
    }

    function sauvegarderNotes() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
            return true;
        } catch (erreur) {
            console.error(erreur);
            alert("Impossible d'enregistrer les notes dans ce navigateur.");
            return false;
        }
    }

    function echapperHTML(texte) {
        return String(texte).replace(/[&<>"']/g, (caractere) => ({
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

    function lireNombre(valeur) {
        return Number(String(valeur).replace(",", "."));
    }

    function formaterNombre(nombre) {
        return Number(nombre).toLocaleString("fr-FR", {
            maximumFractionDigits: 2
        });
    }

    function formaterDate(date) {
        const resultat = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date || "");
        if (!resultat) return "Date non renseignée";
        return `${resultat[3]}/${resultat[2]}/${resultat[1]}`;
    }

    function calculerMoyenne(liste) {
        const valides = liste.filter((note) =>
            Number.isFinite(note.note) &&
            Number.isFinite(note.coefficient) &&
            note.coefficient > 0
        );

        if (!valides.length) return null;

        const sommePonderee = valides.reduce(
            (total, note) => total + note.note * note.coefficient,
            0
        );
        const sommeCoefficients = valides.reduce(
            (total, note) => total + note.coefficient,
            0
        );

        return sommeCoefficients ? sommePonderee / sommeCoefficients : null;
    }

    function afficherStatistiques() {
        totalElement.textContent = notes.length;

        const moyenne = calculerMoyenne(notes);
        averageElement.textContent =
            moyenne === null ? "—" : `${formaterNombre(moyenne)}/20`;

        const meilleureNote = notes.length
            ? Math.max(...notes.map((note) => note.note))
            : null;

        bestElement.textContent =
            meilleureNote === null
                ? "—"
                : `${formaterNombre(meilleureNote)}/20`;

        subjectsElement.textContent = new Set(
            notes.map((note) => note.matiere)
        ).size;
    }

    function reinitialiserFormulaire() {
        noteEnModification = null;
        form.reset();
        coefficientInput.value = "1";
        formHeading.textContent = "➕ Ajouter une note";
        submitButton.textContent = "Ajouter la note";
        cancelButton.hidden = true;
    }

    function commencerModification(id) {
        const note = notes.find((element) => element.id === id);
        if (!note) return;

        noteEnModification = id;
        subjectInput.value = note.matiere;
        dateInput.value = note.date;
        titleInput.value = note.titre;
        valueInput.value = note.note;
        coefficientInput.value = note.coefficient;

        formHeading.textContent = "✏️ Modifier la note";
        submitButton.textContent = "Enregistrer les modifications";
        cancelButton.hidden = false;

        form.scrollIntoView({ behavior: "smooth", block: "start" });
        titleInput.focus();
    }

    function creerCarte(note) {
        const carte = document.createElement("article");
        carte.className = "note-card";

        const informations = document.createElement("div");
        informations.innerHTML = `
            <h3>${echapperHTML(note.titre)}</h3>
            <div class="note-meta">
                ${echapperHTML(note.matiere)} · ${formaterDate(note.date)}
                · Coefficient ${formaterNombre(note.coefficient)}
            </div>
        `;

        const valeur = document.createElement("div");
        valeur.className = "note-value";
        valeur.textContent = `${formaterNombre(note.note)}/20`;

        const actions = document.createElement("div");
        actions.className = "note-actions";

        const modifier = document.createElement("button");
        modifier.type = "button";
        modifier.className = "notes-button notes-secondary";
        modifier.dataset.action = "edit";
        modifier.dataset.id = note.id;
        modifier.textContent = "✏️ Modifier";

        const supprimer = document.createElement("button");
        supprimer.type = "button";
        supprimer.className = "notes-button notes-danger";
        supprimer.dataset.action = "delete";
        supprimer.dataset.id = note.id;
        supprimer.textContent = "🗑️ Supprimer";

        actions.append(modifier, supprimer);
        carte.append(informations, valeur, actions);

        return carte;
    }

    function afficherNotes() {
        const recherche = normaliser(searchInput.value);
        const matiere = subjectFilter.value;

        const notesFiltrees = notes.filter((note) => {
            const texte = normaliser(
                `${note.titre} ${note.matiere} ${note.date}`
            );

            return texte.includes(recherche) &&
                (matiere === "all" || note.matiere === matiere);
        });

        notesFiltrees.sort((a, b) => {
            if (!a.date) return 1;
            if (!b.date) return -1;
            return b.date.localeCompare(a.date);
        });

        notesList.replaceChildren(
            ...notesFiltrees.map((note) => creerCarte(note))
        );

        countElement.textContent =
            `${notesFiltrees.length} note${notesFiltrees.length > 1 ? "s" : ""} affichée${notesFiltrees.length > 1 ? "s" : ""}`;

        emptyMessage.hidden = notesFiltrees.length !== 0;
        afficherStatistiques();
    }

    form.addEventListener("submit", (evenement) => {
        evenement.preventDefault();

        const matiere = subjectInput.value.trim();
        const date = dateInput.value;
        const titre = titleInput.value.trim();
        const noteValeur = lireNombre(valueInput.value);
        const coefficient = lireNombre(coefficientInput.value);

        if (
            !matiere || !date || !titre ||
            !Number.isFinite(noteValeur) ||
            noteValeur < 0 || noteValeur > 20 ||
            !Number.isFinite(coefficient) ||
            coefficient <= 0
        ) {
            alert("Vérifie la matière, la date, le titre, la note sur 20 et le coefficient.");
            return;
        }

        const donnees = {
            matiere,
            titre,
            note: noteValeur,
            coefficient,
            date
        };

        if (noteEnModification !== null) {
            const index = notes.findIndex(
                (element) => element.id === noteEnModification
            );

            if (index === -1) {
                alert("Cette note n'a pas été retrouvée.");
                reinitialiserFormulaire();
                return;
            }

            const ancienneNote = notes[index];
            notes[index] = { ...ancienneNote, ...donnees };

            if (!sauvegarderNotes()) {
                notes[index] = ancienneNote;
                return;
            }
        } else {
            const nouvelleNote = {
                id: (window.crypto && crypto.randomUUID)
                    ? crypto.randomUUID()
                    : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
                ...donnees
            };

            notes.push(nouvelleNote);

            if (!sauvegarderNotes()) {
                notes.pop();
                return;
            }
        }

        reinitialiserFormulaire();
        afficherNotes();
    });

    cancelButton.addEventListener("click", reinitialiserFormulaire);
    searchInput.addEventListener("input", afficherNotes);
    subjectFilter.addEventListener("change", afficherNotes);

    notesList.addEventListener("click", (evenement) => {
        const bouton = evenement.target.closest("button[data-action]");
        if (!bouton) return;

        const id = bouton.dataset.id;
        const action = bouton.dataset.action;
        const index = notes.findIndex((note) => note.id === id);

        if (index === -1) return;

        if (action === "edit") {
            commencerModification(id);
            return;
        }

        if (action === "delete") {
            const confirmation = confirm(
                `Supprimer la note « ${notes[index].titre} » ?`
            );

            if (!confirmation) return;

            const noteSupprimee = notes.splice(index, 1)[0];

            if (!sauvegarderNotes()) {
                notes.splice(index, 0, noteSupprimee);
                return;
            }

            if (noteEnModification === id) reinitialiserFormulaire();
            afficherNotes();
        }
    });

    afficherNotes();
});
