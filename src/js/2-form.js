const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');
const input = form.querySelector('input');
popText();

// let formValues = {
//   Email: form.elements.email.value,
//   Message: form.elements.message.value,
// };

// form.addEventListener('submit', event => {
//   event.preventDefault();

//   localStorage.getItem(STORAGE_KEY, JSON.stringify(formValues));
//   event.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// });

// const textarea = form.elements.message;
// textarea.value = localStorage.getItem(STORAGE_KEY) ?? '';

// const emailarea = form.elements.email;
// emailarea.value = localStorage.getItem(STORAGE_KEY) ?? '';

// let formValues = JSON.stringify(localStorage.getItem(STORAGE_KEY));
form.addEventListener('submit', event => {
  event.preventDefault();
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(savedMessage);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
});

form.addEventListener('input', event => {
  const formValues = {
    email: form.email.value,
    message: form.message.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formValues));
});

function popText() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  // const { email, message } = JSON.parse(savedMessage);
  if (savedMessage) {
    textarea.value = savedMessage.message || '';
    input.value = savedMessage.email || '';
  }
}

//   event.preventDefault();
//   let formValues = {
//     Email: form.elements.email.value,
//     Message: form.elements.message.value,
//   };
//   console.log(formValues);
//   localStorage.removeItem(STORAGE_KEY);
//   form.reset();
// });
