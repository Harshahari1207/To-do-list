export default function todayElementsView(){
    const mainBar = document.querySelector('.mainBar');
    
    mainBar.textContent = '';
    const todayView = document.createElement('div');
    todayView.classList.add('todayElementsView');
    mainBar.appendChild(todayView);
    const todayH2 = document.createElement('h2');
    todayH2.textContent = "Today";
    todayView.appendChild(todayH2);
    console.log(mainBar);
}