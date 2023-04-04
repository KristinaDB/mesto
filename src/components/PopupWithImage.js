import Popup from "./Popup.js";



export default class PopupWithImage extends Popup {
constructor(popupSelector){
super (popupSelector);
this._image = this._popup.querySelector('.popup__container-view');
this._title = this._popup.querySelector('.popup__container-title');


}

handleCardClick (item) {
this._image.src = item.link;
this._image.alt =  item.name;
this._title.textContent = item.name; 
super.open()
}

}