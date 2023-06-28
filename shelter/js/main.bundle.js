/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/burger.js":
/*!******************************!*\
  !*** ./js/modules/burger.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function openBurgerNav(burgerSelector, burgerAnim) {
    document.getElementById(burgerSelector).classList.add('activ-nav'),
    document.getElementById('hd-btn').classList.add('activ-nav-span');
    document.body.style.overflow = 'hidden';
    burgerAnim.style.background = 'rgba(0,0,0, 0.3)';
}

function closeBurgerNav(burgerSelector, burgerAnim) {
    document.getElementById(burgerSelector).classList.remove('activ-nav'),
    document.getElementById('hd-btn').classList.remove('activ-nav-span');
    document.body.style.overflow = '';
    burgerAnim.style.background = '';
}

function burgerNav(burgerSelector) {
    const burgerSpan = document.getElementById('hd-btn');
    const burgerLink = document.querySelectorAll('.burger-menu-list');
    const burgerAnim = document.querySelector('.burger-menu-anim');
    const divAnim = document.querySelector('.haeder__burger-menu');
    let activNav = false;
        burgerSpan.onclick = function() {
            if (!activNav) {
                openBurgerNav(burgerSelector, burgerAnim);
                activNav = true;
            } else {
                closeBurgerNav(burgerSelector, burgerAnim);
                activNav = false;
            }
        }
        document.addEventListener('click', (e) => {
            const click = e.composedPath().includes(burgerSpan);
            const clickDiv = e.composedPath().includes(divAnim);
            if (activNav && !click && !clickDiv) {
                closeBurgerNav(burgerSelector, burgerAnim);
                activNav = false;
            }
        });

        burgerLink.forEach((btn) => {
            btn.addEventListener("click", () => {
                document.getElementById(burgerSelector).classList.toggle('activ-nav'),
                document.getElementById('hd-btn').classList.toggle('activ-nav-span');
                document.body.style.overflow = '';
                burgerAnim.style.background = '';
                activNav = false;
            });
          });
    }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burgerNav); 

/***/ }),

/***/ "./js/modules/creatCard.js":
/*!*********************************!*\
  !*** ./js/modules/creatCard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _popap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popap */ "./js/modules/popap.js");
/* harmony import */ var _servise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servise */ "./js/modules/servise.js");



function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function cards(numberCards, slide) {

    class PetsCard {
        constructor(name, img, type, breed, description, age, inoculations, diseases, parasites, id){
            this.id = id;
            this.name = name;
            this.img = img;
            this.type = type;
            this.breed = breed;
            this.description = description;
            this.age = age;
            this.inoculations = inoculations;
            this.diseases = diseases;
            this.parasites = parasites;
        }

        render(active, index) {
            const element = document.createElement('div');
            element.classList.add(`our-friends__slider-card`);
            element.dataset.id = index;
    
            element.innerHTML = `
              <img src="${this.img}" alt="img-${this.name}">
              <h4>${this.name}</h4>
              <button class="our-friends__slider-card-more-btn">
                Learn more
              </button>
            `;
            active.append(element);
        }
    }

    let idPets = [];

    const activeSlide = document.querySelector('#item-active'),
          slides = activeSlide.querySelectorAll('div');

    let activPets = [];

    slides.forEach((item) => {
      activPets.push(+item.dataset.id);
    })
    

    console.log(activPets)

    function creatCard (colc) {
        ;(0,_servise__WEBPACK_IMPORTED_MODULE_1__["default"])('db.json')
        .then(data => {
          for(let i = 0; i < data.length; i++){
            idPets.push(i);
          }
            for (let i = 0; i < colc; i++) {
                let randNum = getRandomInt(idPets.length);
                if (!activPets.includes(randNum)) {
                  let img = data[randNum].img;
                  let name = data[randNum].name;
                  new PetsCard(name, img).render(slide, randNum);
                  activPets.push(randNum);
                } else {
                  colc++;
                  continue;
                }
            }
        });
    }
    creatCard(numberCards);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/popap.js":
/*!*****************************!*\
  !*** ./js/modules/popap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
/* harmony import */ var _servise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./servise */ "./js/modules/servise.js");


