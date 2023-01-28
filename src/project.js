export default function project(){
    const addProj = document.querySelector('.addProject');
    const projectBtn = document.querySelector('.projectBtn');
    
    projectBtn.style.display = "none";
    const inputForm = document.createElement('form');
    inputForm.classList.add('inputForm');
    addProj.appendChild(inputForm);
    const input = document.createElement('input');
    input.setAttribute('type', "text");
    input.setAttribute('id', "input-form");
    inputForm.appendChild(input);
    const formDiv = document.createElement('div');
    formDiv.classList.add("formDiv");
    inputForm.appendChild(formDiv);
    const submit = document.createElement('button');
    submit.classList.add('submit');
    submit.textContent = "submit";
    formDiv.appendChild(submit);
    const reset = document.createElement('button');
    reset.classList.add('reset');
    reset.textContent = "Reset";
    formDiv.appendChild(reset);
    console.log("from project");

    
}