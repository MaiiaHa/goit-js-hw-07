/*
Напиши скрипт, який змінює кольори фону елемента <body> 
через інлайн-стиль по кліку на button.change-color і виводить
 значення кольору в span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

Для генерування випадкового кольору використовуй функцію 
getRandomHexColor.
викликати раз ф-цію
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyColorRef = document.querySelector('button.change-color');
const textContentRef = document.querySelector('span.color');

bodyColorRef.addEventListener('click', onChangeColorBody);

function onChangeColorBody() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  textContentRef.textContent = color;
}
