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