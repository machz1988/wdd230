let date = document.lastModified;
document.getElementById("last-modified").textContent = date;
let now = new Date();
//document.getElementById("currentYear").innerHTML = 
const currentYear = document.querySelector("#year")
currentYear.textContent = now.getFullYear();