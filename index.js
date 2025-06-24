// script.js
const getWeather = () => {
    const city = document.getElementById('cityInput').value;  // Get city input value
    const apiKey = '823ac2b159c6dece9119a3529e096499';  // Your OpenWeatherMap API Key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                document.getElementById('weatherInfo').innerHTML = '<p>City not found</p>';
                return;
            }
            
            // Extract weather information
            const description = data.weather[0].description;
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            // Display the data in the weatherInfo div
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h3>Weather in ${city}</h3>
                <p>Description: ${description}</p>
                <p>Temperature: ${temperature}°C</p>
                <p>Humidity: ${humidity}%</p>
                <p>Wind Speed: ${windSpeed} m/s</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
};
