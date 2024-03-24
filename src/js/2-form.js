const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const textarea = form.querySelector('textarea');
console.log(textarea);
const emailarea = form.querySelector('input');
console.log(emailarea);
let formValues = JSON.stringify(localStorage.getItem(STORAGE_KEY));

form.addEventListener('input', event => {
  localStorage.setItem(STORAGE_KEY, event.target.value);
});

form.addEventListener('submit', event => {
  event.preventDefault();
  formValues = {
    Email: form.elements.email.value,
    Message: form.elements.message.value,
  };
  console.log(formValues);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
