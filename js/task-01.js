/* Task1 
Напиши скрипт, який:
Порахує і виведе в консоль кількість категорій в ul#categories, 
тобто елементів li.item.
Для кожного элемента li.item у списку ul#categories, знайде і виведе в 
консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії 
(усіх <li>, вкладених в нього).

В результаті, в консолі будуть виведені наступні повідомлення.
Number of categories: 3
Category: Animals
Elements: 4
Category: Products
Elements: 3
Category: Technologies
Elements: 5 */

// ------------------------------ 1 variant ----------

// const categoriesEl = document.querySelectorAll('.item');
// // console.log(categoriesEl);
// console.log('Number of categories: ', categoriesEl.length); // Number of categories: 3

// const categoryEl = document.querySelectorAll('h2');

// console.log('Category:', categoryEl[0].textContent); // Category: Animals
// console.log('Elements:', categoryEl[0].nextElementSibling.children.length); // Elements: 4
// console.log('Category:', categoryEl[1].textContent); // Category: Products
// console.log('Elements:', categoryEl[1].nextElementSibling.children.length); // Elements: 3
// console.log('Category:', categoryEl[2].textContent); // Category: Technologies
// console.log('Elements:', categoryEl[2].nextElementSibling.children.length); // Elements: 5

// ------------------------------- 2 variant ---------
// cusing element.lastElementChild - do not good choise because we do not know how much elements can be)

const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categories: ', categoriesEl.length); // Number of categories: 3

categoriesEl.forEach(element => {
  console.log('Category:', element.querySelector('h2').textContent);

  console.log('Elements:', element.querySelectorAll('li').length);
});
