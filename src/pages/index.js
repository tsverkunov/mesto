import './index.css'
import {Card} from '../components/Card'
import {FormValidator} from '../components/FormValidator'
import Section from '../components/Section'
import {
  aboutInput,
  addCardsButton,
  cardListSection,
  editAvatar,
  editProfileButton,
  formAddCardsElement,
  formEditAvatarElement,
  formProfileElement,
  nameInput
} from '../utils/constants'
import {PopupWithImage} from '../components/PopupWithImage'
import PopupWithForm from '../components/PopupWithForm'
import {UserInfo} from '../components/UserInfo'
import {api} from '../components/Api'
import PopupWithConfirmation from '../components/PopupWithConfirmation'

let userId
const objectCreatorForCard = data => {
  return {
    name: data.name,
    link: data.link,
    likes: data.likes,
    id: data._id,
    userId: userId,
    ownerId: data.owner._id
  }
}

Promise.all([api.getProfile(), api.getInitialCards()])
  .then(responseList => {
    const [data, cardList] = responseList
    userInfo.setUserInfo(data.name, data.about, data.avatar)
    userId = data._id
    cardList.forEach(data => {
      const card = createCard(objectCreatorForCard(data))
      cardSection.renderItem(card)
    })
  })
  .catch(console.log)

const userInfo = new UserInfo({
  name: '.profile__name',
  about: '.profile__about',
  avatar: '.profile__avatar'
})
const popupProfileElement = new PopupWithForm('#popup-profile', handleSubmitProfileForm)
const popupAddCardsElement = new PopupWithForm('#popup-add-cards', handleSubmitCardsForm)
const popupConfirm = new PopupWithConfirmation('#popup-delete-card')
const popupEditAvatarElement = new PopupWithForm('#popup-edit-avatar', handleSubmitEditAvatar)

const popupImageElement = new PopupWithImage('#popup-image', {
  figureImage: '.popup__image',
  imageCaption: '.popup__image-caption'
})

popupProfileElement.setEventListeners()
popupAddCardsElement.setEventListeners()
popupImageElement.setEventListeners()
popupConfirm.setEventListeners()
popupEditAvatarElement.setEventListeners()

const createCard = (data) => {
  const cardElement = new Card(
    data,
    '#card-template',
    () => {
      popupImageElement.open(data.name, data.link)
    },
    (id) => {
      popupConfirm.open()
      popupConfirm.addSubmitHandler(() => {
        api.deleteCard(id)
          .then(() => {
            cardElement.deleteCard()
            popupConfirm.close()
          })
          .catch(console.log)
      })
    },
    (id) => {
      if (cardElement.isLiked()) {
        api.deleteLike(id)
          .then(res => cardElement.setLikes(res.likes))
          .catch(console.log)
      } else {
        api.addLike(id)
          .then(res => cardElement.setLikes(res.likes))
          .catch(console.log)
      }
    }
  )
  return cardElement.renderCard()
}

const renderCard = (data, container) => {
  const card = createCard(data)
  container.prepend(card)
}

const cardSection = new Section({
  items: [],
  renderer: renderCard
}, cardListSection)
cardSection.renderListItem()


function fillProfileForm() {
  nameInput.value = userInfo.getUserInfo().name
  aboutInput.value = userInfo.getUserInfo().about
}

function handleSubmitProfileForm(data) {
  const {name, about} = data
  popupProfileElement.preloader(true)
  api.editProfile(name, about)
    .then(res => {
      userInfo.setUserInfo(res.name, res.about, res.avatar)
      popupProfileElement.close()
    })
    .catch(console.log)
    .finally(() => popupProfileElement.preloader(false))
}

function handleSubmitCardsForm(data) {
  const {name, link} = data
  popupAddCardsElement.preloader(true)
  api.addCard(name, link)
    .then(res => {
      const cardElement = createCard(objectCreatorForCard(res))
      cardSection.addItem(cardElement)
      popupAddCardsElement.close()
    })
    .catch(console.log)
    .finally(() => popupAddCardsElement.preloader(false))
}

function handleSubmitEditAvatar(data) {
  const link = data.link
  popupEditAvatarElement.preloader(true)
  api.editAvatar(link)
    .then(res => {
      userInfo.setUserInfo(res.name, res.about, res.avatar)
      popupEditAvatarElement.close()
    })
    .catch(console.log)
    .finally(() =>   popupEditAvatarElement.preloader(false))
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

editAvatar.addEventListener('click', () => {
  formValidators[formEditAvatarElement.getAttribute('name')].resetValidation()
  popupEditAvatarElement.open()
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
