import checklistFactory from "../appLogic/checklistFactory";
import { getLabelInput } from "../domManipulation/cacheDomElements"

const checklistbuilder = function(element) {
    const checklistArray = []
    for(let i = 0; i < element.length; i++) {
        let temp = getLabelInput(element[i]);
        let newCheck = checklistFactory(temp.labelText, temp.inputBool);
        checklistArray.push(newCheck);
    }
    return checklistArray;
}

export default checklistbuilder;