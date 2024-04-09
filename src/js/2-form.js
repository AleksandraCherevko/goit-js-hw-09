const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

popText();

form.addEventListener('submit', event => {
  event.preventDefault();

  const formValues = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };

  if (formValues.email === '' || formValues.message === '') {
    return alert('Please fill in all the fields!');
  }

  console.log(formValues);

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
});

form.addEventListener('input', event => {
  const formValues = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formValues));
});

function popText() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedMessage) {
    emailInput.value = savedMessage.email || '';
    messageInput.value = savedMessage.message || '';
  }
}
