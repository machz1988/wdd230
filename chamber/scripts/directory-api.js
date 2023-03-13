const display = document.querySelector("article");

async function getData(){
    const response = await fetch("scripts/directory.json");
    const data = await response.json();
    //console.log(data);  // temporary checking for valid response and data parsing
    data.forEach(displayBusiness);
}

getData();

function displayBusiness(business){
    // Create elements to add to the document
    let card = document.createElement('section');
    let logo = document.createElement('img');
    let h3 = document.createElement('h3');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let a = document.createElement('a');

    // Change the textContent property of the h2 element to contain the prophet's full name
    h3.textContent = `${business.name}`;
    p1.textContent = `${business.address}`;
    p2.textContent = `${business.phoneNumber}`;
    a.textContent = "Website";
    a.href = `${business.webPage}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', `${business.logo}`);
    logo.setAttribute('alt', `Logo of ${business.name}`);

    // Add/append the section(card) with the h2 element
    card.appendChild(logo);
    card.appendChild(h3);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(a);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('article').appendChild(card);
}
/*


<section>
    <img src="https://assets.ldscdn.org/c6/07/c6077e1778bfdf5a91569ab3acf57e9c31a7175f/boise_idaho_temple_sunshine.jpeg" alt="Boise Idaho Temple" />
    <h3>Boise Idaho</h3>
    <p>1984</p>
    <a href="https://www.churchofjesuschrist.org/temples/details/boise-idaho-temple?lang=eng" target="_blank">Details
    </a>
</section>
*/

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridButton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listButton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}