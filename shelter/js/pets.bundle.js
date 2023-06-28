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

/***/ "./js/modules/pagination.js":
/*!**********************************!*\
  !*** ./js/modules/pagination.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _servise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./servise */ "./js/modules/servise.js");


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

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

    render(index) {
        const element = document.createElement('li');
        const petsList = document.querySelector('.our-friends-list')
        element.classList.add(`our-friends__slider-card`);
        element.dataset.id = index;

        element.innerHTML = `
          <img src="${this.img}" alt="img-${this.name}">
          <h4>${this.name}</h4>
          <button class="our-friends__slider-card-more-btn">
            Learn more
          </button>
        `;
        petsList.append(element);
    }
}

const numberPage = document.querySelector('.number-page'),
      firstPageBtn = document.querySelector('.btn-full-back'),
      prevPageBtn = document.querySelector('.btn-first-back'),
      nextPageBtn = document.querySelector('.btn-first-next'),
      lastPageBtn = document.querySelector('.btn-full-next');
const petsList = document.querySelector('.our-friends-list');

function pag () {

    (0,_servise__WEBPACK_IMPORTED_MODULE_0__["default"])('db.json')
    .then(data => {
        let newData = [];
        for(let i = 0; i < 6; i++){
            shuffle(data);
            data.forEach(element => {
                newData.push(element);
            });
        }

        let currentPage = 1;

        let pages = splitArrayIntoPages(newData);
        
        nextPageBtn.addEventListener('click', () => {
            currentPage++;
            petsList.innerHTML = '';
            createPetsList(pages[currentPage - 1]);
            numberPage.innerHTML = `${currentPage}`;
            if (currentPage > 1) {
                firstPageBtn.disabled = false;
                prevPageBtn.disabled = false;
            }
            if (currentPage === pages.length) {
                nextPageBtn.disabled = true;
                lastPageBtn.disabled = true;
            }
        })
        prevPageBtn.addEventListener('click', () => {
            currentPage--;
            petsList.innerHTML = '';
            createPetsList(pages[currentPage - 1]);
            numberPage.innerHTML = `${currentPage}`;
            if (currentPage <= pages.length) {
                nextPageBtn.disabled = false;
                lastPageBtn.disabled = false;
            }
            if (currentPage === 1) {
                prevPageBtn.disabled = true;
                firstPageBtn.disabled = true;
            }
        })
        lastPageBtn.addEventListener('click', () => {
            currentPage = pages.length;
            petsList.innerHTML = '';
            createPetsList(pages[pages.length - 1]);
            numberPage.innerHTML = `${currentPage}`;
            if (currentPage > 1) {
                firstPageBtn.disabled = false;
                prevPageBtn.disabled = false;
            }
            if (currentPage === pages.length) {
                nextPageBtn.disabled = true;
                lastPageBtn.disabled = true;
            }
        })
        firstPageBtn.addEventListener('click', () => {
            currentPage = 1;
            petsList.innerHTML = '';
            createPetsList(pages[0]);
            numberPage.innerHTML = `${currentPage}`;
            if (currentPage <= pages.length) {
                nextPageBtn.disabled = false;
                lastPageBtn.disabled = false;
            }
            if (currentPage === 1) {
                prevPageBtn.disabled = true;
                firstPageBtn.disabled = true;
            }
        })

        createPetsList(pages[0])

        window.addEventListener('resize', (e) => {
            if (pages.length != getNumberOfPages()) {
              pages = splitArrayIntoPages(newData);
              petsList.innerHTML = '';
              currentPage = 1;
              createPetsList(pages[0]);
              numberPage.innerHTML = `${currentPage}`;
              if (currentPage <= pages.length) {
                  nextPageBtn.disabled = false;
                  lastPageBtn.disabled = false;
              }
              if (currentPage === 1) {
                  prevPageBtn.disabled = true;
                  firstPageBtn.disabled = true;
              }
            }
          })

    });
}

function getNumberOfPages () {
    let numPages;
    let widthWindow = document.body.clientWidth;
    if (widthWindow >= 1280) {
        numPages = 6;
    } else if (widthWindow < 1280 && widthWindow >= 767) {
        numPages = 8;
    } else {
        numPages = 16;
    } 
    return numPages;
  }

function splitArrayIntoPages(array) {
    let numPages = getNumberOfPages();
    let sortData = [];
    let colPet = 0;
    let indexJ = 0;
    if (numPages === 6) {
        colPet = 8;
    } else if (numPages === 8) {
        colPet = 6;
    } else {
        colPet = 3;
    }
    for(let i = 0; i < numPages; i++){
        sortData.push([]);
        for(let j = indexJ; j < colPet; j++){
            sortData[i].push(array[j])
        }
        if (numPages === 6) {
            indexJ += 8;
        } else if (numPages === 8) {
            indexJ += 6;
        } else {
            indexJ += 3;
        }
        if (numPages === 6) {
            colPet += 8;
        } else if (numPages === 8) {
            colPet += 6;
        } else {
            colPet += 3;
        }
    }
    return sortData;
}

function createPetsList(page){
    for(let i = 0; i < page.length; i++) { 
        let img = page[i].img;
        let name = page[i].name;
        let id = page[i].id;
        new PetsCard(name, img).render(id);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pag);


    // let sortData = [];
    // let colPage = 6;
    // let colPet = 8;
    // let indexJ = 0;

    // console.log(newData);

    // for(let i = 0; i < colPage; i++){
    //     sortData.push([]);
    //     for(let j = indexJ; j < colPet; j++){
    //         sortData[i].push(newData[j])
    //     }
    //     indexJ += 8;
    //     colPet += 8;
    // }

    // console.log(sortData)

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
  !*** ./js/pets.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger */ "./js/modules/burger.js");
/* harmony import */ var _modules_popap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/popap */ "./js/modules/popap.js");
/* harmony import */ var _modules_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/pagination */ "./js/modules/pagination.js");




window.addEventListener('DOMContentLoaded', () =>{

    (0,_modules_burger__WEBPACK_IMPORTED_MODULE_0__["default"])('hdm');
    (0,_modules_popap__WEBPACK_IMPORTED_MODULE_1__["default"])(".our-friends__slider-card", ".modal");
    (0,_modules_pagination__WEBPACK_IMPORTED_MODULE_2__["default"])();

  });
})();

/******/ })()
;
//# sourceMappingURL=pets.bundle.js.map