import { createTask, deleteTask } from "./task";

function createHeader() {
    const header = document.createElement('div');
    header.id = "header";
    header.textContent = "✓ TO-DO-LIST ✓"
    return header;
}

function createTabs(){
    const tabs = document.createElement('div');
    tabs.id = "tabs";

    // task
    const taskNavContainer = document.createElement('div');
    taskNavContainer.className = "navs"
    const taskIcon = document.createElement('i');
    taskIcon.className = "las la-tasks";
    const task = document.createElement('div');
    task.id = "tasks";
    task.textContent = "Tasks";
    taskNavContainer.appendChild(taskIcon);
    taskNavContainer.appendChild(task);

    // today
    const todayNavContainer = document.createElement('div');
    todayNavContainer.className = "navs"
    const todayIcon = document.createElement('i');
    todayIcon.className = "las la-tasks";
    const today = document.createElement('div');
    today.id = "today";
    today.textContent = "Today";
    todayNavContainer.appendChild(todayIcon);
    todayNavContainer.appendChild(today);

    // week
    const weekNavContainer = document.createElement('div');
    weekNavContainer.className = "navs"
    const weekIcon = document.createElement('i');
    weekIcon.className = "las la-tasks";
    const week = document.createElement('div');
    week.id = "tasks";
    week.textContent = "Tasks";
    weekNavContainer.appendChild(weekIcon);
    weekNavContainer.appendChild(week);

    // project
    const projContainer = document.createElement('div');
    const projBar = document.createElement('div');
    const projectPara = document.createElement('p');
    projectPara.textContent = "PROJECTS"
    const projectAddButton = document.createElement('i');
    projectAddButton.className = "las la-plus-circle";
    projBar.appendChild(projectPara);
    projBar.appendChild(projectAddButton);
    const projectNames = document.createElement('div');
    projContainer.appendChild(projBar);
    projContainer.appendChild(projectNames);

    tabs.appendChild(taskNavContainer);
    tabs.appendChild(todayNavContainer);
    tabs.appendChild(weekNavContainer);
    tabs.appendChild(projContainer);

    return tabs;
}

function createBoard(){
    const board = document.createElement('div');
    board.id = "board";

    const taskAddButton = createAddButton();

    board.appendChild(taskAddButton);

    return board;
}

function createAddButton(){
    const taskAddButton = document.createElement('i');
    taskAddButton.id = "add-task";
    taskAddButton.className = "las la-plus-circle";
    taskAddButton.addEventListener('click', showModal);
    return taskAddButton;
}

function createMain() {
    const main = document.createElement('div');
    main.id = "main";
    main.appendChild(createTabs());
    main.appendChild(createBoard());

    return main;
}

function createFooter(){
    const footer = document.createElement('div');
    footer.id = "footer";
    footer.textContent = "@kyleetaan ~theodinproject~";

    return footer;
}

function createModal(){
    const modal = document.createElement('div');
    modal.id = "task-create-modal";
    const modalContent = document.createElement('div');
    modalContent.id  = "modal-content";
    const taskName = document.createElement('textarea');
    taskName.id = "task-name";
    taskName.placeholder = "Title: Do the laundry!";
    const taskDesc = document.createElement('textarea');
    taskDesc.id = "task-description";
    taskDesc.placeholder = "Descrition/Note: Separate colored with whites!";
    const priorityCont = document.createElement('div');
    priorityCont.id = "priority-container";
    const priorityTitle = document.createElement('div');
    priorityTitle.textContent = "Priority:";

    const radioLowButton = document.createElement('input');
    radioLowButton.type = "radio";
    radioLowButton.name = "priority";
    radioLowButton.value = "low";
    radioLowButton.id = "priority-button-low";

    const labelLow = document.createElement('label');
    labelLow.htmlFor = "priority-button-low";
    labelLow.textContent = "Low";

    const radioMedButton = document.createElement('input');
    radioMedButton.type = "radio";
    radioMedButton.name = "priority";
    radioMedButton.value = "medium";
    radioMedButton.id = "priority-button-medium";

    const labelMed = document.createElement('label');
    labelMed.htmlFor = "priority-button-medium";
    labelMed.textContent = "Medium";

    const radioHighButton = document.createElement('input');
    radioHighButton.type = "radio";
    radioHighButton.name = "priority";
    radioHighButton.value = "high";
    radioHighButton.id = "priority-button-high";


    const labelHigh = document.createElement('label');
    labelHigh.htmlFor = "priority-button-high";
    labelHigh.textContent = "High";

    priorityCont.appendChild(priorityTitle);

    priorityCont.appendChild(radioLowButton);
    priorityCont.appendChild(labelLow);

    priorityCont.appendChild(radioMedButton);
    priorityCont.appendChild(labelMed);

    priorityCont.appendChild(radioHighButton);
    priorityCont.appendChild(labelHigh);

    modalContent.appendChild(taskName);
    modalContent.appendChild(taskDesc);
    modalContent.appendChild(priorityCont);

    const dateCont = document.createElement('div');
    dateCont.id = "date-container";
    const dateTitle = document.createElement('div');
    dateTitle.textContent = "Date:";
    const inputDate = document.createElement('input');
    inputDate.type = "date";
    inputDate.id = "due-date";

    dateCont.appendChild(dateTitle);
    dateCont.appendChild(inputDate);

    const buttonCont = document.createElement('div');
    buttonCont.id = "button-container";
    const acceptButton = document.createElement('button');
    acceptButton.id = "accept";
    acceptButton.className = "button-modal";
    acceptButton.textContent = "✓";
    acceptButton.addEventListener('click', taskCreation);

    const cancelButton = document.createElement('button');
    cancelButton.id = "cancel";
    cancelButton.className = "button-modal";
    cancelButton.textContent = "🗙";
    cancelButton.addEventListener('click', hideModal)
    
    buttonCont.appendChild(acceptButton);
    buttonCont.appendChild(cancelButton);

    modalContent.appendChild(dateCont);
    modalContent.appendChild(buttonCont);

    modal.appendChild(modalContent);

    modal.style.display = "none";

    return modal;

}

