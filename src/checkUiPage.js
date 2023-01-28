const mainBar = document.querySelector('.mainBar');
import inboxElementsView from './inboxElements';
import todayElementsView from './todayElements';
import weekElementsView from './weekElements';

export default function checkUi(){

    switch(this.textContent){
        case "Inbox":
            
                mainBar.textContent = '';
                inboxElementsView();
            
        break;
        case "Today":
            
                mainBar.textContent = '';
                todayElementsView();
            
        break;
        case "This week":
            
                mainBar.textContent = '';
                weekElementsView();
                
            
        break;

    }
    
    console.log(mainBar.childNodes.length);
    
}