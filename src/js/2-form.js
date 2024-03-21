const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');

// form.addEventListener('submit', handleSubmit);

// Використовуючи делегуваня, відстежуй на формі подію input і
// щоразу записуй у локальне сховище об'єкт з полями email і message,
// у яких зберігай поточні значення полів форми.
// Нехай ключем для сховища буде рядок "feedback-form-state".

form.addEventListener('input', event => {
  event.preventDefault();
  console.log(event.target.elements.message.value);
});
