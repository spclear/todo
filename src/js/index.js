import init from './modules/initialize';
import { addList } from './modules/addList';
import onDeleteList from './modules/deleteList';
import updateLists from './modules/updateLists';
import addTask from './modules/addTask';
import setupTasksList from './modules/setupTasksList';
import { changeList } from './modules/changeList';
import { setupPopup } from './common/popup';

document.addEventListener('DOMContentLoaded', () => {
  init();  

  updateLists('.lists__list', '#select-list');
  setupTasksList('#tasks-list');

  onDeleteList('.lists__list', '#select-list', '#tasks-list');
  changeList('.lists__list', '#tasks-list')

  addList('.new-list', '.lists__list', '#select-list', '.popup');
  addTask('.new-task', '#tasks-list');

  setupPopup('.popup');

  // toggle create window 

  const hamburger = document.querySelector('.header__settings-bar .fas');
  const createDiv = document.querySelector('.create');

  hamburger.addEventListener('click', () => {
    createDiv.classList.toggle('hide-create');
    hamburger.classList.toggle('fa-bars');
    hamburger.classList.toggle('fa-times');
  })
})