function createWebsite() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
    content.appendChild(createModal());

}

function showModal() {
    const modal = document.getElementById("task-create-modal");
    modal.style.display = "flex";
}

function hideModal() {
    const modal = document.getElementById("task-create-modal");
    modal.style.display = "none";
    //reset values here
    document.getElementById('task-name').value = "";
    document.getElementById('task-description').value = "";
    const radio = document.querySelector('input[name="priority"]:checked');
    radio.checked = false;
    document.getElementById('due-date').value = "";
}

function taskCreation() { // function where you add tasks

    //select each element then pass value
    const title = document.getElementById('task-name').value;
    const desc = document.getElementById('task-description').value;
    const prio = document.querySelector('input[name="priority"]:checked').value;
    const date = document.getElementById('due-date').value;

    
    if(localStorage.getItem('edit')){  // if edit
        const uniqid = localStorage.getItem('edit');
        console.log("here!")
        localStorage.removeItem('edit');
        createTask(title, desc, prio, date, uniqid);
        taskDisplay();
    } else {
        const uniqid = createTask(title, desc, prio, date);

        const taskDiv = createTaskDisplay(title, desc, prio, date, uniqid);
    }

    
    
    hideModal();
}

function createTaskDisplay(title, desc, prio, date, uniqid){

    const taskDiv = document.createElement('div');
    taskDiv.className = "task";
    taskDiv.id = uniqid;
    taskDiv.addEventListener('click', showDescription);

    const taskTitleBar = document.createElement('div');
    taskTitleBar.className = "task-title-bar";

    const checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    checkBox.className = "checkbox";
    const taskTitle = document.createElement('div');
    taskTitle.className = "task-title";
    taskTitle.textContent = title;
    const dueDate = document.createElement('input');
    dueDate.type = "date";
    dueDate.value = date;

    const edit = document.createElement('i');
    edit.className = "las la-edit";
    edit.addEventListener('click', editTask);

    const del = document.createElement('i');
    del.className = "las la-trash";
    del.addEventListener('click', deleteTaskElement);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'task-description';
    descriptionDiv.textContent = desc;
    descriptionDiv.style.display = "none";

    if(prio === 'low'){
        taskDiv.className += " task-priority-low"
    }
    else if(prio === 'medium'){
        taskDiv.className += " task-priority-medium"
    }
    else if(prio === 'high'){
        taskDiv.className += " task-priority-high"
    }

    taskTitleBar.appendChild(checkBox);
    taskTitleBar.appendChild(taskTitle);
    taskTitleBar.appendChild(dueDate);
    taskTitleBar.appendChild(edit);
    taskTitleBar.appendChild(del);
    
    taskDiv.appendChild(taskTitleBar);
    taskDiv.appendChild(descriptionDiv);

    const board = document.getElementById('board');
    board.appendChild(taskDiv);

}

function showDescription() {
    const desc = this.childNodes[1];
    if(desc.style.display === "none"){
        desc.style.display = "flex";
    }
    else {
        desc.style.display = "none";
    }
}

function taskDisplay() {
    const board = document.getElementById('board');
    board.textContent = "";
    board.appendChild(createAddButton());

    const keys = Object.keys(localStorage);

    for(let i = 0; i < keys.length; i++){
        // get key, store to object, parse then pass to createtaskdisplay
        const stringObj = localStorage.getItem(keys[i]);
        const tempObj = JSON.parse(stringObj);
        createTaskDisplay(tempObj.title, tempObj.description, tempObj.priority, tempObj.date, keys[i])
    }

    

}

function editTask() {
    showModal();
    
    const parentTaskNode = this.parentNode.parentNode;
    const uniqid = parentTaskNode.id;
    const objectToEdit = JSON.parse(localStorage.getItem(uniqid));
    const title = objectToEdit.title;
    const desc = objectToEdit.description;
    const priority = objectToEdit.priority;
    const date = objectToEdit.date;

    //set value here
    document.getElementById('task-name').value = title;
    document.getElementById('task-description').value = desc;
    if(priority === 'low'){
        document.querySelectorAll('input[name="priority"]')[0].checked = true;
    } else if(priority === 'medium') {
        document.querySelectorAll('input[name="priority"]')[1].checked = true;
    } else if(priority === 'high') {
        document.querySelectorAll('input[name="priority"]')[2].checked = true;
    }
    
    document.getElementById('due-date').value = date;

    localStorage.setItem('edit', uniqid);
}

function deleteTaskElement() {
    const task = this.parentNode.parentNode;
    deleteTask(task.id);
    task.remove();
}

export {createWebsite, taskDisplay};
