(() => {
  const mobileMenu = document.querySelector('.js-modal-about');
  const openMenuBtn = document.querySelector('.js-modal-about-open');
  const closeMenuBtn = document.querySelector('.js-modal-about-close');

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
//     openModalBtn: document.querySelector('.js-modal-about-open'),
//     closeModalBtn: document.querySelector('.js-modal-about-close'),
//     modal: document.querySelector('.js-modal-about'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     document.body.classList.toggle("modal-open");
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();
