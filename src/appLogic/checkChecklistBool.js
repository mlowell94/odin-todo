const checkChecklist = function(checklistItem) {
    if(checklistItem.taskFinished) {
        return "Completed!";
    } else {
        return "Incomplete";
    }
}

export default checkChecklist;