import './index.css'
import {Card} from '../components/Card'
import {FormValidator} from '../components/FormValidator'
import Section from '../components/Section'
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
  popupImage,
  popupProfile,
  profileAbout,
  profileName
} from '../utils/constants'
import {PopupWithImage} from '../components/PopupWithImage'
import PopupWithForm from '../components/PopupWithForm'

const createCard = (data) => {
  const cardElement = new Card(data, '#card-template', () => {
    popupImageElement.open(data.name, data.link)
  })
  return cardElement.renderCard()
}

const renderCard = (data, container) => {
  const card = createCard(data)
  container.prepend(card)
}

const cardSection = new Section({
  items: initialCards,
  renderer: renderCard
}, cardListSection)
cardSection.renderItems()

function fillProfileForm() {
  nameInput.value = profileName.textContent
  aboutInput.value = profileAbout.textContent
}


function handleSubmitProfileForm() {
  profileName.textContent = nameInput.value
  profileAbout.textContent = aboutInput.value

  popupProfileElement.close()
}

function handleSubmitCardsForm(data) {
    const cardElement = createCard({
      name: data.name,
      link: data.about
    })
    cardSection.addItem(cardElement)
  popupAddCardsElement.close()
}

editProfileButton.addEventListener('click', () => {
  fillProfileForm()
  formValidators[formProfileElement.getAttribute('name')].resetValidation()
  popupProfileElement.open()
})
addCardsButton.addEventListener('click', () => {
  formValidators[formAddCardsElement.getAttribute('name')].resetValidation()
  popupAddCardsElement.open()
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


//
const popupProfileElement = new PopupWithForm(popupProfile, handleSubmitProfileForm)
const popupAddCardsElement = new PopupWithForm(popupAddCards, handleSubmitCardsForm)
const popupImageElement = new PopupWithImage(popupImage)

popupProfileElement.setEventListeners()
popupAddCardsElement.setEventListeners()
popupImageElement.setEventListeners()
