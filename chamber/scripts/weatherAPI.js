let weather = document.querySelector("#weather");

let url = 'https://api.openweathermap.org/data/2.5/weather?&q=Durban&units=metric&appid=edc53021032c3b7b6a7b9695e0bcaea1';
async function apiFetch(){
  try {
    const response = await fetch(url);
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
