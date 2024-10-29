let tasks=[]
let num=[]
function add(){
    let data=document.getElementById("task").value;
    let num=document.getElementById("num").value;
    tasks.push({data,num});
    document.getElementById("task").value="";
    document.getElementById("num").value="";
    getTasks()
}

function getTasks(){
    str=``
    for(i=0;i<tasks.length;i++){
        str+=`<li>${tasks[i].data} : ${tasks[i].num}<button onclick="del(${i})">delete</button> <button onclick="edit(${i})" >edit</button></li>`
    }
    document.getElementById("op").innerHTML=str
}

function del(index){
    tasks.splice(index,1);
    getTasks();
    
 
}
function edit(index){
    const s=prompt("enter name to update")
    
    tasks[index].data=s
    const m=prompt("enter number to update")
    tasks[index].num=m
    getTasks()
}