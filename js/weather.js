const API_KEY = "ce06fed002c1d70b9447ae5944d2fded";

function onGeoOk(position) {
    const lat = position.coords.latitude;  //위도
    const lon = position.coords.longitude;  //경도 / coords는 좌표야
    console.log(lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");

            city.innerText = data.name;
            weather.innerText = data.weather[0].main;
        });
}

function onGeoError() {
    alert("Cant't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// 여기까지의 코드는 user의 위치를 알 수 있는 코드!! (개머싯)