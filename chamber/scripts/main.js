// select the elements to manipulate (output to)
const datefield = document.querySelector("#date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

// long, medium, short options ... try them
datefield.innerHTML = `<em>${fulldate}</em>`;

function toggleMenu(){
    document.getElementById("mainNav").classList.toggle("open");
    document.getElementById("hamButton").classList.toggle("open");
    //let ul = document.querySelector("ul");
    //let header = document.querySelector("header");
    //header.appendChild(ul);
}

const x = document.getElementById("hamButton");
x.onclick = toggleMenu;

//document.getElementById("currentDate").innerHTML = date;
let date = document.lastModified;
document.getElementById("lastModified").textContent = date;
//document.getElementById("currentYear").innerHTML = 
const currentYear = document.querySelector("#year")
currentYear.textContent = now.getFullYear();

// initialize display elements
const lastVisitDisplay = document.querySelector(".lastVisit");

// get the stored value in localStorage
//let lastVisit = Number(window.localStorage.getItem("last-visit"));
let dateLastVisit = Date(window.localStorage.getItem("date-last-visit"))

// determine if this is the first visit or display the number of visits.
if (dateLastVisit <= now) {
    const diffTime = Math.abs(now - dateLastVisit);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
	lastVisitDisplay.textContent = diffDays;
} else {
	lastVisitDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
dateLastVisit = now;
// store the new number of visits value
window.localStorage.setItem("date-last-visit", dateLastVisit);
