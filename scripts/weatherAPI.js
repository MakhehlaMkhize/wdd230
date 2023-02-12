const url = 'https://api.openweathermap.org/data/2.5/weather?&q=Durban&units=imperial&appid=edc53021032c3b7b6a7b9695e0bcaea1';
const weather = document.querySelector(".weather");

const getWeatherData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  displayWeatherData(data.weatherData);
};

getWeatherData();

const displayWeatherData = (weatherData)=>{
  let currentTemp = document.createElement("section");
  
  currentTemp.textContent = weatherData.temp;

  weather.appendChild(currentTemp)
}