/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/header */ \"./src/scripts/header.js\");\n/* harmony import */ var _scripts_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_header__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/popup */ \"./src/scripts/popup.js\");\n/* harmony import */ var _scripts_popup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_popup__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scripts_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/utils */ \"./src/scripts/utils.js\");\n/* harmony import */ var _scripts_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/data */ \"./src/scripts/data.js\");\n/* harmony import */ var _scripts_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/card */ \"./src/scripts/card.js\");\n\n\n\n\n\n\n/*------------------- Carousel -----------------------*/\nconst SLIDER_CONTAINER = document.querySelector('.slider__container');\nconst LEFT_BUTTON = document.querySelector('.slider__control.slider__back');\nconst RIGHT_BUTTON = document.querySelector('.slider__control.slider__next');\n\nlet cardCount = 3;\n\n\n//find card count\nif (768 <= window.innerWidth && window.innerWidth < 1280) {\n    cardCount = 2;\n} else if (window.innerWidth < 768) {\n    cardCount = 1;\n}\n\nlet cardIdCount = 0;\nlet slideIdCount = 0; \nlet slideCount = 3;\nconst pets = (0,_scripts_utils__WEBPACK_IMPORTED_MODULE_2__.shuffle)(_scripts_data__WEBPACK_IMPORTED_MODULE_3__.PETS).map((pet) => ({ ...pet, id: cardIdCount++ }));\nwindow.pets = pets;\nlet containerWidth = `calc(100% * ${cardCount})`;\nlet slideWidth = `calc(100% / ${cardCount})`;\n\n// creates slides consists of elements equal to cardCount\nconst getRandomSlide = (previous) => {\n    if (!previous) {\n        return pets.slice(0, cardCount);\n    } else {\n        const result = [];\n\n        while (result.length !== cardCount) {\n            let randomElement = pets[Math.floor(Math.random() * pets.length)];\n\n            let isFound =\n                previous.some(({ id }) => id === randomElement.id) ||\n                result.some(({ id }) => id === randomElement.id);\n\n            if (!isFound) {\n                result.push(randomElement);\n            }\n        }\n\n        return result;\n    }\n};\n\nconst createCarouselSlide = (id, left, items) => {\n    const div = document.createElement('div');\n\n    div.insertAdjacentHTML('afterbegin', `\n        <div\n            class=\"carousel-item\"\n            id=\"carousel-${id}\"\n            style=\"width: ${slideWidth}\"\n        ></div>\n    `.trim());\n    div.firstChild.append(...items);\n\n    div.firstChild.style.left = left;\n\n    return div.firstChild;\n}\n\nSLIDER_CONTAINER.innerHTML = '';\nSLIDER_CONTAINER.style.width = containerWidth;\n\n\nlet initialSlide = getRandomSlide();\nlet leftSlide = getRandomSlide(initialSlide);\nlet rightSlide = getRandomSlide(initialSlide);\nconst SCROLL_STEP = 100 / cardCount;\n\nconst slidesNodes = [leftSlide, initialSlide, rightSlide].map((slide) => {\n    return createCarouselSlide(slideIdCount++, '', slide.map(element => {\n        return (0,_scripts_card__WEBPACK_IMPORTED_MODULE_4__.createCardElement)(element);\n    }));\n});\n\nSLIDER_CONTAINER.append(...slidesNodes);\nSLIDER_CONTAINER.childNodes[0].style.left = `-${SCROLL_STEP}%`;\nSLIDER_CONTAINER.childNodes[1].style.left = '0%';\nSLIDER_CONTAINER.childNodes[2].style.left = `${SCROLL_STEP}%`;\n\nLEFT_BUTTON.addEventListener('click',() => {\n    SLIDER_CONTAINER.childNodes[1].style.left = `${SCROLL_STEP}%`;;\n    SLIDER_CONTAINER.childNodes[0].style.left = '0%';\n    rightSlide = initialSlide;\n    initialSlide = leftSlide;\n    leftSlide = getRandomSlide(initialSlide)\n\n    const newSlide = createCarouselSlide(slideIdCount++, `-${SCROLL_STEP}%`,leftSlide.map(element => {\n        return (0,_scripts_card__WEBPACK_IMPORTED_MODULE_4__.createCardElement)(element);\n    }));\n\n    SLIDER_CONTAINER.prepend(newSlide);\n    SLIDER_CONTAINER.removeChild(SLIDER_CONTAINER.childNodes[SLIDER_CONTAINER.childNodes.length - 1]);\n});\n\nRIGHT_BUTTON.addEventListener('click',() => {\n    SLIDER_CONTAINER.childNodes[1].style.left = `-${SCROLL_STEP}%`;\n    SLIDER_CONTAINER.childNodes[2].style.left = '0%';\n    leftSlide = initialSlide;\n    initialSlide = rightSlide;\n    rightSlide = getRandomSlide(initialSlide);\n\n    const newSlide = createCarouselSlide(slideIdCount++, `${SCROLL_STEP}%`, rightSlide.map(element => {\n        return (0,_scripts_card__WEBPACK_IMPORTED_MODULE_4__.createCardElement)(element);\n    }));\n\n    SLIDER_CONTAINER.removeChild(SLIDER_CONTAINER.childNodes[0]);\n    SLIDER_CONTAINER.append(newSlide);\n});\n\n\n\n//# sourceURL=webpack://webpack-test/./src/index.js?");

