// import {Card, cards} from './Card'


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

const popupImage = document.querySelector('#popup-image')
const figureImage = document.querySelector('.popup__image')
const imageCaption = document.querySelector('.popup__image-caption')

const buttonSubmit = document.querySelector('#popup__button-submit-add-cards')
const popups = Array.from(document.querySelectorAll('.popup'))

const cards = document.querySelector('.cards')


// class Card {
//   constructor(data, cardSelector) {
//     this._name = data.name
//     this._link = data.link
//     this._cardSelector = cardSelector
//   }
//
//   _addCardData () {
//     figureImage.src = this._link
//     figureImage.alt = this._name
//     imageCaption.textContent = this._name
//   }
//
//   _getTemplate() {
//     return  document
//       .querySelector(this._cardSelector)
//       .content
//       .querySelector('.card')
//       .cloneNode(true)
//   }
//
//   renderCard() {
//     this._element = this._getTemplate()
//     this._cardImage = this._element.querySelector('.card__image')
//     this._cardImage.src = this._link
//     this._cardImage.alt = this._name
//     this._element.querySelector('.card__title').textContent = this._name
//     this._setEventListeners()
//
//     return this._element
//   }
//
//   _setEventListeners() {
//     this._likeButton = this._element.querySelector('.card__heart')
//     this._element.querySelector('.card__delete-button')
//       .addEventListener('click', () => this._element.remove())
//     this._likeButton.addEventListener('click', () => this._likeButton.classList.toggle('card__heart_active'))
//     this._cardImage.addEventListener('click', () => {
//       this._addCardData()
//       openPopup(popupImage)
//     })
//   }
// }

class Card {
  constructor(data, cardSelector) {
    this._name = data.name
    this._link = data.link
    this._cardSelector = cardSelector
  }
  _addCardData () {
    figureImage.src = this._link
    figureImage.alt = this._name
    imageCaption.textContent = this._name
  }

  _fillProfileForm() {
    nameInput.value = profileName.textContent
    aboutInput.value = profileAbout.textContent
  }
  _getTemplate() {
    return  document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true)
  }
  renderCard() {
    this._element = this._getTemplate()
    this._cardImage = this._element.querySelector('.card__image')

    this._cardImage.src = this._link
    this._cardImage.alt = this._name
    this._element.querySelector('.card__title').textContent = this._name
    this._setEventListeners()
    this._fillProfileForm()

    return this._element
  }
  _setEventListeners() {
    this._likeButton = this._element.querySelector('.card__heart')

    this._element.querySelector('.card__delete-button')
      .addEventListener('click', () => this._element.remove())

    this._likeButton.addEventListener('click', () => this._likeButton.classList.toggle('card__heart_active'))
    this._cardImage.addEventListener('click', () => {
      this._addCardData()
      this._openPopup(popupImage)
    })

    editButton.addEventListener('click', () => {
      this._fillProfileForm()
      this._openPopup(popupProfile)
    })
    addButtonAddCards.addEventListener('click', () => this._openPopup(popupAddCards))
    formElement.addEventListener('submit', (e) => this._handleSubmitProfileForm(e, popupProfile))
    formElementAddCards.addEventListener('submit', (e) => this._handleSubmitCardsForm(e, popupAddCards))

    popups.forEach(popup => {
      this._checkToClosePopup(popup)
    })
  }

  _closePopupWithEsc(e) {
    if (e.key === 'Escape') {
      const popupOpened = document.querySelector('.popup_opened')
      this._closePopup(popupOpened)
    }
  }

  _openPopup(popup) {
    popup.classList.add('popup_opened')
    document.addEventListener('keydown', this._closePopupWithEsc)
  }

  _closePopup(popup) {
    popup.classList.remove('popup_opened')
    document.removeEventListener('keydown', this._closePopupWithEsc)
  }

  _handleSubmitProfileForm(e, popup) {
    e.preventDefault()
    profileName.textContent = nameInput.value
    profileAbout.textContent = aboutInput.value
    this._closePopup(popup)
  }

  _handleSubmitCardsForm(e, popup) {
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
    this._closePopup(popup)
  }

  _checkToClosePopup(popup) {
    popup.addEventListener('click', e => {
      if (e.target.classList.contains('popup_opened') || e.target.classList.contains('popup__close-button')) {
        this._closePopup(popup)
      }
    })
  }
}


initialCards.forEach(item => {
  const card = new Card(item, '#card-template')
  const cardElement = card.renderCard()
  cards.append(cardElement)
})

// function addCardData (item) {
//   figureImage.src = item.link
//   figureImage.alt = item.name
//   imageCaption.textContent = item.name
// }
//
// function cloneCard(item) {
//   const newCard = cardTemplate.querySelector('.card').cloneNode(true)
//   const cardImage = newCard.querySelector('.card__image')
//   const likeButton = newCard.querySelector('.card__heart')
//   cardImage.src = item.link
//   cardImage.alt = item.name
//   newCard.querySelector('.card__title').textContent = item.name
//   newCard.querySelector('.card__delete-button').addEventListener('click', () => newCard.remove())
//   likeButton.addEventListener('click', () => likeButton.classList.toggle('card__heart_active'))
//   cardImage.addEventListener('click', () => {
//     addCardData(item)
//     openPopup(popupImage)
//   })
//   return newCard
// }
//
// initialCards.forEach((card) => cards.append(cloneCard(card)))

// function fillProfileForm() {
//   nameInput.value = profileName.textContent
//   aboutInput.value = profileAbout.textContent
// }

// function closePopupWithEsc(e) {
//   if (e.key === 'Escape') {
//     const popupOpened = document.querySelector('.popup_opened')
//     closePopup(popupOpened)
//   }
// }
//
// function openPopup(popup) {
//   popup.classList.add('popup_opened')
//   document.addEventListener('keydown', closePopupWithEsc)
// }
//
// function closePopup(popup) {
//   popup.classList.remove('popup_opened')
//   document.removeEventListener('keydown', closePopupWithEsc)
// }

// function handleSubmitProfileForm(e, popup) {
//   e.preventDefault()
//   profileName.textContent = nameInput.value
//   profileAbout.textContent = aboutInput.value
//   closePopup(popup)
// }
//
// function handleSubmitCardsForm(e, popup) {
//   e.preventDefault()
//   if (nameInputAddCards.value && linkInputAddCards.value) {
//     const card = new Card({
//       name: nameInputAddCards.value,
//       link: linkInputAddCards.value
//     }, '#card-template')
//     const cardElement = card.renderCard()
//     cards.prepend(cardElement)
//   }
//   formElementAddCards.reset()
//   buttonSubmit.setAttribute('disabled', '')
//   closePopup(popup)
// }

// editButton.addEventListener('click', () => {
//   fillProfileForm()
//   openPopup(popupProfile)
// })
// addButtonAddCards.addEventListener('click', () => openPopup(popupAddCards))
// formElement.addEventListener('submit', (e) => handleSubmitProfileForm(e, popupProfile))
// formElementAddCards.addEventListener('submit', (e) => handleSubmitCardsForm(e, popupAddCards))

// function checkToClosePopup(popup) {
//   popup.addEventListener('click', e => {
//     if (e.target.classList.contains('popup_opened') || e.target.classList.contains('popup__close-button')) {
//       closePopup(popup)
//     }
//   })
// }

// popups.forEach(popup => {
//   checkToClosePopup(popup)
// })

// fillProfileForm()
