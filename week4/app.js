//api key
//2feb2faa779d431d88bea60f91e2b3dc

const apiKey = "2feb2faa779d431d88bea60f91e2b3dc";
const button = document.getElementById("btn");
const weatherdiv = document.getElementById("weather-info");


button.addEventListener("click", event => {

    var input = document.getElementById('cityInput').value;
    if (!input) {
        alert("Please enter a city name")
    }

        var ourRequest = new XMLHttpRequest();
        ourRequest.open('GET', "https://api.openweathermap.org/data/2.5/weather?q=" + input + "&units=metric&appid=" + apiKey);
        ourRequest.onload = function () {
            var ourData = JSON.parse(ourRequest.responseText);

            if (ourRequest.status === 200) {
                var weatherdiscription = ourData.weather[0].description;
                var temp = ourData.main.temp;
                var wind = ourData.wind.speed
                weatherdiv.innerHTML += "<p>The weather in " + input + " is " +  weatherdiscription + ".<br/> The temperature is " + temp + "°C with a wind speed of " + wind + "m/s</p>";
            }else{
            weatherdiv.innerHTML = "Error: Unable to fetch data";
            }
        }

            ourRequest.onerror = function () {
                weatherdiv.innerHTML = "Connection failed"
            };

            ourRequest.send();
    }
)