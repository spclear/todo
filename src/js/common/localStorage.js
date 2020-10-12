export const getListsNames = () => {
  const lists = JSON.parse(localStorage.getItem('lists'));
  return lists.reduce((acc, curr) => (
    acc = [...acc, curr.listName]
  ), []);
}

export const getAllLists = () => JSON.parse(localStorage.getItem('lists'));
export const getCurrList = () => localStorage.getItem('currListId');
export const setCurrList = (list) => localStorage.setItem('currListId', list);

export const getCurrListTasks = (lists) => {
  const currList = localStorage.getItem('currListId');

  return lists.find(item => item.id === currList).listItems;
}

export const deleteTask = (id) => {
  const lists = getAllLists();
  const currList = getCurrList();
  const index = lists.findIndex(item => item.id === currList);
  
  lists[index].listItems = lists[index].listItems.filter((item, i) => i != id);
  
  localStorage.setItem('lists', JSON.stringify(lists))
}

export const toggleTaskProp = (id, prop) => {
  const lists = getAllLists();
  const reqList = getCurrListTasks(lists);

  reqList.forEach((item, index) => {
    if (index == id) {
      item[prop] = !item[prop];
    }
  });

  localStorage.setItem('lists', JSON.stringify(lists))
}