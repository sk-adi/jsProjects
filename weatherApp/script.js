const enter = document.getElementById("enter")
const btn = document.getElementById("btn")
const temp = document.getElementById("temp")

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
            
            const longitude=data[0].lon
            
            myweather(latitude,longitude)
            alert(latitude,longitude)
        })

        .catch(error => {
            console.error("error fetching data:", error.message)
            temp.textContent = `Error: ${error.message}`;
        })



}



const weatherapi = "471159a56b0b4c9e1e53ab8e69aa53ed"


function myweather(a,b) {

    const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${a}&lon=${b}&appid=${weatherapi}&units=metric`

    fetch(endpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status}`);
            }
            return response.json();

        })

        .then(data => {
            
            const temperature = data.main.temp
            temp.textContent = `${temperature}°C`
        })

        .catch(error => {
            console.error("error fetching data:", error.message)
            temp.textContent = `Error: ${error.message}`;
        })



}





btn.addEventListener("click", () => {
    const text = enter.value.trim()
    coordinates(text)

    enter.value = ''
})