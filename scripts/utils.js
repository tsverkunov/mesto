export function openPopup(popup) {
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', closePopupWithEsc)
}

export function closePopup(popup) {
  popup.classList.remove('popup_opened')
  document.removeEventListener('keydown', closePopupWithEsc)
}

function closePopupWithEsc(e) {
  if (e.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened')
    closePopup(popupOpened)
  }
}
