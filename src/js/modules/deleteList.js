import updateLists from './updateLists'

function deleteListener(listSelector, deletingTriggerClass) {
  const listNode = document.querySelector(listSelector);
  let lists = JSON.parse(localStorage.getItem('lists'));
  
  listNode.addEventListener('click', e => {
    const isTrigger = e.target.classList.contains(deletingTriggerClass);

    if (e.target && isTrigger) {
      const listName = e.target.getAttribute('data-list-name');

      lists = lists.filter(item => item.listName !== listName);
      localStorage.setItem('lists', JSON.stringify(lists));

      updateLists(listSelector);
    }
  })
}

export default deleteListener;