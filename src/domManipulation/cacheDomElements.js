//  Caches DOM elements

const cachedDom = function() {
    const projectsButton = document.querySelector('#projects-button');
    const newProjectButton = document.querySelector('#new-project-button');
    const newTaskButton = document.querySelector('#new-task-button');
    const exitTask = document.querySelector('.exit-task');
    const newTaskView = document.querySelector('.new-task');
    const newProjectView = document.querySelector('.new-project');
    const editTaskView = document.querySelector('.edit-task');
    const exitEditViewButton = document.querySelector('.exit-edit-task');
    const editChecklistPlus = document.querySelector('#checklist-edit-plus');
    const editSubmitButton = document.querySelector('.edit-task-submit');
    const taskForm = document.querySelector('#task-form');
    const projectForm = document.querySelector('#project-form')
    const exitProject = document.querySelector('.exit-project');
    const submitTask = document.querySelector('.add-task');
    const submitProject = document.querySelector('.add-project');
    const content = document.querySelector('.content');
    const openTask = document.querySelector('.open-task');
    const exitActiveTask = document.querySelector('.exit-task-view');
    const checklistPlus =  document.querySelector('#checklist-plus');
    const checklistEntries = document.querySelector('.checklist-container');
    const marquee = document.querySelector('marquee');
    const sort = document.querySelector('#sort');

    return { projectsButton, newProjectButton, newTaskButton, exitTask, 
        exitProject, newTaskView, newProjectView, submitTask, submitProject, 
        taskForm, projectForm, content, exitActiveTask, openTask, checklistPlus, 
        checklistEntries, editTaskView, exitEditViewButton, editChecklistPlus, editSubmitButton, 
        marquee, sort }
}

const cachedEditForm = function() {
    const myDom = cachedDom();
    const form = myDom.editTaskView.querySelector('form');
    const name = form.querySelector('#title');
    const desc = form.querySelector('#desc');
    const date = form.querySelector('#due-date');
    const prio = form.querySelector('#priority');
    const notes = form.querySelector('#notes');
    const checks = form.querySelector('.checklist-container')

    const submitEditButton = form.querySelector('button');

    return { name, desc, date, prio, checks, notes, submitEditButton, form }
}

const cachedChecks = function() {
    const myDom = cachedDom();
    const myChecklistEntries = myDom.checklistEntries;
    const myChecks = Array.from(myChecklistEntries.querySelectorAll('#newDiv'));
    return myChecks;
}

const cachedEditChecks = function() {
    const myEdit = cachedEditForm();
    const myChecklistEntries = myEdit.checks;
    const myChecks = Array.from(myChecklistEntries.querySelectorAll('#newDiv'));
    return myChecks;
}

const getLabelInput = function(domElement) {
    const label = domElement.querySelector('label');
    const labelText = label.textContent;

    const input = domElement.querySelector('input');
    const inputBool = input.checked;

    return { labelText, inputBool };

}

const getSiblingChevron = function(parentDiv) {
    const upArrow = parentDiv.querySelector('.collapse');
    const downArrow = parentDiv.querySelector('.expand');

    return { upArrow, downArrow }
}

const getTaskDomElements = function(target) {
    const taskDiv = target.parentNode.parentNode;
    const taskIndex = taskDiv.id;
    const taskName = taskDiv.querySelector('h4');
    const taskDesc = taskDiv.querySelector('#desc-open');
    const taskPrio = taskDiv.querySelector('#priority-open');
    const taskDate = taskDiv.querySelector('#date-open');

    return { taskIndex, taskName, taskDesc, taskPrio, taskDate }
}


export { cachedDom, cachedChecks, getLabelInput, getSiblingChevron, getTaskDomElements, cachedEditForm, cachedEditChecks };