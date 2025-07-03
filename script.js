const inputBox = document.getElementById("input-text");
const inputBtn = document.getElementById("input-btn");
const todoList = document.getElementById("todo-list");



function addTodo() {
    const inputText = inputBox.value.trim();

    if (inputText.length <= 0) {
        alert("You must write something in your to do");
        return false;
    };

    // if (inputBtn === "Edit") {
    //     editTodo.target.previousElementSibling.innerHTML = inputBox;
    //     inputBtn.value = "Add";
    //     inputBox = "";
    // }

    //Creating li and p tag
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

    // //Creating edit button
    // const editBtn = document.createElement("button");
    // editBtn.innerHTML = "Edit";
    // editBtn.classList.add("btn", "editBtn");
    // li.append(editBtn);

    //Creating delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Remove";
    deleteBtn.classList.add("btn", "deleteBtn");
    li.append(deleteBtn);

    //Append li in document
    todoList.appendChild(li);
    inputBox.value = "";

    saveLocalTodos(inputText);

}

//Updating todo
function updateTodo(e) {
    if (e.target.innerText === "Remove") {
        todoList.removeChild(e.target.parentElement);
        deleteLocalTodos(e.target.parentElement);
    }
}

const saveLocalTodos = (todo) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

const getLocalTodos = () => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
        todos.forEach(todo => {

            //Creating li and p tag
            const li = document.createElement("li");
            const p = document.createElement("p");
            p.innerHTML = todo;
            li.appendChild(p);

            //Creating delete button
            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Remove";
            deleteBtn.classList.add("btn", "deleteBtn");
            li.append(deleteBtn);

            todoList.appendChild(li);
        });
    }
}

const deleteLocalTodos = (todo) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    const todoText = todo.children[0].innerHTML;
    const todoIndex = todoText.indexOf(todoText);
    todos.splice(todoIndex, 1);
    //slice - he creates a copy array and then change in copy array
    //splice - he change in the original array
    localStorage.setItem("todos", JSON.stringify(todos));
}

document.addEventListener("DOMContentLoaded", getLocalTodos);
inputBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", updateTodo);