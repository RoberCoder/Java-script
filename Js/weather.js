const weather = document.querySelector("#weather span:first-child")
const city = document.querySelector("#weather span:last-child")

const API_KEY = "9fb5a7e9e330fcb5b0b46c9ee587d390"

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
     .then((response) => response.json() )
     .then((data) => {
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
     }

     );
}

function onGeoError() {
    alert("We can't find you. Sorry.")

}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError)