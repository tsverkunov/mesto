import Popup from './Popup'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector)
    this.handleSubmitForm = handleSubmitForm
    this._form = this._popup.querySelector('.popup__form')
    this._inputs = [...this._form.querySelectorAll('.popup__field')]
  }

  _getInputValues() {
    const values = {}
    this._inputs.forEach(input => {
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
