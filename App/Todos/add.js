import { todos } from './Database/toDos.js'

export function addToDo(){
    console.log('adaug task')
    let newID = todos[todos.length-1].id + 1
    let newToDo = {}
    newToDo.id = newID
    newToDo.taskName = document.getElementById('addEditTaskName').value
    newToDo.status = document.getElementById('addEditTaskStatus').value

    todos.push(newToDo)
}