import displayToPage from "./display";



const taskForm = document.querySelector('.taskForm');
const title = document.getElementById('taskName');
const date = document.getElementById('taskDate');
const note = document.getElementById('taskNote');

export let todoList = [
    {
        title: 'cloths',
        date: '2023-01-31',
        note: 'Its the end of the month, Wash Your Cloths.'
        
      }
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
    // event.preventDefault();
}
function resetForm(){
    title.value = '';
    date.value = '';
    note.value = '';
    event.preventDefault();

}
export default function addList(){
    // addListToTodolist(title.value, date.value, note.value);
    // event.preventDefault();
    closeForm();
    resetForm();
    const existingData = JSON.parse(localStorage.getItem('todoList'))|| [];
    console.log(existingData);
    todoList = [...existingData, new List(title, date, note)];
    console.log(todoList);
    localStorage.setItem('todoList', JSON.stringify(todoList));
    // listCard();
    console.log("sihasj",todoList);
    const page = (document.querySelector('.main1').innerHTML = '');
    displayToPage();
    
    
}
// console.log(todoList);

