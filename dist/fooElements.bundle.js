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

/***/ "./src/checkUiPage.js":
/*!****************************!*\
  !*** ./src/checkUiPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkUi)\n/* harmony export */ });\n/* harmony import */ var _inboxElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inboxElements */ \"./src/inboxElements.js\");\n/* harmony import */ var _todayElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todayElements */ \"./src/todayElements.js\");\n/* harmony import */ var _weekElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weekElements */ \"./src/weekElements.js\");\nconst mainBar = document.querySelector('.mainBar');\r\n\r\n\r\n\r\n\r\nfunction checkUi(){\r\n\r\n    switch(this.textContent){\r\n        case \"Inbox\":\r\n            \r\n                mainBar.textContent = '';\r\n                (0,_inboxElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n            \r\n        break;\r\n        case \"Today\":\r\n            \r\n                mainBar.textContent = '';\r\n                (0,_todayElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n            \r\n        break;\r\n        case \"This week\":\r\n            \r\n                mainBar.textContent = '';\r\n                (0,_weekElements__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n                \r\n            \r\n        break;\r\n\r\n    }\r\n    \r\n    console.log(mainBar.childNodes.length);\r\n    \r\n}\n\n//# sourceURL=webpack://to-do-list/./src/checkUiPage.js?");

/***/ }),

/***/ "./src/inboxElements.js":
/*!******************************!*\
  !*** ./src/inboxElements.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ inboxElementsView)\n/* harmony export */ });\n\r\nfunction inboxElementsView(){\r\n    const mainContent = document.querySelector('.mainBar');\r\n    const taskForm = document.querySelector('.taskForm');\r\n\r\n    mainContent.textContent = '';\r\n    const inboxView = document.createElement('div');\r\n    inboxView.classList.add('inboxElementsView');\r\n    mainContent.appendChild(inboxView);\r\n    const inboxH2 = document.createElement('h2');\r\n    inboxH2.textContent = \"Inbox\";\r\n    inboxView.appendChild(inboxH2);\r\n    const inboxBtn = document.createElement('button');\r\n    inboxBtn.classList.add('btnInbox');\r\n    inboxBtn.textContent = \"➕ Add Task\";\r\n    inboxView.appendChild(inboxBtn);\r\n    \r\n    inboxBtn.addEventListener('click', taskFormOpen);\r\n    function taskFormOpen(){\r\n        console.log('Taskform');\r\n        taskForm.style.display = 'flex';\r\n    \r\n}\r\n    \r\n    // console.log(\"Hello hi\");\r\n\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/inboxElements.js?");

/***/ }),

/***/ "./src/todayElements.js":
/*!******************************!*\
  !*** ./src/todayElements.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ todayElementsView)\n/* harmony export */ });\nfunction todayElementsView(){\r\n    const mainBar = document.querySelector('.mainBar');\r\n    \r\n    mainBar.textContent = '';\r\n    const todayView = document.createElement('div');\r\n    todayView.classList.add('todayElementsView');\r\n    mainBar.appendChild(todayView);\r\n    const todayH2 = document.createElement('h2');\r\n    todayH2.textContent = \"Today\";\r\n    todayView.appendChild(todayH2);\r\n    console.log(mainBar);\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/todayElements.js?");

/***/ }),

/***/ "./src/weekElements.js":
/*!*****************************!*\
  !*** ./src/weekElements.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ weekElementsView)\n/* harmony export */ });\nfunction weekElementsView(){\r\n    const mainBar = document.querySelector('.mainBar');\r\n\r\n    mainBar.textContent = '';\r\n    const weekView = document.createElement('div');\r\n    weekView.classList.add('weekElementsView');\r\n    mainBar.appendChild(weekView);\r\n    const weekH2 = document.createElement('h2');\r\n    weekH2.textContent = \"This Week\";\r\n    weekView.appendChild(weekH2);\r\n    console.log(mainBar);\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/weekElements.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/checkUiPage.js");
/******/ 	
/******/ })()
;