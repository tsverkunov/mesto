const popup = document.querySelector('.popup')
const closeButton = document.querySelector('.popup__close-button')
const formElement = document.querySelector('.popup__form')
let nameInput = document.querySelector('.popup__field_type_name')
let aboutInput = document.querySelector('.popup__field_type_about')
let profileName = document.querySelector('.profile__name')
let profileAbout = document.querySelector('.profile__about')
const editButton = document.querySelector('.profile__edit-button')

const popupAddCards = document.querySelector('#popup-add-cards')
const closeButtonAddCards = document.querySelector('#popup__close-button-add-cards')
const formElementAddCards = document.querySelector('#popup__form-add-cards')
let nameInputAddCards = document.querySelector('#popup__field_type_name-add-cards')
let linkInputAddCards = document.querySelector('#popup__field_type_link-add-cards')
const addButtonAddCards = document.querySelector('.profile__add-button')

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]

const cardTemplate = document.querySelector('#card-template').content
const cards = document.querySelector('.cards')

function cloneCard(item) {
  const newCard = cardTemplate.querySelector('.card').cloneNode(true)
  newCard.querySelector('.card__image').src = item.link
  newCard.querySelector('.card__image').alt = item.name
  newCard.querySelector('.card__title').textContent = item.name
  newCard.querySelector('.card__delete-button').addEventListener('click', () => newCard.remove())
  const likeButton = newCard.querySelector('.card__heart')
  likeButton.addEventListener('click', () => likeButton.classList.toggle('card__heart_active'))
  return newCard
}

initialCards.forEach((card) => cards.append(cloneCard(card)))

function saveInput() {
  nameInput.value = profileName.textContent
  aboutInput.value = profileAbout.textContent
}

function formSubmitHandlerProfile(e, popup) {
  e.preventDefault()
  profileName.textContent = nameInput.value
  profileAbout.textContent = aboutInput.value
  closePopup(popup)
}

function formSubmitHandlerCards(e, popup) {
  e.preventDefault()
  if (nameInputAddCards.value && linkInputAddCards.value) {
    cards.prepend(cloneCard({
      name: nameInputAddCards.value,
      link: linkInputAddCards.value
    }))
    closePopup(popup)
    nameInputAddCards.value = ''
    linkInputAddCards.value = ''
  }
  closePopup(popup)
}

function openPopup(popup) {
  saveInput()
  popup.classList.add('popup_opened')
}

function closePopup(popup) {
  popup.classList.remove('popup_opened')
}

editButton.addEventListener('click', () => openPopup(popup))
addButtonAddCards.addEventListener('click', () => openPopup(popupAddCards))
closeButton.addEventListener('click', () => closePopup(popup))
closeButtonAddCards.addEventListener('click', () => closePopup(popupAddCards))
formElement.addEventListener('submit', () => formSubmitHandlerProfile(event, popup))
formElementAddCards.addEventListener('submit', () => formSubmitHandlerCards(event, popupAddCards))

function closePopupWithoutButton(popup) {
  popup.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      closePopup(popup)
    }
  })
}

closePopupWithoutButton(popup)
closePopupWithoutButton(popupAddCards)
saveInput()
