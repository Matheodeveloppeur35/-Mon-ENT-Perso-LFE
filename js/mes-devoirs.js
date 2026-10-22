"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const STORAGE_KEY = "mes-devoirs";

    let devoirs = [];
    let devoirEnModification = null;
    let utilisateurActuel = null;
    let arreterSynchronisation = null;


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
    // IDENTIFIANT
    // ==========================================

    function creerIdentifiant() {

        if (
            window.crypto &&
            typeof window.crypto.randomUUID === "function"
        ) {

            return window.crypto.randomUUID();
        }

        return (
            Date.now().toString(36) +
            "-" +
            Math.random().toString(36).slice(2)
        );
    }


    // ==========================================
    // PROTECTION HTML
    // ==========================================

    function echapperHTML(texte) {

        return String(texte || "").replace(
            /[&<>"']/g,
            caractere => ({

                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;"

            })[caractere]
        );
    }


    // ==========================================
    // NORMALISATION
    // ==========================================

    function normaliser(texte) {

        return String(texte || "")
            .toLocaleLowerCase("fr")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();
    }


    // ==========================================
    // FORMAT DATE
    // ==========================================

    function formaterDate(date) {

        const resultat =
            /^(\d{4})-(\d{2})-(\d{2})$/.exec(
                String(date || "")
            );

        if (!resultat) {

            return "Date non renseignée";
        }

        return (
            resultat[3] +
            "/" +
            resultat[2] +
            "/" +
            resultat[1]
        );
    }


    // ==========================================
    // DATE EN TIMESTAMP
    // ==========================================

    function dateEnNombre(date) {

        if (!date) {

            return Number.MAX_SAFE_INTEGER;
        }

        const valeur =
            new Date(
                date + "T00:00:00"
            ).getTime();

        return Number.isFinite(valeur)
            ? valeur
            : Number.MAX_SAFE_INTEGER;
    }


    // ==========================================
    // VÉRIFIER RETARD
    // ==========================================

    function devoirEnRetard(devoir) {

        if (
            devoir.done ||
            !devoir.date
        ) {

            return false;
        }

        const aujourdHui =
            new Date();

        aujourdHui.setHours(
            0,
            0,
            0,
            0
        );

        const dateDevoir =
            new Date(
                devoir.date + "T00:00:00"
            );

        return (
            !Number.isNaN(
                dateDevoir.getTime()
            ) &&
            dateDevoir < aujourdHui
        );
    }


    // ==========================================
    // CHARGER LE STOCKAGE LOCAL
    // ==========================================

    function chargerDevoirsLocaux() {

        try {

            const resultat =
                JSON.parse(
                    localStorage.getItem(
                        STORAGE_KEY
                    ) || "[]"
                );

            if (!Array.isArray(resultat)) {

                return [];
            }

            return resultat
                .filter(devoir =>
                    devoir &&
                    typeof devoir === "object"
                )
                .map((devoir, index) => ({

                    id:
                        String(
                            devoir.id ||
                            (
                                "devoir-" +
                                index +
                                "-" +
                                Date.now()
                            )
                        ),

                    subject:
                        String(
                            devoir.subject ||
                            devoir.matiere ||
                            ""
                        ),

                    title:
                        String(
                            devoir.title ||
                            devoir.titre ||
                            ""
                        ),

                    date:
                        String(
                            devoir.date ||
                            ""
                        ),

                    description:
                        String(
                            devoir.description ||
                            ""
                        ),

                    done:
                        Boolean(
                            devoir.done ??
                            devoir.termine
                        )
                }))
                .filter(devoir =>
                    devoir.subject &&
                    devoir.title &&
                    devoir.date
                );

        } catch (erreur) {

            console.error(
                "Impossible de charger les devoirs locaux.",
                erreur
            );

            return [];
        }
    }


    // ==========================================
    // SAUVEGARDE LOCALE
    // ==========================================

    function sauvegarderLocalement() {

        try {

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(devoirs)
            );

            return true;

        } catch (erreur) {

            console.error(
                "Impossible d'enregistrer les devoirs localement.",
                erreur
            );

            return false;
        }
    }


    // ==========================================
    // RÉFÉRENCE FIRESTORE
    // ==========================================

    function collectionDevoirs() {

        if (
            !window.db ||
            !utilisateurActuel
        ) {

            return null;
        }

        return window.db
            .collection("users")
            .doc(utilisateurActuel.uid)
            .collection("devoirs");
    }


    // ==========================================
    // DONNÉES FIRESTORE
    // ==========================================

    function devoirVersFirestore(devoir) {

        return {

            subject:
                devoir.subject,

            title:
                devoir.title,

            date:
                devoir.date,

            description:
                devoir.description,

            done:
                devoir.done,

            updatedAt:
                window.firebase &&
                firebase.firestore
                    ? firebase.firestore
                        .FieldValue
                        .serverTimestamp()
                    : null
        };
    }


    // ==========================================
    // ENREGISTRER DANS FIREBASE
    // ==========================================

    async function enregistrerDansFirebase(
        devoir
    ) {

        const collection =
            collectionDevoirs();

        if (!collection) {

            sauvegarderLocalement();

            return;
        }

        try {

            await collection
                .doc(String(devoir.id))
                .set(
                    devoirVersFirestore(
                        devoir
                    ),
                    {
                        merge: true
                    }
                );

        } catch (erreur) {

            console.error(
                "Impossible de synchroniser le devoir.",
                erreur
            );

            sauvegarderLocalement();
        }
    }


    // ==========================================
    // SUPPRIMER DANS FIREBASE
    // ==========================================

    async function supprimerDansFirebase(id) {

        const collection =
            collectionDevoirs();

        if (!collection) {

            sauvegarderLocalement();

            return;
        }

        try {

            await collection
                .doc(String(id))
                .delete();

        } catch (erreur) {

            console.error(
                "Impossible de supprimer le devoir dans Firebase.",
                erreur
            );

            sauvegarderLocalement();
        }
    }


    // ==========================================
    // CRÉER UNE CARTE
    // ==========================================

    function creerCarteDevoir(devoir) {

        const estEnRetard =
            devoirEnRetard(devoir);

        const carte =
            document.createElement(
                "article"
            );

        carte.className =
            "homework-card" +
            (
                devoir.done
                    ? " done"
                    : ""
            ) +
            (
                estEnRetard
                    ? " overdue"
                    : ""
            );


        let statutHTML = "";

        if (devoir.done) {

            statutHTML = `
                <span class="badge badge-done">
                    🟢 Terminé
                </span>
            `;

        } else if (estEnRetard) {

            statutHTML = `
                <span class="badge badge-late">
                    🚨 En retard
                </span>
            `;

        } else {

            statutHTML = `
                <span class="badge badge-todo">
                    🔴 À faire
                </span>
            `;
        }


        carte.innerHTML = `

            <h3>
                ${echapperHTML(
                    devoir.title
                )}
            </h3>

            <div class="homework-info">

                <span class="badge">
                    📚
                    ${echapperHTML(
                        devoir.subject
                    )}
                </span>

                <span class="badge badge-date">
                    📅
                    ${echapperHTML(
                        formaterDate(
                            devoir.date
                        )
                    )}
                </span>

                ${statutHTML}

            </div>

            ${
                devoir.description
                    ? `
                        <p>
                            ${echapperHTML(
                                devoir.description
                            ).replace(
                                /\n/g,
                                "<br>"
                            )}
                        </p>
                    `
                    : ""
            }

            <div class="homework-actions">

                <button
                    type="button"
                    class="complete-button"
                    data-action="toggle"
                    data-id="${echapperHTML(
                        devoir.id
                    )}"
                >
                    ${
                        devoir.done
                            ? "↩️ À refaire"
                            : "✅ Terminé"
                    }
                </button>

                <button
                    type="button"
                    class="edit-button"
                    data-action="edit"
                    data-id="${echapperHTML(
                        devoir.id
                    )}"
                >
                    ✏️ Modifier
                </button>

                <button
                    type="button"
                    class="delete-button"
                    data-action="delete"
                    data-id="${echapperHTML(
                        devoir.id
                    )}"
                >
                    🗑️ Supprimer
                </button>

            </div>
        `;

        return carte;
    }


    // ==========================================
    // AFFICHER
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
            devoirs
                .filter(devoir => {

                    const texte =
                        normaliser(
                            devoir.title +
                            " " +
                            devoir.subject +
                            " " +
                            devoir.description
                        );

                    const retard =
                        devoirEnRetard(devoir);


                    const correspondRecherche =
                        texte.includes(
                            recherche
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
                })
                .sort((a, b) => {

                    if (
                        a.done !== b.done
                    ) {

                        return a.done
                            ? 1
                            : -1;
                    }

                    return (
                        dateEnNombre(
                            a.date
                        ) -
                        dateEnNombre(
                            b.date
                        )
                    );
                });


        homeworkList.replaceChildren();


        if (
            devoirsFiltres.length === 0
        ) {

            const message =
                document.createElement(
                    "div"
                );

            message.className =
                "empty-message";

            message.innerHTML = `

                <div class="empty-icon">
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


        const fragment =
            document.createDocumentFragment();


        devoirsFiltres.forEach(
            devoir => {

                fragment.appendChild(
                    creerCarteDevoir(
                        devoir
                    )
                );
            }
        );


        homeworkList.appendChild(
            fragment
        );
    }


    // ==========================================
    // OUVRIR LA MODIFICATION
    // ==========================================

    function ouvrirModification(id) {

        const devoir =
            devoirs.find(
                element =>
                    String(element.id) ===
                    String(id)
            );

        if (!devoir) {

            return;
        }


        devoirEnModification =
            devoir.id;


        editSubject.value =
            devoir.subject;

        editTitle.value =
            devoir.title;

        editDate.value =
            devoir.date;

        editDescription.value =
            devoir.description;


        editSection.hidden =
            false;


        editSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });


        editTitle.focus();
    }


    // ==========================================
    // FERMER LA MODIFICATION
    // ==========================================

    function fermerModification() {

        devoirEnModification =
            null;

        editForm.reset();

        editSection.hidden =
            true;
    }


    // ==========================================
    // AJOUT
    // ==========================================

    homeworkForm.addEventListener(
        "submit",
        async evenement => {

            evenement.preventDefault();


            const nouveauDevoir = {

                id:
                    creerIdentifiant(),

                subject:
                    homeworkSubject.value,

                title:
                    homeworkTitle.value.trim(),

                date:
                    homeworkDate.value,

                description:
                    homeworkDescription
                        .value
                        .trim(),

                done:
                    false
            };


            if (
                !nouveauDevoir.subject ||
                !nouveauDevoir.title ||
                !nouveauDevoir.date
            ) {

                alert(
                    "Merci de renseigner la matière, le titre et la date."
                );

                return;
            }


            devoirs.push(
                nouveauDevoir
            );


            sauvegarderLocalement();

            afficherDevoirs();

            homeworkForm.reset();


            await enregistrerDansFirebase(
                nouveauDevoir
            );
        }
    );


    // ==========================================
    // ENREGISTRER MODIFICATION
    // ==========================================

    editForm.addEventListener(
        "submit",
        async evenement => {

            evenement.preventDefault();


            if (
                devoirEnModification === null
            ) {

                return;
            }


            const index =
                devoirs.findIndex(
                    devoir =>
                        String(devoir.id) ===
                        String(
                            devoirEnModification
                        )
                );


            if (index === -1) {

                fermerModification();

                return;
            }


            const ancienDevoir =
                devoirs[index];


            const devoirModifie = {

                ...ancienDevoir,

                subject:
                    editSubject.value,

                title:
                    editTitle.value.trim(),

                date:
                    editDate.value,

                description:
                    editDescription
                        .value
                        .trim()
            };


            if (
                !devoirModifie.subject ||
                !devoirModifie.title ||
                !devoirModifie.date
            ) {

                alert(
                    "Merci de renseigner la matière, le titre et la date."
                );

                return;
            }


            devoirs[index] =
                devoirModifie;


            sauvegarderLocalement();

            fermerModification();

            afficherDevoirs();


            await enregistrerDansFirebase(
                devoirModifie
            );
        }
    );


    // ==========================================
    // ANNULER MODIFICATION
    // ==========================================

    cancelEdit.addEventListener(
        "click",
        fermerModification
    );


    // ==========================================
    // ACTIONS DE LA LISTE
    // ==========================================

    homeworkList.addEventListener(
        "click",
        async evenement => {

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


            const index =
                devoirs.findIndex(
                    devoir =>
                        String(devoir.id) ===
                        String(id)
                );


            if (index === -1) {

                return;
            }


            if (action === "edit") {

                ouvrirModification(
                    id
                );

                return;
            }


            if (action === "toggle") {

                devoirs[index].done =
                    !devoirs[index].done;


                const devoirModifie =
                    devoirs[index];


                sauvegarderLocalement();

                afficherDevoirs();


                await enregistrerDansFirebase(
                    devoirModifie
                );

                return;
            }


            if (action === "delete") {

                const confirmation =
                    confirm(
                        `Supprimer le devoir « ${devoirs[index].title} » ?`
                    );


                if (!confirmation) {

                    return;
                }


                const devoirSupprime =
                    devoirs.splice(
                        index,
                        1
                    )[0];


                sauvegarderLocalement();

                afficherDevoirs();


                if (
                    String(
                        devoirEnModification
                    ) === String(id)
                ) {

                    fermerModification();
                }


                await supprimerDansFirebase(
                    devoirSupprime.id
                );
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
    // SYNCHRONISATION FIREBASE
    // ==========================================

    function demarrerSynchronisation(
        utilisateur
    ) {

        utilisateurActuel =
            utilisateur;


        const collection =
            collectionDevoirs();


        if (!collection) {

            devoirs =
                chargerDevoirsLocaux();

            afficherDevoirs();

            return;
        }


        if (
            typeof arreterSynchronisation ===
            "function"
        ) {

            arreterSynchronisation();
        }


        arreterSynchronisation =
            collection.onSnapshot(
                snapshot => {

                    const devoirsFirebase =
                        snapshot.docs.map(
                            document => {

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
                        );


                    // Première utilisation :
                    // envoyer les devoirs locaux
                    // si Firebase est encore vide.

                    if (
                        snapshot.empty &&
                        devoirs.length > 0
                    ) {

                        devoirs.forEach(
                            devoir => {

                                enregistrerDansFirebase(
                                    devoir
                                );
                            }
                        );

                        return;
                    }


                    devoirs =
                        devoirsFirebase;


                    sauvegarderLocalement();

                    afficherDevoirs();
                },
                erreur => {

                    console.error(
                        "Erreur de synchronisation des devoirs.",
                        erreur
                    );


                    devoirs =
                        chargerDevoirsLocaux();


                    afficherDevoirs();
                }
            );
    }


    // ==========================================
    // INITIALISATION
    // ==========================================

    devoirs =
        chargerDevoirsLocaux();


    afficherDevoirs();


    editSection.hidden =
        true;


    if (
        window.auth &&
        typeof window.auth
            .onAuthStateChanged ===
            "function"
    ) {

        window.auth.onAuthStateChanged(
            utilisateur => {

                if (!utilisateur) {

                    utilisateurActuel =
                        null;

                    return;
                }


                demarrerSynchronisation(
                    utilisateur
                );
            }
        );

    } else {

        console.warn(
            "Firebase Auth n'est pas disponible. Les devoirs restent enregistrés localement."
        );
    }

});
