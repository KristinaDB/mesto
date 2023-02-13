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

  photoLinkInput.value = '';
  photoNameInput.value = '';
  closePopup(popupAddPhoto);

}

//функция открытия попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent; //заносим данные в форму
  jobInput.value = profileJob.textContent;
}


//функция закрытия попапов
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//функция обработки кнопки отправки формы
function handleFormSubmit(e) {
  e.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileName.textContent = nameInput.value; // Получите значение полей jobInput и nameInput из свойства value
  profileJob.textContent = jobInput.value;// Получите значение полей jobInput и nameInput из свойства value
  closePopup(popupEditProfile);//вызов функции закрытия popup
}


formEditOpen.addEventListener('click', () => openPopup(popupEditProfile));//обработчик события открытия popup редактиварония профиля
formAddOpen.addEventListener('click', () => openPopup(popupAddPhoto));//обработчик события открытия popup добавления карточки
buttonAddClose.addEventListener('click', () => closePopup(popupAddPhoto));///обработчик события закрытия  зopup добавления карточки
buttonEditClose.addEventListener('click', () => closePopup(popupEditProfile));//обработчик события закрытия popup редактиварония профиля
photoClose.addEventListener('click', () => closePopup(popupViewPhoto));//обработчик события закрытия popup просмотра фотографии
formEdit.addEventListener('submit', handleFormSubmit); //обработка кнопки формы редактирования профиля
formAdd.addEventListener('submit', photoAddFromForm);//обработка кнопки формы загрузки карточки
