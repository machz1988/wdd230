// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const conditionIcon = document.querySelector('#condition-icon');

const url = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=0874fda4b0c5e7c7d087937b085abaea";

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
  
apiFetch();

function displayResults(weatherData){
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    const arr = desc.split(" ");
    for (var i=0; i<arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");

    const figure = document.createElement("figure");
    
    const img = document.createElement("img");
    img.setAttribute('src', iconsrc);
    img.setAttribute('alt', desc);
    figure.appendChild(img);
    
    const captionDesc = document.createElement("figcaption");    
    captionDesc.textContent = str2;
    figure.appendChild(captionDesc);

    conditionIcon.appendChild(figure);

    /*<h2>Current Condition Icon</h2>
            <figure>
                <img src="" alt="" id="weather-icon" />
                <figcaption></figcaption>
            </figure> */
}

// derive the current date using a date object
const now = new Date();

//document.getElementById("currentDate").innerHTML = date;
let date = document.lastModified;
document.getElementById("lastModified").textContent = date;
//document.getElementById("currentYear").innerHTML = 
const currentYear = document.querySelector("#year")
currentYear.textContent = now.getFullYear();