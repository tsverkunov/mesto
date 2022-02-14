

const checkFieldValidity = (form, field, error) => {
  const errorMessage = form.querySelector(`#error-${field.id}`)
  if (field.validity.valid) {
    errorMessage.textContent = ''
    field.classList.remove(error)
  } else {
    errorMessage.textContent = field.validationMessage
    field.classList.add(error)
  }
}

const disabledButton = (button) => {
  button.setAttribute('disabled', '')
}

const enabledButton = (button) => {
  button.removeAttribute('disabled')
}

const checkButtonValidity = (form, button) => {
  form.checkValidity() ? enabledButton(button) : disabledButton(button)
}

const enableValidation = (config) => {
  const forms = Array.from(document.querySelectorAll(config.form))
  forms.forEach(form => {
    form.addEventListener('submit', e => e.preventDefault())
    const fields = Array.from(form.querySelectorAll(config.field))
    const button = form.querySelector(config.button)
    checkButtonValidity(form, button)
    fields.forEach(field => {
      checkFieldValidity(form, field, config.error)
      field.addEventListener('input', () => {
        checkFieldValidity(form, field, config.error)
        checkButtonValidity(form, button)
      })
    })
  })
}

enableValidation({
  form: '.popup__form',
  field: '.popup__field',
  button: '.popup__button-submit',
  error: 'popup__field_error'
})
