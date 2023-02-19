/*
Напиши скрипт, який реагує на зміну значення 
input#font-size-control (подія input) і змінює інлайн-стиль
 span#text, оновлюючи властивість font-size. В результаті, 
 перетягуючи повзунок, буде змінюватися розмір тексту.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>
*/

const fontSizeRef = document.querySelector('input#font-size-control');
const textContentRef = document.querySelector('span#text');

fontSizeRef.addEventListener('input', onChangeFontSizeInput);
textContentRef.style.fontSize = `${fontSizeRef.value}px`;

function onChangeFontSizeInput(event) {
  textContentRef.style.fontSize = `${event.currentTarget.value}px`;
  // console.log('size', event.currentTarget.value);
}
