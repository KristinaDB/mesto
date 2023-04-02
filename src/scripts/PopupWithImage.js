import Popup from "./Popup.js";
import { photoLink } from "../index.js";
import { photoTitle } from "../index.js";



export default class PopupWithImage extends Popup {
constructor(link, name, popupSelector){
super (popupSelector);
this._link = link;
this._image = name;

}

handleCardClick () {
super.setEventListeners();
photoLink.src = this._link;
photoLink.alt = this._image;
photoTitle.textContent = this._image;
super.open()
}

}
