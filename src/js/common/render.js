export function renderTaskItem(text, id, isImportant, isCompleted) {
  const important = isImportant ? 'important' : '';
  const completed = isCompleted ? 'checked' : '';

  const lineThrough = isCompleted ? 'style="text-decoration: line-through"' : '';
  const bgc = isCompleted ?
    'style="background-color: rgba(0, 0, 0, .2);"'
    : '';

  if (text.length >= 20) {
    let ind = text.slice(10).indexOf(' ', 10);

    ind = (ind === -1) ? 20 : ind;
    text = `${text.slice(0, ind)}<br>${text.slice(ind)}`;
  }

  return `
    <div ${bgc} class="list-descr__task">
      <input type="checkbox" id="${id}" ${completed} name="completed">
      <span ${lineThrough} class="list-descr__task-text">
        ${text}
      </span>
      <i class="fas fa-star ${important}" data-important="${id}""></i>
      <i class="fas fa-trash" data-delete="${id}"></i>
    </div>
  `
}

export function renderListItem(id, listName, color) {
  return `
    <div style="background-color: ${color}" data-list-name="${id}" class="lists__item">
      ${listName}
      <i class="fas fa-times" id="delete" data-list-name='${id}'></i>
    </div>
  `
};