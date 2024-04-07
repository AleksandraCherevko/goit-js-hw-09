// const STORAGE_KEY = 'feedback-form-state';

// const form = document.querySelector('.feedback-form');
// const textarea = form.querySelector('textarea');
// const input = form.querySelector('input');

// popText();

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

//   const formValues = {
//     email: form.elements.email.value.trim(),
//     message: form.message.elements.value.trim(),
//   };

//   if (formValues.email === '' || formValues.message === '') {
//     return alert('Please fill in all the fields!');
//   }

//   event.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// });

// form.addEventListener('input', event => {
//   const formValues = {
//     email: form.elements.email.value.trim(),
//     message: form.elements.message.value.trim(),
//   };
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formValues));
// });

// function popText() {
//   const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

//   // if (savedMessage) {
//   //   textarea.value = savedMessage.message || '';
//   //   input.value = savedMessage.email || '';
//   // }

//   // Перевірка на undefined перед заповненням полів вводу

//   if (savedMessage.message !== 'undefined') {
//     textarea.value = savedMessage.message;
//   } else if (typeof savedMessage.email !== 'undefined') {
//     input.value = savedMessage.email;
//   }
// }

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');
const input = form.querySelector('input');

popText();

form.addEventListener('submit', event => {
  event.preventDefault();
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  const formValues = {
    email: form.elements.email.value.trim(), // Використовуємо form.elements з атрибутом name
    message: form.elements.message.value.trim(),
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
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formValues));
});

function popText() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedMessage) {
    if (typeof savedMessage.message !== 'undefined') {
      textarea.value = savedMessage.message;
    } else if (typeof savedMessage.email !== 'undefined') {
      input.value = savedMessage.email;
    }
  }
}
