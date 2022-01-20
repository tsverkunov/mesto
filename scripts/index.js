
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');
const formElement = document.querySelector('.popup__form')
let nameInput = document.querySelector('.popup__field_type_name');
let aboutInput = document.querySelector('.popup__field_type_about');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
const editButton = document.querySelector('.profile__edit-button');

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
