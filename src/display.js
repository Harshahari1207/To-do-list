const main = document.querySelector('.main1');

export default function displayToPage(){
    let fromLocal = localStorage.getItem('todoList')
    // console.log(fromLocal)
    let fromLocalArr = JSON.parse(fromLocal);
    // console.log(fromLocalArr)

    fromLocalArr.forEach((x) => {

        if(localStorage.length <= 1){

        }
        const card = document.createElement('div');
        card.classList.add('card');
        main.appendChild(card);
    
        const checkBtn = document.createElement('input');
        checkBtn.classList.add('checkBtn');
        checkBtn.type = "checkbox";
        main.appendChild(checkBtn);
        const editBtn = document.createElement('button');
        editBtn.classList.add('editBtn');
        editBtn.textContent = "Edit";
        main.appendChild(editBtn);
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.textContent = "Delete";
        for (let i in x) {
            if (i === 'title') {
                const titleText = document.createElement('h1');
                titleText.textContent = `${x[i]}`;
                titleDiv.appendChild(titleText);
            } else if (i === 'date') {
                const titleText = document.createElement('h3');
                titleText.textContent = `${x[i]}`;
                dateDiv.appendChild(titleText);
            } else if (i === 'text') {
                const titleText = document.createElement('p');
                titleText.textContent = `${x[i]}`;
                noteDiv.appendChild(titleText);
            }
        }
    });

}