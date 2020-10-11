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

/***/ "./src/js/common/localStorage.js":
/*!***************************************!*\
  !*** ./src/js/common/localStorage.js ***!
  \***************************************/
/*! exports provided: getListsNames, getAllLists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListsNames", function() { return getListsNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllLists", function() { return getAllLists; });
const getListsNames = () => {
  const lists = JSON.parse(localStorage.getItem('lists'));
  return lists.reduce((acc, curr) => (
    acc = [...acc, curr.listName]
  ), []);
}

const getAllLists = () => JSON.parse(localStorage.getItem('lists'));

/***/ }),

/***/ "./src/js/common/render.js":
/*!*********************************!*\
  !*** ./src/js/common/render.js ***!
  \*********************************/
/*! exports provided: renderListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderListItem", function() { return renderListItem; });
function renderListItem(text, id, isImportant, isCompleted) {
  const important = isImportant ? 'important' : '';
  const completed = isCompleted ? 'checked' : '';

  const lineThrough = isCompleted ? 'style="text-decoration: line-through #fff"' : '';
  const bgc = isCompleted ? 'style="background-color: rgba(0, 0, 0, .5)"' : '';

  return `
    <div ${bgc} class="list-descr__task">
      <input type="checkbox" id="${id}" ${completed} name="completed">
      <span ${lineThrough} class="list-descr__task-text">
        ${text}
      </span>
      <i class="fas fa-star ${important}" data-important="${id}""></i>
      <i class="fas fa-trash" data-delete="${id}"></i>
    </div>
  `
}

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/initialize */ "./src/js/modules/initialize.js");
/* harmony import */ var _modules_addList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addList */ "./src/js/modules/addList.js");
/* harmony import */ var _modules_deleteList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/deleteList */ "./src/js/modules/deleteList.js");
/* harmony import */ var _modules_updateLists__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/updateLists */ "./src/js/modules/updateLists.js");
/* harmony import */ var _modules_configureSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/configureSelect */ "./src/js/modules/configureSelect.js");
/* harmony import */ var _modules_addTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/addTask */ "./src/js/modules/addTask.js");
/* harmony import */ var _modules_updateTasks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/updateTasks */ "./src/js/modules/updateTasks.js");
/* harmony import */ var _modules_configureTasksList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/configureTasksList */ "./src/js/modules/configureTasksList.js");
/* harmony import */ var _modules_changeList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/changeList */ "./src/js/modules/changeList.js");










document.addEventListener('DOMContentLoaded', () => {
  Object(_modules_initialize__WEBPACK_IMPORTED_MODULE_0__["default"])();  

  Object(_modules_updateTasks__WEBPACK_IMPORTED_MODULE_6__["default"])('#tasks-list');
  Object(_modules_configureTasksList__WEBPACK_IMPORTED_MODULE_7__["default"])('#tasks-list');

  Object(_modules_updateLists__WEBPACK_IMPORTED_MODULE_3__["default"])('.lists__list', '#select-list');
  Object(_modules_configureSelect__WEBPACK_IMPORTED_MODULE_4__["default"])('#select-list');

  Object(_modules_deleteList__WEBPACK_IMPORTED_MODULE_2__["default"])('.lists__list', 'delete-list', '#select-list');
  Object(_modules_changeList__WEBPACK_IMPORTED_MODULE_8__["changeList"])('.lists__list', 'delete-list', '#tasks-list', '#list-name')

  Object(_modules_addList__WEBPACK_IMPORTED_MODULE_1__["addList"])('.new-list', '.lists__list', '#select-list');
  Object(_modules_addTask__WEBPACK_IMPORTED_MODULE_5__["default"])('.new-task', '#tasks-list');
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
/* harmony import */ var _common_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/localStorage */ "./src/js/common/localStorage.js");
/* harmony import */ var _updateLists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateLists */ "./src/js/modules/updateLists.js");



const addList = (formSelector, listSelector, selectSelector) => {
  const form = document.querySelector(formSelector);

  form.addEventListener('submit', event => {
    event.preventDefault();

    const lists = Object(_common_localStorage__WEBPACK_IMPORTED_MODULE_0__["getAllLists"])();
    const formData = new FormData(form);
    const listName = formData.get('list');
    const listIndex = lists.findIndex(item => item.id === listName.toLowerCase());

    if (lists.length >= 10) {
      alert('Max number of lists is 10!');
    }

    if (listIndex === -1) {
      lists.push({ listName, id: listName.toLowerCase(), listItems: [] });
      localStorage.setItem('lists', JSON.stringify(lists));
      Object(_updateLists__WEBPACK_IMPORTED_MODULE_1__["default"])(listSelector, selectSelector);
      
      form.reset();
    } else {
      alert('This list is already exist!');
    }
  });
}

