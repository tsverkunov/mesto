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
  nameInput,
  popupAddCards,
  popupImage,
  popupProfile
} from '../utils/constants'
import {PopupWithImage} from '../components/PopupWithImage'
import PopupWithForm from '../components/PopupWithForm'
import {UserInfo} from '../components/UserInfo'

const userInfo = new UserInfo({name: '.profile__name', about: '.profile__about'})
const popupProfileElement = new PopupWithForm(popupProfile, handleSubmitProfileForm)
const popupAddCardsElement = new PopupWithForm(popupAddCards, handleSubmitCardsForm)
const popupImageElement = new PopupWithImage(popupImage)

popupProfileElement.setEventListeners()
popupAddCardsElement.setEventListeners()
popupImageElement.setEventListeners()

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
  nameInput.value = userInfo.getUserInfo().name
  aboutInput.value = userInfo.getUserInfo().about
}


function handleSubmitProfileForm() {
  userInfo.setUserInfo({
    name: nameInput.value,
    about: aboutInput.value
  })
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
