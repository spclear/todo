/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/common/initialize.js":
/*!*************************************!*\
  !*** ./src/js/common/initialize.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function init() {
  const isContains = localStorage.getItem('lists');

  if (!isContains) {
    const lists = [
      {
        listName: 'Unlisted',
        listItems: [],
      }
    ];

    localStorage.setItem('lists', JSON.stringify(lists));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/initialize */ "./src/js/common/initialize.js");
/* harmony import */ var _modules_addList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addList */ "./src/js/modules/addList.js");
/* harmony import */ var _modules_deleteList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/deleteList */ "./src/js/modules/deleteList.js");
/* harmony import */ var _modules_updateLists__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/updateLists */ "./src/js/modules/updateLists.js");





document.addEventListener('DOMContentLoaded', () => {
  Object(_common_initialize__WEBPACK_IMPORTED_MODULE_0__["default"])();  
  Object(_modules_updateLists__WEBPACK_IMPORTED_MODULE_3__["default"])('.tasks__list');
  Object(_modules_deleteList__WEBPACK_IMPORTED_MODULE_2__["default"])('.tasks__list', 'delete-list')
  Object(_modules_addList__WEBPACK_IMPORTED_MODULE_1__["addList"])('.new-list', '.tasks__list');
})


/***/ }),

/***/ "./src/js/modules/addList.js":
/*!***********************************!*\
  !*** ./src/js/modules/addList.js ***!
  \***********************************/
/*! exports provided: addList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addList", function() { return addList; });
/* harmony import */ var _updateLists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateLists */ "./src/js/modules/updateLists.js");


const addList = (formSelector, listSelector) => {
  const form = document.querySelector(formSelector);

  form.addEventListener('submit', event => {
    event.preventDefault();
    
    const lists = JSON.parse(localStorage.getItem('lists'));
    const formData = new FormData(form);
    const listName = formData.get('list');
    const listIndex = lists.findIndex(item => item.listName === listName);

    if (lists.length >= 10) {
      alert('Max number of lists is 10!');
    }

    if (listIndex === -1) {
      const newList = {listName, listItems: []}
      lists.push(newList);
    } else {
      alert('This list is already exist!');
    }

    localStorage.setItem('lists', JSON.stringify(lists));
    Object(_updateLists__WEBPACK_IMPORTED_MODULE_0__["default"])(listSelector);
    form.reset();
  });
}

/***/ }),

/***/ "./src/js/modules/deleteList.js":
/*!**************************************!*\
  !*** ./src/js/modules/deleteList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _updateLists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateLists */ "./src/js/modules/updateLists.js");


function deleteListener(listSelector, deletingTriggerClass) {
  const listNode = document.querySelector(listSelector);
  let lists = JSON.parse(localStorage.getItem('lists'));
  
  listNode.addEventListener('click', e => {
    const isTrigger = e.target.classList.contains(deletingTriggerClass);

    if (e.target && isTrigger) {
      const listName = e.target.getAttribute('data-list-name');

      lists = lists.filter(item => item.listName !== listName);
      localStorage.setItem('lists', JSON.stringify(lists));

      Object(_updateLists__WEBPACK_IMPORTED_MODULE_0__["default"])(listSelector);
    }
  })
}

/* harmony default export */ __webpack_exports__["default"] = (deleteListener);

/***/ }),

/***/ "./src/js/modules/updateLists.js":
/*!***************************************!*\
  !*** ./src/js/modules/updateLists.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function updateLists(listSelector) {
  const lists = JSON.parse(localStorage.getItem('lists'));
  const listNode = document.querySelector(listSelector);
  let result = '';
  
  const isNotUnlisted = (listName) => {
    if (listName !== "Unlisted") {
      return `<i class="fas fa-times delete-list" data-list-name=${listName}></i>`
    }
    return '';
  }
  
  lists.forEach(item => {
    result += `
      <div class="tasks__item">
        ${item.listName}
        ${isNotUnlisted(item.listName)}
      </div>
    `
  })

  listNode.innerHTML = result;
}

/* harmony default export */ __webpack_exports__["default"] = (updateLists);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map