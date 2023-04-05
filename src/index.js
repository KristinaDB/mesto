import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithImage from './components/PopupWithImage.js';
import UserInfo from './components/UserInfo.js';

import {
photoPlace,
nameInput,
jobInput ,
photoNameInput ,
photoLinkInput ,
formEditOpen ,
formAddOpen ,
profile,
profileName ,
profileJob ,
photoLink ,
photoTitle ,
photoGrid,
objectValidation} from './utils/constants.js'

import './pages/index.css';




const createCard = (item) => {
  const card = new Card (item,  '#userPhoto', () => popupViewPhoto.handleCardClick(item))
  const photoElement = card.generateCard(); 
  creatSection.addItem(photoElement);
}

const creatSection = new Section({data: photoPlace,   renderer: createCard}, photoGrid);
creatSection.renderItems();

const popupViewPhoto = new PopupWithImage('.popup_photo');
popupViewPhoto.setEventListeners();

const handleFormSubmitAddCard = (inputData) => {
  createCard(inputData);
}

const popupAddCard = new PopupWithForm('.popup-add-photo', handleFormSubmitAddCard);
popupAddCard.setEventListeners();

formAddOpen.addEventListener('click', () => 
{popupAddCard.open();
  formValidatorCardPopup.disableButton();
}
);

const userInfo = new UserInfo (profileName, profileJob);
 

const handleFormSubmitProfile = (inputData) => {
  userInfo.setUserInfo(inputData);
 
}

function loadProfileInfo() {
const inputsValue = userInfo.getUserInfo();
nameInput.value = inputsValue.name;
jobInput.value = inputsValue.job;
}

const popupEditProfile = new PopupWithForm ('.popup-edit-profile', handleFormSubmitProfile);
popupEditProfile.setEventListeners();

formEditOpen.addEventListener('click', () => {
  popupEditProfile.open();
  loadProfileInfo();
  formValidatorProfilePopup.deleteErrorFormInputWhenOpen();
});

const formValidatorCardPopup = new FormValidator(objectValidation, '.form-add');
formValidatorCardPopup.enableValidation();

const formValidatorProfilePopup = new FormValidator(objectValidation, '.form-edit');
formValidatorProfilePopup.enableValidation();
