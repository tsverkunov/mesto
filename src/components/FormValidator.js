export class FormValidator {
  constructor(data, form) {
    this._form = form
    this._input = data.input
    this._buttonSelector = data.button
    this._error = data.error
    this._inputList = Array.from(this._form.querySelectorAll(this._input))
    this._button = this._form.querySelector(this._buttonSelector)
  }

  _showError(input) {
    const errorMessage = this._form.querySelector(`#error-${input.id}`)
    errorMessage.textContent = input.validationMessage
    input.classList.add(this._error)
  }

  _hideError(input) {
    const errorMessage = this._form.querySelector(`#error-${input.id}`)
    errorMessage.textContent = ''
    input.classList.remove(this._error)
  }

  _checkFieldValidity(input) {
    input.validity.valid ? this._hideError(input) : this._showError(input)
  }

  _disabledButton() {
    this._button.setAttribute('disabled', '')
  }

  _enabledButton() {
    this._button.removeAttribute('disabled')
  }

  _checkButtonValidity() {
    this._form.checkValidity() ? this._enabledButton() : this._disabledButton()
  }

  resetValidation() {
    this._checkButtonValidity()
    this._inputList.forEach(input => {
      this._hideError(input)
    })
  }

  enableValidation() {
    this._form.addEventListener('submit', e => e.preventDefault())
    this._checkButtonValidity()
    this._inputList.forEach(input => {
      input.addEventListener('input', () => {
        this._checkFieldValidity(input)
        this._checkButtonValidity()
      })
    })
  }
}
