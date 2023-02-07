const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?&q=Trier&units=imperial&appid=edc53021032c3b7b6a7b9695e0bcaea1';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); 
        displayResults(data.weather);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  apiFetch();

  function displayResults(data) {
    currentTemp.innerHTML = `${data.weather}&deg;F`;
    
    const iconsrc = `http://openweathermap.org/img/wn/${data.weather.icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('scr', iconsrc);
    weatherIcon.setAttribute('alt', `Image of ${desc}`);
    captionDesc.textContent = `${desc}`;
  }
