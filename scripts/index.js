import {Card} from './Card.js'
import {FormValidator} from './FormValidator.js'
import {closePopup, openPopup} from './utils.js'
import {initialCards} from './cards.js'

const popupProfile = document.querySelector('#popup-profile')
const formProfileElement = document.querySelector('#popup__form-profile')
const nameInput = document.querySelector('#popup__field_type_name-profile')
const aboutInput = document.querySelector('#popup__field_type_about-profile')
const profileName = document.querySelector('.profile__name')
const profileAbout = document.querySelector('.profile__about')
const editProfileButton = document.querySelector('.profile__edit-button')
const popupAddCards = document.querySelector('#popup-add-cards')
const formAddCardsElement = document.querySelector('#popup__form-add-cards')
const nameInputAddCards = document.querySelector('#popup__field_type_name-add-cards')
const linkInputAddCards = document.querySelector('#popup__field_type_link-add-cards')
const addCardsButton = document.querySelector('.profile__add-button')
const popupList = Array.from(document.querySelectorAll('.popup'))
const cardList = document.querySelector('.cards')

const popupImage = document.querySelector('#popup-image')
const figureImage = document.querySelector('.popup__image')
const imageCaption = document.querySelector('.popup__image-caption')

function handleCardClick () {
  figureImage.src = this._link
  figureImage.alt = this._name
  imageCaption.textContent = this._name
  openPopup(popupImage)
}

function createCard(item, templateSelector) {
  const card = new Card(item, templateSelector, handleCardClick)
  return card.renderCard()
}

initialCards.forEach(item => {
  cardList.append(createCard(item, '#card-template'))
})

function fillProfileForm() {
  nameInput.value = profileName.textContent
  aboutInput.value = profileAbout.textContent
}

function handleSubmitProfileForm(e, popup) {
  e.preventDefault()
  profileName.textContent = nameInput.value
  profileAbout.textContent = aboutInput.value
  closePopup(popup)
}

function handleSubmitCardsForm(e, popup) {
  e.preventDefault()
  if (nameInputAddCards.value && linkInputAddCards.value) {
    cardList.prepend(createCard({
      name: nameInputAddCards.value,
      link: linkInputAddCards.value
    }, '#card-template'))
  }
  formAddCardsElement.reset()
  closePopup(popup)
}

editProfileButton.addEventListener('click', () => {
  fillProfileForm()
  formValidators[ formProfileElement.getAttribute('name') ].resetValidation()
  openPopup(popupProfile)
})
addCardsButton.addEventListener('click', () => {
  formValidators[ formAddCardsElement.getAttribute('name') ].resetValidation()
  openPopup(popupAddCards)
})
formProfileElement.addEventListener('submit', (e) => handleSubmitProfileForm(e, popupProfile))
formAddCardsElement.addEventListener('submit', (e) => handleSubmitCardsForm(e, popupAddCards))

function checkToClosePopup(popup) {
  popup.addEventListener('click', e => {
    if (e.target.classList.contains('popup_opened') || e.target.classList.contains('popup__close-button')) {
      closePopup(popup)
    }
  })
}

popupList.forEach(popup => {
  checkToClosePopup(popup)
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


