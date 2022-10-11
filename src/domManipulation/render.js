import projectContainer from "../appLogic/projects";
import { dumpContent } from "../helpers/dumpElement";
import { createProjectDeleteButton, iterateProject } from "../domManipulation/divCreation";
import { bindProjectEvents } from "../domManipulation/eventBinding";
import { changeViewTask, populateTaskMarquee, populateProjectMarquee, getSortedArray, copyArray } from "./events";
import { iterateTasks } from "../domManipulation/divCreation";
import { cachedDom } from "./cacheDomElements";

const renderProject = function() {
    dumpContent();
    const newProjectCopySorted = getSortedArray(copyArray(projectContainer));
    console.log(projectContainer);
    console.log(newProjectCopySorted);
    iterateProject(newProjectCopySorted);
    populateProjectMarquee();
    bindProjectEvents();
}

const renderTasks = function(project) {
    const myDom = cachedDom();
    const deleteButton = createProjectDeleteButton();
    dumpContent();
    changeViewTask();
    iterateTasks(project);
    populateTaskMarquee();
    myDom.content.appendChild(deleteButton)
 }

export { renderProject, renderTasks };