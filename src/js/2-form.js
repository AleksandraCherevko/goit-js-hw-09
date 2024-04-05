const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');
const input = form.querySelector('input');

popText();

form.addEventListener('submit', event => {
  event.preventDefault();
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (!savedMessage) {
    return alert('Please fill in all the fields!');
  }
  const formValues = {
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };

  if (!formValues.email === '' || !formValues.message === '') {
    return;
  }

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
});

form.addEventListener('input', event => {
  const formValues = {
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formValues));
});

function popText() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedMessage) {
    textarea.value = savedMessage.message || '';
    input.value = savedMessage.email || '';
  }
}
