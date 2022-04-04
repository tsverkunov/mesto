import Popup from './Popup'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector)
    this.handleSubmitForm = handleSubmitForm
    this._form = this._popup.querySelector('.popup__form')
    this._buttonSubmit = this._form.querySelector('.popup__button-submit')
    this._text = this._buttonSubmit.textContent
  }

  _getInputValues() {
    this._inputs = [...this._form.querySelectorAll('.popup__field')]
    const values = {}
    this._inputs.forEach(input => {
      values[input.name] = input.value
    })
    return values
  }

  changeSubmitHandler(newSubmitHandler) {
    this.handleSubmitForm = newSubmitHandler
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', () => {
      this.handleSubmitForm(this._getInputValues())
    })
  }

  preloader(boolean) {
    console.log(this._text )
    if (boolean) {
      this._buttonSubmit.textContent = 'Сохранение...'
    } else {
      this._buttonSubmit.textContent = this._text
    }
  }

  close() {
    super.close()
    this._form.reset()
  }
}
