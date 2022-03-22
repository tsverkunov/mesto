import {popupImage} from './constants'
import {PopupWithImage} from '../components/PopupWithImage'

export function handleCardClick (data) {
  const popupElement = new PopupWithImage(popupImage)
  popupElement.open(data.name, data.link)
}

