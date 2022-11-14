// derive the current date using a date object
const now = new Date();

//document.getElementById("currentDate").innerHTML = date;
let date = document.lastModified;
document.getElementById("lastModified").textContent = date;
//document.getElementById("currentYear").innerHTML = 
const currentYear = document.querySelector("#year")
currentYear.textContent = now.getFullYear();