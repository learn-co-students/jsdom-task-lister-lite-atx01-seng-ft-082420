// First we make sure the DOM loads before running functions
document.addEventListener("DOMContentLoaded", () => {

  // Then create a way to refer to the form you will need tag where the information is sent
  const form = document.querySelector('#create-task-form')
  const toDo = document.querySelector('#list')
  
  // Then add event listener for our submit or mouse function
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    const description = document.querySelector('#new-task-description').value
    createTask(description)
    form.reset()
  })

  // Then use the data we recieved from form
  function createTask(description) {
    const taskli = document.createElement('li')
    taskli.innerText = description
    toDo.append(taskli)
  }

})
