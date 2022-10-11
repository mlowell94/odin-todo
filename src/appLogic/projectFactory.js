const projectFactory = (submittedName, submittedDate, submittedPriority ) => {

    const name = submittedName;
    const dueDate = submittedDate;
    const priority = submittedPriority;
    const tasks = [];
    return { name, dueDate, tasks, priority };
    
}

export default projectFactory;