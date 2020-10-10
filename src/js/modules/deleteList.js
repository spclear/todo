import { getAllLists } from '../common/localStorage';
import updateLists from './updateLists'

function deleteListener(listSelector, deletingTriggerClass, selectSelector) {
  const listNode = document.querySelector(listSelector);
  
  listNode.addEventListener('click', e => {
    let lists = getAllLists();

    const isTrigger = e.target.classList.contains(deletingTriggerClass);

    if (e.target && isTrigger) {
      const listName = e.target.getAttribute('data-list-name');

      lists = lists.filter(item => item.listName !== listName);
      
      localStorage.setItem('lists', JSON.stringify(lists));
      updateLists(listSelector, selectSelector);
    }
  })
}

export default deleteListener;