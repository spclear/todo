import updateLists from "./updateLists";

export const addList = (formSelector, listSelector) => {
  const form = document.querySelector(formSelector);

  form.addEventListener('submit', event => {
    event.preventDefault();
    
    const lists = JSON.parse(localStorage.getItem('lists'));
    const formData = new FormData(form);
    const listName = formData.get('list');
    const listIndex = lists.findIndex(item => item.listName === listName);

    if (lists.length >= 10) {
      alert('Max number of lists is 10!');
    }

    if (listIndex === -1) {
      const newList = {listName, listItems: []}
      lists.push(newList);
    } else {
      alert('This list is already exist!');
    }

    localStorage.setItem('lists', JSON.stringify(lists));
    updateLists(listSelector);
    form.reset();
  });
}