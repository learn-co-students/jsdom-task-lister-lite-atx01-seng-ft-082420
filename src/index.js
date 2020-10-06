document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');

  form.addEventListener('submit', function(e){
    e.preventDefault()
    const list = document.createElement('li')
    const task = document.getElementById('tasks').appendChild(list)
    const input = document.getElementById('new-task-description').value
    task.innerHTML = input
  })
});