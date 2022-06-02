/*The following code is almost a one to one of a youtube tutorial.
I wasnt trying to copy but its pretty hard to refactor this into my
own work. To prove my understanding, we use queryselectorall to get the
collection of elements of the class draggable, we then add an event
listener that watches these elements and applies a class to them if
they are dragged. We can use this logic structure to move cards on
our kanban board */ const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');
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

//# sourceMappingURL=kanban.4b67a79d.js.map
