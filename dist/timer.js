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

/***/ "./js/timer.js":
/*!*********************!*\
  !*** ./js/timer.js ***!
  \*********************/
/***/ (() => {

eval("var timerId = undefined;\nvar endDifference = undefined;\nvar paused = false;\nonmessage = function(e) {\n    console.log('Message received from main script');\n    let end=30000; // 30 seconds\n    if(e.data === 'start'){\n        startTime = Date.now();\n        if(paused){\n            end = endDifference\n        } \n        endTime = startTime + end;\n        endDifference = end;\n        console.log(\"Timer Started...\", startTime);\n        timerId = setInterval(function(){\n            let currentTime = new Date().getTime();\n            let isCompleted = currentTime >= endTime\n            if(isCompleted){\n                clearInterval(timerId);\n                timerId = undefined;\n                endDifference = undefined;\n                paused = false\n                // remainingTime.textContent = '00:00:00'\n                postMessage('completed')\n            }else{\n            //    secondsElapsed = secondsElapsed + 1000;\n               let result = getRemainingTimeAsText(endTime, currentTime)\n               postMessage(['tick', result])\n               endDifference = endDifference - 1000;\n            }\n        },1000)\n        console.log('timerId', timerId)\n    }else if(e.data === 'stop'){\n        clearInterval(timerId);\n        postMessage('pause');\n        paused = true;\n    }else if(e.data === 'reset'){\n        clearInterval(timerId);\n        timerId = undefined;\n        postMessage('reset');\n    }\n  }\n\n\nfunction getRemainingTimeAsText(endTime, currentTime){\n    var timeleft =  endTime - currentTime;\n    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));\n    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\n    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));\n    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);    \n    var result = `${hours}:${minutes}:${seconds}`\n    return result;\n}\n\n\n//# sourceURL=webpack://pomodaro-clock/./js/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/timer.js"]();
/******/ 	
/******/ })()
;