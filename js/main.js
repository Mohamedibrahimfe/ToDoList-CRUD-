let tasks=[
    // {
    // "title":"Javascript",
    // "date":"12/12/2021",
    // "isDone":true
    // }

]
function fillAllContent(){
    document.getElementById('tasks').innerHTML=""
let id = 0;
for(task of tasks){
    let content=`<div ${task.isDone?'done':''} class="myTask${id}" id="myTask">
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
    if(task.isDone){
        console.log(document.querySelector(`.myTask-${id}`))
        
    }
}
}
// show input field
document.getElementById('addButton').addEventListener('click',()=>{
    document.getElementById('nameInput').classList.toggle('active');
})

document.getElementById('addButtonTwo').addEventListener('click',()=>{
    
    const name=document.getElementById('nameInput').value;
    if(name==''){
        alert('Please enter task name')
        return
    }
    const currentTime = new Date().toLocaleString();
    let taskobj={
        "title":name,
        "date":currentTime,
        "isDone":false
    }
    tasks.push(taskobj);
    fillAllContent();
})
// delete function
function deleteTask(id){
    let confirmation=confirm(`Are you sure you want to delete : ${task.title}`)
    if (confirmation==true){
    
        tasks.splice(id,1);
        fillAllContent();
            
    }
}
// edit function
function editTask(id){
    let confirmation=confirm(`Are you sure you want to edit : ${task.title}`)
    if (confirmation==false){
        return
    }
    let newName=prompt(`Enter new name for ${task.title}`,`${task.title}`)
    if(newName==null){
        return
    }
    tasks[id].title=newName;
    fillAllContent();
}
// check function
function completeTask(id){
    if(tasks[id].isDone==true){
        tasks[id].isDone=false;
        fillAllContent();
        return
    }
    tasks[id].isDone=true;
    fillAllContent();
}