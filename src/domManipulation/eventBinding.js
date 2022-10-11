import { projectsButtonEvent, newTaskButtonEvent, newProjectButtonEvent, 
    submitProject, submitTask, exitProjectView, exitTaskView, removeCheckbox, changeViewProject, expandTask, closeTask, editTask, 
    submitEdit, exitEditView, deleteTask, deleteProject, updateStorage } from './events';
import { cachedDom } from './cacheDomElements';
import getP from "../helpers/getP";
import findProject from '../helpers/findProject';
import { renderProject, renderTasks } from './render';
import { createCheckbox, createEditCheckbox, rewriteChecks } from './divCreation';
import currentProject from './globalVariable';
import projectContainer from '../appLogic/projects';
import { dumpChecklist } from '../helpers/dumpElement';

const bindEventsMain = () => {
    const myDom = cachedDom();

    myDom.projectsButton.addEventListener('click', function() {
        projectsButtonEvent();
        changeViewProject();
    })

    myDom.newProjectButton.addEventListener('click', function() {
        newProjectButtonEvent();
    });

    myDom.newTaskButton.addEventListener('click', function() {
        newTaskButtonEvent();
    });

    myDom.exitProject.addEventListener('click', function() {
        exitProjectView();
    })

    myDom.exitTask.addEventListener('click', function() {
        exitTaskView();
    })

    myDom.submitProject.addEventListener('click', function(e) {
        e.preventDefault();
        submitProject();
    })

    myDom.submitTask.addEventListener('click', function(e) {
        e.preventDefault();
        submitTask();
    })

    myDom.checklistPlus.addEventListener('click', function() {
        createCheckbox();
    })

    myDom.editChecklistPlus.addEventListener('click', function() {
        createEditCheckbox();
    })

    myDom.exitEditViewButton.addEventListener('click', function(e) {
        exitEditView();
    })

    myDom.editSubmitButton.addEventListener('click', function(e) {
        e.preventDefault();
        submitEdit(e.target);
    })

    myDom.sort.addEventListener('click', function() {
        if(myDom.content.id == 'project') {
            renderProject();
        } else if(myDom.content.id == 'task') {
            renderTasks(projectContainer[currentProject.current]);
        }
    })
}

const bindProjectEvents = function() {
    const myContent = cachedDom().content;
    const myProjects = Array.from(myContent.querySelectorAll('div'));
    for(let i = 0; i < myProjects.length; i++) {
        myProjects[i].addEventListener('click', function() {
            const projectName = getP(myProjects[i]);
            const actualProject = findProject(projectName);
            currentProject.current = projectContainer.indexOf(actualProject); // Use myProjects.indexOf -OR- projectContainer.indexOf
            console.log(currentProject.current);
            renderTasks(actualProject);
        })
    }
}

const bindRemoveCheckbox = function(minusButton) {
    minusButton.addEventListener('click', function(e) {
        removeCheckbox(e.target.parentNode.parentNode);
    })
}

const bindRemoveSubtask = function(minusButton) {
    minusButton.addEventListener('click', function(e) {
        const label = e.target.parentNode.parentNode.querySelector('label');
        const main = e.target.parentNode.parentNode;
        const taskIndex = e.target.parentNode.parentNode.parentNode.parentNode.id; // gives task id

        const selfIndex = e.target.parentNode.id;

        projectContainer[currentProject.current].tasks[taskIndex].checkbox.splice(selfIndex, 1);
        if(projectContainer[currentProject.current].tasks[taskIndex].checkbox.length == 0) {
            label.style.position = 'relative';
        }
        removeCheckbox(e.target.parentNode);
        dumpChecklist(main);
        rewriteChecks(projectContainer[currentProject.current].tasks[taskIndex], main);
        updateStorage(projectContainer[currentProject.current]);
    })
}

const bindEdit = function(editButton) {
    editButton.addEventListener('click', function(e) {
        editTask(e.target);
    })
}

const bindExpand = function(element) {
    element.addEventListener('click', function() {
        expandTask(element);
    })
}

const bindCollapse = function(element) {
    element.addEventListener('click', function() {
        closeTask(element);
    })
}

const bindDelete = function(element) {
    element.addEventListener('click', function(e) {
        deleteTask(e.target);
    })
}

const bindProjectDelete = function(element) {
    element.addEventListener('click', function(e) {
        deleteProject();
    })
}

export { bindEventsMain, bindProjectEvents, bindRemoveCheckbox, 
    bindExpand, bindCollapse, bindRemoveSubtask, bindEdit, bindDelete, bindProjectDelete };