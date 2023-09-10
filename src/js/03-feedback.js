import throttle from 'lodash.throttle';

const selectors = {
 formEl: document.querySelector(".feedback-form"),
 emailEl: document.querySelector('[name="email"]'),
 messageEl: document.querySelector('[name="message"]'),
 submitEl: document.querySelector('button[type="submit"]')
}




initializeFormFields();


selectors.formEl.addEventListener("input", throttle(setLocalStorageHandle, 500));

selectors.formEl.addEventListener('submit', submitHandle )



function initializeFormFields() {
  const storedState = JSON.parse(localStorage.getItem("feedback-form-state"));
  if (storedState) {
    selectors.emailEl.value = storedState.email;
    selectors.messageEl.value = storedState.message;
  }
}

function setLocalStorageHandle() {
    localStorage.setItem("feedback-form-state", JSON.stringify({
    email: selectors.emailEl.value,
    message: selectors.messageEl.value
}));
}

function submitHandle(evt) {
    evt.preventDefault();

const storedData = JSON.parse(localStorage.getItem("feedback-form-state")) || {};
    console.log(storedData);
    
    localStorage.removeItem("feedback-form-state");
      selectors.emailEl.value = '';
  selectors.messageEl.value = '';
}
