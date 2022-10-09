(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-products-modal-ice-cream-open]"),
        closeModalBtn: document.querySelector("[data-products-modal-ice-cream-close]"),
        modal: document.querySelector("[data-products-modal-ice-cream]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("products-modal-ice-cream-is-hidden");
    }
})();