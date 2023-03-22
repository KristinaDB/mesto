class FormValidator {
    constructor(config, formSelector) {
        this._formSelector = formSelector;
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._form = document.querySelector(this._formSelector);

        this._buttonSubmit = this._form.querySelector(this._submitButtonSelector);
        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    }

    // _getSelector() {
    //     const form = document.querySelector(this._formSelector);

    //     return form;
    //   }


    _disableSubmit(event) {
        event.preventDefault();
    }

    _addErrorFormImput(event) {
        this._input = event;
        this._inputId = this._input.id;
        this._errorElement = document.querySelector(`#${this._inputId}-error`);
        this._input.classList.add(this._inputErrorClass);
        this._errorElement.textContent = this._input.validationMessage;
    }

    _deleteErrorFormImput(event) {
        this._input = event;
        this._inputId = this._input.id;
        this._errorElement = document.querySelector(`#${this._inputId}-error`);
        this._input.classList.remove(this._inputErrorClass);
        this._errorElement.textContent = '';
    }

    _checkValidInput(item) {

        if (item.validity.valid) {
            this._deleteErrorFormImput(item)
        }
        else {
            this._addErrorFormImput(item)
        }
    }

    _toggleButton() {
        this._buttonSubmit.disabled = !this._form.checkValidity();
        this._buttonSubmit.classList.toggle(this._inactiveButtonClass, !this._form.checkValidity());
    }

    _setEventListener() {
       console.log(this._inputList);
       this._inputList.forEach((item) => {
        item.addEventListener('input', () => {
        this._toggleButton() ;
        this._checkValidInput(item);
        });
    });
    }

    enableValidation() {
        this._setEventListener();
       

    }

}

export default FormValidator;
