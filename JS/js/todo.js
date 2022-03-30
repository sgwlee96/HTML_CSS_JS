const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const toDoInput = todoForm.querySelector("input");

function paintToDo(newToDo){
    console.log("I will paint new todo.")
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newToDo);
}

todoForm.addEventListener("submit", handleToDoSubmit);