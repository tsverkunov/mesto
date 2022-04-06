(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._likes=e.likes,this._cardSelector=n,this._handleCardClick=r,this._handleDeleteClick=o,this._handleLikeClick=i,this._id=e.id,this._userId=e.userId,this._ownerId=e.ownerId,this._notAvailableImg=e._notAvailableImg}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"renderCard",value:function(){var e=this;return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".card__image"),this._cardImage.src=this._link,this._cardImage.onerror=function(){return e._cardImage.src="https://more-show.ru/upload/not-available.png"},this._cardImage.alt=this._name,this._element.querySelector(".card__title").textContent=this._name,this._setEventListeners(),this.setLikes(this._likes),this._userId!==this._ownerId&&(this._deleteButton.style.display="none"),this._element}},{key:"isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"setLikes",value:function(e){this._likes=e,this._likesCountElement=this._element.querySelector(".card__likes-count"),this._likesCountElement.textContent=this._likes.length,this.isLiked()?this._handleAddLike():this._handleRemoveLike()}},{key:"_handleAddLike",value:function(){this._likeButton.classList.add("card__heart_active")}},{key:"_handleRemoveLike",value:function(){this._likeButton.classList.remove("card__heart_active")}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var e=this;this._deleteButton=this._element.querySelector(".card__delete-button"),this._likeButton=this._element.querySelector(".card__heart"),this._deleteButton.addEventListener("click",(function(){return e._handleDeleteClick(e._id)})),this._likeButton.addEventListener("click",(function(){return e._handleLikeClick(e._id)})),this._cardImage.addEventListener("click",(function(){return e._handleCardClick()}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._input=t.input,this._buttonSelector=t.button,this._error=t.error,this._inputList=Array.from(this._form.querySelectorAll(this._input)),this._button=this._form.querySelector(this._buttonSelector)}var t,r;return t=e,(r=[{key:"_showError",value:function(e){this._form.querySelector("#error-".concat(e.id)).textContent=e.validationMessage,e.classList.add(this._error)}},{key:"_hideError",value:function(e){this._form.querySelector("#error-".concat(e.id)).textContent="",e.classList.remove(this._error)}},{key:"_checkFieldValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e)}},{key:"_disabledButton",value:function(){this._button.setAttribute("disabled","")}},{key:"_enabledButton",value:function(){this._button.removeAttribute("disabled")}},{key:"_checkButtonValidity",value:function(){this._form.checkValidity()?this._enabledButton():this._disabledButton()}},{key:"resetValidation",value:function(){var e=this;this._checkButtonValidity(),this._inputList.forEach((function(t){e._hideError(t)}))}},{key:"enableValidation",value:function(){var e=this;this._form.addEventListener("submit",(function(e){return e.preventDefault()})),this._checkButtonValidity(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkFieldValidity(t),e._checkButtonValidity()}))}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialCards=r,this._container=n,this._renderer=o}var t,n;return t=e,(n=[{key:"renderListItem",value:function(){var e=this;this._initialCards.forEach((function(t){e._renderer(t,e._container)}))}},{key:"renderItem",value:function(e){this._container.append(e)}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),a=document.querySelector("#popup__form-profile"),u=document.querySelector("#popup__field_type_name-profile"),c=document.querySelector("#popup__field_type_about-profile"),l=document.querySelector(".profile__edit-button"),s=document.querySelector("#popup__form-add-cards"),f=document.querySelector(".profile__add-button"),p=document.querySelector(".cards"),h=document.querySelector("#popup__form-edit-avatar"),d=document.querySelector(".profile__avatar-edit");function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){if("Escape"===e.key){var t=document.querySelector(".popup_opened");this.close(t)}}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close-button"))&&e.close()}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function w(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function a(e,t){var n,r=t.figureImage,o=t.imageCaption;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._figureImage=n._popup.querySelector(r),n._imageCaption=n._popup.querySelector(o),n}return t=a,(n=[{key:"open",value:function(e,t){m(S(a.prototype),"open",this).call(this),this._figureImage.src=t,this._figureImage.alt=e,this._imageCaption.textContent=e}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(_);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}function I(e,t){return I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},I(e,t)}function R(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e)).handleSubmitForm=t,n._form=n._popup.querySelector(".popup__form"),n._buttonSubmit=n._form.querySelector(".popup__button-submit"),n._text=n._buttonSubmit.textContent,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e;this._inputs=function(e){if(Array.isArray(e))return j(e)}(e=this._form.querySelectorAll(".popup__field"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();var t={};return this._inputs.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var e=this;C(q(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(){e.handleSubmitForm(e._getInputValues())}))}},{key:"preloader",value:function(e){this._buttonSubmit.textContent=e?"Сохранение...":this._text}},{key:"close",value:function(){C(q(a.prototype),"close",this).call(this),this._form.reset()}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(_);function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=function(){function e(t){var n,r,o=this,i=t.name,a=t.about,u=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(){return{name:o._name.textContent,about:o._about.textContent}},(n="getUserInfo")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._name=document.querySelector(i),this._about=document.querySelector(a),this._avatar=document.querySelector(u)}var t,n;return t=e,(n=[{key:"setUserInfo",value:function(e,t,n){this._name.textContent=e,this._about.textContent=t,this._avatar.style.backgroundImage="url('".concat(n,"')")}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getProfile",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"editProfile",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return n._getResponseData(e)}))}},{key:"addCard",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return n._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"addLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"editAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._getResponseData(e)}))}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-39",headers:{authorization:"e0347de3-3f3e-4b66-951f-031aa57f2a82","Content-Type":"application/json"}});function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=H(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},F.apply(this,arguments)}function H(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=M(e)););return e}function N(e,t){return N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},N(e,t)}function J(e,t){if(t&&("object"===D(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}var $,z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&N(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=M(r);if(o){var n=M(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return J(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._form=t._popup.querySelector(".popup__form"),t}return t=a,(n=[{key:"addSubmitHandler",value:function(e){this.handleSubmitForm=e}},{key:"setEventListeners",value:function(){var e=this;F(M(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(){e.handleSubmitForm()}))}}])&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(_);function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var K=function(e){return{name:e.name,link:e.link,likes:e.likes,id:e._id,userId:$,ownerId:e.owner._id}};Promise.all([x.getProfile(),x.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Q.setUserInfo(o.name,o.about,o.avatar),$=o._id,i.forEach((function(e){var t=te(K(e));ne.renderItem(t)}))})).catch(console.log);var Q=new B({name:".profile__name",about:".profile__about",avatar:".profile__avatar"}),W=new A("#popup-profile",(function(e){var t=e.name,n=e.about;W.preloader(!0),x.editProfile(t,n).then((function(e){Q.setUserInfo(e.name,e.about,e.avatar),W.close()})).catch(console.log).finally((function(){return W.preloader(!1)}))})),X=new A("#popup-add-cards",(function(e){var t=e.name,n=e.link;X.preloader(!0),x.addCard(t,n).then((function(e){var t=te(K(e));ne.addItem(t),X.close()})).catch(console.log).finally((function(){return X.preloader(!1)}))})),Y=new z("#popup-delete-card"),Z=new A("#popup-edit-avatar",(function(e){var t=e.link;x.editAvatar(t).then((function(e){Q.setUserInfo(e.name,e.about,e.avatar),Z.close()})).catch(console.log)})),ee=new O("#popup-image",{figureImage:".popup__image",imageCaption:".popup__image-caption"});W.setEventListeners(),X.setEventListeners(),ee.setEventListeners(),Y.setEventListeners(),Z.setEventListeners();var te=function(e){var n=new t(e,"#card-template",(function(){ee.open(e.name,e.link)}),(function(e){Y.open(),Y.addSubmitHandler((function(){x.deleteCard(e).then((function(){n.deleteCard(),Y.close()})).catch(console.log)}))}),(function(e){n.isLiked()?x.deleteLike(e).then((function(e){return n.setLikes(e.likes)})).catch(console.log):x.addLike(e).then((function(e){return n.setLikes(e.likes)})).catch(console.log)}));return n.renderCard()},ne=new i({items:[],renderer:function(e,t){var n=te(e);t.prepend(n)}},p);function re(){u.value=Q.getUserInfo().name,c.value=Q.getUserInfo().about}ne.renderListItem(),l.addEventListener("click",(function(){re(),ae[a.getAttribute("name")].resetValidation(),W.open()})),f.addEventListener("click",(function(){ae[s.getAttribute("name")].resetValidation(),X.open()})),d.addEventListener("click",(function(){ae[h.getAttribute("name")].resetValidation(),Z.open()})),re();var oe,ie={input:".popup__field",button:".popup__button-submit",error:"popup__field_error"},ae={};oe={formSelector:".popup__form"},Array.from(document.querySelectorAll(oe.formSelector)).forEach((function(e){var t=new r(ie,e),n=e.getAttribute("name");ae[n]=t,t.enableValidation()}))})();