const popupEditProfile = document.getElementById('popup-edit-profile'); //находим popup редактирования профиля в DOM
const popupAddPhoto = document.getElementById('popup-add-photo');//находим popup добавления фото в DOM
const popupViewPhoto = document.getElementById('popup-view-photo');//находим popup просмотра фото в DOM
const photoGrid = document.querySelector('.photo-grid__list');
const buttonEditClose = document.getElementById('close-edit-profile'); //находим кнопку закрытия в DOM
const buttonAddClose = document.getElementById('close-add-photo');
const formEdit = document.getElementById('formEdit');//находим форму редактирвоания профиляonst nameInput = document.getElementById('userName');// Находим поля формы в DOM
const nameInput = document.getElementById('userName');// Находим поля формы в DOM
const jobInput = document.getElementById('userJob');// Находим поля формы в DOM
const formAdd = document.getElementById('formAdd'); //находим форму добавления фото
const photoNameInput = document.getElementById('photoName');//находим инпуты
const photoLinkInput = document.getElementById('photoLink');
const formTitle = document.querySelector('.popup__title');
const formEditOpen = document.getElementById('btn-edit');//находим кнопку редактирования в DOM
const formAddOpen = document.getElementById('btn-add');
const profile = document.querySelector('.profile'); //находим профиль в DOM
const profileName = profile.querySelector('.profile__info-name');//находим поле имя пользователя в DOM
const profileJob = profile.querySelector('.profile__info-job');//находим поле  пользователя в DOM
const popupOpen = document.querySelectorAll('.btn-popup'); //находим кнопки редактирования и добавления и записываем в перемнную
const template = document.querySelector('#userPhoto').content;
const buttonLike = template.querySelectorAll('.photo-card__btn-like');
const photoLink = document.querySelector('.popup__container-view');
const photoTitle = document.querySelector('.popup__container-title');
const popupPhoto = document.querySelector('.popup-photo');
const photoClose = document.querySelector('.popup__container-close');
const popups = document.querySelectorAll('.popup');
const buttonAdd = document.querySelector('#buttonAdd');
const errorInput = document.querySelectorAll('.input-error');
const inputs = document.querySelectorAll('.popup__input');
console.log(errorInput);

// функция добавления карточек
const createCard = (cardAdd) => {
  const photoElement = template.querySelector('.photo-card').cloneNode(true);
  photoElement.querySelector('.photo-card__image').src = cardAdd.link;
  photoElement.querySelector('.photo-card__title').textContent = cardAdd.name;
  photoElement.querySelector('.photo-card__image').alt = cardAdd.name;

  //функция обработки кнопки лайка
  const buttonLike = photoElement.querySelector('.photo-card__btn-like');
  buttonLike.addEventListener('click', function (index) {
    const indexTarget = index.target;
    indexTarget.classList.toggle('photo-card__btn-like_active');
  })

  //функция обработки кнопки удаления карточки
  const resetButton = photoElement.querySelector('.photo-card__delete');
  resetButton.addEventListener('click', () => {
    photoElement.remove();
  })

  //открытие попапа просмотра фотографии
  photoElement.querySelector('.photo-card__image').addEventListener('click', () => {
    openPopup(popupViewPhoto);
    photoLink.src = photoElement.querySelector('.photo-card__image').src;
    photoLink.alt = photoElement.textContent;
    photoTitle.textContent = photoElement.textContent;

  })

  //возвращаем картоку
  return photoElement;
}

//вставляем карточку на страницу
const renderCard = (cardAdd) => {
  photoGrid.prepend(createCard(cardAdd));
}

//загружаем карточки из массива
photoPlace.forEach((item) => {
  renderCard(item);
})

//загружаем карточки из формы закгрузки
const photoAddFromForm = (evt) => {
  evt.preventDefault();
  const newCard = {
    link: photoLinkInput.value,
    name: photoNameInput.value
  }

  renderCard(newCard);
  evt.target.reset();
  closePopup(popupAddPhoto);

}

const buttonDisabled = (button) => {
  if ((photoNameInput.value === '') && (photoLinkInput.value === '')) {
    button.disabled = true;
    button.classList.add('popup__button_disabled');
  }
}

//функция открытия попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

function openPropfilePopup() {
  clearInputError(errorInput, inputs);
  nameInput.value = profileName.textContent; //заносим данные в форму
  jobInput.value = profileJob.textContent; //заполняем поля формы 
  openPopup(popupEditProfile); //вызываем функцию для открытия попапа 
}

function openPhotoAddPopup() {
  clearInputError(errorInput, inputs);
  buttonDisabled(buttonAdd);
  openPopup(popupAddPhoto);
}


//функция закрытия попаповсвв од рнь

function clearInputError(error, input) {
  error.forEach((index) => {
    console.log(index);
    index.textContent = '';
  })
  input.forEach((item) => {
    item.classList.remove('popup__input_type_error');
    item.value = '';
  })
}


function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
  console.log(errorInput);

}

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    }
  })
})

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

//функция обработки кнопки отправки формы
function handleFormSubmit(e) {
  e.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileName.textContent = nameInput.value; // Получите значение полей jobInput и nameInput из свойства value
  profileJob.textContent = jobInput.value;// Получите значение полей jobInput и nameInput из свойства value
  closePopup(popupEditProfile);//вызов функции закрытия popup
}

formEditOpen.addEventListener('click', openPropfilePopup);//обработчик события открытия popup редактиварония профиля
formAddOpen.addEventListener('click', openPhotoAddPopup);//обработчик события открытия popup добавления карточки
formEdit.addEventListener('submit', handleFormSubmit); //обработка кнопки формы редактирования профиля
formAdd.addEventListener('submit', photoAddFromForm);//обработка кнопки формы загрузки карточки

