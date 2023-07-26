// define three functions

function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('event target name:', event.target.name);
  console.log('event target value:', event.target.value);
}
// query the DOM for each form control on the page. That's two <input> elements and one <textarea> element.

const $nameInput = document.querySelector('#user-name');
const $emailInput = document.querySelector('#user-email');
const $textareaInput = document.querySelector('#user-message');

console.log('name event:', $nameInput.value);
console.log('email event:', $emailInput.value);
console.log('textarea event:', $textareaInput.value);

// Add three event listeners to each of the form control elements, one for each of the event types you have written event handler functions for in the steps above:

$nameInput.addEventListener('focus', handleFocus);
$emailInput.addEventListener('blur', handleBlur);
$textareaInput.addEventListener('input', handleInput);
