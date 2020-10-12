import updateTasks from "./updateTasks";

export function changeList(listSelector, tasksListSelector) {
  const list = document.querySelector(listSelector)

  list.addEventListener('click', e => {
    const isDeletingTrigger = e.target.getAttribute('id') === 'delete';
    const isListItself = e.target.classList.contains(listSelector.slice(1));

    if (e.target && !isListItself && !isDeletingTrigger) {
      const listName = e.target.getAttribute('data-list-name');
      
      localStorage.setItem('currListId', listName);
      updateTasks(tasksListSelector);

      document.querySelector('#current-list').textContent = listName;
    }
  })
} 