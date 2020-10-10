import { getAllLists } from "../common/localStorage";
import configureSelect from "./configureSelect";

function updateLists(listSelector, selectSelector) {
  const lists = getAllLists()
  const listNode = document.querySelector(listSelector);
  
  let result = `<div class="tasks__item unlisted">Unlisted</div>`;
  
  lists.forEach(item => {
    if (item.id !== 'unlisted') {
      result += `
        <div class="tasks__item ${item.id === 'unlisted' && 'unlisted'}">
          ${item.listName}
          <i class="fas fa-times delete-list" data-list-name='${item.id}'></i>
        </div>
      `
    }
  })
  
  listNode.innerHTML = result;
  configureSelect(selectSelector);
}

export default updateLists;