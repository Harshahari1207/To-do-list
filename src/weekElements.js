export default function weekElementsView(){
    const mainBar = document.querySelector('.mainBar');

    mainBar.textContent = '';
    const weekView = document.createElement('div');
    weekView.classList.add('weekElementsView');
    mainBar.appendChild(weekView);
    const weekH2 = document.createElement('h2');
    weekH2.textContent = "This Week";
    weekView.appendChild(weekH2);
    console.log(mainBar);
}