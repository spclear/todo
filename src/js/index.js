import init from './modules/initialize';
import { addList } from './modules/addList';
import deleteListener from './modules/deleteList';
import updateLists from './modules/updateLists';
import configureSelect from './modules/configureSelect';
import addTask from './modules/addTask';

document.addEventListener('DOMContentLoaded', () => {
  init();  
  updateLists('.tasks__list', '#select-list');
  configureSelect('#select-list');
  deleteListener('.tasks__list', 'delete-list', '#select-list')
  addList('.new-list', '.tasks__list', '#select-list');
  addTask('.new-task');

})
