

async function getWeather(city) {
    try{

        const res = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`)
        const result = await res.json()
        return result
    } catch (error){
        console.log(error)
    }

}

async function showWeather(city) {
   getWeather(city)
   .then(result => {
        const weatherIconElement = document.getElementById("weather-icon");
        const mainTemperatureElement = document.getElementById("main-temperature");
        const humidityElement = document.getElementById("humidity");
        const windElement = document.getElementById("wind");
        const windGustElement = document.getElementById("wind-gust");
        const weatherMainElement = document.getElementById("weather-main");
        const locationElement = document.getElementById("location");
        const feelsLikeElement = document.getElementById("feels-like");
        console.log(feelsLikeElement)

        const weatherIcon = result.weather[0].icon? result.weather[0].icon:"N/A"
        const mainTemperature = result.main.temp? result.main.temp:"N/A" 
        const humidity = result.main.humidity? result.main.humidity:"N/A" 
        const wind = result.wind.speed?result.wind.speed:"N/A"
        const windGust = result.wind.gust?result.wind.gust:"N/A"
        const weatherMain = result.weather[0].main?result.weather[0].main:"N/A"
        const location = result.name?result.name:"N/A"
        const feelsLike = result.main.feels_like? result.main.feels_like:"N/A" 
        



        weatherIconElement.setAttribute("src",weatherIcon)
        mainTemperatureElement.textContent = `${mainTemperature}° C`
        humidityElement.textContent = `${humidity}`
        windElement.textContent = `${wind}`
        windGustElement.textContent = `${windGust}`
        weatherMainElement.textContent = weatherMain
        locationElement.textContent = location
        feelsLikeElement.textContent = `Feels Like: ${feelsLike}° C`
        
   })
   .catch(error => {
        const weatherContainer = document.getElementById("weather-container");

        alert("Something went wrong, please try again later")
   })

}



const getWeatherBtn = document.getElementById("get-weather-btn") 

getWeatherBtn.addEventListener("click",() => 
    {
        const city = document.getElementById("weather-select").value
        showWeather(city)
    })

