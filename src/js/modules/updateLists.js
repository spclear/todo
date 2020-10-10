function updateLists(listSelector) {
  const lists = JSON.parse(localStorage.getItem('lists'));
  const listNode = document.querySelector(listSelector);
  let result = '';
  
  const isNotUnlisted = (listName) => {
    if (listName !== "Unlisted") {
      return `<i class="fas fa-times delete-list" data-list-name=${listName}></i>`
    }
    return '';
  }
  
  lists.forEach(item => {
    result += `
      <div class="tasks__item">
        ${item.listName}
        ${isNotUnlisted(item.listName)}
      </div>
    `
  })

  listNode.innerHTML = result;
}

export default updateLists;