document.addEventListener("DOMContentLoaded", () => {
  // your code here
const form = document.querySelector('form')


form.addEventListener('submit', function(e) {
  console.log(e)
  e.preventDefault()
  // const task = document.querySelector('#create-task-form').value
  const newTask = document.querySelector('#new-task-description').value 

  createPost(newTask)
  form.reset()
})

function createPost(newTask){
  const div = document.createElement('div')
  const li = document.createElement('li')
  li.innerText = newTask

  // const link = document.createElement('a')
  // link.className = 'delete-item'


  div.append(newTask)

  const posts = document.querySelector('#tasks')
  posts.append(li)
}

// const delete = document.querySelector('.delete-item')
// delete.addEventListener('click', function(e) {
//   console.log(e)
//   e.target.pairingElement.className.removeChild(e.target.className)
// })


});
