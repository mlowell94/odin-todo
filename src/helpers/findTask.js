const findTask = function(project, taskName) {
    return project.tasks.find(task => task.name === taskName);
}

export default findTask;