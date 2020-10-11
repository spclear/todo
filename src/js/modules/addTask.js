import { getAllLists } from '../common/localStorage';
import updateTasks from './updateTasks';

function addTask(formSelector, taskListSelector) {
  const form = document.querySelector(formSelector);

  form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    const lists = getAllLists();
    const requiredList = lists.find(item => item.id === formData.get('list'));

    const newTask = {
      task: formData.get('task'),
      isImportant: formData.get('important') ? true : false,
      isCompleted: false,
    }

    requiredList.listItems.push(newTask);
    localStorage.setItem('lists', JSON.stringify(lists));

    form.reset();
    updateTasks(taskListSelector);
  })
}

export default addTask;