temp_c = parseFloat(document.querySelector(".temperature").textContent);
//console.log(temp)
wind_speed_kmh = parseFloat(document.querySelector(".wind-speed").textContent);

temp_f = (temp_c * 9 / 5) + 32;

wind_speed_mph = wind_speed_kmh * 1.609;

wind_chill = document.querySelector(".wind-chill")

if (temp_f <= 50 && wind_speed_mph > 3){
    wind_chill_f = 35.74 + 0.6215 * temp_f - 35.75 * Math.pow(wind_speed_mph, 0.16) + 0.4275 * temp_f * Math.pow(wind_speed_mph, 0.16);
    wind_chill_c = (wind_chill_f - 32) * 5 / 9;
    wind_chill.textContent = parseFloat(wind_chill_c).toFixed(2) + " ℃";
}
else{
    wind_chill.textContent = "N/A";
}
