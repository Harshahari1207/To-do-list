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

// Get all cards
const cards = document.querySelectorAll(".card");
console.log(cards);
// Loop through each card
for (let i = 0; i < cards.length; i++) {
// Get delete icon for each card
const deleteIcon = cards[i].querySelector(".deleteBtn");
// Add click event to delete icon
deleteIcon.addEventListener("click", function() {
// Get card data
const cardData = cards[i].querySelector(".titleDiv").textContent;
// Delete card from local storage
let cardDataObjects = JSON.parse(localStorage.getItem("todoList")) || [];
cardDataObjects = cardDataObjects.filter(function(cardDataObject) {
return cardDataObject !== cardData;
});
cardDataObjects.splice(i,1)
localStorage.setItem("todoList", JSON.stringify(cardDataObjects));
// Remove card from the DOM
cards[i].remove();
localStorage.setItem("todoList", JSON.stringify(cardDataObjects));
});
}