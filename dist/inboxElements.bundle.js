/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayToPage)\n/* harmony export */ });\n/* harmony import */ var _inboxElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inboxElements */ \"./src/inboxElements.js\");\n\r\nconst main = document.querySelector('.inboxDiv');\r\nconst inboxMain = document.querySelector('.inboxElementsView');\r\n\r\nfunction displayToPage(){\r\n    (0,_inboxElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    console.log(inboxMain);\r\n    let fromLocal = localStorage.getItem('todoList')\r\n    // console.log(fromLocal)\r\n    let fromLocalArr = JSON.parse(fromLocal);\r\n    console.log(fromLocalArr)\r\n\r\n    fromLocalArr.forEach((x) => {\r\n\r\n        if(localStorage.length <= 1){\r\n\r\n        }\r\n        // main.innerHTML = '';\r\n        const card = document.createElement('div');\r\n        card.classList.add('card');\r\n        main.appendChild(card);\r\n        \r\n        const btnDiv = document.createElement('div');\r\n        btnDiv.classList.add('btnDiv');\r\n        card.appendChild(btnDiv);\r\n        const checkBtn = document.createElement('input');\r\n        checkBtn.classList.add('checkBtn');\r\n        checkBtn.type = \"checkbox\";\r\n        btnDiv.appendChild(checkBtn);\r\n        const editBtn = document.createElement('button');\r\n        editBtn.classList.add('editBtn');\r\n        editBtn.textContent = \"Edit\";\r\n        btnDiv.appendChild(editBtn);\r\n        const deleteBtn = document.createElement('button');\r\n        deleteBtn.classList.add('deleteBtn');\r\n        deleteBtn.textContent = \"Delete\";\r\n        btnDiv.appendChild(deleteBtn);\r\n        \r\n        const titleDiv = document.createElement('div')\r\n        titleDiv.classList.add('titleDiv');\r\n        card.appendChild(titleDiv);\r\n        const dateDiv = document.createElement('div')\r\n        dateDiv.classList.add('dateDiv');\r\n        card.appendChild(dateDiv);\r\n        const noteDiv = document.createElement('div')\r\n        noteDiv.classList.add('noteDiv');\r\n        card.appendChild(noteDiv);\r\n        for (let i in x) {\r\n            if (i === 'title') {\r\n                const titleText = document.createElement('h1');\r\n                titleText.textContent = `${x[i]}`;\r\n                titleDiv.appendChild(titleText);\r\n            } else if (i === 'date') {\r\n                const titleText = document.createElement('h3');\r\n                titleText.textContent = `${x[i]}`;\r\n                dateDiv.appendChild(titleText);\r\n            } else if (i === 'note') {\r\n                const titleText = document.createElement('p');\r\n                titleText.textContent = `${x[i]}`;\r\n                noteDiv.appendChild(titleText);\r\n            }\r\n        }\r\n    });\r\n\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/display.js?");

/***/ }),

/***/ "./src/inboxElements.js":
/*!******************************!*\
  !*** ./src/inboxElements.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ inboxElementsView)\n/* harmony export */ });\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n\r\n\r\nconst taskForm = document.querySelector('.taskForm');\r\nconst inboxBtn = document.querySelector('.btnInbox');\r\nfunction inboxElementsView(){\r\n    inboxBtn.addEventListener('click', formDisplay);\r\n    function formDisplay(){\r\n        taskForm.style.display = 'flex';\r\n    }\r\n   \r\n    // displayToPage();\r\n    \r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/inboxElements.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/inboxElements.js");
/******/ 	
/******/ })()
;