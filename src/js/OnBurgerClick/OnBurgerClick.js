const burger = document.querySelector('.header__burger');
const backdrop = document.querySelector('.backdrop-header');
const modal = document.querySelector('.modal-header');
const modalWrap = document.querySelector('.modal-wrap');

burger.addEventListener('click', onModalBtnClick);
modalWrap.addEventListener('click', onModalWrapClick);

function onModalWrapClick({ target }) {
  if (target.tagName !== 'A') {
    return;
  }

  toggleModal();
  clearBackdropListeners();
}
function onModalBtnClick({ target }) {
  toggleModal();

  window.addEventListener('click', onModalClose);
  window.addEventListener('keydown', onKeyClick);
}

function onKeyClick(event) {
  if (event.code !== 'Escape') {
    return;
  }

  toggleModal();
  clearBackdropListeners();
}

const CLOSABLE_ELEMENTS = ['backdrop-header', 'modal-close', 'title'];

function isValidCloseClick(target) {
  return CLOSABLE_ELEMENTS.some(elemCalss =>
    target.classList.contains(elemCalss)
  );
}

function onModalClose({ target }) {
  if (!isValidCloseClick(target)) {
    return;
  }

  toggleModal();
  clearBackdropListeners();
}

function clearBackdropListeners() {
  window.removeEventListener('keydown', onKeyClick);
  window.removeEventListener('click', onModalClose);
}

function toggleModal() {
  modal.classList.toggle('hidden');
  backdrop.classList.toggle('hidden');
}
