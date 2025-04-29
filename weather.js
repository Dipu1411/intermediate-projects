let cityInput = document.getElementById('cityInput');
let searchBtn = document.getElementById('searchButton');
let cityName = document.getElementById('cityName');
let temperature = document.getElementById('temperature');
let description = document.getElementById('description');
let humidity = document.getElementById('humidity');
let windSpeed = document.getElementById('windSpeed');
let weatherInfo = document.getElementById('weatherInfo');
let loading = document.getElementById('loading');
let errorDisplay = document.getElementById('error');

let API_KEY = 'a85626692bbb35ba3149a52164ff7b9b';
let API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=abc123';

async function checkWeather(city) {
    loading.style.display = 'block';
    errorDisplay.textContent = '';
    weatherInfo.style.display = 'none';

    try {
        let response = await fetch(API_URL + city + `&appid=${API_KEY}`);
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("City not found");
            } else {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        }
        let data = await response.json();
        console.log(data);

        cityName.textContent = data.name;
        temperature.textContent = `Temperature : ${data.main.temp}C`;
        description.textContent = `Description : ${data.weather[0].description}`;
        humidity.textContent = `Humidity : ${data.main.humidity}%`;
        windSpeed.textContent = `Wind Speed : ${data.wind.speed}m/s`;

        weatherInfo.style.display = 'block';
        loading.style.display = 'none';
    } catch (error) {
        errorDisplay.textContent = error.message;
        loading.style.display = 'none';
    }
}

searchBtn.addEventListener('click', () => {
    let city = cityInput.value;
    if (city) {
        checkWeather(city);
    }
});