/***/ }),

/***/ "./src/js/modules/addTask.js":
/*!***********************************!*\
  !*** ./src/js/modules/addTask.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/localStorage */ "./src/js/common/localStorage.js");
/* harmony import */ var _updateTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateTasks */ "./src/js/modules/updateTasks.js");



function addTask(formSelector, taskListSelector) {
  const form = document.querySelector(formSelector);

  form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    const lists = Object(_common_localStorage__WEBPACK_IMPORTED_MODULE_0__["getAllLists"])();
    const requiredList = lists.find(item => item.id === formData.get('list'));

    const newTask = {
      task: formData.get('task'),
      isImportant: formData.get('important') ? true : false,
      isCompleted: false,
    }

    requiredList.listItems.push(newTask);
    localStorage.setItem('lists', JSON.stringify(lists));

    form.reset();
    Object(_updateTasks__WEBPACK_IMPORTED_MODULE_1__["default"])(taskListSelector);
  })
}

/* harmony default export */ __webpack_exports__["default"] = (addTask);

/***/ }),

/***/ "./src/js/modules/changeList.js":
/*!**************************************!*\
  !*** ./src/js/modules/changeList.js ***!
  \**************************************/
/*! exports provided: changeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeList", function() { return changeList; });
/* harmony import */ var _updateTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateTasks */ "./src/js/modules/updateTasks.js");


function changeList(listSelector, deletingTriggerClass, tasksListSelector, currListSelector) {
  const list = document.querySelector(listSelector)

  list.addEventListener('click', e => {
    const isDeletingTrigger = e.target.classList.contains(deletingTriggerClass);
    const isListItself = e.target.classList.contains(listSelector);

    if (e.target && !isListItself && !isDeletingTrigger) {
      const listName = e.target.getAttribute('data-list-name');

      localStorage.setItem('currListId', listName);
      Object(_updateTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(tasksListSelector);

      document.querySelector(currListSelector).textContent = listName;
    }
  })
} 

/***/ }),

/***/ "./src/js/modules/configureSelect.js":
/*!*******************************************!*\
  !*** ./src/js/modules/configureSelect.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/localStorage */ "./src/js/common/localStorage.js");


function configureSelect(selector) {
  const select = document.querySelector(selector);
  const lists = Object(_common_localStorage__WEBPACK_IMPORTED_MODULE_0__["getAllLists"])();

  let result = '';

  lists.forEach(item => {
    result += `
      <option value='${item.id}' >
        ${item.listName}
      </option>
    `
  })

  select.innerHTML = result;
}

/* harmony default export */ __webpack_exports__["default"] = (configureSelect);

/***/ }),

/***/ "./src/js/modules/configureTasksList.js":
/*!**********************************************!*\
  !*** ./src/js/modules/configureTasksList.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/localStorage */ "./src/js/common/localStorage.js");
/* harmony import */ var _updateTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateTasks */ "./src/js/modules/updateTasks.js");



function configureTasks(listSelector) {
  const list = document.querySelector(listSelector);

  list.addEventListener('click', event => {
    const targ = event.target;

    if (targ && targ.getAttribute('data-delete')) {
      const itemId = targ.getAttribute('data-delete');
      deleteTask(itemId);
      Object(_updateTasks__WEBPACK_IMPORTED_MODULE_1__["default"])(listSelector);
    }

    if (targ && targ.getAttribute('data-important')) {
      const itemId = targ.getAttribute('data-important');
      toggleProperty(itemId, 'isImportant');
      Object(_updateTasks__WEBPACK_IMPORTED_MODULE_1__["default"])(listSelector);
    }

    if (targ && targ.getAttribute('type') === 'checkbox') {
      const itemId = targ.getAttribute('id');
      toggleProperty(itemId, 'isCompleted');
      Object(_updateTasks__WEBPACK_IMPORTED_MODULE_1__["default"])(listSelector);
    }
  })

  function deleteTask(id) {
    const lists = Object(_common_localStorage__WEBPACK_IMPORTED_MODULE_0__["getAllLists"])();
    const currList = localStorage.getItem('currListId');
    const ind = lists.findIndex(item => item.id === currList);
    
    lists[ind].listItems = lists[ind].listItems.filter((item, index) => index != id);
    
    localStorage.setItem('lists', JSON.stringify(lists))
  }

  function findCurrList(lists) {
    const currList = localStorage.getItem('currListId');

    return lists.find(item => item.id === currList).listItems;
  }

  function toggleProperty(id, prop) {
    const lists = Object(_common_localStorage__WEBPACK_IMPORTED_MODULE_0__["getAllLists"])();
    const reqList = findCurrList(lists);

    reqList.forEach((item, index) => {
      if (index == id) {
        item[prop] = !item[prop];
      }
    });

    localStorage.setItem('lists', JSON.stringify(lists))
  }
}

