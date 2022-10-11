import projectContainer from "../appLogic/projects"

const findProject = function(projectTitle) {
    return projectContainer.find(project => project.name === projectTitle);
}

export default findProject 
