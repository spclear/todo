import { getAllLists, getCurrList, setCurrList } from '../common/localStorage';
import updateLists from './updateLists';
import updateTasks from './updateTasks';

function deleteList(listSelector, selectSelector, tasksListSelector) {
  const listNode = document.querySelector(listSelector);
  
  listNode.addEventListener('click', e => {
    let lists = getAllLists();
    const isTrigger = e.target.getAttribute('id') === 'delete';
    
    if (e.target && isTrigger) {
      const listName = e.target.getAttribute('data-list-name');
      const currList = getCurrList();

      lists = lists.filter(item => item.id !== listName);
      localStorage.setItem('lists', JSON.stringify(lists));
      
      updateLists(listSelector, selectSelector);
      
      if (currList == listName) {
        setCurrList('unlisted');
        updateTasks(tasksListSelector);
      }
    }
  })
}

export default deleteList;