import init from './modules/initialize';
import { addList } from './modules/addList';
import deleteListener from './modules/deleteList';
import updateLists from './modules/updateLists';
import configureSelect from './modules/configureSelect';
import addTask from './modules/addTask';
import updateTasks from './modules/updateTasks';
import configureTasks from './modules/configureTasksList';
import { changeList } from './modules/changeList';

document.addEventListener('DOMContentLoaded', () => {
  init();  

  updateTasks('#tasks-list');
  configureTasks('#tasks-list');

  updateLists('.lists__list', '#select-list');
  configureSelect('#select-list');

  deleteListener('.lists__list', 'delete-list', '#select-list');
  changeList('.lists__list', 'delete-list', '#tasks-list', '#list-name')

  addList('.new-list', '.lists__list', '#select-list');
  addTask('.new-task', '#tasks-list');
})
