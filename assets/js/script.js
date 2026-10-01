/* =========================================================
   MEMBER MODAL
========================================================= */

const memberCards =
    document.querySelectorAll(".member-card");

const memberModal =
    document.getElementById("memberModal");

const modalImage =
    document.getElementById("modalImage");

const modalName =
    document.getElementById("modalName");

const modalRole =
    document.getElementById("modalRole");

const modalNpm =
    document.getElementById("modalNpm");

const modalMajor =
    document.getElementById("modalMajor");

const modalDescription =
    document.getElementById("modalDescription");


/* OPEN MEMBER MODAL */

memberCards.forEach((card) => {

    card.addEventListener("click", () => {

        modalImage.src =
            card.dataset.image;

        modalImage.alt =
            `Foto ${card.dataset.name}`;

        modalName.textContent =
            card.dataset.name;

        modalRole.textContent =
            card.dataset.role;

        modalNpm.textContent =
            card.dataset.npm;

        modalMajor.textContent =
            card.dataset.major;

        modalDescription.textContent =
            card.dataset.description;


        memberModal.classList.add("active");

        memberModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "modal-open"
        );

    });

});


/* CLOSE MEMBER MODAL */

function closeMemberModal() {

    memberModal.classList.remove(
        "active"
    );

    memberModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

}


document
    .querySelectorAll(
        "[data-close-modal]"
    )
    .forEach((button) => {

        button.addEventListener(
            "click",
            closeMemberModal
        );

    });



/* =========================================================
   GALLERY FILTER
========================================================= */

const filterButtons =
    document.querySelectorAll(
        ".gallery-filter-button"
    );

const galleryItems =
    document.querySelectorAll(
        ".gallery-item"
    );


filterButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            const filter =
                button.dataset.filter;


            /* Active button */

            filterButtons.forEach((item) => {

                item.classList.remove(
                    "active"
                );

            });


            button.classList.add(
                "active"
            );


            /* Filter item */

            galleryItems.forEach((item) => {

                const category =
                    item.dataset.category;


                if (
                    filter === "all" ||
                    category === filter
                ) {

                    item.classList.remove(
                        "hidden"
                    );

                } else {

                    item.classList.add(
                        "hidden"
                    );

                }

            });

        }
    );

});



/* =========================================================
   GALLERY LIGHTBOX
========================================================= */

const galleryLightbox =
    document.getElementById(
        "galleryLightbox"
    );

const lightboxImage =
    document.getElementById(
        "lightboxImage"
    );

const lightboxTitle =
    document.getElementById(
        "lightboxTitle"
    );

const lightboxCategory =
    document.getElementById(
        "lightboxCategory"
    );


/* OPEN LIGHTBOX */

galleryItems.forEach((item) => {

    item.addEventListener(
        "click",
        () => {

            lightboxImage.src =
                item.dataset.image;

            lightboxImage.alt =
                item.dataset.title;

            lightboxTitle.textContent =
                item.dataset.title;

            lightboxCategory.textContent =
                item.dataset.categoryName;


            galleryLightbox.classList.add(
                "active"
            );

            galleryLightbox.setAttribute(
                "aria-hidden",
                "false"
            );

            document.body.classList.add(
                "modal-open"
            );

        }
    );

});


/* CLOSE LIGHTBOX */

function closeLightbox() {

    galleryLightbox.classList.remove(
        "active"
    );

    galleryLightbox.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

}


document
    .querySelectorAll(
        "[data-close-lightbox]"
    )
    .forEach((button) => {

        button.addEventListener(
            "click",
            closeLightbox
        );

    });



/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key !== "Escape") {
            return;
        }


        if (
            memberModal.classList.contains(
                "active"
            )
        ) {

            closeMemberModal();

        }


        if (
            galleryLightbox.classList.contains(
                "active"
            )
        ) {

            closeLightbox();

        }

    }
);