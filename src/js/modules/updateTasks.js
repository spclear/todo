import { getAllLists, getCurrList } from "../common/localStorage";
import { renderTaskItem } from "../common/render";

function updateTasks(listSelector) {
  const reqList = getCurrList();
  const lists = getAllLists();
  const currList = lists.find(item => item.id === reqList);

  let result = '';

  if (currList) {
    currList.listItems.forEach((item, index) => {
      const { task, isImportant, isCompleted } = item;
      result += renderTaskItem(task, index, isImportant, isCompleted);
    })
  }

  if (!result) {
    result = `
      <div class="list-descr__no-tasks">
        You have no tasks yet
      </div>
    `
  }

  document.querySelector(listSelector).innerHTML = result;
  document.querySelector('#current-list').textContent = reqList;
}

export default updateTasks;