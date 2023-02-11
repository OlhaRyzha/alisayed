import localStorageService from './localstorage';
import { Report } from 'notiflix';
const contactFormEl = document.querySelector('form');
const userInfo = {};

const fillContactFormFields = () => {
  const userInfoFromLS = localStorageService.load('userData');

  if (userInfoFromLS === undefined) {
    return;
  }else{
      for (const prop in userInfoFromLS) {
  contactFormEl.elements[prop].value = userInfoFromLS[prop];
  }
  }

};

fillContactFormFields();

const onContactFormFieldChange = event => {
  const { target } = event;

  const fieldValue = target.value;
  const fieldName = target.name;

  userInfo[fieldName] = fieldValue;

  localStorageService.save('userData', userInfo);
};

const onContactFormSubmit = event => {
  event.preventDefault();
  contactFormEl.reset();
  localStorageService.remove('userData');
};

function onKeyClick(event) {
  if (event.code !== 'Enter') {
    return;
  }

  Report.success(
    `Name: ${userInfo.name}
Email: ${userInfo.email}
Message: ${userInfo.message}
`
  );
  contactFormEl.reset();
  localStorageService.remove('userData');
}

contactFormEl.addEventListener('change', onContactFormFieldChange);
contactFormEl.addEventListener('submit', onContactFormSubmit);
window.addEventListener('keydown', onKeyClick);
