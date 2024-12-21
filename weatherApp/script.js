const enter = document.getElementById("enter")
const btn = document.getElementById("btn")
const temp = document.getElementById("temp")
const icon = document.getElementById("icon")
const cityLat = document.getElementById("cityLat")
const cityLong = document.getElementById("cityLong")
const min = document.getElementById("min")
const max = document.getElementById("max")
const sunrise = document.getElementById("sunrise")
const sunset = document.getElementById('sunset')
const windSpeed = document.getElementById("windSpeed")
const dir = document.getElementById("dir")
const thedate = document.getElementById("thedate")
const humidity = document.getElementById("humidity")
const pressure = document.getElementById("pressure")
const visibility = document.getElementById("visibility")
const cloud = document.getElementById("cloud")
const citycountry = document.getElementById("citycountry")

const apikey = "31d508e9fb2722256c535eb6a1fbc094"


function coordinates(city) {

    const endpoint = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apikey}`

    fetch(endpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status}`);
            }
            return response.json();

        })

        .then(data => {
            if (data.length === 0) {
                throw new Error("No results found. Enter correct city name.");
            }
            const latitude = data[0].lat

            const longitude = data[0].lon

            myweather(latitude, longitude)
        })

        .catch(error => {
            console.error("error fetching data:", error.message)
            temp.textContent = `Error: ${error.message}`;
        })



}



const weatherapi = "471159a56b0b4c9e1e53ab8e69aa53ed"

function coordinates(city) {
    const endpoint = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apikey}`;
    fetch(endpoint)
        .then(response => {
            if (!response.ok) throw new Error(`${response.status}: City not found`);
            return response.json();
        })
        .then(data => {
            if (data.length === 0) throw new Error("No results found. Please check the city name.");
            const { lat, lon } = data[0];
            myweather(lat, lon);
        })
        .catch(error => {
            console.error("Error fetching data:", error.message);
            temp.textContent = `Error: ${error.message}`;
        });
}

function myweather(lat, lon) {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherapi}&units=metric`;
    fetch(endpoint)
        .then(response => {
            if (!response.ok) throw new Error(`${response.status}: Weather data unavailable`);
            return response.json();
        })
        .then(data => {
            temp.textContent = `${data.main.temp}°C`;
            citycountry.textContent = `${data.name}, ${data.sys.country}`;
            cityLat.textContent = `Latitude: ${data.coord.lat}`;
            cityLong.textContent = `Longitude: ${data.coord.lon}`;
            min.textContent = `Min: ${data.main.temp_min}°C`;
            max.textContent = `Max: ${data.main.temp_max}°C`;
            humidity.textContent = `Humidity: ${data.main.humidity}%`;
            pressure.textContent = `Pressure: ${data.main.pressure} hPa`;
            visibility.textContent = `Visibility: ${data.visibility / 1000} km`;
            cloud.textContent = `Cloud: ${data.clouds.all}%`;
            windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
            dir.textContent = `Wind Direction: ${getWindDirection(data.wind.deg)} (${data.wind.deg}°)`;
            sunrise.textContent = `Sunrise: ${formatTime(data.sys.sunrise)}`;
            sunset.textContent = `Sunset: ${formatTime(data.sys.sunset)}`;
            thedate.textContent = `Date: ${new Date(data.dt * 1000).toLocaleDateString()}`;
            icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}" />`;
        })
        .catch(error => {
            console.error("Error fetching data:", error.message);
            temp.textContent = `Error: ${error.message}`;
        });
}






btn.addEventListener("click", () => {
    const text = enter.value.trim()
    if(text===''){
        alert('please enter city name')
    }
    else{
    coordinates(text)

    enter.value = ''
    }
})

function formatTime(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit' });

}

function getWindDirection(degree) {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(degree / 45) % 8;
    return directions[index];
}

