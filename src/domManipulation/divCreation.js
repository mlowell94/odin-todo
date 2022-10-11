import { cachedDom, cachedEditForm } from './cacheDomElements';
import books from '../assets/book.svg';
import { checkLength, abbreviateString } from '../helpers/stringManip';
import minus from '../assets/minus.svg';
import {
  bindCollapse, bindEdit, bindExpand, bindRemoveCheckbox, bindRemoveSubtask, bindDelete, bindProjectDelete,
} from './eventBinding';
import { copyArray, getSortedArray } from './events';
import findTask from '../helpers/findTask';
import downArrow from '../assets/heart.svg';
import upArrow from '../assets/heart2.svg';
import checkChecklist from '../appLogic/checkChecklistBool';
import projectContainer from '../appLogic/projects';
import findProject from '../helpers/findProject';
import trashcan from '../assets/trash-2.svg';
import edit from '../assets/edit.svg';
import projectImage from '../assets/projects.png';

const createProjectDivs = function (project) {
  const myDom = cachedDom();

  const div = document.createElement('div');
  const image = document.createElement('img');
  const title = document.createElement('p');
  const priority = document.createElement('p');

  image.src = projectImage;
  if (checkLength(project.name)) {
    title.textContent = abbreviateString(project.name);
  } else {
    title.textContent = project.name;
  }
  priority.textContent = `Priority: ${project.priority}`;

  div.appendChild(image);
  div.appendChild(title);
  div.appendChild(priority);
  div.classList.add('project-sub');
  myDom.content.appendChild(div);
};

const createTaskDivs = function (task) {
  const myDom = cachedDom();

  const div = document.createElement('div');
  const image = document.createElement('img');
  const title = document.createElement('p');

  image.src = books;
  if (checkLength(task.name)) {
    title.textContent = abbreviateString(task.name);
  } else {
    title.textContent = task.name;
  }
  div.appendChild(image);
  div.appendChild(title);
  myDom.content.appendChild(div);
};

const createCheckbox = function () {
  const myDom = cachedDom();
  const myForm = myDom.newTaskView;

  const newCheckboxItemText = myForm.querySelector('#checklist-entry').value;

  const newDiv = document.createElement('div');
  const subDiv = document.createElement('div');

  newDiv.setAttribute('id', 'newDiv');
  subDiv.setAttribute('id', 'subDiv');

  const minusImg = document.createElement('img');
  minusImg.src = minus;
  minusImg.setAttribute('id', 'minus');

  bindRemoveCheckbox(minusImg);

  const newCheckbox = document.createElement('input');
  const newCheckboxLabel = document.createElement('label');
  newCheckboxLabel.setAttribute('for', 'test');

  newCheckbox.type = 'checkbox';
  newCheckbox.setAttribute('id', 'test');

  newCheckboxLabel.textContent = newCheckboxItemText;

  newDiv.appendChild(newCheckbox);
  subDiv.appendChild(newCheckboxLabel);
  subDiv.appendChild(minusImg);
  newDiv.appendChild(subDiv);

  const checkContainer = myForm.querySelector('.checklist-container');

  checkContainer.appendChild(newDiv);
};

const createEditCheckbox = function () {
  const myDom = cachedDom();
  const myForm = myDom.editTaskView;

  const newCheckboxItemText = myForm.querySelector('#checklist-entry').value;

  const newDiv = document.createElement('div');
  const subDiv = document.createElement('div');

  newDiv.setAttribute('id', 'newDiv');
  subDiv.setAttribute('id', 'subDiv');

  const minusImg = document.createElement('img');
  minusImg.src = minus;
  minusImg.setAttribute('id', 'minus');

  bindRemoveCheckbox(minusImg);

  const newCheckbox = document.createElement('input');
  const newCheckboxLabel = document.createElement('label');
  newCheckboxLabel.setAttribute('for', 'test');

  newCheckbox.type = 'checkbox';
  newCheckbox.setAttribute('id', 'test');

  newCheckboxLabel.textContent = newCheckboxItemText;

  newDiv.appendChild(newCheckbox);
  subDiv.appendChild(newCheckboxLabel);
  subDiv.appendChild(minusImg);
  newDiv.appendChild(subDiv);

  const checkContainer = myForm.querySelector('.checklist-container');

  checkContainer.appendChild(newDiv);
};

