const apiKey = '1c1e08c0a1a5d7d23b96330f53f9085c';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

function getWeather() {
    const cityInput = document.getElementById('cityInput').value;

    if (cityInput === '') {
        alert('Please enter a city name.');
        return;
    }

    const endpoint = `${apiUrl}?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');

    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    const weatherHtml = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
    `;

    weatherInfo.innerHTML = weatherHtml;
}
