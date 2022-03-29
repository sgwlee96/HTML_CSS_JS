const clock = document.querySelector("h2#clock");

function sayHello(){
    console.log("Hello");
}

// setInterval(function name, ms);
setInterval(sayHello, 5000);