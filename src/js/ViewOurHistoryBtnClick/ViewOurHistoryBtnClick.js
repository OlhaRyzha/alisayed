const btn = document.querySelector('.starting__btn');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');

btn.addEventListener('click', onModalBtnClick);

function onModalBtnClick({ target }) {
  if (target.tagName !== 'BUTTON') {
    return;
  }
  console.log(target);
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

const CLOSABLE_ELEMENTS = ['backdrop', 'modal-close', 'title'];

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
