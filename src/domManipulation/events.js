import { renderProject, renderTasks } from "./render";
import { cachedChecks, cachedDom, cachedEditChecks, cachedEditForm, getSiblingChevron, getTaskDomElements } from "./cacheDomElements";
import { dumpChecklistEdit, dumpSelect } from '../helpers/dumpElement';
import populateProjectSelect from "../helpers/populateProjectSelect";
import projectFactory from "../appLogic/projectFactory";
import pushToProject from "../appLogic/pushToProject";
import taskFactory from "../appLogic/taskFactory";
import findProject from "../helpers/findProject";
import pushTask from "../appLogic/pushTasks"
import projectContainer from "../appLogic/projects";
import checklistbuilder from "../helpers/checklistBuilder";
import currentProject from "./globalVariable";
import { populateEditChecks } from "./divCreation";
import { isPast, parseISO, formatDistance, closestTo } from "date-fns";

const projectsButtonEvent = function() {
  renderProject();
  currentProject.current = '';
}

const newTaskButtonEvent = function() {
    const myDom = cachedDom();

    myDom.newTaskView.style.display = 'block';
    dumpSelect();
    populateProjectSelect();
}

const newProjectButtonEvent = function() {
    const myDom = cachedDom();

    myDom.newProjectView.style.display = 'block'
}

const submitProject = function() {
    const myDom = cachedDom();

    const newProject = projectFactory(myDom.projectForm.querySelector('#title').value, 
    myDom.projectForm.querySelector('#due-date').value,
    myDom.projectForm.querySelector('#priority').value)
    
    pushToProject(projectContainer, newProject);
    const localStorageProject = JSON.stringify(newProject);
    const newKey = String(projectContainer.length - 1);
    localStorage.setItem(newKey, localStorageProject);
    myDom.content.setAttribute('id', 'project')
    renderProject();

    exitProjectView();
    populateProjectMarquee();
    myDom.projectForm.reset();
}

const updateStorage = function(project) {
    const projectIndex = String(projectContainer.indexOf(project));
    const stringedProject = JSON.stringify(project);
    localStorage.setItem(projectIndex, stringedProject);
}

const orderStorage = function() {
    for(let i = 0; i < projectContainer.length; i++) {
        updateStorage(projectContainer[i]);
    }
}

const submitTask = function() {
    const myDom = cachedDom();
    const name = myDom.taskForm.querySelector('#title').value;
    const desc = myDom.taskForm.querySelector('#desc').value;
    const dateDue = myDom.taskForm.querySelector('#due-date').value;
    const priority = myDom.taskForm.querySelector('#priority').value;
    const notes = myDom.taskForm.querySelector('#notes').value;
    const assocProject = myDom.taskForm.querySelector("#project-select").value;
    const cashedCheques = cachedChecks();
    const newArray = checklistbuilder(cashedCheques);
    const newTask = taskFactory(name, desc, dateDue, priority, notes, newArray);
    const project = findProject(assocProject);
    pushTask(project, newTask);

    updateStorage(project);


    if(myDom.content.id == 'task') {
        if(assocProject == projectContainer[currentProject.current].name) {
            renderTasks(project);
            populateTaskMarquee();
        }
    }

    exitTaskView();
    dumpChecklistEdit(myDom.checklistEntries);
    myDom.taskForm.reset();
}

const closeOpenTask = function() {
    const myDom = cachedDom();

    myDom.openTask.style.display = 'none';
}

const exitProjectView = function() {
    const myDom = cachedDom();

    myDom.newProjectView.style.display = "none";
}

const exitTaskView = function() {
    const myDom = cachedDom();

    myDom.newTaskView.style.display = 'none';
}

const exitEditView = function() {
    const myDom = cachedDom();
    myDom.editTaskView.style.display = 'none';
}

const removeCheckbox = function(item) {
    item.remove();
}

const changeViewTask = function() {
    const myDom = cachedDom();
    myDom.content.setAttribute('id', 'task')
}

const changeViewProject = function() {
    const myDom = cachedDom();
    myDom.content.setAttribute('id', 'project')
}

const expandTask = function(element) {
    const chevrons = getSiblingChevron(element.parentNode);
    const upArrow = chevrons.upArrow;
    const taskContent = element.parentNode.nextSibling;

    element.classList.add('flipped');
    taskContent.classList.replace('unopened', 'open');


    if(upArrow.classList.contains('flipped')) {
        upArrow.classList.remove('flipped');
    }

    setTimeout(function() {
        element.setAttribute('id', 'inactive');
        upArrow.setAttribute('id', 'active');
    }, 250)
}

const closeTask = function(element) {
    const chevrons = getSiblingChevron(element.parentNode);
    const downArrow = chevrons.downArrow;
    const taskContent = element.parentNode.nextSibling;

    element.classList.add('flipped');
    taskContent.classList.replace('open', 'unopened');

    downArrow.classList.remove('flipped')

    setTimeout(function() {
        element.setAttribute('id', 'inactive');
        downArrow.setAttribute('id', 'active');
    }, 250)
}

const editTask = function(target) {

    const myDom = cachedDom();
    myDom.editTaskView.style.display = 'block';

    const myEdit = cachedEditForm();
    const currentTaskDom = getTaskDomElements(target);
    const currentTask = projectContainer[currentProject.current].tasks[currentTaskDom.taskIndex]
    myEdit.name.value = currentTask.name;
    myEdit.desc.value = currentTask.description;
    myEdit.date.value = currentTask.dueDate;
    myEdit.prio.value = currentTask.priority;
    myEdit.notes.value = currentTask.notes;
    myEdit.submitEditButton.setAttribute('id', currentTaskDom.taskIndex)
    populateEditChecks(currentTask);
    
}

