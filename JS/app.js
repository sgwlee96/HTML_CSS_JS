const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    greeting.innerText = `Hello ${username}`; // `${}` -> same as f"aaa{}" in python
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
}

function handleLinkClick(event){
    event.preventDefault();
    console.log(event);

}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);    

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);    