
export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._initialCards = items
    this._container = containerSelector
    this._renderer = renderer
  }
  renderItems() {
    this._initialCards.forEach(item => {
      this._renderer(item)
    })
  }
  setItem(element) {
    this._container.append(element)
  }
  addItem(element) {
    this._container.prepend(element)
  }
}
