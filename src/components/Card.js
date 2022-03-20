
export class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name
    this._link = data.link
    this._cardSelector = cardSelector
    this._handleCardClick = handleCardClick
  }
  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true)
  }
  renderCard() {
    this._element = this._getTemplate()
    this._cardImage = this._element.querySelector('.card__image')
    this._cardImage.src = this._link
    this._cardImage.alt = this._name
    this._element.querySelector('.card__title').textContent = this._name
    this._setEventListeners()

    return this._element
  }
  _setEventListeners() {
    this._likeButton = this._element.querySelector('.card__heart')
    this._element.querySelector('.card__delete-button')
      .addEventListener('click', () => this._element.remove())
    this._likeButton.addEventListener('click', () => this._likeButton.classList.toggle('card__heart_active'))
    this._cardImage.addEventListener('click', () => this._handleCardClick())
  }
}
