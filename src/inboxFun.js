import displayToPage from "./display";

const taskForm = document.querySelector('.taskForm');
const form = document.querySelector('.form');



export let todoList = [
];

function List(title, date, note){
    this.title = title;
    this.date = date;
    this.note = note;
}

// function addListToTodolist(title, date, note){
//     let list = new List(title, date, note);
//     todoList.unshift(list)
// }

// addListToTodolist("Hari", '31/1/2023', "alishdoiaoihdo nona");
function closeForm(){
    taskForm.style.display = 'none';
    event.preventDefault();
}
function resetForm(){
    form.reset();
    event.preventDefault();

}
export default function addList(){
    console.log("Hello");
    const title = document.getElementById('taskName').value;
    const date = document.getElementById('taskDate').value;
    const note = document.getElementById('taskNote').value;
    // addListToTodolist(title.value, date.value, note.value);
    event.preventDefault();
    closeForm();
    resetForm();
    const existingData = JSON.parse(localStorage.getItem('todoList'))|| [];
    console.log(existingData);
    todoList = [...existingData, new List(title, date, note)];
    console.log(todoList);
    localStorage.setItem('todoList', JSON.stringify(todoList));
    // listCard();
    console.log("sihasj",todoList);
    const page = (document.querySelector('.inboxDiv').innerHTML = '');
    displayToPage();
    
    
}
// console.log(todoList);


