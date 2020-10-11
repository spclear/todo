import { getAllLists } from "../common/localStorage";
import updateTasks from "./updateTasks";

function configureTasks(listSelector) {
  const list = document.querySelector(listSelector);

  list.addEventListener('click', event => {
    const targ = event.target;

    if (targ && targ.getAttribute('data-delete')) {
      const itemId = targ.getAttribute('data-delete');
      deleteTask(itemId);
      updateTasks(listSelector);
    }

    if (targ && targ.getAttribute('data-important')) {
      const itemId = targ.getAttribute('data-important');
      toggleProperty(itemId, 'isImportant');
      updateTasks(listSelector);
    }

    if (targ && targ.getAttribute('type') === 'checkbox') {
      const itemId = targ.getAttribute('id');
      toggleProperty(itemId, 'isCompleted');
      updateTasks(listSelector);
    }
  })

  function deleteTask(id) {
    const lists = getAllLists();
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
    const lists = getAllLists();
    const reqList = findCurrList(lists);

    reqList.forEach((item, index) => {
      if (index == id) {
        item[prop] = !item[prop];
      }
    });

    localStorage.setItem('lists', JSON.stringify(lists))
  }
}

export default configureTasks;