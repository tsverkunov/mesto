import {FormValidator} from './FormValidator.js'

const data = {
  field: '.popup__field',
  button: '.popup__button-submit',
  error: 'popup__field_error'
}
const forms = Array.from(document.querySelectorAll('.popup__form'))
forms.forEach(item => {
  const form = new FormValidator(data, item)
  form.enableValidation()
})
