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
const photoGrid = document.querySelector('.photo-grid__list');

const objectValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

function creatСard (element){
  const card = new Card(element, openPopupViewPhoto);
  const photoElement = card.generateCard();
  photoGrid.prepend(photoElement);
  return (photoElement);
}

photoPlace.forEach((item) => {
  creatСard(item);
  });

const addPhotoFromForm = (evt) => {
  evt.preventDefault();
  const newCard = {
    link: photoLinkInput.value,
    name: photoNameInput.value
  }
  creatСard(newCard);
  evt.target.reset();
  closePopup(popupAddPhoto);
}


function openPopupViewPhoto(link, name) {
  photoLink.src = link;
  photoLink.alt = name;
  photoTitle.textContent = name;
  openPopup(popupViewPhoto);
}




//функция открытия попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}


const formValidatorCardPopup = new FormValidator(objectValidation, '.form-add');
formValidatorCardPopup.enableValidation();

const formValidatorProfilePopup = new FormValidator(objectValidation, '.form-edit');
formValidatorProfilePopup.enableValidation();


function openPropfilePopup() {
  nameInput.value = profileName.textContent; //заносим данные в форму
  jobInput.value = profileJob.textContent; //заполняем поля формы 
  openPopup(popupEditProfile); //вызываем функцию для открытия попапа 
}

function openPhotoAddPopup() {
  openPopup(popupAddPhoto);
}


//функция закрытия попапов

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

formEditOpen.addEventListener('click', () => { //обработчик события открытия popup редактиварония профиля
 openPropfilePopup();
 //функция сбрасывает ошибки и делает кнопку активной,
 //при очистке полей форы редактирования профиля и закрытии формы на крестик
 formValidatorProfilePopup.deleteErrorFormInputWhenOpen();  
});

formAddOpen.addEventListener('click', () => { //обработчик события открытия popup добавления карточки
   openPhotoAddPopup();
   formValidatorCardPopup.disableButton();
});

formEdit.addEventListener('submit', handleFormSubmit);  //обработка кнопки формы редактирования профиля


formAdd.addEventListener('submit', addPhotoFromForm) ///обработка кнопки формы загрузки карточки
