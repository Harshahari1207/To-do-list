const mainBar = document.querySelector('.mainBar');
import inboxElementsView from './inboxElements';
import todayElementsView from './todayElements';
import weekElementsView from './weekElements';

export default function checkUi(){
    switch(this.textContent){
        case "Inbox":
            if(mainBar.childNodes.length === 0){
                inboxElementsView();
            }else{
                mainBar.textContent = '';
                inboxElementsView();
            }
        break;
        case "Today":
            if(mainBar.childNodes.length === 0){
                todayElementsView();
            }else{
                mainBar.textContent = '';
                todayElementsView();
            }
        break;
        case "This week":
            if(mainBar.childNodes.length === 0){
                weekElementsView();
            }else{
                mainBar.textContent = '';
                weekElementsView();
            }
        break;

    }
    
    console.log(mainBar.childNodes.length);
    
}