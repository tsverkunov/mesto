import Popup from './Popup'

export class PopupWithImage extends Popup {
  constructor(popupSelector, {figureImage, imageCaption}) {
    super(popupSelector)
    this._figureImage = this._popup.querySelector(figureImage)
    this._imageCaption = this._popup.querySelector(imageCaption)
  }

  open(name, link) {
    super.open()
    this._figureImage.src = link
    this._figureImage.alt = name
    this._imageCaption.textContent = name
  }
}
