import updateTasks from "./updateTasks";

export function changeList(listSelector, deletingTriggerClass, tasksListSelector, currListSelector) {
  const list = document.querySelector(listSelector)

  list.addEventListener('click', e => {
    const isDeletingTrigger = e.target.classList.contains(deletingTriggerClass);
    const isListItself = e.target.classList.contains(listSelector);

    if (e.target && !isListItself && !isDeletingTrigger) {
      const listName = e.target.getAttribute('data-list-name');

      localStorage.setItem('currListId', listName);
      updateTasks(tasksListSelector);

      document.querySelector(currListSelector).textContent = listName;
    }
  })
} 