class Card {
    static _template = document.querySelector('#userPhoto').content;
    constructor(data, handleOpenPopup) {
        this._title = data.name;
        this._image = data.link;
        this._handleOpenPopup = handleOpenPopup;
    }

    generateCard() {
        this._element = Card._template.cloneNode(true).children[0];
        this._element.querySelector('.photo-card__title').textContent = this._title;
        this._element.querySelector('.photo-card__image').src = this._image;
        this._element.querySelector('.photo-card__image').alt = this._title;
        this._setEventListeners()

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.photo-card__delete').addEventListener('click', () => {
            this._element.remove();
            this._element = null;
        })

        this._element.querySelector('.photo-card__btn-like').addEventListener('click', () => {
            this._element.querySelector('.photo-card__btn-like').classList.toggle('photo-card__btn-like_active');
        })

        this._element.querySelector('.photo-card__image').addEventListener('click', () => {
            this._handleOpenPopup(this._image, this._title);

        });
    }

    renderCard = (container) => {
        container.prepend(this._element);
    }
}
   
export default Card;