export function renderListItem(text, id, isImportant, isCompleted) {
  const important = isImportant ? 'important' : '';
  const completed = isCompleted ? 'checked' : '';

  const lineThrough = isCompleted ? 'style="text-decoration: line-through #fff"' : '';
  const bgc = isCompleted ? 'style="background-color: rgba(0, 0, 0, .5)"' : '';

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