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
/*! exports provided: getListsNames, getAllLists, getCurrList, setCurrList, getCurrListTasks, deleteTask, toggleTaskProp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListsNames", function() { return getListsNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllLists", function() { return getAllLists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrList", function() { return getCurrList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrList", function() { return setCurrList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrListTasks", function() { return getCurrListTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTask", function() { return deleteTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleTaskProp", function() { return toggleTaskProp; });
const getListsNames = () => {
  const lists = JSON.parse(localStorage.getItem('lists'));
  return lists.reduce((acc, curr) => (
    acc = [...acc, curr.listName]
  ), []);
}

const getAllLists = () => JSON.parse(localStorage.getItem('lists'));
const getCurrList = () => localStorage.getItem('currListId');
const setCurrList = (list) => localStorage.setItem('currListId', list);

const getCurrListTasks = (lists) => {
  const currList = localStorage.getItem('currListId');

  return lists.find(item => item.id === currList).listItems;
}

const deleteTask = (id) => {
  const lists = getAllLists();
  const currList = getCurrList();
  const index = lists.findIndex(item => item.id === currList);
  
  lists[index].listItems = lists[index].listItems.filter((item, i) => i != id);
  
  localStorage.setItem('lists', JSON.stringify(lists))
}

const toggleTaskProp = (id, prop) => {
  const lists = getAllLists();
  const reqList = getCurrListTasks(lists);

  reqList.forEach((item, index) => {
    if (index == id) {
      item[prop] = !item[prop];
    }
  });

  localStorage.setItem('lists', JSON.stringify(lists))
}

/***/ }),

/***/ "./src/js/common/popup.js":
/*!********************************!*\
  !*** ./src/js/common/popup.js ***!
  \********************************/
/*! exports provided: showPopup, hidePopup, setupPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPopup", function() { return showPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hidePopup", function() { return hidePopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupPopup", function() { return setupPopup; });
const showPopup = (popupSelector, messageToShow) => {
  const popup = document.querySelector(popupSelector);
  const message = popup.querySelector('#message');

  message.textContent = messageToShow;
  popup.classList.remove('hide');
}

const hidePopup = (popupSelector) => {
  const popup = document.querySelector(popupSelector);
  popup.classList.add('hide');
}

const setupPopup = (popupSelector) => {
  const popup = document.querySelector(popupSelector);

  popup.addEventListener('click', e => {
    const isClosingTrigger = e.target === popup || e.target.id === 'close';
    
    if (e.target && isClosingTrigger) {
      hidePopup(popupSelector);
    }
  })
}

/***/ }),

/***/ "./src/js/common/render.js":
/*!*********************************!*\
  !*** ./src/js/common/render.js ***!
  \*********************************/
/*! exports provided: renderTaskItem, renderListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTaskItem", function() { return renderTaskItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderListItem", function() { return renderListItem; });
function renderTaskItem(text, id, isImportant, isCompleted) {
  const important = isImportant ? 'important' : '';
  const completed = isCompleted ? 'checked' : '';

  const lineThrough = isCompleted ? 'style="text-decoration: line-through"' : '';
  const bgc = isCompleted ?
    'style="background-color: rgba(0, 0, 0, .2);"'
    : '';

  if (text.length >= 20) {
    let ind = text.slice(10).indexOf(' ', 10);

    ind = (ind === -1) ? 20 : ind;
    text = `${text.slice(0, ind)}<br>${text.slice(ind)}`;
  }

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

function renderListItem(id, listName, color) {
  return `
    <div style="background-color: ${color}" data-list-name="${id}" class="lists__item">
      ${listName}
      <i class="fas fa-times" id="delete" data-list-name='${id}'></i>
    </div>
  `
};

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
/* harmony import */ var _modules_addTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/addTask */ "./src/js/modules/addTask.js");
/* harmony import */ var _modules_setupTasksList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/setupTasksList */ "./src/js/modules/setupTasksList.js");
/* harmony import */ var _modules_changeList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/changeList */ "./src/js/modules/changeList.js");
/* harmony import */ var _common_popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/popup */ "./src/js/common/popup.js");









