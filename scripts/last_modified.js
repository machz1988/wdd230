//let date = document.lastModified;

//document.getElementById("currentDate").innerHTML = date;
let date = document.lastModified;
document.getElementById("currentDate").textContent = date;
let now = new Date();
//document.getElementById("currentYear").innerHTML = 
const currentYear = document.querySelector("#currentYear")
currentYear.textContent = now.getFullYear();