/***/ }),

/***/ "./src/scripts/card.js":
/*!*****************************!*\
  !*** ./src/scripts/card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCardElement\": () => (/* binding */ createCardElement)\n/* harmony export */ });\nconst createCardElement = (pet) => {\n    const div = document.createElement('div');\n\n    div.insertAdjacentHTML(\"afterbegin\", `\n        <article class=\"card slider__card\" id=\"card-${pet.id}\">\n            <img \n                class=\"card__image\"\n                src=\"${pet.img}\"\n                alt=\"${pet.name}\"\n                width=\"270\"\n                height=\"270\"\n            >\n            <h4 class=\"card__name\">${pet.name}</h4>\n            <button class=\"card__button\">Learn more</button>\n        </article>\n    `.trim());\n\n    div.firstChild.addEventListener('click', () => {\n        const modalEvent = new CustomEvent('modal-open', {\n            detail: { petId: pet.id }\n        })\n\n        document.dispatchEvent(modalEvent);\n    });\n\n    return div.firstChild;\n}\n\n//# sourceURL=webpack://webpack-test/./src/scripts/card.js?");

/***/ }),

/***/ "./src/scripts/data.js":
/*!*****************************!*\
  !*** ./src/scripts/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PETS\": () => (/* binding */ PETS)\n/* harmony export */ });\nconst PETS = [\n    {\n        'name': 'Jennifer',\n        'img': '../../assets/images/common/pets-jennifer.png',\n        'type': 'Dog',\n        'breed': 'Labrador',\n        'description': 'Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\\'t hesitate to play up a storm in the house if she has all of her favorite toys.',\n        'age': '2 months',\n        'inoculations': ['none'],\n        'diseases': ['none'],\n        'parasites': ['none']\n    },\n    {\n        'name': 'Sophia',\n        'img': '../../assets/images/common/pets-sophia.png',\n        'type': 'Dog',\n        'breed': 'Shih tzu',\n        'description': 'Sophia here and I\\'m looking for my forever home to live out the best years of my life. I am full of energy. Everyday I\\'m learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.',\n        'age': '1 month',\n        'inoculations': ['parvovirus'],\n        'diseases': ['none'],\n        'parasites': ['none']\n    },\n    {\n        'name': 'Woody',\n        'img': '../../assets/images/common/pets-woody.png',\n        'type': 'Dog',\n        'breed': 'Golden Retriever',\n        'description': 'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',\n        'age': '3 years 6 months',\n        'inoculations': ['adenovirus', 'distemper'],\n        'diseases': ['right back leg mobility reduced'],\n        'parasites': ['none']\n    },\n    {\n        'name': 'Scarlett',\n        'img': '../../assets/images/common/pets-scarlet.png',\n        'type': 'Dog',\n        'breed': 'Jack Russell Terrier',\n        'description': 'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',\n        'age': '3 months',\n        'inoculations': ['parainfluenza'],\n        'diseases': ['none'],\n        'parasites': ['none']\n    },\n    {\n        'name': 'Katrine',\n        'img': '../../assets/images/common/pets-katrine.png',\n        'type': 'Cat',\n        'breed': 'British Shorthair',\n        'description': 'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',\n        'age': '6 months',\n        'inoculations': ['panleukopenia'],\n        'diseases': ['none'],\n        'parasites': ['none']\n    },\n    {\n        'name': 'Timmy',\n        'img': '../../assets/images/common/pets-timmy.png',\n        'type': 'Cat',\n        'breed': 'British Shorthair',\n        'description': 'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',\n        'age': '2 years 3 months',\n        'inoculations': ['calicivirus', 'viral rhinotracheitis'],\n        'diseases': ['kidney stones'],\n        'parasites': ['none']\n    },\n    {\n        'name': 'Freddie',\n        'img': '../../assets/images/common/pets-freddie.png',\n        'type': 'Cat',\n        'breed': 'British Shorthair',\n        'description': 'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',\n        'age': '2 months',\n        'inoculations': ['rabies'],\n        'diseases': ['none'],\n        'parasites': ['none']\n    },\n    {\n        'name': 'Charly',\n        'img': '../../assets/images/common/pets-charly.png',\n        'type': 'Dog',\n        'breed': 'Jack Russell Terrier',\n        'description': 'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',\n        'age': '8 years',\n        'inoculations': ['bordetella bronchiseptica', 'leptospirosis'],\n        'diseases': ['deafness', 'blindness'],\n        'parasites': ['lice', 'fleas']\n    }\n];\n\n\n//# sourceURL=webpack://webpack-test/./src/scripts/data.js?");

/***/ }),

