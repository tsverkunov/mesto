import {figureImage, imageCaption, popupImage} from "./constants";
import Popup from "../components/Popup";

export function handleCardClick () {
  figureImage.src = this._link
  figureImage.alt = this._name
  imageCaption.textContent = this._name
  const popupElement = new Popup(popupImage)
  popupElement.open()
}
