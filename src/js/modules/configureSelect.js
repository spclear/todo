import { getAllLists } from '../common/localStorage';

function configureSelect(selector) {
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

export default configureSelect;