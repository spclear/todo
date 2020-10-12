import { getAllLists } from "../common/localStorage";
import { renderListItem } from '../common/render';

function updateLists(listSelector, selectSelector) {
  const lists = getAllLists();
  const listNode = document.querySelector(listSelector);
  
  let result = `<div data-list-name="unlisted" class="lists__item unlisted">Unlisted</div>`;
  
  lists.forEach(item => {
    if (item.id !== 'unlisted') {
      result += renderListItem(item.id, item.listName);
    }
  })
  
  listNode.innerHTML = result;

  updateSelect(selectSelector);
  document.querySelector('#lists-counter').textContent = lists.length + '/20';

}

function updateSelect(selector) {
  const select = document.querySelector(selector);
  const lists = getAllLists();

  let result = '';

  lists.forEach(item => {
    result += `
      <option value='${item.id}' >
        ${item.listName}
      </option>
    `
  })

  select.innerHTML = result;
}

export default updateLists;