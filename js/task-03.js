/*Напиши скрипт для створення галереї зображень 
на підставі масиву даних. HTML містить список ul.gallery.

<ul class="gallery"></ul>

Використовуй масив об'єктів images для створення 
елементів <img>, вкладених в <li>. Для створення розмітки 
використовуй шаблонні рядки і метод insertAdjacentHTML().

Усі елементи галереї повинні додаватися в DOM за одну 
операцію додавання.
Додай мінімальне оформлення галереї флексбоксами або 
грідами через CSS класи.
*/

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

/* // ------------------------ 1 variant ---------------------
const galleryEl = document.querySelector('.gallery');
// console.log(galleryEl);

const imgGalleryEl = images.reduce((acc, image) => {
  const listEl = document.createElement('li');
  listEl.style.display = 'flex';
  listEl.style.marginBottom = '10px';

  const imgEl = document.createElement('img');
  imgEl.src = image.url;
  imgEl.alt = image.alt;
  imgEl.width = 400;

  acc.append(imgEl);

  listEl.append(imgEl);
  // console.log(listEl);

  galleryEl.appendChild(listEl);

  return acc;
}, galleryEl);

console.log(imgGalleryEl);
*/

// ---------------------- 2 variant --------------------------

const galleryEl = document.querySelector('.gallery');

const imgEl = images
  .map(({ url, alt }) => `<li class="gallery__item"><img src=${url}alt=${alt}></li>`)
  .join('');

galleryEl.insertAdjacentHTML('beforeend', imgEl);
console.log(galleryEl);
