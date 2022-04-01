const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const toDoInput = todoForm.querySelector("input");

function deleteToDO(event){
    console.log(event);
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteToDO);

    // append should be added at the last
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newToDo);
}

todoForm.addEventListener("submit", handleToDoSubmit);