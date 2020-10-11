import { getAllLists } from "../common/localStorage";
import { renderListItem } from "../common/render";

function updateTasks(listSelector) {
  const reqList = localStorage.getItem('currListId');
  const list = document.querySelector(listSelector);
  const lists = getAllLists();
  let result = '';

  const currList = lists.find(item => item.id === reqList);

  if (currList) {
    currList.listItems.forEach((item, index) => {
      const { task, isImportant, isCompleted } = item;
      result += renderListItem(task, index, isImportant, isCompleted);
    })
  }

  if (!result) {
    result = `
      <div class="list-descr__no-tasks">
        You have no tasks yet :(
      </div>
    `
  }

  list.innerHTML = result;
}

export default updateTasks;