/***/ "./src/scripts/header.js":
/*!*******************************!*\
  !*** ./src/scripts/header.js ***!
  \*******************************/
/***/ (() => {

eval("const SITE_HEADER = document.querySelector('.site-header');\nconst BURGER = document.querySelector('.burger');\nconst BURGER_LINKS = document.querySelectorAll('.burger__link');\nconst BURGER_BUTTON = document.querySelector('.burger-button');\nconst MOBILE_MENU = document.querySelector('.mobile-menu');\n\nlet isMobileMenuOpen = false;\n\nconst openMenu = () => {\n    document.body.classList.add('overflow-hidden');\n    SITE_HEADER.classList.add('header--hidden');\n    MOBILE_MENU.classList.add('mobile-menu--open');\n    BURGER.classList.add('burger--open');\n    BURGER_BUTTON.classList.add('burger-button--open', 'burger-button--primary')\n    isMobileMenuOpen = true;\n}\n\nconst closeMenu = () => {\n    document.body.classList.remove('overflow-hidden');\n    SITE_HEADER.classList.remove('header--hidden');\n    MOBILE_MENU.classList.remove('mobile-menu--open');\n    BURGER.classList.remove('burger--open');\n    BURGER_BUTTON.classList.remove('burger-button--open', 'burger-button--primary');\n    isMobileMenuOpen = false;\n}\n\nBURGER.addEventListener('click', (evt) => evt.stopPropagation());\nBURGER_BUTTON.addEventListener('click', () => isMobileMenuOpen ? closeMenu() : openMenu());\nBURGER_LINKS.forEach((link) => link.addEventListener('click', () => closeMenu()));\nMOBILE_MENU.addEventListener('click', () => closeMenu())\n\n//# sourceURL=webpack://webpack-test/./src/scripts/header.js?");

/***/ }),

