(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-products-modal-ice-coffee-open]"),
        closeModalBtn: document.querySelector("[data-products-modal-ice-coffee-close]"),
        modal: document.querySelector("[data-products-modal-ice-cream]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("products-modal-ice-coffee-is-hidden");
    }
})();