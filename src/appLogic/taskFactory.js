const taskFactory = (taskName, desc, dateDue, taskPriority, taskNotes, checkboxes) => {
    var name = taskName;
    var description = desc;
    var dueDate = dateDue;
    var priority = taskPriority;
    var checkbox =  checkboxes;
    var notes = taskNotes;


    return { name, description, dueDate, priority, notes, checkbox }
}

export default taskFactory;