document.addEventListener('DOMContentLoaded', () => {
  Object(_modules_initialize__WEBPACK_IMPORTED_MODULE_0__["default"])();  

  Object(_modules_updateLists__WEBPACK_IMPORTED_MODULE_3__["default"])('.lists__list', '#select-list');
  Object(_modules_setupTasksList__WEBPACK_IMPORTED_MODULE_5__["default"])('#tasks-list');

  Object(_modules_deleteList__WEBPACK_IMPORTED_MODULE_2__["default"])('.lists__list', '#select-list', '#tasks-list');
  Object(_modules_changeList__WEBPACK_IMPORTED_MODULE_6__["changeList"])('.lists__list', '#tasks-list')

  Object(_modules_addList__WEBPACK_IMPORTED_MODULE_1__["addList"])('.new-list', '.lists__list', '#select-list', '.popup');
  Object(_modules_addTask__WEBPACK_IMPORTED_MODULE_4__["default"])('.new-task', '#tasks-list');

  Object(_common_popup__WEBPACK_IMPORTED_MODULE_7__["setupPopup"])('.popup');

  // toggle create window 

  const hamburger = document.querySelector('.header__settings-bar .fas');
  const createDiv = document.querySelector('.create');

  hamburger.addEventListener('click', () => {
    createDiv.classList.toggle('hide-create');
    hamburger.classList.toggle('fa-bars');
    hamburger.classList.toggle('fa-times');
  })
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
/* harmony import */ var _common_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/popup */ "./src/js/common/popup.js");
/* harmony import */ var _updateLists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateLists */ "./src/js/modules/updateLists.js");




const addList = (formSelector, listSelector, selectSelector, popupSelector) => {
  const form = document.querySelector(formSelector);
  const listNode = document.querySelector(listSelector);

  form.addEventListener('submit', e => {
    e.preventDefault();

    const lists = Object(_common_localStorage__WEBPACK_IMPORTED_MODULE_0__["getAllLists"])();
    const formData = new FormData(form);
    const listName = formData.get('list');
    const listColor = formData.get('color');
    const listIndex = lists.findIndex(item => item.id === listName.toLowerCase());

    if (lists.length >= 20) {
      notify('Max number of lists is 20!', 2000);
      return;
    }

    if (listIndex === -1) {
      lists.push({
        listName,
        id: listName.toLowerCase(),
        listItems: [],
        listColor 
      });
      localStorage.setItem('lists', JSON.stringify(lists));
      
      Object(_updateLists__WEBPACK_IMPORTED_MODULE_2__["default"])(listSelector, selectSelector);
      listNode.scrollTo(0, listNode.scrollHeight)

      form.reset();
    } else {
      notify('This list already exist!', 2000);
    }
  });


  function notify(message, time = 1500) {
    Object(_common_popup__WEBPACK_IMPORTED_MODULE_1__["showPopup"])(popupSelector, message);
    setTimeout(() => {
      Object(_common_popup__WEBPACK_IMPORTED_MODULE_1__["hidePopup"])(popupSelector)
    }, time);
  }
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


function changeList(listSelector, tasksListSelector) {
  const list = document.querySelector(listSelector)

  list.addEventListener('click', e => {
    const isDeletingTrigger = e.target.getAttribute('id') === 'delete';
    const isListItself = e.target.classList.contains(listSelector.slice(1));

    if (e.target && !isListItself && !isDeletingTrigger) {
      const listName = e.target.getAttribute('data-list-name');
      
      localStorage.setItem('currListId', listName);
      Object(_updateTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(tasksListSelector);

      document.querySelector('#current-list').textContent = listName;
    }
  })
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
/* harmony import */ var _common_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/localStorage */ "./src/js/common/localStorage.js");
/* harmony import */ var _updateLists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateLists */ "./src/js/modules/updateLists.js");
/* harmony import */ var _updateTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateTasks */ "./src/js/modules/updateTasks.js");




