document.addEventListener('DOMContentLoaded', function() {
  // UI Vars
  const form = document.querySelector('#create-task-form');
  const taskList = document.querySelector('#tasks');

  form.addEventListener('submit', function(e) {
    const taskInput = document.querySelector('#new-task-description').value;
    e.preventDefault();
    createTask(taskInput);
    form.reset();
  });

  // Create Task
  function createTask(taskInput) {
    console.log(taskList);
    // Create li element
    const li = document.createElement('li');
    li.innerText = taskInput;
    console.log(li.innerText);

    const link = document.createElement('a');
    link.className = 'delete-item';
    link.innerHTML = '       X';
    li.appendChild(link);
    // Append li to ul
    taskList.append(li);
  }

  // Remove Task
  function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
      console.log(e.target.parentElement.classList);
      e.target.parentElement.parentElement.remove();
    }
  }
  taskList.addEventListener('click', removeTask);
});
