const inputBox = document.getElementById("input-text");
const inputBtn = document.getElementById("input-btn");
const todoList = document.getElementById("todo-list");

function addTodo() {
    const inputText = inputBox.value.trim();

    if (inputText == "") {
        return alert("You must to write in your todo");
    }

    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

    todoList.appendChild(li);
}

function deleteTodo(e) {
    if (e.target.innerText === "Remove") {
        todoList.removeChild(e.target.parentElement);
    }
}

inputBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);