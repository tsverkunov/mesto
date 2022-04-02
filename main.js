(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._cardSelector=n,this._handleCardClick=r}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"renderCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".card__image"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._element.querySelector(".card__title").textContent=this._name,this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton=this._element.querySelector(".card__heart"),this._element.querySelector(".card__delete-button").addEventListener("click",(function(){return e._element.remove()})),this._likeButton.addEventListener("click",(function(){return e._likeButton.classList.toggle("card__heart_active")})),this._cardImage.addEventListener("click",(function(){return e._handleCardClick()}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._input=t.input,this._buttonSelector=t.button,this._error=t.error,this._inputList=Array.from(this._form.querySelectorAll(this._input)),this._button=this._form.querySelector(this._buttonSelector)}var t,r;return t=e,(r=[{key:"_showError",value:function(e){this._form.querySelector("#error-".concat(e.id)).textContent=e.validationMessage,e.classList.add(this._error)}},{key:"_hideError",value:function(e){this._form.querySelector("#error-".concat(e.id)).textContent="",e.classList.remove(this._error)}},{key:"_checkFieldValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e)}},{key:"_disabledButton",value:function(){this._button.setAttribute("disabled","")}},{key:"_enabledButton",value:function(){this._button.removeAttribute("disabled")}},{key:"_checkButtonValidity",value:function(){this._form.checkValidity()?this._enabledButton():this._disabledButton()}},{key:"resetValidation",value:function(){var e=this;this._checkButtonValidity(),this._inputList.forEach((function(t){e._hideError(t)}))}},{key:"enableValidation",value:function(){var e=this;this._form.addEventListener("submit",(function(e){return e.preventDefault()})),this._checkButtonValidity(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkFieldValidity(t),e._checkButtonValidity()}))}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialCards=r,this._container=n,this._renderer=o}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._initialCards.forEach((function(t){e._renderer(t,e._container)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),a=(document.querySelector("#popup-image"),document.querySelector(".popup__image"),document.querySelector(".popup__image-caption"),document.querySelector("#popup-profile"),document.querySelector("#popup__form-profile")),u=document.querySelector("#popup__field_type_name-profile"),c=document.querySelector("#popup__field_type_about-profile"),l=(document.querySelector(".profile__name"),document.querySelector(".profile__about"),document.querySelector(".profile__edit-button")),s=(document.querySelector("#popup-add-cards"),document.querySelector("#popup__form-add-cards")),p=document.querySelector(".profile__add-button"),f=document.querySelector(".cards");function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){if("Escape"===e.key){var t=document.querySelector(".popup_opened");this.close(t)}}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close-button"))&&e.close()}))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function g(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function a(e,t){var n,r=t.figureImage,o=t.imageCaption;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._figureImage=n._popup.querySelector(r),n._imageCaption=n._popup.querySelector(o),n}return t=a,(n=[{key:"open",value:function(e,t){m(k(a.prototype),"open",this).call(this),this._figureImage.src=t,this._figureImage.alt=e,this._imageCaption.textContent=e}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(y);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}function P(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function a(e,t){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e)).handleSubmitForm=t,n._form=n._popup.querySelector(".popup__form"),n._inputs=function(e){if(Array.isArray(e))return E(e)}(r=n._form.querySelectorAll(".popup__field"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;j(L(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(){e.handleSubmitForm(e._getInputValues())}))}},{key:"close",value:function(){j(L(a.prototype),"close",this).call(this),this._form.reset()}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(y);function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=new(function(){function e(t){var n,r,o=this,i=t.name,a=t.about;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(){return{name:o._name.textContent,about:o._about.textContent}},(n="getUserInfo")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._name=document.querySelector(i),this._about=document.querySelector(a)}var t,n;return t=e,(n=[{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;this._name.textContent=t,this._about.textContent=n}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({name:".profile__name",about:".profile__about"}),A=new I("#popup-profile",(function(e){R.setUserInfo({name:e.name,about:e.about}),A.close()})),B=new I("#popup-add-cards",(function(e){var t=V({name:e.name,link:e.about});U.addItem(t),B.close()})),T=new w("#popup-image",{figureImage:".popup__image",imageCaption:".popup__image-caption"});A.setEventListeners(),B.setEventListeners(),T.setEventListeners();var V=function(e){return new t(e,"#card-template",(function(){T.open(e.name,e.link)})).renderCard()},U=new i({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e,t){var n=V(e);t.prepend(n)}},f);function D(){u.value=R.getUserInfo().name,c.value=R.getUserInfo().about}U.renderItems(),l.addEventListener("click",(function(){D(),z[a.getAttribute("name")].resetValidation(),A.open()})),p.addEventListener("click",(function(){z[s.getAttribute("name")].resetValidation(),B.open()})),D();var F,M={input:".popup__field",button:".popup__button-submit",error:"popup__field_error"},z={};F={formSelector:".popup__form"},Array.from(document.querySelectorAll(F.formSelector)).forEach((function(e){var t=new r(M,e),n=e.getAttribute("name");z[n]=t,t.enableValidation()}))})();