const populateEditChecks = function (task) {
  const myForm = cachedEditForm();
  const checkContainer = myForm.checks;
  for (let i = 0; i < task.checkbox.length; i++) {
    const newCheckboxItemText = task.checkbox[i].name;

    const newDiv = document.createElement('div');
    const subDiv = document.createElement('div');

    newDiv.setAttribute('id', 'newDiv');
    subDiv.setAttribute('id', 'subDiv');

    const minusImg = document.createElement('img');
    minusImg.src = minus;
    minusImg.setAttribute('id', 'minus');

    bindRemoveCheckbox(minusImg);

    const newCheckbox = document.createElement('input');
    const newCheckboxLabel = document.createElement('label');
    newCheckboxLabel.setAttribute('for', 'test');

    newCheckbox.type = 'checkbox';
    newCheckbox.checked = task.checkbox[i].taskFinished;
    newCheckbox.setAttribute('id', 'test');

    newCheckboxLabel.textContent = newCheckboxItemText;

    newDiv.appendChild(newCheckbox);
    subDiv.appendChild(newCheckboxLabel);
    subDiv.appendChild(minusImg);
    newDiv.appendChild(subDiv);
    checkContainer.appendChild(newDiv);
  }
};

const createTaskDesc = function () {
  const descDiv = document.createElement('div');
  const descLabel = document.createElement('label');
  descLabel.setAttribute('for', 'update-desc');
  descLabel.textContent = 'Description:';
  const descText = document.createElement('span');
  descText.setAttribute('id', 'desc-open');

  descDiv.appendChild(descLabel);
  descDiv.appendChild(descText);

  return descDiv;
};

const createTaskDate = function () {
  const dateDiv = document.createElement('div');
  const dateLabel = document.createElement('label');
  dateLabel.setAttribute('for', 'update-date');
  dateLabel.textContent = 'Due by:';
  const dateText = document.createElement('span');
  dateText.setAttribute('id', 'date-open');

  dateDiv.appendChild(dateLabel);
  dateDiv.appendChild(dateText);

  return dateDiv;
};

const createTaskPriority = function () {
  const priorityDiv = document.createElement('div');
  const priorityLabel = document.createElement('label');
  priorityLabel.setAttribute('for', 'update-priority');
  priorityLabel.textContent = 'Priority:';
  const priorityText = document.createElement('span');
  priorityText.setAttribute('id', 'priority-open');

  priorityDiv.appendChild(priorityLabel);
  priorityDiv.appendChild(priorityText);

  return priorityDiv;
};

const createTaskNotes = function () {
  const notesDiv = document.createElement('div');
  const notesLabel = document.createElement('label');
  notesLabel.setAttribute('for', 'update-notes');
  notesLabel.textContent = 'Notes:';
  const notesText = document.createElement('span');
  notesText.setAttribute('id', 'notes-open');

  notesDiv.appendChild(notesLabel);
  notesDiv.appendChild(notesText);

  return notesDiv;
};

const createTaskChecks = function (task) {
  const checkContainerMain = document.createElement('div');
  checkContainerMain.classList.add('check-container-main');
  const checkLabel = document.createElement('label');
  checkLabel.classList.add('check-label');
  checkLabel.textContent = 'Sub-tasks:';
  checkContainerMain.appendChild(checkLabel);
  if (task.checkbox.length == 0) {
    checkLabel.style.position = 'relative';
  }
  for (let i = 0; i < task.checkbox.length; i++) {
    const checkContainerSub = document.createElement('div');
    checkContainerSub.classList.add('check-container-sub');
    const checkName = document.createElement('span');
    const status = document.createElement('span');
    const remove = document.createElement('span');

    checkName.textContent = task.checkbox[i].name;
    status.textContent = checkChecklist(task.checkbox[i]);
    remove.style.color = 'red';
    remove.textContent = 'Remove?';

    bindRemoveSubtask(remove);

    checkContainerSub.setAttribute('id', i);
    checkContainerSub.appendChild(checkName);
    checkContainerSub.appendChild(status);
    checkContainerSub.appendChild(remove);
    checkContainerMain.appendChild(checkContainerSub);
  }

  return checkContainerMain;
};

