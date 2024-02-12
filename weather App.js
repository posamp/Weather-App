function getWeather() {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const locationInput = document.getElementById('location-input').value;

    if (locationInput === '') {
        alert('Please enter a location.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherResult = document.getElementById('result');

            if (data.cod === '404') {
                weatherResult.innerHTML = 'Location not found. Please enter a valid location.';
            } else {
                const weatherInfo = `
                    <p>Location: ${data.name}, ${data.sys.country}</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Temperature: ${data.main.temp} &#8451;</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                `;
                weatherResult.innerHTML = weatherInfo;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}