import { cachedDom } from "../domManipulation/cacheDomElements"

const dumpSelect = function() {
    const myDom = cachedDom();
    const selector = myDom.taskForm.querySelector('#project-select');
    while(selector.hasChildNodes()) {
        selector.removeChild(selector.firstChild);
    }
}

const dumpContent = function() {
    const myDom = cachedDom();
    while(myDom.content.hasChildNodes()) {
        myDom.content.removeChild(myDom.content.firstChild);
    }
}

const dumpChecklist = function(checklist) {
    const children = checklist.querySelectorAll('.check-container-sub');
    children.forEach(child => {
        child.remove();
    })
}

const dumpChecklistEdit = function(checklist) {
    const children = checklist.querySelectorAll('#newDiv');
    children.forEach(child => {
        child.remove();
    })
}

export { dumpSelect, dumpContent, dumpChecklist, dumpChecklistEdit };