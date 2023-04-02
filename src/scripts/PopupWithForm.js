import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector,callBackForm){
        super (popupSelector);
        this._callBackForm = callBackForm;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input');
    }

    _getInputValues(){
        const inputFormValues = {};
        this._inputList.forEach(inputItem => {
          inputFormValues[inputItem.name] = inputItem.value;
        })
         return inputFormValues;
        
      }
      

    setEventListenersForm(){
       this._form.addEventListener('submit', this._callBackForm);
       super.setEventListeners();
       
    }

    close() {
    this.setEventListenersForm();
    super.close();

    }

}