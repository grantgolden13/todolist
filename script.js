function Project(name) {
    const project = {};

    project.name = name;
    
    return project;
}

const projects = [];
const newDiv = document.createElement('div');
const newSpan = document.createElement('span');
const newTrash = document.createElement('i');
newTrash.classList.add('fa-regular', 'fa-trash-can');
const projectsCont = document.querySelector('.projects');
const addProjBtn = document.querySelector('.add-proj');
const modal = document.querySelector('.modal-container');
const cancelBtn = document.querySelector('.cancel');
const createProj = document.querySelector('.create-proj');
const btnCont = document.querySelector('.add-proj-cont');

addProjBtn.addEventListener('click', () => {
    modal.classList.toggle('show');
});

cancelBtn.addEventListener('click', () => {
    modal.classList.toggle('show');
});

// somethings fucked. everytime i create a new project
// all it does is replace the last one that was created

createProj.addEventListener('click', () => {
    let nameValue = document.querySelector('.proj-name').value;
    let newProj = Project(nameValue);
    projects.push(newProj);
    let div = newDiv;
    div.classList.add('project');
    let span = newSpan;
    span.textContent = newProj.name;
    div.appendChild(span);
    let trash = newTrash;
    div.appendChild(trash);
    projectsCont.append(div);
    modal.classList.toggle('show');
});