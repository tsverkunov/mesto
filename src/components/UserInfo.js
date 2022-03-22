import {profileAbout, profileName} from '../utils/constants'

export class UserInfo {
  constructor({name, about}) {
    this._name = document.querySelector(name)
    this._about = document.querySelector(about)
  }

  getUserInfo = () => {
    return {
      name: this._name.textContent,
      about: this._about.textContent
    }
  }

  setUserInfo({name, about}) {
    profileName.textContent = name
    profileAbout.textContent = about
  }
}
