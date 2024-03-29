export const nameInput = document.getElementById('userName');// Находим поля формы в DOM
export const jobInput = document.getElementById('userJob');// Находим поля формы в DOM
export const photoNameInput = document.getElementById('photoName');//находим инпуты
export const photoLinkInput = document.getElementById('photoLink');
export const formEditOpen = document.getElementById('btn-edit');//находим кнопку редактирования в DOM
export const formAddOpen = document.getElementById('btn-add');
export const profile = document.querySelector('.profile'); //находим профиль в DOM
export const profileName = profile.querySelector('.profile__info-name');//находим поле имя пользователя в DOM
export const profileJob = profile.querySelector('.profile__info-job');//находим поле  пользователя в DOM
export const photoLink = document.querySelector('.popup__container-view');
export const photoTitle = document.querySelector('.popup__container-title');
export const photoGrid = document.querySelector('.photo-grid__list');

export const objectValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

export const photoPlace = [
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


