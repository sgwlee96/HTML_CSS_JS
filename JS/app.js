const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");

// 반복사용하는 string은 Uppercase constant 로 저장해놓음
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    // Use localStorage API to remember the value (key, value)
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    
}



function handleLinkClick(event){
    event.preventDefault();
    console.log(event);

}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);    


function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);




if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the username(greeting)
    paintGreetings(savedUsername);
    
}