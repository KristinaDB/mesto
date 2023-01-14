let popup = document.querySelector('.popup');
let container = popup.querySelector('.popup__container');
let closePopup = popup.querySelector('.popup__btn-close');


let openPopup = document.getElementById ('btn-edit');

openPopup.addEventListener('click', function(){
    popup.classList.add('popup_opened');
})

function closePopupForm(){
    popup.classList.remove('popup_opened');
}

closePopup.addEventListener('click', closePopupForm);

let profile = document.querySelector('.profile');
let profileName = profile.querySelector('.profile__info-name');
let profileJob = profile.querySelector('.profile__info-job');

console.log(profileName.textContent);

// Находим форму в DOM
let formElement = document.querySelector('.form-edit');
let nameInput = formElement.querySelector('.form-edit__input-name');
let jobInput = formElement.querySelector('.form-edit__input-job');

nameInput.value=profileName.textContent;
jobInput.value=profileJob.textContent;
console.log(jobInput.value);


function handleFormSubmit (e) {
    e.preventDefault(); 
    profileName.textContent=nameInput.value;
    profileJob.textContent=jobInput.value;
    closePopupForm();
    
}

formElement.addEventListener('submit', handleFormSubmit);

