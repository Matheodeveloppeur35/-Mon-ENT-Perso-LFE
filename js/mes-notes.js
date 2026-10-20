"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const COLLECTION_NAME = "notes";

    const form = document.getElementById("note-form");
    const subjectInput = document.getElementById("note-subject");
    const titleInput = document.getElementById("note-title");
    const valueInput = document.getElementById("note-value");
    const maxInput = document.getElementById("note-max");
    const coefficientInput = document.getElementById("note-coefficient");
    const dateInput = document.getElementById("note-date");

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
        !form ||
        !subjectInput ||
        !titleInput ||
        !valueInput ||
        !maxInput ||
        !coefficientInput ||
        !dateInput ||
        !submitButton ||
        !cancelButton ||
        !formHeading ||
        !searchInput ||
        !subjectFilter ||
        !notesList ||
        !emptyMessage ||
        !countElement ||
        !totalElement ||
        !averageElement ||
        !bestElement ||
        !subjectsElement
    ) {
        console.error(
            "Mon ENT : un élément de la page Mes notes est manquant."
        );

        return;
    }

    let utilisateurConnecte = null;
    let notes = [];
    let noteEnModification = null;
    let arreterEcoute = null;


    // ==========================================
    // OUTILS
    // ==========================================

    function lireNombre(valeur) {

        return Number(
            String(valeur).replace(",", ".")
        );
    }


    function formaterNombre(nombre) {

        return Number(nombre).toLocaleString(
            "fr-FR",
            {
                maximumFractionDigits: 2
            }
        );
    }


    function normaliser(texte) {

        return String(texte)
            .toLocaleLowerCase("fr")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();
    }


    function formaterDate(date) {

        const resultat =
            /^(\d{4})-(\d{2})-(\d{2})$/.exec(
                date || ""
            );

        if (!resultat) {
            return "Date non renseignée";
        }

        return (
            `${resultat[3]}/` +
            `${resultat[2]}/` +
            `${resultat[1]}`
        );
    }


    function convertirSur20(
        noteObtenue,
        noteMaximum
    ) {

        if (
            !Number.isFinite(noteObtenue) ||
            !Number.isFinite(noteMaximum) ||
            noteMaximum <= 0
        ) {
            return 0;
        }

        return (
            noteObtenue /
            noteMaximum
        ) * 20;
    }


    function collectionNotes() {

        if (!utilisateurConnecte) {
            return null;
        }

        return db
            .collection("users")
            .doc(utilisateurConnecte.uid)
            .collection(COLLECTION_NAME);
    }


    // ==========================================
    // MOYENNE
    // ==========================================

    function calculerMoyenne(liste) {

        if (!liste.length) {
            return null;
        }

        let total = 0;
        let totalCoefficients = 0;

        liste.forEach((note) => {

            const noteSur20 =
                convertirSur20(
                    note.noteObtenue,
                    note.noteMaximum
                );

            const coefficient =
                Number(note.coefficient) || 1;

            total +=
                noteSur20 * coefficient;

            totalCoefficients +=
                coefficient;
        });

        if (totalCoefficients <= 0) {
            return null;
        }

        return total / totalCoefficients;
    }


    // ==========================================
    // STATISTIQUES
    // ==========================================

    function afficherStatistiques() {

        totalElement.textContent =
            notes.length;


        const moyenne =
            calculerMoyenne(notes);

        averageElement.textContent =
            moyenne === null
                ? "—"
                : `${formaterNombre(moyenne)}/20`;


        const notesConverties =
            notes.map((note) =>
                convertirSur20(
                    note.noteObtenue,
                    note.noteMaximum
                )
            );


        const meilleureNote =
            notesConverties.length
                ? Math.max(...notesConverties)
                : null;


        bestElement.textContent =
            meilleureNote === null
                ? "—"
                : `${formaterNombre(meilleureNote)}/20`;


        subjectsElement.textContent =
            new Set(
                notes.map(
                    (note) => note.matiere
                )
            ).size;
    }


    // ==========================================
    // FILTRE DES MATIÈRES
    // ==========================================

    function actualiserFiltreMatieres() {

        const ancienneValeur =
            subjectFilter.value;


        const matieres = [
            ...new Set(
                notes
                    .map(
                        (note) =>
                            note.matiere.trim()
                    )
                    .filter(Boolean)
            )
        ].sort(
            (a, b) =>
                a.localeCompare(
                    b,
                    "fr",
                    {
                        sensitivity: "base"
                    }
                )
        );


        subjectFilter.innerHTML = `
            <option value="all">
                Toutes les matières
            </option>
        `;


        matieres.forEach((matiere) => {

            const option =
                document.createElement(
                    "option"
                );

            option.value = matiere;
            option.textContent = matiere;

            subjectFilter.appendChild(
                option
            );
        });


        if (
            ancienneValeur === "all" ||
            matieres.includes(ancienneValeur)
        ) {
            subjectFilter.value =
                ancienneValeur;
        }
    }


    // ==========================================
    // FORMULAIRE
    // ==========================================

    function reinitialiserFormulaire() {

        noteEnModification = null;

        form.reset();

        maxInput.value = "20";
        coefficientInput.value = "1";

        formHeading.textContent =
            "Ajouter une note";

        submitButton.textContent =
            "Ajouter la note";

        cancelButton.hidden = true;
    }


    function commencerModification(id) {

        const note =
            notes.find(
                (element) =>
                    element.id === id
            );

        if (!note) {
            return;
        }

        noteEnModification = id;

        subjectInput.value =
            note.matiere;

        titleInput.value =
            note.titre;

        valueInput.value =
            note.noteObtenue;

        maxInput.value =
            note.noteMaximum;

        coefficientInput.value =
            note.coefficient;

        dateInput.value =
            note.date;


        formHeading.textContent =
            "Modifier la note";

        submitButton.textContent =
            "Enregistrer les modifications";

        cancelButton.hidden = false;


        form.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        titleInput.focus();
    }


    // ==========================================
    // CARTE D'UNE NOTE
    // ==========================================

    function creerCarte(note) {

        const carte =
            document.createElement(
                "article"
            );

        carte.className =
            "note-card";


        const noteSur20 =
            convertirSur20(
                note.noteObtenue,
                note.noteMaximum
            );


        const informations =
            document.createElement("div");


        const titre =
            document.createElement("h3");

        titre.textContent =
            note.titre;


        const meta =
            document.createElement("div");

        meta.className =
            "note-meta";

        meta.textContent =
            `${note.matiere} · ` +
            `${formaterDate(note.date)} · ` +
            `Coefficient ` +
            `${formaterNombre(note.coefficient)}`;


        informations.append(
            titre,
            meta
        );


        const valeur =
            document.createElement("div");

        valeur.className =
            "note-value";

        valeur.innerHTML = `
            <strong>
                ${formaterNombre(
                    note.noteObtenue
                )}/${formaterNombre(
                    note.noteMaximum
                )}
            </strong>

            <small>
                ${formaterNombre(
                    noteSur20
                )}/20
            </small>
        `;


        const actions =
            document.createElement("div");

        actions.className =
            "note-actions";


        const boutonModifier =
            document.createElement("button");

        boutonModifier.type =
            "button";

        boutonModifier.className =
            "notes-button notes-secondary";

        boutonModifier.dataset.action =
            "edit";

        boutonModifier.dataset.id =
            note.id;

        boutonModifier.textContent =
            "✏️ Modifier";


        const boutonSupprimer =
            document.createElement("button");

        boutonSupprimer.type =
            "button";

        boutonSupprimer.className =
            "notes-button notes-danger";

        boutonSupprimer.dataset.action =
            "delete";

        boutonSupprimer.dataset.id =
            note.id;

        boutonSupprimer.textContent =
            "🗑️ Supprimer";


        actions.append(
            boutonModifier,
            boutonSupprimer
        );


        carte.append(
            informations,
            valeur,
            actions
        );


        return carte;
    }


    // ==========================================
    // AFFICHAGE
    // ==========================================

    function afficherNotes() {

        const recherche =
            normaliser(
                searchInput.value
            );

        const matiere =
            subjectFilter.value;


        const notesFiltrees =
            notes.filter((note) => {

                const texte =
                    normaliser(
                        `${note.titre} ` +
                        `${note.matiere} ` +
                        `${note.date}`
                    );


                return (
                    texte.includes(
                        recherche
                    ) &&
                    (
                        matiere === "all" ||
                        note.matiere === matiere
                    )
                );
            });


        notesFiltrees.sort(
            (a, b) =>
                String(b.date)
                    .localeCompare(
                        String(a.date)
                    )
        );


        notesList.replaceChildren(
            ...notesFiltrees.map(
                (note) =>
                    creerCarte(note)
            )
        );


        const nombre =
            notesFiltrees.length;


        countElement.textContent =
            `${nombre} note` +
            `${nombre > 1 ? "s" : ""} ` +
            `affichée` +
            `${nombre > 1 ? "s" : ""}`;


        emptyMessage.hidden =
            nombre !== 0;


        afficherStatistiques();
    }


    // ==========================================
    // SYNCHRONISATION FIRESTORE
    // ==========================================

    function demarrerSynchronisation() {

        const collection =
            collectionNotes();

        if (!collection) {
            return;
        }


        if (arreterEcoute) {
            arreterEcoute();
        }


        arreterEcoute =
            collection.onSnapshot(
                {
                    includeMetadataChanges: true
                },
                (snapshot) => {

                    notes =
                        snapshot.docs.map(
                            (document) => {

                                const donnees =
                                    document.data();

                                return {
                                    id:
                                        document.id,

                                    matiere:
                                        String(
                                            donnees.matiere ||
                                            ""
                                        ),

                                    titre:
                                        String(
                                            donnees.titre ||
                                            ""
                                        ),

                                    noteObtenue:
                                        Number(
                                            donnees.noteObtenue
                                        ),

                                    noteMaximum:
                                        Number(
                                            donnees.noteMaximum
                                        ),

                                    coefficient:
                                        Number(
                                            donnees.coefficient ||
                                            1
                                        ),

                                    date:
                                        String(
                                            donnees.date ||
                                            ""
                                        )
                                };
                            }
                        )
                        .filter(
                            (note) =>
                                note.matiere &&
                                note.titre &&
                                Number.isFinite(
                                    note.noteObtenue
                                ) &&
                                Number.isFinite(
                                    note.noteMaximum
                                ) &&
                                note.noteMaximum > 0
                        );


                    actualiserFiltreMatieres();
                    afficherNotes();


                    if (snapshot.metadata.fromCache) {

                        countElement.dataset.sync =
                            "offline";

                    } else {

                        countElement.dataset.sync =
                            "online";
                    }
                },
                (erreur) => {

                    console.error(
                        "Erreur de synchronisation des notes :",
                        erreur
                    );

                    alert(
                        "Impossible de synchroniser les notes."
                    );
                }
            );
    }


    // ==========================================
    // AJOUTER / MODIFIER
    // ==========================================

    form.addEventListener(
        "submit",
        async (evenement) => {

            evenement.preventDefault();


            if (!utilisateurConnecte) {

                alert(
                    "Tu dois être connecté pour enregistrer une note."
                );

                return;
            }


            const matiere =
                subjectInput.value.trim();

            const titre =
                titleInput.value.trim();

            const noteObtenue =
                lireNombre(
                    valueInput.value
                );

            const noteMaximum =
                lireNombre(
                    maxInput.value
                );

            const coefficient =
                lireNombre(
                    coefficientInput.value
                );

            const date =
                dateInput.value;


            if (
                !matiere ||
                !titre ||
                !date ||
                !Number.isFinite(
                    noteObtenue
                ) ||
                !Number.isFinite(
                    noteMaximum
                ) ||
                !Number.isFinite(
                    coefficient
                ) ||
                noteObtenue < 0 ||
                noteMaximum <= 0 ||
                noteObtenue >
                    noteMaximum ||
                coefficient <= 0
            ) {

                alert(
                    "Vérifie la matière, le titre, la date, " +
                    "la note obtenue, la note maximale et le coefficient."
                );

                return;
            }


            const donnees = {

                matiere,
                titre,
                noteObtenue,
                noteMaximum,
                coefficient,
                date,

                noteSur20:
                    convertirSur20(
                        noteObtenue,
                        noteMaximum
                    ),

                updatedAt:
                    firebase.firestore
                        .FieldValue
                        .serverTimestamp()
            };


            submitButton.disabled =
                true;


            try {

                const collection =
                    collectionNotes();


                if (
                    noteEnModification !== null
                ) {

                    await collection
                        .doc(
                            noteEnModification
                        )
                        .set(
                            donnees,
                            {
                                merge: true
                            }
                        );

                } else {

                    await collection.add({

                        ...donnees,

                        createdAt:
                            firebase.firestore
                                .FieldValue
                                .serverTimestamp()
                    });
                }


                reinitialiserFormulaire();

            } catch (erreur) {

                console.error(
                    "Erreur d'enregistrement :",
                    erreur
                );

                alert(
                    "La note n'a pas pu être enregistrée."
                );

            } finally {

                submitButton.disabled =
                    false;
            }
        }
    );


    // ==========================================
    // ANNULER
    // ==========================================

    cancelButton.addEventListener(
        "click",
        reinitialiserFormulaire
    );


    // ==========================================
    // RECHERCHE ET FILTRE
    // ==========================================

    searchInput.addEventListener(
        "input",
        afficherNotes
    );


    subjectFilter.addEventListener(
        "change",
        afficherNotes
    );


    // ==========================================
    // ACTIONS DES NOTES
    // ==========================================

    notesList.addEventListener(
        "click",
        async (evenement) => {

            const bouton =
                evenement.target.closest(
                    "button[data-action]"
                );


            if (!bouton) {
                return;
            }


            const id =
                bouton.dataset.id;

            const action =
                bouton.dataset.action;


            if (action === "edit") {

                commencerModification(id);

                return;
            }


            if (action === "delete") {

                const note =
                    notes.find(
                        (element) =>
                            element.id === id
                    );


                if (!note) {
                    return;
                }


                const confirmation =
                    confirm(
                        `Supprimer la note « ${note.titre} » ?`
                    );


                if (!confirmation) {
                    return;
                }


                bouton.disabled = true;


                try {

                    await collectionNotes()
                        .doc(id)
                        .delete();


                    if (
                        noteEnModification === id
                    ) {
                        reinitialiserFormulaire();
                    }

                } catch (erreur) {

                    console.error(
                        "Erreur de suppression :",
                        erreur
                    );

                    alert(
                        "La note n'a pas pu être supprimée."
                    );

                    bouton.disabled = false;
                }
            }
        }
    );


    // ==========================================
    // AUTHENTIFICATION
    // ==========================================

    auth.onAuthStateChanged(
        (utilisateur) => {

            utilisateurConnecte =
                utilisateur;


            if (!utilisateur) {

                if (arreterEcoute) {
                    arreterEcoute();
                }

                notes = [];

                actualiserFiltreMatieres();
                afficherNotes();

                return;
            }


            demarrerSynchronisation();
        }
    );

});
