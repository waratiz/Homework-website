
function moveToDoing(element) {
    
    let doingTask = document.getElementById('doingTask');

   
    if (doingTask.children.length === 0) {
       
        element.classList.add("doing"); 
       
        doingTask.appendChild(element); 
    } else {
        alert("ทำได้ทีละวิชานะจ๊ะ");
    }
}


document.getElementById('doingTask').addEventListener('click', function() {
   
    let doneTasks = document.getElementById('doneTasks');

    if (this.children.length > 0) {
       
        let task = this.children[0]; 
        
        task.classList.remove("doing"); 
        
        task.classList.add("item3"); 
      
        doneTasks.appendChild(task);
    }
});


const dragAndDropItems = document.getElementById('container');


new Sortable(dragAndDropItems, {
   animation: 350,
   chosenClass: "team-member-chosen", 
   dragClass: "team-member-drag", 
});