
export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector
  }
  _handleEscClose (e) {
    if (e.key === 'Escape') {
      const popupOpened = document.querySelector('.popup_opened')
      this.close(popupOpened)
    }
  }
  open () {
    this._popup.classList.add('popup_opened')
    document.addEventListener('keydown', this._handleEscClose.bind(this))
  }
  close () {
    this._popup.classList.remove('popup_opened')
    document.removeEventListener('keydown', this._handleEscClose.bind(this))
  }
  setEventListeners () {
    this._popup.addEventListener('click', e => {
      if (e.target.classList.contains('popup_opened') || e.target.classList.contains('popup__close-button')) {
        this.close()
      }
    })
  }
}
