const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const textarea = form.elements.message;
textarea.value = localStorage.getItem(STORAGE_KEY) ?? '';
const emailarea = form.elements.email;
emailarea.value = localStorage.getItem(STORAGE_KEY) ?? '';

form.addEventListener('input', event => {
  localStorage.setItem('STORAGE_KEY', 'event.target.value');
});

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event.target.elements.message.value);
  console.log(event.target.elements.email.value);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
