import Popup from './Popup'
import {figureImage, imageCaption} from '../utils/constants'

export class PopupWithImage extends Popup{
  open (name, link) {
    super.open()
    figureImage.src = link
    figureImage.alt = name
    imageCaption.textContent = name
  }
}
