const btn=document.getElementById("btn")
btn.addEventListener(`mousemove`,(e)=>{
    console.log(e);
})

document.getElementById("text").addEventListener('change',(event)=>{
    console.log(event.target.value);
})