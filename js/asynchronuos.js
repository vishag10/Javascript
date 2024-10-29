// console.log("start");
// setTimeout(()=>{
//     for(i=1;i<=10;i++){
//         console.log(i);
        
//     }
// },5000)
// console.log("stop");

i=10
x=setInterval(()=>{

    if(i<0){
        document.getElementById("count").textContent=("start")
        clearInterval(x)
        
    }
    else {
        document.getElementById("count").textContent=i
    }
    
    i--;
},1000)