/* harmony default export */ __webpack_exports__["default"] = (configureTasks);

/***/ }),

/***/ "./src/js/modules/deleteList.js":
/*!**************************************!*\
  !*** ./src/js/modules/deleteList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/localStorage */ "./src/js/common/localStorage.js");
/* harmony import */ var _updateLists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateLists */ "./src/js/modules/updateLists.js");



function deleteListener(listSelector, deletingTriggerClass, selectSelector) {
  const listNode = document.querySelector(listSelector);
  
  listNode.addEventListener('click', e => {
    let lists = Object(_common_localStorage__WEBPACK_IMPORTED_MODULE_0__["getAllLists"])();
    const isTrigger = e.target.classList.contains(deletingTriggerClass);
    
    if (e.target && isTrigger) {
      const listName = e.target.getAttribute('data-list-name');

      lists = lists.filter(item => item.id !== listName);

      localStorage.setItem('lists', JSON.stringify(lists));
      Object(_updateLists__WEBPACK_IMPORTED_MODULE_1__["default"])(listSelector, selectSelector);
    }
  })
}

/* harmony default export */ __webpack_exports__["default"] = (deleteListener);

/***/ }),

/***/ "./src/js/modules/initialize.js":
/*!**************************************!*\
  !*** ./src/js/modules/initialize.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function init() {
  const isContains = localStorage.getItem('lists');

  if (!isContains) {
    const lists = [
      {
        id: 'unlisted',
        listName: 'Unlisted',
        listItems: [],
      }
    ];

    localStorage.setItem('lists', JSON.stringify(lists));
    localStorage.setItem('currListId', 'unlisted');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ }),

/***/ "./src/js/modules/updateLists.js":
/*!***************************************!*\
  !*** ./src/js/modules/updateLists.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/localStorage */ "./src/js/common/localStorage.js");
/* harmony import */ var _configureSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configureSelect */ "./src/js/modules/configureSelect.js");



function updateLists(listSelector, selectSelector) {
  const lists = Object(_common_localStorage__WEBPACK_IMPORTED_MODULE_0__["getAllLists"])()
  const listNode = document.querySelector(listSelector);
  
  let result = `<div data-list-name="unlisted" class="lists__item unlisted">Unlisted</div>`;
  
  lists.forEach(item => {
    if (item.id !== 'unlisted') {
      result += `
        <div data-list-name="${item.id}" class="lists__item">
          ${item.listName}
          <i class="fas fa-times delete-list" data-list-name='${item.id}'></i>
        </div>
      `
    }
  })
  
  listNode.innerHTML = result;
  Object(_configureSelect__WEBPACK_IMPORTED_MODULE_1__["default"])(selectSelector);
}

/* harmony default export */ __webpack_exports__["default"] = (updateLists);

/***/ }),

/***/ "./src/js/modules/updateTasks.js":
/*!***************************************!*\
  !*** ./src/js/modules/updateTasks.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/localStorage */ "./src/js/common/localStorage.js");
/* harmony import */ var _common_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/render */ "./src/js/common/render.js");



function updateTasks(listSelector) {
  const reqList = localStorage.getItem('currListId');
  const list = document.querySelector(listSelector);
  const lists = Object(_common_localStorage__WEBPACK_IMPORTED_MODULE_0__["getAllLists"])();
  let result = '';

  const currList = lists.find(item => item.id === reqList);

  if (currList) {
    currList.listItems.forEach((item, index) => {
      const { task, isImportant, isCompleted } = item;
      result += Object(_common_render__WEBPACK_IMPORTED_MODULE_1__["renderListItem"])(task, index, isImportant, isCompleted);
    })
  }

  if (!result) {
    result = `
      <div class="list-descr__no-tasks">
        You have no tasks yet :(
      </div>
    `
  }

  list.innerHTML = result;
}

/* harmony default export */ __webpack_exports__["default"] = (updateTasks);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map