import Card from './Card.js';
import photoPlace from './cards.js';
import FormValidator from './FormValidator.js';


const popupEditProfile = document.getElementById('popup-edit-profile'); //находим popup редактирования профиля в DOM
const popupAddPhoto = document.getElementById('popup-add-photo');//находим popup добавления фото в DOM
const popupViewPhoto = document.getElementById('popup-view-photo');//находим popup просмотра фото в DOM
const formEdit = document.getElementById('formEdit');//находим форму редактирвоания профиляonst nameInput = document.getElementById('userName');// Находим поля формы в DOM
const nameInput = document.getElementById('userName');// Находим поля формы в DOM
const jobInput = document.getElementById('userJob');// Находим поля формы в DOM
const formAdd = document.getElementById('formAdd'); //находим форму добавления фото
const photoNameInput = document.getElementById('photoName');//находим инпуты
const photoLinkInput = document.getElementById('photoLink');
const formEditOpen = document.getElementById('btn-edit');//находим кнопку редактирования в DOM
const formAddOpen = document.getElementById('btn-add');
const profile = document.querySelector('.profile'); //находим профиль в DOM
const profileName = profile.querySelector('.profile__info-name');//находим поле имя пользователя в DOM
const profileJob = profile.querySelector('.profile__info-job');//находим поле  пользователя в DOM
const photoLink = document.querySelector('.popup__container-view');
const photoTitle = document.querySelector('.popup__container-title');
const popups = document.querySelectorAll('.popup');
const buttonAdd = document.querySelector('#buttonAdd');
const errorInput = document.querySelectorAll('.input-error');
const inputs = document.querySelectorAll('.popup__input');

const objectValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};



photoPlace.forEach((item) => {
  const card = new Card(item);
  const photoElement = card.generateCard();
  card.renderCard(photoElement);
});

const photoAddFromForm = (evt) => {
  evt.preventDefault();
  const newCard = {
    link: photoLinkInput.value,
    name: photoNameInput.value
  }
  const cardFromForm = new Card(newCard);
  const photoFromForm = cardFromForm.generateCard();
  cardFromForm.renderCard(photoFromForm);
  evt.target.reset();
  closePopup(popupAddPhoto);
}


export function handleOpenPopup(link, name) {
  photoLink.src = link;
  photoLink.alt = name;
  photoTitle.textContent = name;
  openPopup(popupViewPhoto);
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
  const newValidator = new FormValidator(objectValidation, '.form-edit');
  newValidator.enableValidation();
  openPopup(popupEditProfile); //вызываем функцию для открытия попапа 
}

function openPhotoAddPopup() {
  clearInputError(errorInput, inputs);
  buttonDisabled(buttonAdd);
  const newValidator = new FormValidator(objectValidation, '.form-add');
  newValidator.enableValidation();
  openPopup(popupAddPhoto);
}


//функция закрытия попаповсвв од рнь

function clearInputError(error, input) {
  error.forEach((index) => {
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

