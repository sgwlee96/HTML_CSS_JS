// const API_KEY = "a2c8abd85e2c9f3a45c9bf4a08075039"

// function onGeoSuccess(position){
//     const lat = position.coords.latitude;
//     const lon = position.coords.longitude;
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=%REACT_APP_API_KEY%&units=metric`;
//     fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//         const city = document.querySelector("#weather span:first-child");
//         const weather = document.querySelector("#weather span:nth-child(2)");
//         const maxTemp = document.querySelector("#weather span:nth-child(3)");
//         const minTemp = document.querySelector("#weather span:last-child");
        
//         city.innerText = data.name;
//         weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
//         maxTemp.innerText = data.main.temp_max;
//         minTemp.innerText = data.main.temp_min;
//     });
// }

// function onGeoError(){
//     alert("Cannot find a location.");
// }

// navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);