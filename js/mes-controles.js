
"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const STORAGE_KEY = "mes-controles";

    const form = document.getElementById("control-form");
    const subjectInput = document.getElementById("control-subject");
    const dateInput = document.getElementById("control-date");
    const titleInput = document.getElementById("control-title");
    const timeInput = document.getElementById("control-time");
    const roomInput = document.getElementById("control-room");
    const chapterInput = document.getElementById("control-chapter");
    const descriptionInput = document.getElementById("control-description");

    const submitButton = document.getElementById("control-submit");
    const cancelButton = document.getElementById("control-cancel");
    const formHeading = document.getElementById("control-form-heading");

    const searchInput = document.getElementById("search-control");
    const filterInput = document.getElementById("control-filter");
    const controlsList = document.getElementById("controls-list");
    const emptyMessage = document.getElementById("controls-empty");
    const countElement = document.getElementById("controls-count");

    const totalElement = document.getElementById("controls-total");
    const upcomingElement = document.getElementById("controls-upcoming");
    const todayElement = document.getElementById("controls-today");
    const pastElement = document.getElementById("controls-past");

    let controls = loadControls();
    let editingId = null;

    function localDateString(date = new Date()) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    }

    function createId() {
        if (window.crypto && typeof window.crypto.randomUUID === "function") {
            return window.crypto.randomUUID();
        }

        return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    }

    function loadControls() {
        try {
            const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

            if (!Array.isArray(saved)) {
                return [];
            }

            return saved
                .filter(item => item && typeof item === "object")
                .map(item => ({
                    id: String(item.id || createId()),
                    matiere: String(item.matiere || item.subject || ""),
                    titre: String(item.titre || item.title || ""),
                    date: String(item.date || ""),
                    time: String(item.time || item.heure || ""),
                    room: String(item.room || item.salle || ""),
                    chapter: String(item.chapter || item.chapitre || ""),
                    description: String(item.description || "")
                }))
                .filter(item => item.matiere && item.titre && item.date);
        } catch (error) {
            console.error("Impossible de lire les contrôles enregistrés :", error);
            return [];
        }
    }

    function saveControls() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(controls));
            return true;
        } catch (error) {
            console.error("Impossible d'enregistrer les contrôles :", error);
            alert("L'enregistrement a échoué. Vérifie l'espace disponible dans ton navigateur.");
            return false;
        }
    }

    function escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, character => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        })[character]);
    }

    function formatDate(dateString) {
        const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateString);

        if (!match) {
            return dateString;
        }

        return `${match[3]}/${match[2]}/${match[1]}`;
    }

    function getStatus(date) {
        const today = localDateString();

        if (date < today) return "past";
        if (date === today) return "today";
        return "upcoming";
    }

    function getStatusLabel(status) {
        if (status === "past") return "Passé";
        if (status === "today") return "Aujourd’hui";
        return "À venir";
    }

    function resetForm() {
        form.reset();
        editingId = null;

        if (submitButton) submitButton.textContent = "Ajouter le contrôle";
        if (formHeading) formHeading.textContent = "Ajouter un contrôle";
        if (cancelButton) cancelButton.hidden = true;
    }

    function updateStatistics() {
        const today = localDateString();

        if (totalElement) totalElement.textContent = controls.length;
        if (upcomingElement) {
            upcomingElement.textContent = controls.filter(item => item.date > today).length;
        }
        if (todayElement) {
            todayElement.textContent = controls.filter(item => item.date === today).length;
        }
        if (pastElement) {
            pastElement.textContent = controls.filter(item => item.date < today).length;
        }
    }

    function renderControls() {
        const search = (searchInput?.value || "").trim().toLocaleLowerCase("fr");
        const filter = filterInput?.value || "all";

        const filtered = controls
            .filter(item => {
                const searchableText = [
                    item.matiere,
                    item.titre,
                    item.chapter,
                    item.room,
                    item.description
                ].join(" ").toLocaleLowerCase("fr");

                return searchableText.includes(search);
            })
            .filter(item => filter === "all" || getStatus(item.date) === filter)
            .sort((a, b) => {
                const dateComparison = a.date.localeCompare(b.date);

                if (dateComparison !== 0) {
                    return filter === "past" ? -dateComparison : dateComparison;
                }

                return (a.time || "").localeCompare(b.time || "");
            });

        if (countElement) {
            countElement.textContent =
                `${filtered.length} contrôle${filtered.length > 1 ? "s" : ""}`;
        }

        if (emptyMessage) {
            emptyMessage.hidden = filtered.length !== 0;
        }

        if (!controlsList) return;

        controlsList.innerHTML = filtered.map(item => {
            const status = getStatus(item.date);
            const details = [];

            if (item.time) details.push(`🕒 ${escapeHTML(item.time)}`);
            if (item.room) details.push(`📍 ${escapeHTML(item.room)}`);

            return `
                <article class="control-card is-${status}">
                    <div class="control-card-header">
                        <div>
                            <span class="control-status status-${status}">
                                ${getStatusLabel(status)}
                            </span>
                            <h3>${escapeHTML(item.titre)}</h3>
                            <p>${escapeHTML(item.matiere)}</p>
                        </div>
                        <strong>${escapeHTML(formatDate(item.date))}</strong>
                    </div>

                    ${details.length
                        ? `<p class="control-meta">${details.join(" · ")}</p>`
                        : ""}

                    ${item.chapter
                        ? `<p><strong>Chapitre :</strong> ${escapeHTML(item.chapter)}</p>`
                        : ""}

                    ${item.description
                        ? `<p class="control-description">${escapeHTML(item.description)}</p>`
                        : ""}

                    <div class="control-actions">
                        <button type="button"
                            class="controls-button controls-secondary"
                            data-action="edit"
                            data-id="${escapeHTML(item.id)}">
                            Modifier
                        </button>

                        <button type="button"
                            class="controls-button controls-danger"
                            data-action="delete"
                            data-id="${escapeHTML(item.id)}">
                            Supprimer
                        </button>
                    </div>
                </article>
            `;
        }).join("");

        updateStatistics();
    }

    form.addEventListener("submit", event => {
        event.preventDefault();

        const matiere = subjectInput.value.trim();
        const date = dateInput.value;
        const titre = titleInput.value.trim();

        if (!matiere || !date || !titre) {
            alert("Remplis au minimum la matière, la date et le titre du contrôle.");
            return;
        }

        const control = {
            id: editingId || createId(),
            matiere,
            date,
            titre,
            time: timeInput.value.trim(),
            room: roomInput.value.trim(),
            chapter: chapterInput.value.trim(),
            description: descriptionInput.value.trim()
        };

        const previousControls = controls.map(item => ({ ...item }));

        if (editingId) {
            controls = controls.map(item =>
                item.id === editingId ? control : item
            );
        } else {
            controls.push(control);
        }

        if (!saveControls()) {
            controls = previousControls;
            return;
        }

        resetForm();
        renderControls();
    });

    controlsList?.addEventListener("click", event => {
        const button = event.target.closest("button[data-action]");

        if (!button) return;

        const id = button.dataset.id;
        const action = button.dataset.action;
        const control = controls.find(item => item.id === id);

        if (!control) return;

        if (action === "edit") {
            editingId = id;

            subjectInput.value = control.matiere;
            dateInput.value = control.date;
            titleInput.value = control.titre;
            timeInput.value = control.time;
            roomInput.value = control.room;
            chapterInput.value = control.chapter;
            descriptionInput.value = control.description;

            if (submitButton) submitButton.textContent = "Enregistrer les modifications";
            if (formHeading) formHeading.textContent = "Modifier un contrôle";
            if (cancelButton) cancelButton.hidden = false;

            form.scrollIntoView({ behavior: "smooth", block: "start" });
            titleInput.focus();
        }

        if (action === "delete") {
            if (!confirm(`Supprimer le contrôle « ${control.titre} » ?`)) {
                return;
            }

            const previousControls = controls;
            controls = controls.filter(item => item.id !== id);

            if (!saveControls()) {
                controls = previousControls;
                return;
            }

            if (editingId === id) resetForm();

            renderControls();
        }
    });

    cancelButton?.addEventListener("click", resetForm);
    searchInput?.addEventListener("input", renderControls);
    filterInput?.addEventListener("change", renderControls);

    renderControls();
});
