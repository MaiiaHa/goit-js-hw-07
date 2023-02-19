/*
Напиши скрипт, який під час набору тексту в інпуті 
input#name-input (подія input), підставляє його поточне 
значення в span#name-output. Якщо інпут порожній, у спані 
повинен відображатися рядок "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
*/
const textInputRef = document.querySelector('input#name-input');
const textContentRef = document.querySelector('span#name-output');

textInputRef.addEventListener('input', addTextInput);

function addTextInput(event) {
  if (event.currentTarget.value === '') {
    return (textContentRef.textContent = 'Anonymous');
  }
  textContentRef.textContent = event.currentTarget.value;
}
