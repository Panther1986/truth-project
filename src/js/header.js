/* Открытие и закрытие модального окна */
const burgerBtn = document.querySelector('.header-burger-container');
const mobileMenuEl = document.querySelector('.header-modal-wrapper');
const mobileMenuCloseBtn = document.querySelector(
  '.header-modal-wrapper-item-svg-close-container'
);
const bodyEl = document.querySelector('body');

function toggleOpenModal() {
  mobileMenuEl.classList.toggle('active');
  bodyEl.classList.toggle('is-hidden');
  //   langBoxEl.classList.remove('active-checkbox');
  //   langBoxElModal.classList.remove('active-modal');

  buttonLinkModal.forEach(button => {
    button.addEventListener('click', closeMobileMenuAfterClick);
  });
}

burgerBtn.addEventListener('click', toggleOpenModal);
mobileMenuCloseBtn.addEventListener('click', toggleOpenModal);

/* Close modal window after click link*/
const buttonLinkModal = document.querySelectorAll(
  '.header-modal-container-item'
);
const heroEl = document.querySelector('.hero-content');

function closeMobileMenuAfterClick() {
  mobileMenuEl.classList.remove('active');
  bodyEl.classList.remove('is-hidden');
  langBoxEl.classList.remove('active-checkbox');
  langBoxElModal.classList.remove('active-modal');

  buttonLinkModal.forEach(button => {
    button.removeEventListener('click', closeMobileMenuAfterClick);
  });
}

buttonLinkModal.forEach(button => {
  button.addEventListener('click', closeMobileMenuAfterClick);
});
