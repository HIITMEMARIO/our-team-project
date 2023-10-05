const API_KEY = "921e40a1d60064673f21d3c4d5e5de48";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      const name = data.name;
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${Math.floor(
        data.main.temp
      )}°C`;
    });
}
function onGeoError() {
  console.log("위치정보가 꺼져 있습니다");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
