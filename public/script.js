const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button")
var taskInput = document.getElementById("taskInput");
var tasklist = document.getElementById("tasklist");

var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");

form.addEventListener("submit", function(event){
  event.preventDefault();
  let task = taskInput.value;
  let dueDate = dueDateInput.value;
  let completionTime = completionTimeInput.value;
  let estimatedTime = estimatedTimeInput.value;
  let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
  addTask(task, dueDate, estimatedTime, priorityRating, completionTime, false);
  console.log(tasklist);
})

var taskListArray = [];

function addTask(taskDescription, dueDate, estimatedTime, priorityRating, completionTime, completionStatus) {
  let d = new Date();
  let dateCreated = d.getFullYear();
  let task = {
    taskDescription,
    dueDate,
    dateCreated,
    estimatedTime,
    completionTime,
    priorityRating,
    estimatedTime,
    completionStatus
  };
  taskListArray.push(task);
  renderTask(task);
}

function renderTask(task){
  // Create HTML elements
  let item = document.createElement("li");
  let p = document.createElement("p");
  p.innerHTML = task.taskDescription;
  item.appendChild(p);
  let a = document.createElement("p");
  a.innerHTML = task.dueDate;
  item.appendChild(a);
  let b = document.createElement("p");
  b.innerHTML = task.priorityRating;
  item.appendChild(b);

  tasklist.appendChild(item);

  // Extra Task DOM elements
  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("Completed");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton);


  // Event Listeners for DOM elements
  delButton.addEventListener("click", function(event){
    event.preventDefault();
    item.remove();
  })


  // Clear the input form
  form.reset();
}

let button1 = document.querySelector('.js-button');
let confirmContainer = document.querySelector('.button-container');
let hand = document.getElementById('hour-hand');

button1.addEventListener('click', () => {
  if(hand.classList.contains('on')){
    hand.classList.remove('on');
  } else {
    hand.classList.add('on');
  }
});