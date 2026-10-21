"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const COLLECTION_NAME = "devoirs";

    let utilisateurConnecte = null;
    let devoirs = [];
    let devoirEnModification = null;
    let arreterEcoute = null;


    // ==========================================
    // ÉLÉMENTS HTML
    // ==========================================

    const homeworkForm =
        document.getElementById("homework-form");

    const homeworkSubject =
        document.getElementById("homework-subject");

    const homeworkTitle =
        document.getElementById("homework-title");

    const homeworkDate =
        document.getElementById("homework-date");

    const homeworkDescription =
        document.getElementById("homework-description");

    const homeworkList =
        document.getElementById("homework-list");

    const searchHomework =
        document.getElementById("search-homework");

    const statusFilter =
        document.getElementById("status-filter");

    const subjectFilter =
        document.getElementById("subject-filter");

    const editSection =
        document.getElementById("edit-homework-section");

    const editForm =
        document.getElementById("edit-homework-form");

    const editSubject =
        document.getElementById("edit-homework-subject");

    const editTitle =
        document.getElementById("edit-homework-title");

    const editDate =
        document.getElementById("edit-homework-date");

    const editDescription =
        document.getElementById("edit-homework-description");

    const cancelEdit =
        document.getElementById("cancel-homework-edit");


    if (
        !homeworkForm ||
        !homeworkSubject ||
        !homeworkTitle ||
        !homeworkDate ||
        !homeworkDescription ||
        !homeworkList ||
        !searchHomework ||
        !statusFilter ||
        !subjectFilter ||
        !editSection ||
        !editForm ||
        !editSubject ||
        !editTitle ||
        !editDate ||
        !editDescription ||
        !cancelEdit
    ) {

        console.error(
            "Mon ENT : un élément de la page Mes devoirs est manquant."
        );

        return;
    }


    // ==========================================
    // OUTILS
    // ==========================================

    function collectionDevoirs() {

        if (!utilisateurConnecte) {
            return null;
        }

        return db
            .collection("users")
            .doc(utilisateurConnecte.uid)
            .collection(COLLECTION_NAME);
    }


    function normaliser(texte) {

        return String(texte || "")
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


    function dateLocaleISO() {

        const maintenant =
            new Date();

        const annee =
            maintenant.getFullYear();

        const mois =
            String(
                maintenant.getMonth() + 1
            ).padStart(2, "0");

        const jour =
            String(
                maintenant.getDate()
            ).padStart(2, "0");

        return `${annee}-${mois}-${jour}`;
    }


    function devoirEnRetard(devoir) {

        if (
            devoir.done ||
            !devoir.date
        ) {
            return false;
        }

        return devoir.date <
            dateLocaleISO();
    }


    // ==========================================
    // STATUT DE SYNCHRONISATION
    // ==========================================

    function afficherEtat(
        texte,
        type = ""
    ) {

        let indicateur =
            document.getElementById(
                "homework-sync-status"
            );


        if (!indicateur) {

            indicateur =
                document.createElement("p");

            indicateur.id =
                "homework-sync-status";

            indicateur.style.margin =
                "0 0 15px";

            indicateur.style.fontWeight =
                "bold";

            homeworkList.before(
                indicateur
            );
        }


        indicateur.textContent =
            texte;


        if (type === "online") {

            indicateur.style.color =
                "#15803d";

        } else if (type === "offline") {

            indicateur.style.color =
                "#b45309";

        } else {

            indicateur.style.color =
                "#64748b";
        }
    }


    // ==========================================
    // AFFICHER LES DEVOIRS
    // ==========================================

    function afficherDevoirs() {

        const recherche =
            normaliser(
                searchHomework.value
            );

        const statut =
            statusFilter.value;

        const matiere =
            subjectFilter.value;


        const devoirsFiltres =
            devoirs.filter((devoir) => {

                const texte =
                    normaliser(
                        `${devoir.title} ` +
                        `${devoir.subject} ` +
                        `${devoir.description}`
                    );


                const correspondRecherche =
                    texte.includes(
                        recherche
                    );


                const retard =
                    devoirEnRetard(
                        devoir
                    );


                const correspondStatut =
                    statut === "all" ||

                    (
                        statut === "todo" &&
                        !devoir.done &&
                        !retard
                    ) ||

                    (
                        statut === "done" &&
                        devoir.done
                    ) ||

                    (
                        statut === "late" &&
                        retard
                    );


                const correspondMatiere =
                    matiere === "all" ||
                    devoir.subject === matiere;


                return (
                    correspondRecherche &&
                    correspondStatut &&
                    correspondMatiere
                );
            });


        devoirsFiltres.sort(
            (a, b) => {

                if (
                    Boolean(a.done) !==
                    Boolean(b.done)
                ) {

                    return a.done
                        ? 1
                        : -1;
                }

                return String(a.date)
                    .localeCompare(
                        String(b.date)
                    );
            }
        );


        homeworkList.replaceChildren();


        if (!devoirsFiltres.length) {

            const message =
                document.createElement("div");

            message.className =
                "empty-message";

            message.innerHTML = `
                <div style="font-size:40px;">
                    📭
                </div>

                <h3>
                    Aucun devoir trouvé
                </h3>

                <p>
                    Aucun devoir ne correspond
                    aux filtres sélectionnés.
                </p>
            `;

            homeworkList.appendChild(
                message
            );

            return;
        }


        devoirsFiltres.forEach(
            (devoir) => {

                const retard =
                    devoirEnRetard(
                        devoir
                    );


                const card =
                    document.createElement(
                        "article"
                    );


                card.className =
                    "homework-card" +
                    (
                        devoir.done
                            ? " done"
                            : ""
                    ) +
                    (
                        retard
                            ? " overdue"
                            : ""
                    );


                // ==================================
                // TITRE
                // ==================================

                const titre =
                    document.createElement(
                        "h3"
                    );

                titre.textContent =
                    devoir.title;


                // ==================================
                // INFORMATIONS
                // ==================================

                const informations =
                    document.createElement(
                        "div"
                    );

                informations.className =
                    "homework-info";


                const badgeMatiere =
                    document.createElement(
                        "span"
                    );

                badgeMatiere.className =
                    "badge";

                badgeMatiere.textContent =
                    `📚 ${devoir.subject}`;


                const badgeDate =
                    document.createElement(
                        "span"
                    );

                badgeDate.className =
                    "badge badge-date";

                badgeDate.textContent =
                    `📅 ${formaterDate(
                        devoir.date
                    )}`;


                const badgeStatut =
                    document.createElement(
                        "span"
                    );


                if (devoir.done) {

                    badgeStatut.className =
                        "badge badge-done";

                    badgeStatut.textContent =
                        "🟢 Terminé";

                } else if (retard) {

                    badgeStatut.className =
                        "badge badge-late";

                    badgeStatut.textContent =
                        "🚨 En retard";

                } else {

                    badgeStatut.className =
                        "badge badge-todo";

                    badgeStatut.textContent =
                        "🔴 À faire";
                }


                informations.append(
                    badgeMatiere,
                    badgeDate,
                    badgeStatut
                );


                card.append(
                    titre,
                    informations
                );


                // ==================================
                // DESCRIPTION
                // ==================================

                if (devoir.description) {

                    const description =
                        document.createElement(
                            "p"
                        );

                    description.textContent =
                        devoir.description;

                    description.style.whiteSpace =
                        "pre-wrap";

                    card.appendChild(
                        description
                    );
                }


                // ==================================
                // ACTIONS
                // ==================================

                const actions =
                    document.createElement(
                        "div"
                    );

                actions.className =
                    "homework-actions";


                const terminer =
                    document.createElement(
                        "button"
                    );

                terminer.type =
                    "button";

                terminer.className =
                    "complete-button";

                terminer.dataset.action =
                    "toggle";

                terminer.dataset.id =
                    devoir.id;

                terminer.textContent =
                    devoir.done
                        ? "↩️ À refaire"
                        : "✅ Terminé";


                const modifier =
                    document.createElement(
                        "button"
                    );

                modifier.type =
                    "button";

                modifier.className =
                    "edit-button";

                modifier.dataset.action =
                    "edit";

                modifier.dataset.id =
                    devoir.id;

                modifier.textContent =
                    "✏️ Modifier";


                const supprimer =
                    document.createElement(
                        "button"
                    );

                supprimer.type =
                    "button";

                supprimer.className =
                    "delete-button";

                supprimer.dataset.action =
                    "delete";

                supprimer.dataset.id =
                    devoir.id;

                supprimer.textContent =
                    "🗑️ Supprimer";


                actions.append(
                    terminer,
                    modifier,
                    supprimer
                );


                card.appendChild(
                    actions
                );


                homeworkList.appendChild(
                    card
                );
            }
        );
    }


    // ==========================================
    // SYNCHRONISATION FIRESTORE
    // ==========================================

    function demarrerSynchronisation() {

        const collection =
            collectionDevoirs();


        if (!collection) {
            return;
        }


        if (arreterEcoute) {
            arreterEcoute();
        }


        afficherEtat(
            "🔄 Synchronisation des devoirs...",
            ""
        );


        arreterEcoute =
            collection.onSnapshot(
                {
                    includeMetadataChanges: true
                },

                (snapshot) => {

                    devoirs =
                        snapshot.docs.map(
                            (document) => {

                                const donnees =
                                    document.data();

                                return {

                                    id:
                                        document.id,

                                    subject:
                                        String(
                                            donnees.subject ||
                                            ""
                                        ),

                                    title:
                                        String(
                                            donnees.title ||
                                            ""
                                        ),

                                    date:
                                        String(
                                            donnees.date ||
                                            ""
                                        ),

                                    description:
                                        String(
                                            donnees.description ||
                                            ""
                                        ),

                                    done:
                                        Boolean(
                                            donnees.done
                                        )
                                };
                            }
                        )
                        .filter(
                            (devoir) =>
                                devoir.subject &&
                                devoir.title &&
                                devoir.date
                        );


                    afficherDevoirs();


                    if (
                        snapshot.metadata.fromCache
                    ) {

                        afficherEtat(
                            navigator.onLine
                                ? "🟠 Données en cache — synchronisation en attente"
                                : "📴 Hors ligne — les changements seront synchronisés plus tard",
                            "offline"
                        );

                    } else {

                        afficherEtat(
                            "🟢 Devoirs synchronisés",
                            "online"
                        );
                    }
                },

                (erreur) => {

                    console.error(
                        "Erreur de synchronisation des devoirs :",
                        erreur
                    );


                    afficherEtat(
                        "🔴 Erreur de synchronisation",
                        "offline"
                    );
                }
            );
    }


    // ==========================================
    // AJOUTER UN DEVOIR
    // ==========================================

    homeworkForm.addEventListener(
        "submit",
        async (evenement) => {

            evenement.preventDefault();


            if (!utilisateurConnecte) {

                alert(
                    "Tu dois être connecté pour ajouter un devoir."
                );

                return;
            }


            const subject =
                homeworkSubject.value;

            const title =
                homeworkTitle.value.trim();

            const date =
                homeworkDate.value;

            const description =
                homeworkDescription.value.trim();


            if (
                !subject ||
                !title ||
                !date
            ) {

                alert(
                    "Merci de renseigner la matière, le titre et la date."
                );

                return;
            }


            const bouton =
                homeworkForm.querySelector(
                    'button[type="submit"]'
                );


            if (bouton) {
                bouton.disabled = true;
            }


            try {

                await collectionDevoirs().add({

                    subject,
                    title,
                    date,
                    description,

                    done: false,

                    createdAt:
                        firebase.firestore
                            .FieldValue
                            .serverTimestamp(),

                    updatedAt:
                        firebase.firestore
                            .FieldValue
                            .serverTimestamp()
                });


                homeworkForm.reset();


            } catch (erreur) {

                console.error(
                    "Erreur d'ajout du devoir :",
                    erreur
                );


                alert(
                    "Le devoir n'a pas pu être enregistré."
                );

            } finally {

                if (bouton) {
                    bouton.disabled = false;
                }
            }
        }
    );


    // ==========================================
    // OUVRIR LA MODIFICATION
    // ==========================================

    function modifierDevoir(id) {

        const devoir =
            devoirs.find(
                (element) =>
                    element.id === id
            );


        if (!devoir) {
            return;
        }


        devoirEnModification =
            id;


        editSubject.value =
            devoir.subject;

        editTitle.value =
            devoir.title;

        editDate.value =
            devoir.date;

        editDescription.value =
            devoir.description;


        editSection.style.display =
            "block";


        editSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });


        editTitle.focus();
    }


    // ==========================================
    // ENREGISTRER LA MODIFICATION
    // ==========================================

    editForm.addEventListener(
        "submit",
        async (evenement) => {

            evenement.preventDefault();


            if (
                !utilisateurConnecte ||
                devoirEnModification === null
            ) {
                return;
            }


            const subject =
                editSubject.value;

            const title =
                editTitle.value.trim();

            const date =
                editDate.value;

            const description =
                editDescription.value.trim();


            if (
                !subject ||
                !title ||
                !date
            ) {

                alert(
                    "Merci de renseigner la matière, le titre et la date."
                );

                return;
            }


            const bouton =
                editForm.querySelector(
                    'button[type="submit"]'
                );


            if (bouton) {
                bouton.disabled = true;
            }


            try {

                await collectionDevoirs()
                    .doc(
                        devoirEnModification
                    )
                    .set(
                        {
                            subject,
                            title,
                            date,
                            description,

                            updatedAt:
                                firebase.firestore
                                    .FieldValue
                                    .serverTimestamp()
                        },

                        {
                            merge: true
                        }
                    );


                devoirEnModification =
                    null;


                editForm.reset();

                editSection.style.display =
                    "none";


            } catch (erreur) {

                console.error(
                    "Erreur de modification du devoir :",
                    erreur
                );


                alert(
                    "Le devoir n'a pas pu être modifié."
                );

            } finally {

                if (bouton) {
                    bouton.disabled = false;
                }
            }
        }
    );


    // ==========================================
    // ANNULER LA MODIFICATION
    // ==========================================

    cancelEdit.addEventListener(
        "click",
        () => {

            devoirEnModification =
                null;

            editForm.reset();

            editSection.style.display =
                "none";
        }
    );


    // ==========================================
    // ACTIONS DES DEVOIRS
    // ==========================================

    homeworkList.addEventListener(
        "click",
        async (evenement) => {

            const bouton =
                evenement.target.closest(
                    "button[data-action]"
                );


            if (
                !bouton ||
                !utilisateurConnecte
            ) {
                return;
            }


            const id =
                bouton.dataset.id;

            const action =
                bouton.dataset.action;


            const devoir =
                devoirs.find(
                    (element) =>
                        element.id === id
                );


            if (!devoir) {
                return;
            }


            // ==================================
            // MODIFIER
            // ==================================

            if (action === "edit") {

                modifierDevoir(id);

                return;
            }


            bouton.disabled = true;


            try {

                // ==============================
                // TERMINER / ROUVRIR
                // ==============================

                if (action === "toggle") {

                    await collectionDevoirs()
                        .doc(id)
                        .set(
                            {
                                done:
                                    !devoir.done,

                                updatedAt:
                                    firebase.firestore
                                        .FieldValue
                                        .serverTimestamp()
                            },

                            {
                                merge: true
                            }
                        );
                }


                // ==============================
                // SUPPRIMER
                // ==============================

                if (action === "delete") {

                    const confirmation =
                        confirm(
                            `Supprimer le devoir « ${devoir.title} » ?`
                        );


                    if (!confirmation) {

                        bouton.disabled =
                            false;

                        return;
                    }


                    await collectionDevoirs()
                        .doc(id)
                        .delete();


                    if (
                        devoirEnModification === id
                    ) {

                        devoirEnModification =
                            null;

                        editForm.reset();

                        editSection.style.display =
                            "none";
                    }
                }


            } catch (erreur) {

                console.error(
                    "Erreur pendant l'action sur le devoir :",
                    erreur
                );


                alert(
                    "L'action n'a pas pu être enregistrée."
                );


                bouton.disabled = false;
            }
        }
    );


    // ==========================================
    // FILTRES
    // ==========================================

    searchHomework.addEventListener(
        "input",
        afficherDevoirs
    );


    statusFilter.addEventListener(
        "change",
        afficherDevoirs
    );


    subjectFilter.addEventListener(
        "change",
        afficherDevoirs
    );


    // ==========================================
    // ÉTAT INTERNET
    // ==========================================

    window.addEventListener(
        "offline",
        () => {

            afficherEtat(
                "📴 Hors ligne — les changements seront synchronisés plus tard",
                "offline"
            );
        }
    );


    window.addEventListener(
        "online",
        () => {

            afficherEtat(
                "🔄 Connexion rétablie — synchronisation...",
                ""
            );
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

                devoirs = [];

                afficherDevoirs();

                afficherEtat(
                    "🔒 Connexion nécessaire",
                    "offline"
                );

                return;
            }


            demarrerSynchronisation();
        }
    );

});
