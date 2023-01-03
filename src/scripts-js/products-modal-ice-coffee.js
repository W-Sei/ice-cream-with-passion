(() => {
  const mobileMenu = document.querySelector('.js-modal-ice-coffee');
  const openMenuBtn = document.querySelector('.js-modal-ice-coffee-open');
  const closeMenuBtn = document.querySelector('.js-modal-ice-coffee-close');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

})();


// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('.js-modal-ice-coffee-open'),
//     closeModalBtn: document.querySelector('.js-modal-ice-coffee-close'),
//     modal: document.querySelector('.js-modal-ice-coffee'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     document.body.classList.toggle("modal-open");
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();