import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import fooElementCreate from './fooElements';
import checkUi from './checkUiPage';
import project from './project';

const inboxBtn = document.querySelector('.inboxBtn');
const todayBtn = document.querySelector('.todayBtn');
const weekBtn = document.querySelector('.thisWeekBtn');
const projectBtn = document.querySelector('.projectBtn');

inboxBtn.addEventListener("click", checkUi);
todayBtn.addEventListener("click", checkUi);
weekBtn.addEventListener("click", checkUi);
projectBtn.addEventListener("click", project);

fooElementCreate();
console.log('Hello');