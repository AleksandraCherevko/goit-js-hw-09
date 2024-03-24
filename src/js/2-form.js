const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const textarea = form.elements.message;
textarea.value = localStorage.getItem(STORAGE_KEY) ?? '';

const emailarea = form.elements.email;
emailarea.value = localStorage.getItem(STORAGE_KEY) ?? '';

let formValues = JSON.stringify(localStorage.getItem(STORAGE_KEY));

form.addEventListener('input', event => {
  localStorage.setItem(STORAGE_KEY, event);
});

form.addEventListener('submit', event => {
  event.preventDefault();
  let formValues = {
    Email: form.elements.email.value,
    Message: form.elements.message.value,
  };
  console.log(formValues);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
