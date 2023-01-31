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

/***/ "./src/inboxElements.js":
/*!******************************!*\
  !*** ./src/inboxElements.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ inboxElementsView)\n/* harmony export */ });\nconst mainContent = document.querySelector('.mainBar');\r\nfunction inboxElementsView(){\r\n    \r\n    const taskForm = document.querySelector('.taskForm');\r\n\r\n    mainContent.textContent = '';\r\n    const inboxView = document.createElement('div');\r\n    inboxView.classList.add('inboxElementsView');\r\n    mainContent.appendChild(inboxView);\r\n    const inboxH2 = document.createElement('h2');\r\n    inboxH2.textContent = \"Inbox\";\r\n    inboxView.appendChild(inboxH2);\r\n    const inboxBtn = document.createElement('button');\r\n    inboxBtn.classList.add('btnInbox');\r\n    inboxBtn.textContent = \"➕ Add Task\";\r\n    inboxView.appendChild(inboxBtn);\r\n    \r\n    inboxBtn.addEventListener('click', taskFormOpen);\r\n    function taskFormOpen(){\r\n        console.log('Taskform');\r\n        taskForm.style.display = 'flex';\r\n    \r\n}\r\n    \r\n    // console.log(\"Hello hi\");\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/inboxElements.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/inboxElements.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;