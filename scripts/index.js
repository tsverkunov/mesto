const popupProfile = document.querySelector('#popup-profile')
const closeButton = document.querySelector('#popup__close-button-profile')
const formElement = document.querySelector('#popup__form-profile')
const nameInput = document.querySelector('#popup__field_type_name-profile')
const aboutInput = document.querySelector('#popup__field_type_about-profile')
const profileName = document.querySelector('.profile__name')
const profileAbout = document.querySelector('.profile__about')
const editButton = document.querySelector('.profile__edit-button')

const popupAddCards = document.querySelector('#popup-add-cards')
const closeButtonAddCards = document.querySelector('#popup__close-button-add-cards')
const formElementAddCards = document.querySelector('#popup__form-add-cards')
const nameInputAddCards = document.querySelector('#popup__field_type_name-add-cards')
const linkInputAddCards = document.querySelector('#popup__field_type_link-add-cards')
const addButtonAddCards = document.querySelector('.profile__add-button')

const closeButtonImage = document.querySelector('#popup__close-button-image')
const popupImage = document.querySelector('#popup-image')
const figureImage = document.querySelector('.popup__image')
const imageCaption = document.querySelector('.popup__image-caption')



const cardTemplate = document.querySelector('#card-template').content
const cards = document.querySelector('.cards')

function cloneCard(item) {
  const newCard = cardTemplate.querySelector('.card').cloneNode(true)
  const cardImage = newCard.querySelector('.card__image')
  cardImage.src = item.link
  cardImage.alt = item.name
  newCard.querySelector('.card__title').textContent = item.name
  newCard.querySelector('.card__delete-button').addEventListener('click', () => newCard.remove())
  // const likeButton = newCard.querySelector('.card__heart')
  // likeButton.addEventListener('click', () => likeButton.classList.toggle('card__heart_active'))
  cardImage.addEventListener('click', () => {
      figureImage.src = item.link
      figureImage.alt = item.name
      imageCaption.textContent = item.name
      openPopup(popupImage)
    })
  return newCard
}

initialCards.forEach((card) => cards.append(cloneCard(card)))

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
    cards.prepend(cloneCard({
      name: nameInputAddCards.value,
      link: linkInputAddCards.value
    }))
  }
  formElementAddCards.reset()
  closePopup(popup)
}

function openPopup(popup) {
  popup.classList.add('popup_opened')
}

function closePopup(popup) {
  popup.classList.remove('popup_opened')
}

editButton.addEventListener('click', () => {
  fillProfileForm()
  openPopup(popupProfile)
})
addButtonAddCards.addEventListener('click', () => openPopup(popupAddCards))
closeButton.addEventListener('click', () => closePopup(popupProfile))
closeButtonAddCards.addEventListener('click', () => closePopup(popupAddCards))
formElement.addEventListener('submit', (e) => handleSubmitProfileForm(e, popupProfile))
formElementAddCards.addEventListener('submit', (e) => handleSubmitCardsForm(e, popupAddCards))
closeButtonImage.addEventListener('click', () => closePopup(popupImage))
cards.addEventListener('click', (e) => {
  if (e.target.classList.contains('card__heart')) {
    e.target.classList.toggle('card__heart_active')
  }
})

function closePopupWithoutButton(popup) {
  popup.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      closePopup(popup)
    }
  })
}

closePopupWithoutButton(popupProfile)
closePopupWithoutButton(popupAddCards)
closePopupWithoutButton(popupImage)