/***/ "./src/scripts/popup.js":
/*!******************************!*\
  !*** ./src/scripts/popup.js ***!
  \******************************/
/***/ (() => {

eval("const MODAL = document.querySelector('.modal');\nconst BUTTON = document.querySelector('.modal__close-btn');\nconst BLACKOUT = document.querySelector('.modal__blackout');\nconst CONTENT = document.querySelector('.modal__content');\nconst CONTENT_WRAPPER = document.querySelector('.content__wrapper');\n\nconst createBigCard = ({\n    name,\n    img,\n    type,\n    breed,\n    description,\n    age,\n    inoculations,\n    diseases,\n    parasites\n}) => {\n    const div = document.createElement('div');\n\n    div.insertAdjacentHTML(\"afterbegin\", `\n        <article class=\"big-card\">\n            <div class=\"big-card__left\">\n                <img\n                    src=\"${img}\"\n                    alt=\"${name}\"\n                    width=\"500\"\n                    height=\"500\"\n                >\n            </div>\n            \n            <div class=\"big-card__right\">\n                <h2 class=\"big-card__name\">${name}</h2>\n                <p class=\"big-card__breed\">${type} - ${breed}</p>\n                <p class=\"big-card__description\">${description}</p>\n                <ul class=\"details big-card__details\">\n                    <li class=\"details__item\">\n                    <b>Age: </b> ${age}\n                    </li>\n                    <li class=\"details__item\">\n                    <b>Inoculations: </b> ${inoculations.join(', ')}\n                    </li>\n                    <li class=\"details__item\">\n                    <b>Diseases: </b> ${diseases.join(', ')}\n                    </li>\n                    <li class=\"details__item\">\n                    <b>Parasites: </b> ${parasites.join(', ')}\n                    </li>\n                </ul>\n            </div>\n        </article>\n    `.trim());\n\n    return div.firstChild;\n}\n\nconst openModal = () => {\n    document.body.classList.add('overflow-hidden');\n    MODAL.classList.add('modal--open');\n}\n\nconst closeModal = () => {\n    document.body.classList.remove('overflow-hidden');\n    MODAL.classList.remove('modal--open');\n}\n\nBUTTON.addEventListener('click', () => {\n    closeModal();\n});\n\nBLACKOUT.addEventListener('click', () => {\n    closeModal();\n});\n\nBLACKOUT.addEventListener('mouseover', (evt) => {\n    if (evt.target.id === 'modal-blackout') {\n        BLACKOUT.classList.add('modal__blackout--hover');\n        BUTTON.classList.add('controller--active');\n    } else {\n        BLACKOUT.classList.remove('modal__blackout--hover');\n        BUTTON.classList.remove('controller--active');\n    }\n});\n\nCONTENT.addEventListener('click', (evt) => {\n    evt.stopPropagation();\n});\n\ndocument.addEventListener('modal-open', (evt) => {\n    const petId = evt.detail.petId;\n    const pet = window.pets.find(({ id }) => id === petId);\n    CONTENT_WRAPPER.innerHTML = '';\n\n    if (pet) {\n        const contentNode = createBigCard(pet);\n        CONTENT_WRAPPER.appendChild(contentNode)\n\n        openModal();\n    }\n});\n\n//# sourceURL=webpack://webpack-test/./src/scripts/popup.js?");

/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*\
  !*** ./src/scripts/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shuffle\": () => (/* binding */ shuffle)\n/* harmony export */ });\nconst shuffle = function (array) {\n    let currentIndex = array.length;\n    let randomIndex;\n  \n    while (currentIndex !== 0) {\n      randomIndex = Math.floor(Math.random() * currentIndex);\n      currentIndex--;\n      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];\n    }\n  \n    return array;\n  }\n\n//# sourceURL=webpack://webpack-test/./src/scripts/utils.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;