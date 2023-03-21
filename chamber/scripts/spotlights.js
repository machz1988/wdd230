const displaySpotlights = document.querySelector("#spotlights");
const urlBusinesses = "scripts/directory.json";

async function getData(){
    const response = await fetch(urlBusinesses);
    const data = await response.json();
    getBusinesses(data);
}

getData();

function getBusinesses(allBusinesses){
    let selectedBusinesses = [];
    let indexes = [];
    //console.log(all_businesses[0]);
    const len = allBusinesses.length;
    let i = 0;
    for (i = 0; i < 3; i++) {
        let index = Math.floor(Math.random() * len);
        if (indexes.indexOf(index) === -1){
            if(allBusinesses[index].membershipLevel==="Gold" || allBusinesses[index].membershipLevel==="Silver"){
                indexes.push(index);
                selectedBusinesses.push(allBusinesses[index]);
            }else{
                i -= 1;
            }
        }else{
            i -= 1;
        }
    }
    selectedBusinesses.forEach(displayBusiness);
}

function displayBusiness(business){
    let article = document.createElement("article");    
    let name = document.createElement("h2");
    let logo = document.createElement("img");
    let slogan = document.createElement("h3");
    let div = document.createElement("div");
    let email = document.createElement("span");
    let phoneNumber = document.createElement("span");
    let webPage = document.createElement("a");
    article.className = "spotlight";
    name.textContent = business.name;
    logo.src = business.logo;
    logo.alt = `Logo of ${business.name}`;
    slogan.textContent = business.slogan;
    article.appendChild(name);
    article.appendChild(logo);
    article.appendChild(slogan);
    email.textContent = business.email;
    phoneNumber.textContent = business.phoneNumber;
    webPage.href = business.webPage;
    webPage.textContent = "Website";
    div.appendChild(email);
    div.appendChild(phoneNumber);
    div.appendChild(webPage);
    article.appendChild(div);
    displaySpotlights.appendChild(article);
}