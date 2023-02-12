const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');

const captionDesc = document.querySelector('figcaption');


const url = 'https://api.openweathermap.org/data/2.5/weather?&q=Trier&units=imperial&appid=edc53021032c3b7b6a7b9695e0bcaea1';

async function apiFetch(){
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
    } catch (error) {
      currentTemp.textContent = " API did not load. ";
    } 
}
apiFetch();

function displayResults(data){
  let desc = data.weather[0].description;
  currentTemp.textContent = data.main.temp;
  captionDesc.textContent = desc;
  let iconData = data.weather[0].icon;
  let iconsrc = `http://openweathermap.org/img/wn/${iconData}@2x.png`;  
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', `Image of ${desc}`);

}