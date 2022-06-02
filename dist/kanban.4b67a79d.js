/*The following code is almost a one to one of a youtube tutorial.
I wasnt trying to copy but its pretty hard to refactor this into my
own work. To prove my understanding, we use queryselectorall to get the
collection of elements of the class draggable, we then add an event
listener that watches these elements and applies a class to them if
they are dragged. We can use this logic structure to move cards on
our kanban board */ var draggables = document.querySelectorAll('.draggable');
var containers = document.querySelectorAll('.container');
draggables.forEach((draggable)=>{
    draggable.addEventListener('dragstart', ()=>{
        draggable.classList.add('dragging');
    });
    draggable.addEventListener('dragend', ()=>{
        draggable.classList.remove('dragging');
    });
});
containers.forEach((container)=>{
    container.addEventListener('dragover', ()=>{
        const draggable = document.querySelector('.dragging');
        container.appendChild(draggable);
    });
});
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button");
var taskInput = document.getElementById("taskInput");
var row1 = document.getElementById("row-1-container");
var dueDateInput = document.getElementById("dueDateInput");
var priorityInput = document.getElementById("priorityInput");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let task = taskInput.value;
    let dueDate = dueDateInput.value;
    let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
    addTask(task, dueDate, priorityRating, false);
});
var taskListArray = [];
function addTask(taskDescription, dueDate, priorityRating, completionStatus) {
    let d = new Date();
    let dateCreated = d.getFullYear();
    let task = {
        taskDescription,
        dueDate,
        dateCreated,
        priorityRating,
        completionStatus
    };
    taskListArray.push(task);
    renderTask(task);
}
function renderTask(task) {
    // Create HTML elements
    let card = document.createElement('div');
    let item = document.createElement("p");
    item.innerHTML = task.taskDescription + " " + task.dueDate + " " + task.priorityRating;
    card.appendChild(item);
    card.classList.add('draggable');
    card.draggable = true;
    row1.appendChild(card);
    // Extra Task DOM elements
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Completed");
    delButton.appendChild(delButtonText);
    delButton.draggable = true;
    card.appendChild(delButton);
    // Event Listeners for DOM elements
    delButton.addEventListener("click", function(event) {
        event.preventDefault();
        card.remove();
    });
    card.addEventListener('dragstart', ()=>{
        card.classList.add('dragging');
    });
    card.addEventListener('dragend', ()=>{
        card.classList.remove('dragging');
    });
    card.addEventListener('dragover', ()=>{
        const draggable = document.querySelector('.dragging');
        card.appendChild(draggable);
    });
    // Clear the input form
    form.reset();
}

//# sourceMappingURL=kanban.4b67a79d.js.map