function deleteList(listSelector, selectSelector, tasksListSelector) {
  const listNode = document.querySelector(listSelector);
  
  listNode.addEventListener('click', e => {
    let lists = Object(_common_localStorage__WEBPACK_IMPORTED_MODULE_0__["getAllLists"])();
    const isTrigger = e.target.getAttribute('id') === 'delete';
    
    if (e.target && isTrigger) {
      const listName = e.target.getAttribute('data-list-name');
      const currList = Object(_common_localStorage__WEBPACK_IMPORTED_MODULE_0__["getCurrList"])();

      lists = lists.filter(item => item.id !== listName);
      localStorage.setItem('lists', JSON.stringify(lists));
      
      Object(_updateLists__WEBPACK_IMPORTED_MODULE_1__["default"])(listSelector, selectSelector);
      
      if (currList == listName) {
        Object(_common_localStorage__WEBPACK_IMPORTED_MODULE_0__["setCurrList"])('unlisted');
        Object(_updateTasks__WEBPACK_IMPORTED_MODULE_2__["default"])(tasksListSelector);
      }
    }
  })
}

/* harmony default export */ __webpack_exports__["default"] = (deleteList);

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

/***/ "./src/js/modules/setupTasksList.js":
/*!******************************************!*\
  !*** ./src/js/modules/setupTasksList.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/localStorage */ "./src/js/common/localStorage.js");
/* harmony import */ var _updateTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateTasks */ "./src/js/modules/updateTasks.js");



function setupTasksList(listSelector) {
  const list = document.querySelector(listSelector);
  Object(_updateTasks__WEBPACK_IMPORTED_MODULE_1__["default"])(listSelector);

  list.addEventListener('click', e => {
    const dataDelete = e.target.getAttribute('data-delete');
    const dataImportant = e.target.getAttribute('data-important');
    const isCompletedTrigger = e.target.getAttribute('type') === 'checkbox';

    if (e.target && dataDelete) {
      Object(_common_localStorage__WEBPACK_IMPORTED_MODULE_0__["deleteTask"])(dataDelete);
    }

    if (e.target && dataImportant) {
      Object(_common_localStorage__WEBPACK_IMPORTED_MODULE_0__["toggleTaskProp"])(dataImportant, 'isImportant');
    }

    if (e.target && isCompletedTrigger) {
      const itemId = e.target.getAttribute('id');
      Object(_common_localStorage__WEBPACK_IMPORTED_MODULE_0__["toggleTaskProp"])(itemId, 'isCompleted');
    }

    if (dataDelete || dataImportant || isCompletedTrigger) {
      Object(_updateTasks__WEBPACK_IMPORTED_MODULE_1__["default"])(listSelector);
    }
  })

}

/* harmony default export */ __webpack_exports__["default"] = (setupTasksList);

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
/* harmony import */ var _common_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/render */ "./src/js/common/render.js");



function updateLists(listSelector, selectSelector) {
  const lists = Object(_common_localStorage__WEBPACK_IMPORTED_MODULE_0__["getAllLists"])();
  const listNode = document.querySelector(listSelector);
  
  let result = `<div data-list-name="unlisted" class="lists__item unlisted">Unlisted</div>`;
  
  lists.forEach(item => {
    if (item.id !== 'unlisted') {
      const { id, listName, listColor } = item;
      result += Object(_common_render__WEBPACK_IMPORTED_MODULE_1__["renderListItem"])(id, listName, listColor);
    }
  })
  
  listNode.innerHTML = result;

  updateSelect(selectSelector);
  document.querySelector('#lists-counter').textContent = lists.length + '/20';

}

function updateSelect(selector) {
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
  const reqList = Object(_common_localStorage__WEBPACK_IMPORTED_MODULE_0__["getCurrList"])();
  const lists = Object(_common_localStorage__WEBPACK_IMPORTED_MODULE_0__["getAllLists"])();
  const currList = lists.find(item => item.id === reqList);

  let result = '';

  if (currList) {
    currList.listItems.forEach((item, index) => {
      const { task, isImportant, isCompleted } = item;
      result += Object(_common_render__WEBPACK_IMPORTED_MODULE_1__["renderTaskItem"])(task, index, isImportant, isCompleted);
    })
  }

  if (!result) {
    result = `
      <div class="list-descr__no-tasks">
        You have no tasks yet
      </div>
    `
  }

  document.querySelector(listSelector).innerHTML = result;
  document.querySelector('#current-list').textContent = reqList;
}

/* harmony default export */ __webpack_exports__["default"] = (updateTasks);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map