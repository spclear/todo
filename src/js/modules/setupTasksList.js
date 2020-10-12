import { deleteTask, toggleTaskProp } from "../common/localStorage";
import updateTasks from "./updateTasks";

function setupTasksList(listSelector) {
  const list = document.querySelector(listSelector);
  updateTasks(listSelector);

  list.addEventListener('click', e => {
    const dataDelete = e.target.getAttribute('data-delete');
    const dataImportant = e.target.getAttribute('data-important');
    const isCompletedTrigger = e.target.getAttribute('type') === 'checkbox';

    if (e.target && dataDelete) {
      deleteTask(dataDelete);
    }

    if (e.target && dataImportant) {
      toggleTaskProp(dataImportant, 'isImportant');
    }

    if (e.target && isCompletedTrigger) {
      const itemId = e.target.getAttribute('id');
      toggleTaskProp(itemId, 'isCompleted');
    }

    if (dataDelete || dataImportant || isCompletedTrigger) {
      updateTasks(listSelector);
    }
  })

}

export default setupTasksList;