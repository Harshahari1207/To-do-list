const mainContent = document.querySelector('.mainBar');
const inboxElements = document.querySelector('.inboxElementsView');
const inboxBtn = document.querySelector('.btnInbox');
export default function inboxElementsView(){
    
    // const taskForm = document.querySelector('.taskForm');

    // mainContent.textContent = '';
    // const inboxView = document.createElement('div');
    // inboxView.classList.add('inboxElementsView');
    // mainContent.appendChild(inboxView);
    // const inboxH2 = document.createElement('h2');
    // inboxH2.textContent = "Inbox";
    // inboxView.appendChild(inboxH2);
    // const inboxBtn = document.createElement('button');
    // inboxBtn.classList.add('btnInbox');
    // inboxBtn.textContent = " Add Task";
    // inboxView.appendChild(inboxBtn);
    // const inboxDiv = document.createElement('div');
    // inboxDiv.classList.add('inboxDiv');
    // inboxView.appendChild(inboxDiv);
    // const card = document.createElement('div');
    // card.classList.add('card');
    // inboxDiv.appendChild(card);
    inboxElements.style.display='flex';

    
    inboxBtn.addEventListener('click', taskFormOpen);
    function taskFormOpen(){
        console.log('Taskform');
        taskForm.style.display = 'flex';
    
}
    
    // console.log("Hello hi");

}


