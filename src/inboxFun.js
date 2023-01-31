import displayToPage from "./display";

const taskForm = document.querySelector('.taskForm');
const form = document.querySelector('.form');


// Empty Array
export let todoList = [
];

// Cunstructor
function List(title, date, note){
    this.title = title;
    this.date = date;
    this.note = note;
}

// Closing Form
function closeForm(){
    taskForm.style.display = 'none';
    event.preventDefault();
}
// Resetting the form
function resetForm(){
    form.reset();
    event.preventDefault();

}
// Adding list to the local storage and in the array of todoList
export default function addList(){
    console.log("Hello");
    const title = document.getElementById('taskName').value;
    const date = document.getElementById('taskDate').value;
    const note = document.getElementById('taskNote').value;
    
    event.preventDefault();
    closeForm();
    resetForm();
    const existingData = JSON.parse(localStorage.getItem('todoList'))|| [];
    console.log(existingData);
    todoList = [...existingData, new List(title, date, note)];
    console.log(todoList);
    localStorage.setItem('todoList', JSON.stringify(todoList));
   
    console.log("sihasj",todoList);
    const page = (document.querySelector('.inboxDiv').innerHTML = '');
    displayToPage();
    // prevent reload when list is added
    window.location.reload();
    
}



