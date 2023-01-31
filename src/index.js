import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

// import fooElementCreate from './fooElements';
import checkUi from './checkUiPage';
import project from './project';
import addList from './inboxFun';
import displayToPage from './display';

const inboxBtn = document.querySelector('.inboxBtn');
// const todayBtn = document.querySelector('.todayBtn');
// const weekBtn = document.querySelector('.thisWeekBtn');
const projectBtn = document.querySelector('.projectBtn');
const submitForm = document.querySelector('.submitForm');




inboxBtn.addEventListener("click", checkUi);
// todayBtn.addEventListener("click", checkUi);
// weekBtn.addEventListener("click", checkUi);
projectBtn.addEventListener("click", project);
submitForm.addEventListener('click', addList);
// closeForm.addEventListener('click', "")
// resetForm.addEventListener('click', "")

// fooElementCreate();
// console.log('Hello');

window.onload = displayToPage();