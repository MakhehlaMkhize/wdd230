let weather = document.querySelector("#weather");

let weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?&q=Durban&units=metric&appid=edc53021032c3b7b6a7b9695e0bcaea1';


async function apiFetch(){
  try {
    const response = await fetch(weatherUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayWeather(data);
    } else {
        throw Error(await response.text());
    }
    } catch (error) {
      currentTemp.textContent = " API did not load. ";
    } 
}
apiFetch();

function displayWeather(data){
  let icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  let desc = `${data.weather[0].description}`;
  let currentTemp = document.createElement("p");
  let weatherIcon = document.createElement("img");
  let descDisplay = document.createElement("p");

  currentTemp.innerHTML = `Current Temperature In Durban: ${data.main.temp} &deg;C`;
  weatherIcon.setAttribute("src", icon);
  weatherIcon.setAttribute("alt", desc);
  descDisplay.innerHTML= desc;

  weather.appendChild(currentTemp);
  weather.appendChild(weatherIcon);
  weather.appendChild(descDisplay);
  
}
// -------------------------------Three day temperature forecast------------------

const forecast = document.querySelector(".forecast");
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=-29.8579&lon=31.0292&units=metric&appid=edc53021032c3b7b6a7b9695e0bcaea1";

async function callForecastAPI(){
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayForecast(data);
    } else {
        throw Error(await response.text());
    }
    } catch (error) {
      currentTemp.textContent = " API did not load. ";
    } 
}
callForecastAPI();

function displayForecast(data){
  let dayOneDataDisplay = document.createElement("section");
  let dayTwoDataDisplay = document.createElement("p");
  let dayThreeDataDisplay = document.createElement("p");
  let forecastIcon1 = document.createElement("img");
  let date = new Date().getDay();
  let dayOfWeek =["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
 
  dayOneDataDisplay.innerHTML = `${dayOfWeek[date]}'s Temperature: ${data.list[0].main.temp} &deg;C`;
  dayTwoDataDisplay.innerHTML = `${dayOfWeek[date+1]}'s Temperature: ${data.list[1].main.temp} &deg;C`;
  dayThreeDataDisplay.innerHTML = `${dayOfWeek[date+2]}'s Temperature: ${data.list[2].main.temp} &deg;C`;
  
  forecast.appendChild(dayOneDataDisplay);
  forecast.appendChild(dayTwoDataDisplay);
  forecast.appendChild(dayThreeDataDisplay);
}