const rewriteChecks = function (task, mainContainer) {
  const checkContainerMain = mainContainer;

  for (let i = 0; i < task.checkbox.length; i++) {
    const checkContainerSub = document.createElement('div');
    checkContainerSub.classList.add('check-container-sub');
    const checkName = document.createElement('span');
    const status = document.createElement('span');
    const remove = document.createElement('span');

    checkName.textContent = task.checkbox[i].name;
    status.textContent = checkChecklist(task.checkbox[i]);
    remove.style.color = 'red';
    remove.textContent = 'Remove?';

    bindRemoveSubtask(remove);

    checkContainerSub.setAttribute('id', i);
    checkContainerSub.appendChild(checkName);
    checkContainerSub.appendChild(status);
    checkContainerSub.appendChild(remove);
    checkContainerMain.appendChild(checkContainerSub);
  }
};

const createTaskEdit = function () {
  const editButton = document.createElement('img');
  editButton.src = edit;
  bindEdit(editButton);
  return editButton;
};

const createTaskDelete = function () {
  const deleteButton = document.createElement('img');
  deleteButton.src = trashcan;
  bindDelete(deleteButton);
  return deleteButton;
};

const createNewTask = function (someTask) {
  const myDom = cachedDom();
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');

  const taskContent = document.createElement('div');
  taskContent.classList.add('task-content');
  taskContent.classList.add('unopened');

  const header = createTaskHeader();
  const headerText = header.querySelector('h4');
  headerText.textContent = someTask.name;
  taskDiv.appendChild(header);

  const prio = createTaskPriority();
  const prioText = prio.querySelector('span');
  prioText.textContent = someTask.priority;

  const desc = createTaskDesc();
  const descText = desc.querySelector('span');
  descText.textContent = someTask.description;

  const date = createTaskDate();
  const dateText = date.querySelector('span');
  dateText.textContent = someTask.dueDate;

  const notes = createTaskNotes();
  const notesText = notes.querySelector('span');
  notesText.textContent = someTask.notes;

  const checks = createTaskChecks(someTask);

  const editButton = createTaskEdit();

  const deleteButton = createTaskDelete();

  taskContent.appendChild(prio);
  taskContent.appendChild(desc);
  taskContent.appendChild(date);
  taskContent.appendChild(checks);
  taskContent.appendChild(notes);
  taskContent.appendChild(deleteButton);
  taskContent.appendChild(editButton);
  taskDiv.appendChild(taskContent);
  myDom.content.appendChild(taskDiv);
  return taskDiv;
};

const createTaskHeader = function () {
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('task-header');
  const header = document.createElement('h4');

  const chevronDown = document.createElement('img');
  chevronDown.src = downArrow;
  chevronDown.classList.add('expand');
  chevronDown.setAttribute('id', 'active');

  const chevronUp = document.createElement('img');
  chevronUp.src = upArrow;
  chevronUp.classList.add('collapse');
  chevronUp.setAttribute('id', 'inactive');

  headerDiv.appendChild(header);
  headerDiv.appendChild(chevronDown);
  bindExpand(chevronDown);
  bindCollapse(chevronUp);

  headerDiv.appendChild(chevronUp);

  return headerDiv;
};

const iterateTasks = function (project) {
  console.log(project.tasks);
  console.log(typeof (getSortedArray));
  const newTaskCopySorted = getSortedArray(copyArray(project.tasks));
  for (let i = 0; i < project.tasks.length; i++) {
    const newTask = createNewTask(findTask(project, newTaskCopySorted[i].name));
    const strTwo = project.tasks.indexOf(findTask(project, newTaskCopySorted[i].name));
    newTask.setAttribute('id', (strTwo));
  }
};

const iterateProject = function (sort) {
  for (let i = 0; i < projectContainer.length; i++) {
    console.log(sort);
    createProjectDivs(findProject(sort[i].name));
  }
};

const createProjectDeleteButton = function () {
  const projectDeleteButton = document.createElement('img');
  projectDeleteButton.src = trashcan;
  bindProjectDelete(projectDeleteButton);
  return projectDeleteButton;
};

export {
  createProjectDivs, createTaskDivs, createCheckbox, iterateTasks, rewriteChecks,
  populateEditChecks, createEditCheckbox, createProjectDeleteButton, iterateProject,
};
