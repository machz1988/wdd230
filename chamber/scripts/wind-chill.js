const iconElem = document.querySelector("#condition-icon");
const windSpeed = document.querySelector("#wind-speed");
const windChill = document.querySelector("#wind-chill");
const url = "https://api.openweathermap.org/data/2.5/weather?q=Chilchota,MX&units=metric&appid=0874fda4b0c5e7c7d087937b085abaea";

async function getWeatherData() {
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
  
getWeatherData();

function toSentenceCase(desc){
    const descriptionSplited = desc.split(" ");
    for (var i=0; i<descriptionSplited.length; i++){
        descriptionSplited[i] = descriptionSplited[i].charAt(0).toUpperCase() + descriptionSplited[i].slice(1);
    }
    const description = descriptionSplited.join(" ");
    return description;
}

function calculateWindChill(tempC, windSpeedKmh){
    let tempF = (tempC * 9 / 5) + 32;
    let windSpeedMph = windSpeedKmh / 1.609;

    if (tempF <= 50 && windSpeedMph > 3){
        let windChillF = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(windSpeedMph, 0.16) + 0.4275 * tempF * Math.pow(windSpeedMph, 0.16);
        let windChillC = (windChillF - 32) * 5 / 9;
        return parseFloat(windChillC).toFixed(2) + " ℃";
    }
    else{
        return "N/A";
    }
}

function displayResults(weatherData){
    const tempC = weatherData.main.temp.toFixed(0);

    const iconSrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    
    const description = weatherData.weather[0].description;
    const descriptionUpperCase = toSentenceCase(description);
    
    const figure = document.createElement("figure");    
    const img = document.createElement("img");
    img.setAttribute('src', iconSrc);
    img.setAttribute('alt', `${descriptionUpperCase} icon`);
    figure.appendChild(img);
    
    const captionDesc = document.createElement("figcaption");    
    captionDesc.style.textAlign = "center";
    captionDesc.innerHTML = `<strong>${descriptionUpperCase}</strong>`;
    figure.appendChild(captionDesc);
    figure.style.textAlign = "center";
    iconElem.appendChild(figure);

    const displayTemp = document.createElement("span");
    displayTemp.innerHTML = `<span><strong>${tempC}</strong></span> &#8451;`;
    displayTemp.style.fontSize = "2rem";
    iconElem.appendChild(displayTemp);

    const windSpeedKmh = weatherData.wind.speed * 3600 / 1000;
    windSpeed.textContent = windSpeedKmh.toFixed(2); 
    windChill.textContent = calculateWindChill(tempC, windSpeedKmh);
}