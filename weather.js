const apiKey = "b38271de5ea96a7eb6ade62088f52c8e";
    const searchButton = document.getElementById("searchButton");
    const cityInput = document.getElementById("cityInput");
    const weatherDisplay = document.getElementById("weatherDisplay");

    searchButton.addEventListener("click", () => {
      const city = cityInput.value;
      if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
          .then((response) => response.json())
          .then((data) => {
            if (data.cod === 200) {
              const weatherInfo = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Condition: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
              `;
              weatherDisplay.innerHTML = weatherInfo;
            } else {
              weatherDisplay.innerHTML = `<p>City not found. Try again!</p>`;
            }
          })
          .catch(() => {
            weatherDisplay.innerHTML = `<p>Something went wrong. Please try again later.</p>`;
          });
      } else {
        weatherDisplay.innerHTML = `<p>Please enter a city name.</p>`;
      }
    });
