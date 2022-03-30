const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const toDoInput = todoForm.querySelector("input");

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    console.log(newToDo);
}

todoForm.addEventListener("submit", handleToDoSubmit);