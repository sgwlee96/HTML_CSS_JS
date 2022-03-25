// const -> constant(변하지 않는 값)
// let -> it can be changed(처음 변수 줄 때만 사용)
// by default, use const
// get Item from array : console.log(week[2])
// Add one more day to the array : push


// object -> 파이썬에서 dict 와 비슷하게 동작
// const player = {
//     name : "SW",
//     height : "176",
//     learning : true
// };

// Function 
// function sayHello(Name, age=10){
//     console.log("Hello, my name is " + Name + "and I am " + age);
// }


// can be used in object
// const player = {
//     name : "Sungwon",
//     sayHello : function(personsName){
//         return ("Hello! " + personsName);
//     },
// };

// // prompt() -> input()
// // const age = parseInt(prompt("How old are you?")); 
// // we don't use anymore

// // parseInt() -> convert string to int
// // if cannot convert, return NaN


// // conditional
// if(isNaN(age)){
//     // condittional
//     console.log("This is not a number");
// } else if(age < 18){
//     console.log("You are too young to drink.");
// } else if(age > 18 && age <= 50){
//     console.log("You can drink.");
// } else{
//     console.log("empty")
// } 

// const title = document.querySelector(".hello h1");
// .hello -> class name

// const h1 = document.querySelector(".hello:first-child h1");

// console.dir(h1)

// function handleTitleClick(){
//     console.log("title was clicked!");
//     h1.style.color = 'blue';
// }

// function handleMouseEnter(){
//     h1.innerText = "Mouse is here! :)";
//     // title.style.color = 'yellow';
// }

// function handleMouseLeave(){
//     h1.innerText = "Mouse is gone :(";
//     // title.style.color = 'red';
// }

// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy(){
//     alert("Copied!");
// }

// function hanldeWindowOffline(){
//     alert("Wifi disconnect");
// }

// function hanldeWindowOnline(){
//     alert("Wifi connected");
// }

// h1.onclick = handleTitleClick;
// h1.onmouseenter = handleMouseEnter;
// h1.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", hanldeWindowOffline);
// window.addEventListener("online", hanldeWindowOnline);


function handleTitleClick(){
//     const clickedClass = "clicked";
//     h1.classList.toggle(clickedClass);
// }
