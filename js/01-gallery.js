import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

/* 
Завдання 1 - галерея зображень​

Створи галерею з можливістю кліку по її елементах і перегляду 
повнорозмірного зображення у модальному вікні. Подивися демо відео роботи галереї.

Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. 
Розбий його на декілька підзавдань:

1. Створення і рендер розмітки на підставі масиву даних galleryItems
 і наданого шаблону елемента галереї.
2. Реалізація делегування на div.gallery і отримання url великого зображення.
3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.
4. Використовуй CDN сервіс jsdelivr і додай у проект посилання на 
 мініфіковані (.min) файли бібліотеки.
5. Відкриття модального вікна по кліку на елементі галереї. 
6. Для цього ознайомся з документацією і прикладами.
7. Заміна значення атрибута src елемента <img> в модальному вікні 
перед відкриттям. Використовуй готову розмітку модального вікна із 
зображенням з прикладів бібліотеки basicLightbox.

Розмітка елемента галереї​

Посилання на оригінальне зображення повинно зберігатися в data-атрибуті 
source на елементі <img>, і вказуватися в href посилання. Не додавай інші 
HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>

Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку 
за замовчуванням користувач буде перенаправлений на іншу сторінку. 
Заборони цю поведінку за замовчуванням.

Закриття з клавіатури​

УВАГА
Наступний функціонал не обов'язковий для здавання завдання, але буде 
хорошою додатковою практикою.
Додай закриття модального вікна після натискання клавіші Escape. 
Зроби так, щоб прослуховування клавіатури було тільки доти, доки 
відкрите модальне вікно. Бібліотека basicLightbox містить метод для 
програмного закриття модального вікна.
*/

const imgsContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryCardsMarkup(galleryItems);

imgsContainer.insertAdjacentHTML('beforeend', galleryMarkup);

imgsContainer.addEventListener('click', onGalleryContainerClick);
imgsContainer.addEventListener('keydown', closeModalEsc);

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
          />
        </a>
     </div>`;
    })
    .join('');

  // добавить всем каритнкам loading = 'lazy';
}

function onGalleryContainerClick(evt) {
  evt.preventDefault();

  const isGalleryContainImg = evt.target.classList.contains('gallery__image');
  if (!isGalleryContainImg) {
    return;
  }
  evt.target.src = evt.target.dataset.source; // chance for a big picture

  // запустити модалку onShow: (instance) => {},
  basicLightbox
    .create(
      `
    <img src="${evt.target.src}" width="800" height="600">
    `
    )
    .show();
}

function closeModalEsc() {
  // закрити модалку onClose: (instance) => {}
  basicLightbox.close();

  console.log('closed modal');
  // instance.close(() => console.log('lightbox not visible anymore'));
}
