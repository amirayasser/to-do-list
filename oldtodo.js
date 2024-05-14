/*
students tasks:
1- use sweet alert if input is empty
2- check if task is already exist
3- create delete all tasks btn
4- create finish all tasks btn
*/

// setting up variables
let input = document.querySelector(" .add-task input"),
    addBtn = document.querySelector(".plus"),
    tasksContainer = document.querySelector(".tasks-content"),
    noTasksMsg = document.querySelector(".no-task-msg"),
    tasksCount = document.querySelector(".task-count span"),
    completedTasks = document.querySelector(".completed-tasks span");
 

// focus on input field
window.onload = function(){
   input.focus(); 
};

// adding the task
addBtn.onclick = function () {

    // check if input is empty
    if(input.value === ""){

        console.log("empty")

    } else {

    // remove no tasks msg
        noTasksMsg.remove();

    // create span element "main span"
    let mainSpan = document.createElement("span");
    
    // create delete button
    let delBtn = document.createElement("span");
    
    // create main span text
    let txt = document.createTextNode(input.value)

    // create del span text
    let deltxt = document.createTextNode("Delete")

    // add text to main span
    mainSpan.appendChild(txt);
    
    // add class to main span
    mainSpan.className = "task-box";
        
    // add text to del span
    delBtn.appendChild(deltxt);

    // add class to main span
    delBtn.className = "del";
    
    // add del span to main span
    mainSpan.appendChild(delBtn);

    // add the task to the container
    tasksContainer.appendChild(mainSpan);

    // Empty the input field
    input.value = "";

    }
};

document.addEventListener("click", function(e){

    // Delete task
    if(e.target.className == "del"){

    // Remove current task
    e.target.parentNode.remove();  
    }


    // Finish task
    if (e.target.classList.contains("task-box")) {

    // toggle class finished
    e.target.classList.toggle("finished");

    }

});