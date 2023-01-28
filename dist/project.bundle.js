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

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ project)\n/* harmony export */ });\nfunction project(){\r\n    const addProj = document.querySelector('.addProject');\r\n    const projectBtn = document.querySelector('.projectBtn');\r\n    \r\n    projectBtn.style.display = \"none\";\r\n    const inputForm = document.createElement('form');\r\n    inputForm.classList.add('inputForm');\r\n    addProj.appendChild(inputForm);\r\n    const input = document.createElement('input');\r\n    input.setAttribute('type', \"text\");\r\n    input.setAttribute('id', \"input-form\");\r\n    inputForm.appendChild(input);\r\n    const formDiv = document.createElement('div');\r\n    formDiv.classList.add(\"formDiv\");\r\n    inputForm.appendChild(formDiv);\r\n    const submit = document.createElement('button');\r\n    submit.classList.add('submit');\r\n    submit.textContent = \"submit\";\r\n    formDiv.appendChild(submit);\r\n    const reset = document.createElement('button');\r\n    reset.classList.add('reset');\r\n    reset.textContent = \"Reset\";\r\n    formDiv.appendChild(reset);\r\n    console.log(\"from project\");\r\n\r\n    \r\n}\n\n//# sourceURL=webpack://to-do-list/./src/project.js?");

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
/******/ 	__webpack_modules__["./src/project.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;