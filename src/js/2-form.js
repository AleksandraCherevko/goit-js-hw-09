const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');
const input = form.querySelector('input');
popText();

form.addEventListener('submit', event => {
  event.preventDefault();
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
});

form.addEventListener('input', event => {
  const formValues = {
    email: form.email.value,
    message: form.message.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formValues));

  if (!form.email.value || !form.message.value) {
    return;
  }
});

function popText() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedMessage) {
    textarea.value = savedMessage.message || '';
    input.value = savedMessage.email || '';
  }
}
