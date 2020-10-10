function init() {
  const isContains = localStorage.getItem('lists');

  if (!isContains) {
    const lists = [
      {
        id: 'unlisted',
        listName: 'Unlisted',
        listItems: [],
      }
    ];

    localStorage.setItem('lists', JSON.stringify(lists));
  }
}

export default init;