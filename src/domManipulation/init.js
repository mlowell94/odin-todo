import projectContainer from "../appLogic/projects"
import { populateProjectMarquee } from "./events";

const init = function() {
    if(Object.keys(localStorage).length == 0) {
        return null;
    }
    for(let i = 0; i < localStorage.length; i++ ) {
        console.log(localStorage[i]);
        const parsedString = JSON.parse(localStorage[i]);
        projectContainer.push(parsedString);
    }
    populateProjectMarquee();
}

export default init;