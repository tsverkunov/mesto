import Popup from './Popup'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector)
    this.handleSubmitForm = handleSubmitForm
    this._form = this._popup.querySelector('.popup__form')
  }

  _getInputValues() {
    const inputs = [...this._form.querySelectorAll('.popup__field')]
    const values ={}
    inputs.forEach(input => {
      values[input.name] = input.value
    })
    return values
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', () => {
      this.handleSubmitForm(this._getInputValues())
    })
  }

  close() {
    super.close()
    this._form.reset()
  }
}
