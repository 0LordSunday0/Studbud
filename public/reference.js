const form = document.getElementById("reference");
const button = document.querySelector("#referenceform > button")
var referenceInput = document.getElementById("referenceInput");
var referencelist = document.getElementById("referenceList");

var dueDateInput = document.getElementById("dueDateInput");

form.addEventListener("submit", function(event){
  event.preventDefault();
  let reference = taskInput.value;
  let dueDate = dueDateInput.value;
  addTask(reference, dueDate, false);
  console.log(referencelist);
})

var referenceListArray = [];

function addTask(referenceDescription, dueDate, completionStatus) {
  let reference = {
    referenceDescription,
    dueDate,
    completionStatus
  };
  referenceListArray.push(reference);
  renderTask(reference);
}

function renderTask(task){
  // Create HTML elements
  let item = document.createElement("li");
  let p = document.createElement("p");
  p.innerHTML = reference.referenceDescription;
  item.appendChild(p);
  let a = document.createElement("p");
  a.innerHTML = reference.dueDate;
  item.appendChild(a);

  referencelist.appendChild(item);

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

