function addChapter(){
    const entry = document.querySelector("#entry");
    if (entry.value != ""){
        const fav_chapters = document.querySelector("#favChapters");
        const li = document.createElement('li');
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        li.style.marginBottom = '1rem';
        let para = document.createElement('p');
        para.textContent = entry.value;
        let button = document.createElement('input');
        button.setAttribute('type', 'button');
        button.setAttribute('value', 'X');
        button.style.backgroundColor = '#FF8906';
        button.style.borderColor = '#1C1F33';
        button.style.borderRadius = '0.5rem';
        button.style.padding = '0.5rem';
        li.appendChild(para);
        li.appendChild(button);
        fav_chapters.appendChild(li);

        button.addEventListener('click', ()=>{
            fav_chapters.removeChild(li);
        })
    }
}

const addButton = document.querySelector('#addButton');
addButton.onclick = addChapter;