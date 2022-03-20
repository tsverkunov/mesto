import Popup from "./Popup";
import {figureImage, imageCaption} from "../utils/constants";

export default class PopupWithImage extends Popup{
  open () {
    figureImage.src = this._link
    figureImage.alt = this._name
    imageCaption.textContent = this._name
  }
}
// этот класс не закончен
