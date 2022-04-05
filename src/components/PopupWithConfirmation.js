import Popup from './Popup'

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._form = this._popup.querySelector('.popup__form')
  }

  addSubmitHandler(handleSubmitForm) {
    this.handleSubmitForm = handleSubmitForm
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', () => {
      this.handleSubmitForm()
    })
  }
}
