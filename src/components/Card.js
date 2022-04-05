export class Card {
  constructor(data, cardSelector, handleCardClick, handleDeleteClick, handleLikeClick) {
    this._name = data.name
    this._link = data.link
    this._likes = data.likes
    this._cardSelector = cardSelector
    this._handleCardClick = handleCardClick
    this._handleDeleteClick = handleDeleteClick
    this._handleLikeClick = handleLikeClick
    this._id = data.id
    this._userId = data.userId
    this._ownerId = data.ownerId
    this._notAvailableImg = data._notAvailableImg
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
    this._cardImage.onerror = () => this._cardImage.src = 'https://more-show.ru/upload/not-available.png'
    this._cardImage.alt = this._name
    this._element.querySelector('.card__title').textContent = this._name
    this._setEventListeners()
    this.setLikes(this._likes)

    if (this._userId !== this._ownerId) {
      this._deleteButton.style.display = 'none'
    }

    return this._element
  }

  isLiked() {
    return this._likes.find(user => user._id === this._userId)
  }

  setLikes(newLikes) {
    this._likes = newLikes
    this._likesCountElement = this._element.querySelector('.card__likes-count')
    this._likesCountElement.textContent = this._likes.length

    if (this.isLiked()) {
      this._handleAddLike()
    } else {
      this._handleRemoveLike()
    }
  }

  _handleAddLike() {
    this._likeButton.classList.add('card__heart_active')
  }

  _handleRemoveLike() {
    this._likeButton.classList.remove('card__heart_active')
  }

  deleteCard() {
    this._element.remove()
    this._element = null
  }

  _setEventListeners() {
    this._deleteButton = this._element.querySelector('.card__delete-button')
    this._likeButton = this._element.querySelector('.card__heart')
    this._deleteButton.addEventListener('click', () => this._handleDeleteClick(this._id))
    this._likeButton.addEventListener('click', () => this._handleLikeClick(this._id))
    this._cardImage.addEventListener('click', () => this._handleCardClick())
  }
}
