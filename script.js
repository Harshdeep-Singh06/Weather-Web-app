const searchBtn = document.querySelector("button");
const searchInput = document.querySelector("input");

searchBtn.addEventListener('click', async function(e){
    const city = searchInput.value;
    console.log(city);
    const apiKey = "50f14407c3c54e8fc907804711c275cf";
    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=50f14407c3c54e8fc907804711c275cf&units=metric`
    const response = await fetch(Url);
    const data  = await response.json();
    console.log(data);
    
})