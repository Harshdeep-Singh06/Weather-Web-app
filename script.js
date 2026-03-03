const searchBtn = document.querySelector("button");
const searchInput = document.querySelector("input");
const tempElement = document.querySelector(".temp-value")
const cityElement = document.querySelector(".city-value")
const humidityElement = document.querySelector(".humidity-value")
const windElement = document.querySelector(".wind-value")

searchBtn.addEventListener('click', async function(e){
    const city = searchInput.value;
    // console.log(city);
    const apiKey = "50f14407c3c54e8fc907804711c275cf";
    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=50f14407c3c54e8fc907804711c275cf&units=metric`
    const response = await fetch(Url);
    const data  = await response.json();
    // console.log(data);
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const cityName = data.name;
    
    tempElement.innerText = Math.round(temperature) + "°c";
    cityElement.innerText = cityName;
    humidityElement.innerText = humidity + "%";
    windElement.innerText = windSpeed + " km/h"
})