let today = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[today.getDay()];
let hour = today.getHours();
let minutes = today.getMinutes();

let date = `${day} ${hour}:${minutes}`;

let todayDate = document.querySelector("h5");
todayDate.innerHTML = `${date}`;

function showCurrentTemp(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector(".temp-today").innerHTML = `${Math.round(
    response.data.main.temp
  )} °C`;
}

function citySearch(event) {
  event.preventDefault();
  let apiKey = "194151164c12413572ea1b43610e293d";
  let city = document.querySelector("#search-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCurrentTemp);
}
let form = document.querySelector("#city-form");
form.addEventListener("submit", citySearch);

function searchCurrentLocation(position) {
  let apiKey = "194151164c12413572ea1b43610e293d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCurrentTemp);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchCurrentLocation);
}

let currentButton = document.querySelector(".current-city-button");
currentButton.addEventListener("click", getCurrentLocation);
