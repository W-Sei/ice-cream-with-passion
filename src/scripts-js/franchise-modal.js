// (() => {
//   const mobileMenu = document.querySelector('.js-franchise');
//   const openMenuBtn = document.querySelector('.js-franchise-open');
//   const closeMenuBtn = document.querySelector('.js-franchise-close');

//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//     mobileMenu.classList.toggle('is-open');

//     const scrollLockMethod = !isMenuOpen
//       ? 'disableBodyScroll'
//       : 'enableBodyScroll';
//     bodyScrollLock[scrollLockMethod](document.body);
//   };

//   openMenuBtn.addEventListener('click', toggleMenu);
//   closeMenuBtn.addEventListener('click', toggleMenu);

// })();


(() => {
  const refs = {
    openModalBtn: document.querySelector('.js-franchise-open'),
    closeModalBtn: document.querySelector('.js-franchise-close'),
    modal: document.querySelector('.js-franchise'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle('is-hidden');
  }
})();
