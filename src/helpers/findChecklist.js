const findCheckbox = function(task, checkboxName) {
    return task.checkbox.find(checkbox => checkbox.name === checkboxName);
}

export default findCheckbox;