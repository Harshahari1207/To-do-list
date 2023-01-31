// import displayToPage from "./display";

const taskForm = document.querySelector('.taskForm');
const inboxBtn = document.querySelector('.btnInbox');

// showing Form to fill the todo list 
export default function inboxElementsView(){
    inboxBtn.addEventListener('click', formDisplay);
    function formDisplay(){
        taskForm.style.display = 'flex';
    }
}


