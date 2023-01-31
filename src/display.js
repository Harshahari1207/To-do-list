import inboxElementsView from "./inboxElements";
const main = document.querySelector('.inboxDiv');
const inboxMain = document.querySelector('.inboxElementsView');

export default function displayToPage(){
    inboxElementsView();
    console.log(inboxMain);
    let fromLocal = localStorage.getItem('todoList')
    // console.log(fromLocal)
    let fromLocalArr = JSON.parse(fromLocal);
    console.log(fromLocalArr)

    fromLocalArr.forEach((x) => {

        if(localStorage.length <= 1){

        }
        // main.innerHTML = '';
        const card = document.createElement('div');
        card.classList.add('card');
        main.appendChild(card);
        
        const btnDiv = document.createElement('div');
        btnDiv.classList.add('btnDiv');
        card.appendChild(btnDiv);
        const checkBtn = document.createElement('input');
        checkBtn.classList.add('checkBtn');
        checkBtn.type = "checkbox";
        btnDiv.appendChild(checkBtn);
        const editBtn = document.createElement('button');
        editBtn.classList.add('editBtn');
        editBtn.textContent = "Edit";
        btnDiv.appendChild(editBtn);
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.textContent = "Delete";
        btnDiv.appendChild(deleteBtn);
        
        const titleDiv = document.createElement('div')
        titleDiv.classList.add('titleDiv');
        card.appendChild(titleDiv);
        const dateDiv = document.createElement('div')
        dateDiv.classList.add('dateDiv');
        card.appendChild(dateDiv);
        const noteDiv = document.createElement('div')
        noteDiv.classList.add('noteDiv');
        card.appendChild(noteDiv);
        for (let i in x) {
            if (i === 'title') {
                const titleText = document.createElement('h1');
                titleText.textContent = `${x[i]}`;
                titleDiv.appendChild(titleText);
            } else if (i === 'date') {
                const titleText = document.createElement('h3');
                titleText.textContent = `${x[i]}`;
                dateDiv.appendChild(titleText);
            } else if (i === 'note') {
                const titleText = document.createElement('p');
                titleText.textContent = `${x[i]}`;
                noteDiv.appendChild(titleText);
            }
        }
    });

}