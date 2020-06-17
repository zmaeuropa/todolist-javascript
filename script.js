const newTodo = document.querySelector('#add-input');  // input
const addTodoBtn = document.querySelector('.add-btn'); // button add
const deleteTodo = document.querySelector('.delete-todo'); // button delete
const todoList = document.querySelector('.ks-cboxtags'); // liste pur l'instant vide ou le template sera implanté
const todoTemplate = document.querySelector('#todo-template'); // template 
const msg = document.querySelector('.alert'); 
let id = 1; //id variable 

newTodo.addEventListener('keyup' , (e) => {
    if (e.keyCode === 13 && inputValid()) {
        addTodo();
    } else {
        messageError();
    }
});

addTodoBtn.addEventListener('click' , () => {
    if (inputValid()) {
        addTodo();
    } else {
        messageError();
    }
});

deleteTodo.addEventListener('click' , () => {
    const todos = document.querySelectorAll('.todo');
    todos.forEach(todo => {
        const checked = todo.querySelector('input').checked;
        if (checked) {
            todo.remove();
        }
    })
});

function addTodo() {
    const todoElement = document.importNode(todoTemplate.content , true);
    const checkbox = todoElement.querySelector('input');
    checkbox.id = id;
    const label = todoElement.querySelector('label');
    label.htmlFor = id;
    label.append(newTodo.value);
    todoList.appendChild(todoElement);
    newTodo.value = '';
    id++;
}

function inputValid() {
    return newTodo.value !== ''
}

function messageError() {
    if (newTodo.value === '') {
        msg.classList.add('alert-danger');
        msg.innerHTML = 'Please enter fields';
       
        setTimeout(() => {
            msg.classList.remove('alert-danger');
            msg.innerHTML = '';
        }, 3000)
       
        
    }
}
