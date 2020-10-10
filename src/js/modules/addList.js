import { getAllLists } from "../common/localStorage";
import updateLists from "./updateLists";

export const addList = (formSelector, listSelector, selectSelector) => {
  const form = document.querySelector(formSelector);

  form.addEventListener('submit', event => {
    event.preventDefault();

    const lists = getAllLists();
    const formData = new FormData(form);
    const listName = formData.get('list');
    const listIndex = lists.findIndex(item => item.id === listName.toLowerCase());

    if (lists.length >= 10) {
      alert('Max number of lists is 10!');
    }

    if (listIndex === -1) {
      lists.push({ listName, id: listName.toLowerCase(), listItems: [] });
      localStorage.setItem('lists', JSON.stringify(lists));
      updateLists(listSelector, selectSelector);
      
      form.reset();
    } else {
      alert('This list is already exist!');
    }
  });
}