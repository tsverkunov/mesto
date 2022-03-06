import {Card} from './Card.js'
import {closePopup, openPopup} from './utils.js'
import {initialCards} from './cards.js'

const popupProfile = document.querySelector('#popup-profile')
const formElement = document.querySelector('#popup__form-profile')
const nameInput = document.querySelector('#popup__field_type_name-profile')
const aboutInput = document.querySelector('#popup__field_type_about-profile')
const profileName = document.querySelector('.profile__name')
const profileAbout = document.querySelector('.profile__about')
const editButton = document.querySelector('.profile__edit-button')
const popupAddCards = document.querySelector('#popup-add-cards')
const formElementAddCards = document.querySelector('#popup__form-add-cards')
const nameInputAddCards = document.querySelector('#popup__field_type_name-add-cards')
const linkInputAddCards = document.querySelector('#popup__field_type_link-add-cards')
const addButtonAddCards = document.querySelector('.profile__add-button')
const buttonSubmit = document.querySelector('#popup__button-submit-add-cards')
const popups = Array.from(document.querySelectorAll('.popup'))
const cards = document.querySelector('.cards')

initialCards.forEach(item => {
  const card = new Card(item, '#card-template')
  const cardElement = card.renderCard()
  cards.append(cardElement)
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
    const card = new Card({
      name: nameInputAddCards.value,
      link: linkInputAddCards.value
    }, '#card-template')
    const cardElement = card.renderCard()
    cards.prepend(cardElement)
  }
  formElementAddCards.reset()
  buttonSubmit.setAttribute('disabled', '')
  closePopup(popup)
}

editButton.addEventListener('click', () => {
  fillProfileForm()
  openPopup(popupProfile)
})
addButtonAddCards.addEventListener('click', () => openPopup(popupAddCards))
formElement.addEventListener('submit', (e) => handleSubmitProfileForm(e, popupProfile))
formElementAddCards.addEventListener('submit', (e) => handleSubmitCardsForm(e, popupAddCards))

function checkToClosePopup(popup) {
  popup.addEventListener('click', e => {
    if (e.target.classList.contains('popup_opened') || e.target.classList.contains('popup__close-button')) {
      closePopup(popup)
    }
  })
}

popups.forEach(popup => {
  checkToClosePopup(popup)
})

fillProfileForm()
