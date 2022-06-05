const referenceform = document.getElementById("referenceform");
const referencebutton = document.querySelector("#referenceform > button")
var referenceInput = document.getElementById("referenceInput");
var referencelist = document.getElementById("referenceList");

var dateAccessedInput = document.getElementById("ReferenceAccessed");

referenceform.addEventListener("submit", function(event){
  event.preventDefault();
  let reference = referenceInput.value;
  let dateAccessed = dateAccessedInput.value;
  addReference(reference, dateAccessed, false);
  console.log(referencelist);
})

var referenceListArray = [];

function addReference(referenceDescription, dateAccessed, completionStatus) {
  let reference = {
    referenceDescription,
    dateAccessed,
    completionStatus
  };
  referenceListArray.push(reference);
  referenceRenderTask(reference);
}

function referenceRenderTask(reference){
  // Create HTML elements
  let item = document.createElement("li");
  let p = document.createElement("p");
  p.innerHTML = reference.referenceDescription;
  item.appendChild(p);
  let a = document.createElement("p");
  a.innerHTML = reference.dateAccessed;
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
  referenceform.reset();
}

