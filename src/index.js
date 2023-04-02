import Card from './scripts/Card.js';
import photoPlace from './scripts/cards.js';
import FormValidator from './scripts/FormValidator.js';
import Section from './scripts/Section.js';
import PopupWithForm from './scripts/PopupWithForm.js';


import './pages/index.css';




//const popupEditProfile = document.getElementById('popup-edit-profile'); //находим popup редактирования профиля в DOM
const nameInput = document.getElementById('userName');// Находим поля формы в DOM
const jobInput = document.getElementById('userJob');// Находим поля формы в DOM
const photoNameInput = document.getElementById('photoName');//находим инпуты
const photoLinkInput = document.getElementById('photoLink');
const formEditOpen = document.getElementById('btn-edit');//находим кнопку редактирования в DOM
const formAddOpen = document.getElementById('btn-add');
const profile = document.querySelector('.profile'); //находим профиль в DOM
const profileName = profile.querySelector('.profile__info-name');//находим поле имя пользователя в DOM
const profileJob = profile.querySelector('.profile__info-job');//находим поле  пользователя в DOM
export const photoLink = document.querySelector('.popup__container-view');
export const photoTitle = document.querySelector('.popup__container-title');
const photoGrid = document.querySelector('.photo-grid__list');

const objectValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const creatСard = new Section({
  data: photoPlace,
  renderer: (item)  => {
  //  const PopupViewPhoto = new PopupWithImage (photoPlace, '.popup_photo');
   const card = new Card(item);
   const photoElement = card.generateCard(); 
   creatСard.addItem(photoElement);
   
  }
  }, photoGrid);
  
  photoPlace.forEach(item => {
  creatСard.renderItems(item)
});


const addPhotoFromForm = (evt) => {
  evt.preventDefault();
  openPhotoAddPopup.close();
  const newCard = {
    link: photoLinkInput.value,
    name: photoNameInput.value
  }

const creatСardFromForm = new Section({
  data: newCard,
  renderer: (newCard)  => {
    const card = new Card(newCard);
    const photoElement = card.generateCard(); 
    creatСardFromForm.addItem(photoElement);
  }
   }, photoGrid);
 creatСardFromForm.renderItems(newCard);
  evt.target.reset();
  }



const formValidatorCardPopup = new FormValidator(objectValidation, '.form-add');
formValidatorCardPopup.enableValidation();

const formValidatorProfilePopup = new FormValidator(objectValidation, '.form-edit');
formValidatorProfilePopup.enableValidation();


const popupEditProfile = new PopupWithForm ('.popup-edit-profile', handleFormSubmit);
formEditOpen.addEventListener('click', () => { 
  nameInput.value = profileName.textContent; //заносим данные в форму
  jobInput.value = profileJob.textContent;
  popupEditProfile.open();
  popupEditProfile.setEventListenersForm();
  formValidatorProfilePopup.deleteErrorFormInputWhenOpen();
});

const openPhotoAddPopup = new PopupWithForm('.popup-add-photo', addPhotoFromForm);
formAddOpen.addEventListener('click', () => { //обработчик события открытия popup добавления карточки
  openPhotoAddPopup.open();
  openPhotoAddPopup.setEventListenersForm();
  formValidatorCardPopup.disableButton();
});



//функция обработки кнопки отправки формы
function handleFormSubmit(e) {
  popupEditProfile.close();
  e.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileName.textContent = nameInput.value; // Получите значение полей jobInput и nameInput из свойства value
  profileJob.textContent = jobInput.value;
}
