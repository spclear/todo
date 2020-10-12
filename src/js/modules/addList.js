import { getAllLists } from "../common/localStorage";
import { hidePopup, showPopup } from "../common/popup";
import updateLists from "./updateLists";

export const addList = (formSelector, listSelector, selectSelector, popupSelector) => {
  const form = document.querySelector(formSelector);
  const listNode = document.querySelector(listSelector);

  form.addEventListener('submit', e => {
    e.preventDefault();

    const lists = getAllLists();
    const formData = new FormData(form);
    const listName = formData.get('list');
    const listIndex = lists.findIndex(item => item.id === listName.toLowerCase());

    if (lists.length >= 20) {
      notify('Max number of lists is 20!', 2000);
      return;
    }

    if (listIndex === -1) {
      lists.push({ listName, id: listName.toLowerCase(), listItems: [] });
      localStorage.setItem('lists', JSON.stringify(lists));
      
      updateLists(listSelector, selectSelector);
      listNode.scrollTo(0, listNode.scrollHeight)

      form.reset();
    } else {
      notify('This list already exist!', 2000);
    }
  });


  function notify(message, time = 1500) {
    showPopup(popupSelector, message);
    setTimeout(() => {
      hidePopup(popupSelector)
    }, time);
  }
}