import { handleOpenPopup } from './script.js';

class Card {
    static _template = document.querySelector('#userPhoto').content;
    constructor(data) {
        this._title = data.name;
        this._image = data.link;
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
        })

        this._element.querySelector('.photo-card__btn-like').addEventListener('click', () => {
            this._element.querySelector('.photo-card__btn-like').classList.toggle('photo-card__btn-like_active');
        })

        this._element.querySelector('.photo-card__image').addEventListener('click', () => {
            handleOpenPopup(this._image, this._title);

        });
    }


    renderCard = (photoCard) => {
        const photoGrid = document.querySelector('.photo-grid__list');
        photoGrid.prepend(photoCard);
    }
}

export default Card;