const submitEdit = function(target) {
    const myEdit = cachedEditForm();

    const myId = target.id;
    const curProject = projectContainer[currentProject.current];
    const curTask = curProject.tasks[myId];

    curTask.name = myEdit.name.value;
    curTask.description = myEdit.desc.value;
    curTask.date = myEdit.date.value;
    curTask.priority = myEdit.prio.value;
    curTask.notes = myEdit.notes.value;
    curTask.checkbox = checklistbuilder(cachedEditChecks());

    updateStorage(curProject);

    exitEditView();
    dumpChecklistEdit(myEdit.checks);
    myEdit.form.reset();

    renderTasks(curProject);
}

const deleteTask = function(target) {
    const curProject = projectContainer[currentProject.current];
    const curTask = target.parentNode.parentNode.id
    curProject.tasks.splice(curTask, 1);
    renderTasks(curProject);
    updateStorage(curProject);
} 

const deleteProject = function() {
    const lastKey = String(projectContainer.length - 1);
    localStorage.removeItem(lastKey);
    projectContainer.splice(currentProject.current, 1);
    orderStorage();
    projectsButtonEvent();
    populateProjectMarquee();
    changeViewProject();
}

const populateProjectMarquee = function() {
    const myDom = cachedDom();
    const today = new Date();
    const projectDateArray = [];

    if(projectContainer.length == 0) {
        myDom.marquee.textContent = 'Nothing to do! Take a break :)'
        myDom.marquee.style.color = 'black';
    }

    for(let i = 0; i < projectContainer.length; i++) {
        const tempDate = parseISO((projectContainer[i].dueDate))
        if(isPast(tempDate)) {
            const projectName = projectContainer[i].name;
            const projectDate = formatDistance(tempDate, today);
            const marqueeText = 'Overdue: ' + projectName + ', due ' + projectDate + ' ago.';
            myDom.marquee.textContent = marqueeText;
            myDom.marquee.style.color = 'red';
            return;
        } else {
            projectDateArray.push(tempDate);
        }
    }

    const soonest = JSON.stringify(closestTo(today, projectDateArray));
    for(let i = 0; i < projectContainer.length; i++) {
        if(JSON.stringify(projectDateArray[i]) == soonest){
            const projectName = projectContainer[i].name;
            const dueDate = projectDateArray[i];
            const projectDate = formatDistance(dueDate, today);
            const marqueeText = 'Upcoming: ' + projectName + ', due in ' + projectDate + '.'
            myDom.marquee.textContent = marqueeText;
            myDom.marquee.style.color = 'black';
            return;
        }
    }
}

const populateTaskMarquee = function() {
    const myDom = cachedDom();
    const today = new Date();
    const taskDateArray = [];

    if(projectContainer[currentProject.current].tasks.length == 0) {
        myDom.marquee.textContent = 'Nothing to do! Take a break :)'
        myDom.marquee.style.color = 'black';
        return;
    }

    for(let i = 0; i < projectContainer[currentProject.current].tasks.length; i++) {
        const tempDate = parseISO((projectContainer[currentProject.current].tasks[i].dueDate))
        if(isPast(tempDate)) {
            const taskName = projectContainer[currentProject.current].tasks[i].name;
            const taskDate = formatDistance(tempDate, today);
            const marqueeText = 'Overdue: ' + taskName + ', due ' + taskDate + ' ago.';
            myDom.marquee.textContent = marqueeText;
            myDom.marquee.style.color = 'red';
            return;
        } else {
            taskDateArray.push(tempDate);
        }
    }

    const soonest = JSON.stringify(closestTo(today, taskDateArray));
    for(let i = 0; i < projectContainer.length; i++) {
        if(JSON.stringify(taskDateArray[i]) == soonest){
            const taskName = projectContainer[currentProject.current].tasks[i].name;
            const dueDate = taskDateArray[i];
            const taskDate = formatDistance(dueDate, today);
            const marqueeText = 'Upcoming: ' + taskName + ', due in ' + taskDate + '.'
            myDom.marquee.textContent = marqueeText;
            myDom.marquee.style.color = 'black';
            return;
        }
    }
}

const getSortValue = function() {
    const myDom = cachedDom();
    return myDom.sort.value;
}

const copyArray = function(someArray) {
    const copiedArray = [];
    for(let i = 0; i < someArray.length; i++) {
        copiedArray.push(someArray[i])
    }
    return copiedArray;
}

const getSortedArray = function(someArray) {
    const sortMethod = getSortValue();
    console.log(sortMethod);
    switch(sortMethod) {
        case 'alphabet-a':
            return someArray.sort((a, b) => a.name - b.name);
        case 'alphabet-z':
            return someArray.reverse((a, b) => a.name - b.name);
        case 'priority-one':
            return someArray.reverse((a, b) => a.priority - b.priority);
        case 'priority-two':
            return someArray.sort((a, b) => a.priority - b.priority);
        case 'date-one':
            return someArray.sort((a, b) => a.dueDate - b.dueDate);
        case 'date-two':
            return someArray.reverse((a, b) => a.dueDate - b.dueDate);
    }
}



export { projectsButtonEvent, newTaskButtonEvent, newProjectButtonEvent, submitProject, 
    submitTask, closeOpenTask, exitProjectView, exitTaskView, removeCheckbox, changeViewProject, 
    changeViewTask, expandTask, closeTask, editTask, submitEdit, exitEditView, deleteTask, 
    deleteProject, updateStorage, populateProjectMarquee, populateTaskMarquee, getSortedArray, copyArray }
