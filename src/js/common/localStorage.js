export const getListsNames = () => {
  const lists = JSON.parse(localStorage.getItem('lists'));
  return lists.reduce((acc, curr) => (
    acc = [...acc, curr.listName]
  ), []);
}

export const getAllLists = () => JSON.parse(localStorage.getItem('lists'));