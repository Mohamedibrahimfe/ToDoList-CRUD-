
let tasks=[
    // {
    // "title":"Javascript",
    // "date":"12/12/2021",
    // "isDone":true
    // },
    // {
    // "title":"Html",
    // "date":"12/12/2021",
    // "isDone":false
    // },
    // {
    // "title":"Css",
    // "date":"12/12/2021",
    // "isDone":false
    // }

]
function getTasksFromStorage(){
    tasks=JSON.parse(localStorage.getItem("tasks"));
    if(tasks==null){
        tasks=[]
    }
}
getTasksFromStorage();
function fillAllContent(){
    document.getElementById('tasks').innerHTML=""
let id = 0;
for(task of tasks){
    let content=`<div  class="${task.isDone?'done change-icon':''} myTask" id="myTask">
                <h2 id="title">${task.title}</h2>
                <div class="date">
                    <i class="myCalendar fa-regular fa-calendar"></i>
                    <span>${task.date}</span>
                </div>
                <div class="icons">
                    <i id="delete" onClick="deleteTask(${id})" class=" myIcon fa-solid fa-trash"></i>
                    <i id="check" onClick="completeTask(${id})" class=" myIcon fa-solid fa-check"></i>
                    <i id="edit" onClick="editTask(${id})" class=" myIcon fa-solid fa-pen"></i>
                </div>
            </div>`
    document.getElementById('tasks').innerHTML+=content;
    id++
}
}
fillAllContent();
// show input field
document.getElementById('addButton').addEventListener('click',()=>{
    document.getElementById('nameInput').classList.toggle('active');
})

// add the task
document.getElementById('addButtonTwo').addEventListener('click',()=>{
    const name=document.getElementById('nameInput').value;
    if(name==''){
        alert('Please enter task name')
        return
    }
    const currentTime = new Date().toLocaleString();
    let taskObj={
        "title":name,
        "date":currentTime,
        "isDone":false
    }
    tasks.push(taskObj);
    saveData()
    fillAllContent();
})
// delete function
function deleteTask(id){
    let confirmation=confirm(`Are you sure you want to delete : ${task.title}`)
    if (confirmation==true){
    
        tasks.splice(id,1);
        fillAllContent();
        saveData()
    }
}
// edit function
function editTask(id){
    let newName=prompt(`Enter new name for ${task.title}`,`${task.title}`)
    if(newName==null){
        return
    }
    tasks[id].title=newName;
    fillAllContent();
    saveData()
}
// check function
function completeTask(id){
        tasks[id].isDone = !tasks[id].isDone;
        fillAllContent();
        saveData()
}

// storage function
function saveData(){
    localStorage.setItem("tasks", JSON.stringify(tasks))
}


