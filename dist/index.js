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

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("console.log(\"Hi from JS\");\n__webpack_require__(/*! ../css/index.css */ \"./css/index.css\");\n\nlet start = document.getElementById('start');\nlet stop = document.getElementById('stop');\nlet reset = document.getElementById('reset');\nlet remainingTime = document.getElementById('result');\n\nlet startTime,endTime;\nlet end=30000; // 30 seconds\nvar endDifference = undefined;\nvar paused = false; \nlet timeWorker = new Worker('./timer.js');\nlet resetClock = false;\n\nstart.onclick = function(){\n    if (window.Worker) {\n        if(resetClock){\n            resetClock = false;\n        }\n        if(paused){\n            paused = false;\n            end = endDifference\n        }else{\n            endDifference = end;\n        }\n        timeWorker.postMessage(\"Sending Message From Main Thread\")\n        timeWorker.postMessage('start')\n        startTime = Date.now();\n        timeWorker.postMessage('tick')\n      }\n       \n        endTime = startTime + end;\n        \n};\n\n\ntimeWorker.onmessage = function(e) {\n    console.log('Message received from worker', e.data);\n    if(window.Worker){\n        if(e.data == 'tack'){\n            let currentTime = new Date().getTime();\n            let isCompleted = currentTime >= endTime;\n            if(isCompleted){\n                endDifference = undefined;\n                paused = false\n                remainingTime.textContent = '00:00:00'\n            }else{\n                if(!resetClock && !paused){\n                    let result = getRemainingTimeAsText(endTime, currentTime)\n                    timeWorker.postMessage('tick')\n                    remainingTime.textContent = result;\n                }\n                endDifference = endDifference - 500;\n                console.log('endDifference', endDifference)\n            }\n            \n        }\n    }\n  }\n\n\nstop.onclick = function(){\n    paused = true\n    timeWorker.postMessage('stop')\n};\n\nreset.onclick = function(){\n        resetClock=true\n        endDifference = undefined;\n        end=30000\n        paused=false;    \n        remainingTime.textContent = '00:00:00'\n};\n\n\n\n\nfunction getRemainingTimeAsText(endTime, currentTime){\n    var timeleft =  endTime - currentTime;\n    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));\n    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\n    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));\n    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);    \n    var result = `${hours}:${minutes}:${seconds}`\n    return result;\n}\n\n\n//# sourceURL=webpack://pomodaro-clock/./js/index.js?");

/***/ }),

/***/ "./css/index.css":
/*!***********************!*\
  !*** ./css/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://pomodaro-clock/./css/index.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;