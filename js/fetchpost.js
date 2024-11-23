function fetData(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json()) .then((data)=>{
        console.log(data);
        str=``
        data.map((dt)=>{
            str+=`<tr>
                <td>${dt.userId}</td>
                <td>${dt.id}</td>
                <td>${dt.title}</td>
                <td>${dt.body}</td>
                </tr>
                `
        })
       document.getElementById("posts").innerHTML=str; 
    })
}


function fetData1(){
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res)=>res.json()) .then((data)=>{
        console.log(data);
        str=``
        data.map((dt)=>{
            str+=`<div class="card" >
            <h4>${dt.name}</h4>
            <h6>${dt.email}</h6>
            <p>${dt.body}</p>
            </div>
            `
        })
       document.getElementById("container").innerHTML=str; 
    })
}


function fetData3(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json()) .then((data)=>{
        console.log(data);
        str=``
        data.map((dt)=>{
            str+=`<tr>
                <td>${dt.userId}</td>
                <td>${dt.id}</td>
                <td>${dt.title}</td>
                
                </tr>
                `
        })
       document.getElementById("album").innerHTML=str; 
    })
}


function fetData4(){
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res)=>res.json()) .then((data)=>{
        console.log(data);
        str=``
        data.map((dt)=>{
            str+=`   <div class="card" >
            <img src="${dt.thumbnailUrl}" alt="" class="img">
            <h4>${dt.id}</h4>
            <p>${dt.title}</p>
            
            </div>
            `
        })
       document.getElementById("photo").innerHTML=str; 
    })
}


function fetData5(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>res.json()) .then((data)=>{
        console.log(data);
        str=``
        data.map((dt)=>{
            str+=`<tr>
                <td>${dt.userId}</td>
                <td>${dt.id}</td>
                <td>${dt.title}</td>
                <td>${dt.completed}</td>
                
                </tr>
                `
        })
       document.getElementById("todo").innerHTML=str; 
    })
}


fetData()
fetData1()
fetData3()
fetData4()
fetData5()