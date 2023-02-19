/*
Напиши скрипт управління формою логіна.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>

Обробка відправлення форми form.login-form повинна відбуватися 
відповідно до події submit.
Під час відправлення форми сторінка не повинна перезавантажуватися.
Якщо у формі є незаповнені поля, виводь alert з попередженням про
 те, що всі поля повинні бути заповнені.
Якщо користувач заповнив усі поля і відправив форму, збери 
значення полів в об'єкт, де ім'я поля буде ім'ям властивості, 
а значення поля - значенням властивості. Для доступу до елементів
 форми використовуй властивість elements.
Виведи об'єкт із введеними даними в консоль і очисти значення 
полів форми методом reset.

*/

// ------------ Form Data "by hand" variant

//in function onFormSubmit:

// const elementsOfForm = event.currentTarget.elements;
// console.dir(elementsOfForm);

// const mail = elementsOfForm.email.value;
// const password = elementsOfForm.password.value;

// const formData = {
//   mail,
//   password,
// };
// console.log(formData);

const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault(); // for do not reupload the site

  const formData = new FormData(event.currentTarget);

  if (formData.get('email') === '' || formData.get('password') === '') {
    alert('Please enter all data');
  } else {
    console.log(formData); // will not see results
    form.reset();
  }

  console.log(formData.get('email'));
  console.log(formData.get('password'));
}
