const icon_elem = document.querySelector(".condition-icon");
const wind_speed = document.querySelector(".wind-speed");
const wind_chill = document.querySelector(".wind-chill");
const url = "https://api.openweathermap.org/data/2.5/weather?q=Chilchota,MX&units=metric&appid=0874fda4b0c5e7c7d087937b085abaea";

let temp_c = 0;
let wind_speed_kmh = 0;

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
    temp_c = weatherData.main.temp.toFixed(0);

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
    captionDesc.style.textAlign = "center";
    captionDesc.innerHTML = `<strong>${str2}</strong>`;
    figure.appendChild(captionDesc);

    icon_elem.appendChild(figure);

    const display_temp = document.createElement("span");
    display_temp.innerHTML = `<span><strong>${temp_c}</strong></span> &#8451;`;
    display_temp.style.fontSize = "2rem";
    icon_elem.appendChild(display_temp);
    //temp_elem.innerHTML = `<strong>${temp_c}</strong>`;

    //<span class="temp-unit"><span class="temperature"></span> &#8451;</span>
    /*
    .temp-unit{
    font-size: 2rem;
    color: var(--primary-color);
}
*/

    let wind_speed_ms = weatherData.wind.speed;

    let temp_f = (temp_c * 9 / 5) + 32;

    wind_speed_kmh = wind_speed_ms * 3600 / 1000;
    wind_speed.textContent = wind_speed_kmh;
    let wind_speed_mph = wind_speed_kmh * 1.609;

    //console.log(`${temp_f} ${wind_speed_mph}`);

    if (temp_f <= 50 && wind_speed_mph > 3){
        let wind_chill_f = 35.74 + 0.6215 * temp_f - 35.75 * Math.pow(wind_speed_mph, 0.16) + 0.4275 * temp_f * Math.pow(wind_speed_mph, 0.16);
        let wind_chill_c = (wind_chill_f - 32) * 5 / 9;
        wind_chill.textContent = parseFloat(wind_chill_c).toFixed(2) + " ℃";
    }
    else{
        wind_chill.textContent = "N/A";
    }
}