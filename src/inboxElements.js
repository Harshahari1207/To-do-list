
export default function inboxElementsView(){
    const mainContent = document.querySelector('.mainBar');

    mainContent.textContent = '';
    const inboxView = document.createElement('div');
    inboxView.classList.add('inboxElementsView');
    mainContent.appendChild(inboxView);
    const inboxH2 = document.createElement('h2');
    inboxH2.textContent = "Inbox";
    inboxView.appendChild(inboxH2);
    const inboxBtn = document.createElement('button');
    inboxBtn.textContent = "➕ Add Task";
    inboxView.appendChild(inboxBtn);

    console.log("Hello hi");

}