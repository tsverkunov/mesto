import './index.css'
import {Card} from '../components/Card'
import {FormValidator} from '../components/FormValidator'
import Section from '../components/Section'
import Popup from '../components/Popup'
import {handleCardClick} from '../utils/utils.js'
import {initialCards} from '../utils/cards.js'
import {
  aboutInput,
  addCardsButton,
  cardListSection,
  editProfileButton,
  formAddCardsElement,
  formProfileElement,
  linkInputAddCards,
  nameInput,
  nameInputAddCards,
  popupAddCards,
  popupList,
  popupProfile,
  profileAbout,
  profileName
} from '../utils/constants'


const cardList = new Section({
  items: initialCards,
  renderer: cardItem => {
    const card = new Card(cardItem, '#card-template', handleCardClick)
    const cardElement = card.renderCard()
    cardList.setItem(cardElement)
  }
}, cardListSection)
cardList.renderItems()

function fillProfileForm() {
  nameInput.value = profileName.textContent
  aboutInput.value = profileAbout.textContent
}

function handleSubmitProfileForm(e, popup) {
  e.preventDefault()
  profileName.textContent = nameInput.value
  profileAbout.textContent = aboutInput.value
  const popupElement = new Popup(popup)
  popupElement.close()
}

function handleSubmitCardsForm(e, popup) {
  e.preventDefault()
  if (nameInputAddCards.value && linkInputAddCards.value) {
    const card = new Card({
      name: nameInputAddCards.value,
      link: linkInputAddCards.value
    }, '#card-template', handleCardClick)
    const cardElement = card.renderCard()
    cardList.addItem(cardElement)
  }
  formAddCardsElement.reset()
  const popupElement = new Popup(popup)
  popupElement.close()
}

editProfileButton.addEventListener('click', () => {
  fillProfileForm()
  formValidators[formProfileElement.getAttribute('name')].resetValidation()
  const popupElement = new Popup(popupProfile)
  popupElement.open()
})
addCardsButton.addEventListener('click', () => {
  formValidators[formAddCardsElement.getAttribute('name')].resetValidation()
  const popupElement = new Popup(popupAddCards)
  popupElement.open()
})
formProfileElement.addEventListener('submit', (e) => handleSubmitProfileForm(e, popupProfile))
formAddCardsElement.addEventListener('submit', (e) => handleSubmitCardsForm(e, popupAddCards))

popupList.forEach(popup => {
  const popupElement = new Popup(popup)
  popupElement.setEventListeners()
})

fillProfileForm()

const data = {
  input: '.popup__field',
  button: '.popup__button-submit',
  error: 'popup__field_error'
}

const formValidators = {}
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach(formElement => {
    const validator = new FormValidator(data, formElement)
    const formName = formElement.getAttribute('name')
    formValidators[formName] = validator
    validator.enableValidation()
  })
}

enableValidation({
  formSelector: '.popup__form'
})


