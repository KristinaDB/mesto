let popup = document.querySelector('.popup'); //находим popup в DOM
let popupClose = popup.querySelector('.popup__btn-close'); //находим кнопку закрытия в DOM
let formElement = document.querySelector('.form-edit');
let nameInput = document.getElementById('userName');// Находим поля формы в DOM
let jobInput = document.getElementById('userJob');// Находим поля формы в DOM


let popupOpen = document.getElementById ('btn-edit');//находим кнопку редактирования в DOM

let profile = document.querySelector('.profile'); //находим профиль в DOM
let profileName = profile.querySelector('.profile__info-name');//находим поле имя пользователя в DOM
let profileJob = profile.querySelector('.profile__info-job');//находим поле  пользователя в DOM



function openPopupForm(){ //функция открытия popup
  popup.classList.add('popup_opened');
  nameInput.value=profileName.textContent; //заносим данные в форму
  jobInput.value=profileJob.textContent;//заносим данные в форму
}

function closePopupForm(){
    popup.classList.remove('popup_opened');
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (e) {
    e.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    profileName.textContent=nameInput.value; // Получите значение полей jobInput и nameInput из свойства value
    profileJob.textContent=jobInput.value;// Получите значение полей jobInput и nameInput из свойства value
    closePopupForm();//вызов функции закрытия popup
}

popupOpen.addEventListener('click', openPopupForm);//обработчик события открытия popup
popupClose.addEventListener('click', closePopupForm);//обработчик события закрытия popup
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);

