import init from './common/initialize';
import { addList } from './modules/addList';
import deleteListener from './modules/deleteList';
import updateLists from './modules/updateLists';

document.addEventListener('DOMContentLoaded', () => {
  init();  
  updateLists('.tasks__list');
  deleteListener('.tasks__list', 'delete-list')
  addList('.new-list', '.tasks__list');
})
