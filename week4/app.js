//api key
//2feb2faa779d431d88bea60f91e2b3dc

const apiKey = "2feb2faa779d431d88bea60f91e2b3dc";
const input = document.getElementById("cityInput");
const button = document.getElementById("btn");
const weatherdiv = document.getElementById("weather-info");


button.addEventListener("click", event => {
//function();
if(input.value.trim()==""){
    alert("Please enter a city name")
    //weatherdiv.innerHTML = "enter a city name. ";
}else{
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', "https://home.openweathermap.org/api_keys"+ input + "&units=metric&appid=" + apiKey);
    ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    };
//need function ourRequst.onload = function{} and ourRequest.onerror = function {}

    ourRequest.send();
}
})