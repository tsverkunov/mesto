
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');
const formElement = document.querySelector('.popup__form')
let nameInput = document.querySelector('.popup__field_type_name');
let aboutInput = document.querySelector('.popup__field_type_about');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
const editButton = document.querySelector('.profile__edit-button');

const cardTemplate = document.querySelector('#card-template').content;
const cards = document.querySelector('.cards');

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
];

const cardsArray = []

function cloneCards () {
  for (let i = 0; i < initialCards.length; i++) {
    cardsArray.push(cardTemplate.querySelector('.card').cloneNode(true));
    cardsArray[i].querySelector('.card__image').src = initialCards[i].link;
    cardsArray[i].querySelector('.card__title').textContent = initialCards[i].name;
    cards.append(cardsArray[i])
  }
}
cloneCards();


function saveInput () {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}

function formSubmitHandler (e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup();
}

function openPopup () {
  saveInput();
  popup.classList.add('popup_opened');
}

function closePopup () {
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
popup.addEventListener('click', (e) => {
  if(e.target === e.currentTarget) {
    closePopup();
  }
})
formElement.addEventListener('submit', formSubmitHandler);

saveInput();
