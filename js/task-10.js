/* 
Напиши скрипт створення і очищення колекції елементів. 
Користувач вводить кількість елементів в input і натискає кнопку 
Створити, після чого рендериться колекція. Натисненням на кнопку 
Очистити, колекція елементів очищається.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Створи функцію createBoxes(amount), яка приймає один параметр - 
число. Функція створює стільки <div>, скільки вказано в amount 
і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від 
попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. 
Використовуй готову функцію getRandomHexColor для отримання кольору.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// ------------------ 1 variant -------------------------

// const createNumberButtonRef = document.querySelector('button[data-create]');
// const cleanNumberButtonRef = document.querySelector('button[data-destroy]');
// const inputRef = document.querySelector('input[type="number"');
// const divBoxesRef = document.querySelector('div#boxes');

// createNumberButtonRef.addEventListener('click', addCoolectionOfNumber);
// cleanNumberButtonRef.addEventListener('click', cleanCollectionOfNumber);
// const massiveOfNumbers = [];

// function addCoolectionOfNumber() {
//   const addedNumber = Number(inputRef.value);

//   if (addedNumber >= 100 || addedNumber <= 1) {
//     alert('Please put data between 1 and 100');
//     cleanCollectionOfNumber();
//   }
//   massiveOfNumbers.push(addedNumber);

//   console.log(inputRef.value);
//   console.log(massiveOfNumbers);
// }

// function cleanCollectionOfNumber() {
//   massiveOfNumbers.splice(0, massiveOfNumbers.length);
//   console.log(massiveOfNumbers);

//   inputRef.textContent.reset(); // do not work here
// }
// method oftask-02 can used
// function createBoxes(amount) {
//   amount = Number(inputRef.value);
//   const divEl = divBoxesRef.createElement('div');
//   divBoxesRef.push(divEl);

//   divEl.style.backgroundColor = getRandomHexColor();
//   divEl.style.width = '30px';
//   divEl.style.height = '30px';

//   console.log(divEl);

//   return divBoxesRef;
// }

// function destroyBoxes() {
//   divEl.remove();
// }

// ------------------------- 2 variant -----------------------

const createNumberButtonRef = document.querySelector('button[data-create]');
const cleanNumberButtonRef = document.querySelector('button[data-destroy]');
const inputRef = document.querySelector('input[type="number"');
const divBoxesRef = document.querySelector('div#boxes');

createNumberButtonRef.addEventListener('click', createBoxes);
cleanNumberButtonRef.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = Number(inputRef.value);

  if (amount > 100 || amount < 1) {
    alert('Please put data between 1 and 100');
    destroyBoxes();
  }

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');

    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = `${30 + i * 10}px`;
    divEl.style.height = `${30 + i * 10}px`;

    divBoxesRef.append(divEl);
  }
  console.dir(inputRef);
}
function destroyBoxes() {
  divBoxesRef.innerHTML = '';
  inputRef.value = '';
}
