// Використовуючи делегуваня, відстежуй на формі подію input і
// щоразу записуй у локальне сховище об'єкт з полями email і message,
// у яких зберігай поточні значення полів форми.
// Нехай ключем для сховища буде рядок "feedback-form-state".

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');
const emailarea = form.querySelector('input');

form.addEventListener('submit', handleSubmit);
form.addEventListener('input', onTextareaInput);

populateTextarea();

function onTextareaInput(event) {
  const message = event.target.value;
  localStorage.setItem(STORAGE_KEY, message);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    form.value = savedMessage;
    // emailarea.value = savedMessage;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
// Під час завантаження сторінки перевіряй стан сховища,
// і якщо там є збережені дані,
// то заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
