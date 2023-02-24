// select the elements to manipulate (output to)
const datefield = document.querySelector("#date");

// derive the current date using a date object
const now = new Date();
const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
const day = now.getDay();

if ( day == 1 || day == 2){
    const banner = document.querySelector(".banner");
    banner.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
    banner.style.backgroundColor = "#EAE0D5";
    banner.style.textAlign = "center";
    banner.style.color = "#0A0908";
    banner.style.padding = "1rem";
}

// long, medium, short options ... try them
datefield.innerHTML = `<em>${fullDate}</em>`;

function toggleMenu(){
    document.getElementById("main-nav").classList.toggle("open");
    document.getElementById("ham-button").classList.toggle("open");
    //let ul = document.querySelector("ul");
    //let header = document.querySelector("header");
    //header.appendChild(ul);
}

const x = document.getElementById("ham-button");
x.onclick = toggleMenu;

//document.getElementById("currentDate").innerHTML = date;
let date = document.lastModified;
document.getElementById("last-modified").textContent = date;
//document.getElementById("currentYear").innerHTML = 
const currentYear = document.querySelector("#year")
currentYear.textContent = now.getFullYear();

// initialize display elements
const lastVisitDisplay = document.querySelector("#last-visit");

// get the stored value in localStorage
//let lastVisit = Number(window.localStorage.getItem("last-visit"));
let dateLastVisit = Number(window.localStorage.getItem("date-last-visit"));

const today = Date.now();
//console.log(`${dateLastVisit} ${today}`);
// determine if this is the first visit or display the number of visits.
if (dateLastVisit <= today) {
    const diffTime = today - dateLastVisit;
    const diffDays = (diffTime / 1000 / 60 / 60 / 24).toFixed(0); 
	//window.localStorage.setItem("date-last-visit", now);
    lastVisitDisplay.textContent = `${diffDays} days ago`;
} else {
	lastVisitDisplay.textContent = `This is your first visit!`;
}

// update the date of last visit
dateLastVisit = today;
// store the new number of visits value
window.localStorage.setItem("date-last-visit", dateLastVisit);