function openModal(modalSelector, clickId) {
    const modal = document.querySelector(modalSelector);

    let idPets = [];
    (0,_servise__WEBPACK_IMPORTED_MODULE_0__["default"])('db.json')
        .then(data => {

        modal.innerHTML = `
        <div class="modal__dialog">
            <div class="modal__content">
                <div data-close class="modal__close">×</div>
                  <img src="${data[clickId].img}" alt="">
                  <div class="modal__pets-info">
                    <h2>${data[clickId].name}</h2>
                    <h3>${data[clickId].type} - ${data[clickId].breed}</h3>
                    <p>${data[clickId].description}</p>
                    <ul>
                      <li><span>Age: ${data[clickId].age}</span></li>
                      <li><span>Inoculations: ${data[clickId].inoculations.join(', ')}</span></li>
                      <li><span>Diseases: ${data[clickId].diseases.join(', ')}</span></li>
                      <li><span>Parasites: ${data[clickId].parasites.join(', ')}</span></li>
                    </ul>
                  </div>
            </div>
        </div>
        `

    document.querySelector('.modal__close').addEventListener("click", () => closeModal(modalSelector));
    
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    });
  }
  
  function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
  
    modal.style.display = "none";
    document.body.style.overflow = "";
  }
  
  function modal(triggerSelector, modalSelector) {
    // modal
  
    const modal = document.querySelector(modalSelector),
          modalCloseBtn = document.querySelector(".modal__close");

      document.addEventListener('click', (e) => {
        let clickId;
        if(e.target.classList.contains('our-friends__slider-card')) {
            clickId = e.target.dataset.id;
            openModal(modalSelector, clickId);
        } else if (e.target.closest('.our-friends__slider-card')) { 
            clickId = e.target.closest('.our-friends__slider-card').dataset.id;
            openModal(modalSelector, clickId);
        }
      })
  
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal(modalSelector);
      }
    });
  }
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);
  
  
  

/***/ }),

/***/ "./js/modules/servise.js":
/*!*******************************!*\
  !*** ./js/modules/servise.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
    };

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getResource);

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _creatCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creatCard */ "./js/modules/creatCard.js");


function slider (numCards) {
    const slider = document.querySelector('.our-friends-parent-cards'),
          back = document.querySelector('.our-friends__slider-back-btn'),
          next = document.querySelector('.our-friends__slider-next-btn'),
          active = document.querySelector('#item-active'),
          left = document.querySelector('#item-left'),
          right = document.querySelector('#item-right');

          function nextBtn() {
            if (right.innerHTML === ''){
              (0,_creatCard__WEBPACK_IMPORTED_MODULE_0__["default"])(getNumCards(), right)
            } 
            slider.classList.add('transition-right')
          }

          function backBtn() {
            if(left.innerHTML === ''){
              (0,_creatCard__WEBPACK_IMPORTED_MODULE_0__["default"])(getNumCards(), left)
            }
            slider.classList.add('transition-left')
          }

          if (back.getAttribute('listenerclick') != 'true') {
            back.addEventListener('click', backBtn, true);
            back.setAttribute('listenerclick', 'true');
          }
          if (next.getAttribute('listenerclick') != 'true') {
            next.addEventListener('click', nextBtn, true);
            next.setAttribute('listenerclick', 'true');
          }

          
          if (active.innerHTML === '') {
            (0,_creatCard__WEBPACK_IMPORTED_MODULE_0__["default"])(numCards, active);
          }
            if (slider.getAttribute('listeneranimation') != 'true') {
              slider.addEventListener('animationend', (anim) => {
                if (anim.animationName === 'move-left') {
                  slider.classList.remove('transition-left');
                  right.innerHTML = active.innerHTML;
                  active.innerHTML = left.innerHTML;
                  left.innerHTML = '';
                } else {
                  slider.classList.remove('transition-right');
                  left.innerHTML = active.innerHTML;
                  active.innerHTML = right.innerHTML;
                  right.innerHTML = '';
                }
                slider.setAttribute('listeneranimation', 'true');
              })
            }

            
            function getNumCards () {
              let countCards;
              let widthWindow = document.body.clientWidth;
              if (widthWindow >= 1280) {
                countCards = 3;
              } else if (widthWindow < 1280 && widthWindow >= 767) {
                countCards = 2;
              } else {
                countCards = 1;
              } 
              return countCards;
            }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger */ "./js/modules/burger.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_popap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/popap */ "./js/modules/popap.js");




let numCards;

window.addEventListener('DOMContentLoaded', () =>{
    const active = document.querySelector('#item-active');
    const left = document.querySelector('#item-left');
    const right = document.querySelector('#item-right');
    active.innerHTML = '';
    left.innerHTML = '';
    right.innerHTML = '';

    (0,_modules_burger__WEBPACK_IMPORTED_MODULE_0__["default"])('hdm');
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])(getNumCards());
    (0,_modules_popap__WEBPACK_IMPORTED_MODULE_2__["default"])(".our-friends__slider-card", ".modal");

  }, {once: true});

  window.addEventListener('resize', (e) => {
    const active = document.querySelector('#item-active');
    const left = document.querySelector('#item-left');
    const right = document.querySelector('#item-right');
    if (numCards !== getNumCards()) {
      numCards = getNumCards();
      active.innerHTML = '';
      left.innerHTML = '';
      right.innerHTML = '';
      (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])(numCards);
    }
  }, false)

  function getNumCards () {
    let countCards;
    let widthWindow = document.body.clientWidth;
    if (widthWindow >= 1280) {
      countCards = 3;
    } else if (widthWindow < 1280 && widthWindow >= 767) {
      countCards = 2;
    } else {
      countCards = 1;
    } 
    return countCards;
  }
  

})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map