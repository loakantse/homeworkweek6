function search(event) {
  event.preventDefault();
  let searchElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchElement.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentElement = document.querySelector("#current-time");
let currentDate = new Date();
let hour = currentDate.getHours();
let minutes = currentDate.getMinutes();

if (minutes < 10) {
  minutes = `0${minutes}`;
}
if (hour < 10) {
  hour = `0${hours}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentDate.getDay()];
currentElement.innerHTML = `${day} ${hour}:${minutes}`;
