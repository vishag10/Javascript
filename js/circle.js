 document.addEventListener("mousemove",(e)=>{
    // console.log(e.clientX);
    // console.log(e.clientY);
    document.getElementById("circle").style.top=e.clientY+"px"
    document.getElementById("circle").style.left=e.clientX+"px"
 })