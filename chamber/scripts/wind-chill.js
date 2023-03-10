const iconElem = document.querySelector("#condition-icon");
const windSpeed = document.querySelector("#wind-speed");
const windChill = document.querySelector("#wind-chill");
const url = "https://api.openweathermap.org/data/2.5/weather?q=Chilchota,MX&units=metric&appid=0874fda4b0c5e7c7d087937b085abaea";

let tempC = 0;
let windSpeedKmh = 0;

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
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
    tempC = weatherData.main.temp.toFixed(0);

    const iconSrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    
    const desc = weatherData.weather[0].description;
    const arr = desc.split(" ");
    for (var i=0; i<arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");

    const figure = document.createElement("figure");
    
    const img = document.createElement("img");
    img.setAttribute('src', iconSrc);
    img.setAttribute('alt', `${desc} icon`);
    figure.appendChild(img);
    
    const captionDesc = document.createElement("figcaption");    
    captionDesc.style.textAlign = "center";
    captionDesc.innerHTML = `<strong>${str2}</strong>`;
    figure.appendChild(captionDesc);
    figure.style.textAlign = "center";

    iconElem.appendChild(figure);

    const displayTemp = document.createElement("span");
    displayTemp.innerHTML = `<span><strong>${tempC}</strong></span> &#8451;`;
    displayTemp.style.fontSize = "2rem";
    iconElem.appendChild(displayTemp);
    //temp_elem.innerHTML = `<strong>${temp_c}</strong>`;

    //<span class="temp-unit"><span class="temperature"></span> &#8451;</span>
    /*
    .temp-unit{
    font-size: 2rem;
    color: var(--primary-color);
}
*/

    let windSpeedMs = weatherData.wind.speed;

    let tempF = (tempC * 9 / 5) + 32;

    windSpeedKmh = windSpeedMs * 3600 / 1000;
    windSpeed.textContent = windSpeedKmh.toFixed(2);
    let windSpeedMph = windSpeedKmh / 1.609;

    //console.log(`${temp_f} ${wind_speed_mph}`);

    if (tempF <= 50 && windSpeedMph > 3){
        let windChillF = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(windSpeedMph, 0.16) + 0.4275 * tempF * Math.pow(windSpeedMph, 0.16);
        let windChillC = (windChillF - 32) * 5 / 9;
        windChill.textContent = parseFloat(windChillC).toFixed(2) + " ℃";
    }
    else{
        windChill.textContent = "N/A";
    }
}