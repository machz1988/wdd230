const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
        let imagesToLoad = document.querySelectorAll("img[data-src]");

        const imgOptions = {
            threshold: 0,
            rootMargin: "0px 0px 50px 0px"
        };

        const loadImages = (image) => {
            image.setAttribute("src", image.getAttribute("data-src"));
            image.onload = () => {
                image.removeAttribute("data-src");
            };
        };

        if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver((items, observer) => {
                items.forEach((item) => {
                    if (item.isIntersecting) {
                        loadImages(item.target);
                        observer.unobserve(item.target);
                    }
                });
            }, imgOptions);
            imagesToLoad.forEach((img) => {
                observer.observe(img);
            });
        } else {
            imagesToLoad.forEach((img) => {
                loadImages(img);
            });
        }
    });

function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p_1 = document.createElement('p');
    let p_2 = document.createElement('p');
    let portrait = document.createElement('img');

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    p_1.textContent = `Date of Birth: ${prophet.birthdate}`;
    p_2.textContent = `Place of Birth: ${prophet.birthplace}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', "https://via.placeholder.com/300x400.jpg");
    portrait.setAttribute('data-src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day President`);
    portrait.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(p_1);
    card.appendChild(p_2);
    card.appendChild(portrait);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}



// derive the current date using a date object
const now = new Date();

//document.getElementById("currentDate").innerHTML = date;
let date = document.lastModified;
document.getElementById("last-modified").textContent = date;
//document.getElementById("currentYear").innerHTML = 
const currentYear = document.querySelector("#year")
currentYear.textContent = now.getFullYear();