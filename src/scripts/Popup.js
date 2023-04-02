export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._clickKeyEsc = this._clickKeyEsc.bind(this);
    }

    open() {  //функция открытия попапа
        this._popup.classList.add('popup_opened');
    }

    close() {//функция закрытия  попапа
        this._popup.classList.remove('popup_opened');

    }

    _clickKeyEsc(evt) { //проверка условия нажатия клавиши Esc
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _handleEscClose() { //добавляем слушатель при клике на клавишу Esc
        document.addEventListener('keydown', this._clickKeyEsc);
    }


    setEventListeners() {
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {  //закрываем попап при клике на область за пределами формы
                this.close();
            }
            if (evt.target.classList.contains('popup__close')) {//закрываем попап при клике на кнопку закрытия
                this.close();
            }
        })
        this._handleEscClose();

    }

}