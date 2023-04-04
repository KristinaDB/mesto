class Card {
    constructor(data, templateSelector, handleOpenPopup) {
        this._templateSelector = templateSelector;
        this._data = data;
        this._template = document.querySelector(this._templateSelector);
        this._title = data.name;
        this._image = data.link;
       this._handleOpenPopup = handleOpenPopup;
    }

    _getTemplate() {
      const cardElement = this._template.content
          .querySelector(".photo-card")
          .cloneNode(true);
    
        return cardElement;
      }

    generateCard() {
        this._element = this._getTemplate();
        this._imageCard = this._element.querySelector('.photo-card__image');
        this._buttonLike = this._element.querySelector('.photo-card__btn-like');
        this._buttonDelete = this._element.querySelector('.photo-card__delete'); 
        this._imageCard.src = this._image;
        this._element.querySelector('.photo-card__title').textContent = this._title;
        this._imageCard.alt = this._title;
        this._setEventListeners()

        return this._element;
    }

    _toggleLike(){
        this._buttonLike.classList.toggle('photo-card__btn-like_active');
        
    }

    _deleteCard(){
        this._element.remove();
        this._element = null;
    }

    _setEventListeners() {
        this._buttonDelete.addEventListener('click', () => {
            this._deleteCard();
        })

        this._buttonLike.addEventListener('click', () => {this._toggleLike();
        })

        this._imageCard.addEventListener('click', () => {
            this._handleOpenPopup(this._data);

        });
    }

}
   
export default Card;