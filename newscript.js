function Project(name) {
    const project = {};
    
    project.name = name;
    project.todos = [];

    return project;
}

function Todo(name, date) {
    const todo = {};

    todo.name = name;
    todo.date = date;

    return todo;
}

const projects = [];

const addProjBtn = document.querySelector('.add-proj');
const createProjBtn = document.querySelector('.create-proj');
const cancelNewProjBtn = document.querySelector('.add-proj-modal:last-child:last-child');
const projModal = document.querySelector('.modal-container');
const todosCont = document.querySelector('.todos');
const todoModal = document.querySelector('.todo-modal-container');
const projContainer = document.querySelector('.projects');
const projh2 = document.querySelector('.todo-header');
const addTodoBtn = document.querySelector('.add-todo');
const createTodoBtn = document.querySelector('.create-todo');
const cancelNewTodoBtn = document.querySelector('.add-todo-modal:last-child:last-child');

addProjBtn.addEventListener('click', () => {
    showProjModal();
});

createProjBtn.addEventListener('click', () => {
    let entry = document.querySelector('.proj-name').value;
    const result = validateEntry(entry);
    if (result == true) {
        return;
    }
    let newProj = Project(entry);
    projects.push(newProj);
    projModal.classList.toggle('show');
    generateProjects();
});

cancelNewProjBtn.addEventListener('click', () => {
    projModal.classList.toggle('show');
});

cancelNewTodoBtn.addEventListener('click', () => {
    todoModal.classList.toggle('show');
});

function showProjModal() {
    projModal.classList.add('show');
}

function showTodoModal() {
    todoModal.classList.add('show');
}

function validateEntry(entry) {
    if (entry == "" || entry == undefined || entry == null) {
        alert("Please don't leave field blank.");
        return true;
    } else {
        return false
    }
}

addTodoBtn.addEventListener('click', () => {
    showTodoModal();
});

createTodoBtn.addEventListener('click', () => {
    let name = document.querySelector('.todo-name').value;
    let date = document.querySelector('.todo-date').value;
    const result1 = validateEntry(name);
    const result2 = validateEntry(date);
    if (result1 == true || result2 == true) {
        return;
    }
    makeDOMTodo(name, date);
});

function generateProjects() {
    // clear projects from container
    const currentProjs = Array.from(projContainer.children);
    currentProjs.forEach((currentProj) => {
        currentProj.remove();
    });
    // repopulate new array of projects
    projects.forEach((project) => {
        makeDOMProject(project);
    });
}

function makeDOMProject(obj) {
    // let count = Array.from(document.querySelectorAll('.project')).length + 1;
    // console.log(count);
    const newProject = document.createElement('div');
    newProject.classList.add('project');
    const projTitle = document.createElement('span');
    projTitle.textContent = obj.name;
    projh2.textContent = obj.name;
    const trashIcon = document.createElement('i');
    trashIcon.classList.add('fa-regular', 'fa-trash-can');
    newProject.appendChild(projTitle);
    newProject.appendChild(trashIcon);
    projContainer.appendChild(newProject);
} 

function startProgram() {
    const firstProject = Project("First Project");
    projects.push(firstProject);
    makeDOMProject(firstProject);
}

startProgram();