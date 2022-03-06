export class FormValidator {
  constructor(data, form) {
    this._form = form
    this._field = data.field
    this._button = data.button
    this._error = data.error
  }

  _checkFieldValidity(form, field, error) {
    const errorMessage = form.querySelector(`#error-${field.id}`)
    if (field.validity.valid) {
      errorMessage.textContent = ''
      field.classList.remove(error)
    } else {
      errorMessage.textContent = field.validationMessage
      field.classList.add(error)
    }
  }

  _disabledButton(button) {
    button.setAttribute('disabled', '')
  }

  _enabledButton(button) {
    button.removeAttribute('disabled')
  }

  _checkButtonValidity(form, button) {
    form.checkValidity() ? this._enabledButton(button) : this._disabledButton(button)
  }

  enableValidation() {
    this._form.addEventListener('submit', e => e.preventDefault())
    const fields = Array.from(this._form.querySelectorAll(this._field))
    const button = this._form.querySelector(this._button)
    this._checkButtonValidity(this._form, button)
    fields.forEach(field => {
      this._checkFieldValidity(this._form, field, this._error)
      field.addEventListener('input', () => {
        this._checkFieldValidity(this._form, field, this._error)
        this._checkButtonValidity(this._form, button)
      })
    })
  }
}
