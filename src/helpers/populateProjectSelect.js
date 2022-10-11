import { cachedDom } from "../domManipulation/cacheDomElements";
import projectContainer from "../appLogic/projects";

const createSelect = function(projectTitle) {
    const newOption = document.createElement('option')
    newOption.value = projectTitle;
    newOption.textContent = projectTitle;
    return newOption;
}

const populateProjectSelect = function() {
    const myDom = cachedDom();
    const selector = myDom.taskForm.querySelector('#project-select');
    for(let i = 0; i < projectContainer.length; i++) {
        let tempOption = createSelect(projectContainer[i].name);
        selector.appendChild(tempOption);
    }
}

export default populateProjectSelect;