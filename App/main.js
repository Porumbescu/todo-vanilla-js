import { login } from './Login/login.js'
import { logout } from './Login/logout.js'
import { todos } from './Database/toDos.js'
import { addToDo } from './Todos/add.js'

const loginButton = document.getElementById("loginSubmit")
loginButton.addEventListener('click', login)

const isLoggedIn = localStorage.getItem("isLoggedIn")
if(isLoggedIn){
    document.getElementById('login').setAttribute('hidden', 'true')
    document.getElementById('register').setAttribute('hidden', 'true')
    document.getElementById('user').removeAttribute('hidden')
    document.getElementById('greetings').textContent = 'Salut ' + localStorage.getItem("username")
};

const logoutButton = document.getElementById("logout")
logoutButton.addEventListener('click', logout)

todos.forEach((todo) => {
    console.log(todo)
    const toDoDiv = document.createElement('div')
    toDoDiv.id = todo.id
    const toDoTask = document.createElement('div')
    toDoTask.textContent = todo.taskName
    toDoTask.classList.add('taskName')
    toDoDiv.appendChild(toDoTask)

    const toDoStatus = document.createElement('span')
    toDoStatus.textContent = todo.status
    toDoStatus.classList.add('taskStatus')
    toDoDiv.appendChild(toDoStatus)

    const toDoList = document.getElementById('toDos')
    toDoList.appendChild(toDoDiv)
})

const addEditSubmit = document.getElementById("addEditSubmit")
addEditSubmit.addEventListener('click', addToDo)