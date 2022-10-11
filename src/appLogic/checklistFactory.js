const checklistFactory = (submittedName, isComplete) => {
    const name = submittedName;
    const taskFinished = isComplete;

    return { name, taskFinished }
}

export default  checklistFactory;