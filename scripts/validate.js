function disableSubmit(event) {
    event.preventDefault();
}

function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((item) => {
        item.addEventListener('submit', disableSubmit);
        item.addEventListener('submit', disableSubmit);
        item.addEventListener('input', () => {
            toggleButton(item, config);
        });
        addInputListener(item, config);
        toggleButton(item, config);
    });

}

function handleFormImput(event, config) {
    const input = event.target;
    const inputId = input.id;
    const errorElement = document.querySelector(`#${inputId}-error`);
    if (input.validity.valid) {
        input.classList.remove(config.inputErrorClass);
        errorElement.textContent = '';
    }
    else {
        input.classList.add(config.inputErrorClass);
        errorElement.textContent = input.validationMessage;
    }
}

function toggleButton(form, config) {
    const buttonSubmit = form.querySelector(config.submitButtonSelector);
    const isFormValid = form.checkValidity();
    buttonSubmit.disabled = !isFormValid;
    buttonSubmit.classList.toggle('popup__button_disabled', !isFormValid);
}



function addInputListener(form, config) {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    inputList.forEach(function (item) {
        item.addEventListener('input', (event) => {
            handleFormImput(event, config)
        });
    })
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});