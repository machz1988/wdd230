//let date = document.lastModified;

//document.getElementById("currentDate").innerHTML = date;
let date = document.lastModified;
document.getElementById("current-date").textContent = date;
let now = new Date();
//document.getElementById("currentYear").innerHTML = 
const currentYear = document.querySelector("#current-year")
currentYear.textContent = now.getFullYear();