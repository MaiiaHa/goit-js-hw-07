/*HTML містить порожній список ul#ingredients.
<ul id="ingredients"></ul>

JavaScript містить масив рядків.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
*/

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

// ------------------------- 4 variant --------------------------

// for (const ingredient of ingredients) {
//   const ingredientsEl = document.createElement('li');
//   ingredientsEl.classList.add('item');
//   ingredientsEl.textContent = `${ingredient}`;
//   // console.log(ingredientsEl);
//   const listOfIngredientsEl = document.querySelector('#ingredients');

//   listOfIngredientsEl.append(ingredientsEl);
//   // console.log(listOfIngredientsEl);
// }

// ------------------------- 2 variant --------------------------

// const listOfIngredientsEl = document.querySelector('#ingredients');
// // console.log(listOfIngredientsEl);

// const ingredientEl = ingredients.map(element => {
//   const liEl = document.createElement('li');

//   liEl.classList.add('item');
//   liEl.textContent = `${element}`;

//   return liEl;
// }, listOfIngredientsEl);

// // console.log(ingredientEl);

// listOfIngredientsEl.append(...ingredientEl);
// // console.log(listOfIngredientsEl);

// -------------------------- 3 variant ------------------------

// const listOfIngredientsEl = document.querySelector('#ingredients');

// const ingredientEl = ingredients.reduce((acc, ingredient) => {
//   const liEl = document.createElement('li');

//   liEl.classList.add('item');
//   liEl.textContent = ingredient;
//   acc.append(liEl);
//   return acc;
// }, listOfIngredientsEl);

// //console.log(listOfIngredientsEl);

// -------------------------- 4 variant ------------------------

const listOfIngredientsEl = document.querySelector('#ingredients'); //<ul id="ingredients"></ul>

const ingredientEl = ingredients.reduce((massive, ingredient) => {
  const liEl = document.createElement('li'); // li
  liEl.classList.add('item');
  liEl.textContent = ingredient;

  massive.push(liEl);
  return massive;
}, []);

listOfIngredientsEl.append(...ingredientEl);
