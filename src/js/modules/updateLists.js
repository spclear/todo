import { getListsNames } from "../common/localStorage";

function updateLists(listSelector) {
  const listNames = getListsNames();
  const listNode = document.querySelector(listSelector);
  let result = '';
  
  const isNotUnlisted = (listName) => {
    if (listName !== "Unlisted") {
      return `<i class="fas fa-times delete-list" data-list-name='${listName}'></i>`
    }
    return '';
  }
  
  listNames.forEach(item => {
    result += `
      <div class="tasks__item ${item === 'Unlisted' && 'unlisted'}">
        ${item}
        ${isNotUnlisted(item)}
      </div>
    `
  })

  listNode.innerHTML = result;
}

export default updateLists;