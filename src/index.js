document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('form');

  form.addEventListener('submit', function(e){
    e.preventDefault()
    const taskD = document.querySelector('#new-task-description').value 

    createTask(taskD)
    form.reset
  })

  function createTask(task){
    if(task){
      const li = document.createElement('li')
      const btn = document.createElement("BUTTON")
      li.innerText = task
      li.id = task
      btn.name = task
      btn.innerHTML = "Delete"

      li.append(btn)
      const tasks = document.querySelector('#tasks')
      tasks.append(li)
      form.reset()
    }
  }
  const list = document.querySelector('#list')
  console.log(list)
  list.addEventListener('click', function(e){
    const task = e.target.name
    const taskToDelete = document.getElementById(task);
    console.log(taskToDelete)
    taskToDelete.remove()
  })

});

// create a list item
