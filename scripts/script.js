let popup = document.querySelector('.popup'); //находим popup в DOM
let photoGrid = document.querySelector('.photo-grid__list');
let popupClose = popup.querySelector('.popup__btn-close'); //находим кнопку закрытия в DOM
let nameInput = document.getElementById('userName');// Находим поля формы в DOM
let jobInput = document.getElementById('userJob');// Находим поля формы в DOM
const formEdit = document.getElementById('formEdit');
const formAdd = document.getElementById('formAdd');
let formTitle = document.querySelector('.popup__title');
let formEditOpen = document.getElementById('btn-edit');//находим кнопку редактирования в DOM
let formAddOpen = document.getElementById('btn-add');
let profile = document.querySelector('.profile'); //находим профиль в DOM
let profileName = profile.querySelector('.profile__info-name');//находим поле имя пользователя в DOM
let profileJob = profile.querySelector('.profile__info-job');//находим поле  пользователя в DOM
const popupOpen = document.querySelectorAll('.btn-popup'); //находим кнопки редактирования и добавления и записываем в перемнную
let photoNameInput = document.getElementById('photoName');
let photoLinkInput = document.getElementById('photoLink');
const Template = document.querySelector('#userPhoto').content;
const photoElement = Template.querySelector('.photo-card').cloneNode(true);
const buttonLike = Template.querySelectorAll('.photo-card__btn-like');
//const resetButton = document.getElementsByClassName('photo-card__delete');
//const popupPhoto = document.getElementsByClassName('popup-photo');
const photoLink = document.querySelector('.popup-photo__container-view');
const photoTitle = document.querySelector('.popup-photo__container-title');
//console.log(popupPhoto, photoLink, photoTitle);
const popupPhoto = document.querySelector('.popup-photo');
const photoClose = document.querySelector('.popup-photo__container-close');
photoPlace = [
  {
    name: 'Зеленоград, Россия',
    link: 'https://images.unsplash.com/photo-1536577722576-fcfdbcad17e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'
  },
  {
    name: 'Республика Коми',
    link: 'https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
  },
  {
    name: 'Станция Пролетарская, г. Санкт-Петербург',
    link: 'https://images.unsplash.com/photo-1588698947572-5563eed6d86a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
  },
  {
    name: 'Воронеж',
    link: 'https://images.unsplash.com/photo-1616398201291-56a3fa55457a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function viewPhoto() {

}

photoPlace.forEach(function (index) {
  const photoElement = Template.querySelector('.photo-card').cloneNode(true);
  photoElement.querySelector('.photo-card__image').src = index.link;
  photoElement.querySelector('.photo-card__title').textContent = index.name;
  photoElement.querySelector('.photo-card__image').alt = index.name;
  const buttonLike = photoElement.querySelector('.photo-card__btn-like');
  buttonLike.addEventListener('click', function (index) {
  const indexTarget = index.target;
  indexTarget.classList.toggle('photo-card__btn-like_active');
  })

  photoElement.querySelector('.photo-card__image').addEventListener('click', function () {
    popupPhoto.classList.add('popup-photo_opened');
    photoLink.src = photoElement.querySelector('.photo-card__image').src;
    photoTitle.textContent = photoElement.textContent;
  })

  photoClose.addEventListener('click', function () {
    popupPhoto.classList.remove('popup-photo_opened');
  })

  const resetButton = photoElement.querySelector('.photo-card__delete');
  resetButton.addEventListener('click', () => {
    photoElement.remove();
  })

  photoGrid.append(photoElement);

});

function PhotoAdd(e) {
  console.log('Submit сработал');
  e.preventDefault();
  const photoElement = Template.querySelector('.photo-card').cloneNode(true);
  photoElement.querySelector('.photo-card__image').src = photoLinkInput.value;
  photoElement.querySelector('.photo-card__title').textContent = photoNameInput.value;
  photoElement.querySelector('.photo-card__image').alt = photoNameInput.value;
  const buttonLike = photoElement.querySelector('.photo-card__btn-like');
  buttonLike.addEventListener('click', function (index) {
    const indexTarget = index.target;
    indexTarget.classList.toggle('photo-card__btn-like_active');
  })

  const resetButton = photoElement.querySelector('.photo-card__delete');
  console.log(resetButton);
  resetButton.addEventListener('click', () => {
    photoElement.remove();
  })

  photoElement.querySelector('.photo-card__image').addEventListener('click', function () {
    popupPhoto.classList.add('popup-photo_opened');
    photoLink.src = photoElement.querySelector('.photo-card__image').src;
    photoTitle.textContent = photoElement.textContent;
  })

  photoClose.addEventListener('click', function () {
    popupPhoto.classList.remove('popup-photo_opened');
  })

  photoGrid.prepend(photoElement);
  closePopupForm();
  photoLinkInput.value = '';
  photoNameInput.value = '';
}

//функция открытия формы
popupOpen.forEach((index) => { //перебираем NodeList, отслеживая какая кнопка была нажата
  index.addEventListener('click', () => {
    popup.classList.add('popup_opened'); //открываем popup
    if (index.classList.contains('profile__btn-add')) {//проверяем условие, если у кнопки имеется класс profile__btn-add, то
      formAdd.classList.add('form-edit_opened');//открываем форму добавление фотографий
      formTitle.textContent = 'Новое место';//меняем заголовок формы
      formEdit.classList.remove('form-edit_opened');
    }
    if (index.classList.contains('profile__btn-edit')) {//проверяем условие, если у кнопки имеется класс profile__btn-edit, то
      formEdit.classList.add('form-edit_opened');//открываем форму редактирования профиля
      nameInput.value = profileName.textContent; //заносим данные в форму
      jobInput.value = profileJob.textContent;
      formTitle.textContent = 'Редактировать профиль';//меняем заголовой формы
      formAdd.classList.remove('form-edit_opened');

    }
  })
})

function closePopupForm() { //функция закрытия popup
  popup.classList.remove('popup_opened');//удаляем класс у popup, закрывая его
  //удаляем класс у формы, закрывая форму

}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(e) {
  console.log('Submit сработал');
  e.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileName.textContent = nameInput.value; // Получите значение полей jobInput и nameInput из свойства value
  profileJob.textContent = jobInput.value;// Получите значение полей jobInput и nameInput из свойства value
  closePopupForm();//вызов функции закрытия popup
}

function photoFormSubmit(e) {
  e.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  closePopupForm();//вызов функции закрытия popup
}


popupClose.addEventListener('click', closePopupForm);//обработчик события закрытия popup
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formEdit.addEventListener('submit', handleFormSubmit);
formAdd.addEventListener('submit', PhotoAdd);

// buttonLike.forEach((index) => {
//   index.addEventListener("click", () => {
//     console.log(index);
//     index.classList.toggle('photo-card__btn-like_active');
//   })
// });
