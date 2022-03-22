export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._initialCards = items
    this._container = containerSelector
    this._renderer = renderer
  }

  renderItems() {
    this._initialCards.forEach(item => {
      this._renderer(item, this._container)
    })
  }

  addItem(element) {
    this._container.prepend(element)
  }
}
