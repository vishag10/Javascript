
function Add() {
    let num1 = parseInt(document.getElementById("text1").value);
    let num2 = parseInt(document.getElementById("text2").value);
    document.getElementById("h3").textContent=`RESULT :${num2+num1}`
}

document.getElementById("btn2").addEventListener('click',()=>{
    let num1 = parseInt(document.getElementById("text1").value);
    let num2 = parseInt(document.getElementById("text2").value);
    document.getElementById("h3").textContent=`RESULT :${num1-num2}`
})
document.getElementById("btn3").addEventListener('click',()=>{
    let num1 = parseInt(document.getElementById("text1").value);
    let num2 = parseInt(document.getElementById("text2").value);
    document.getElementById("h3").textContent=`RESULT :${num1*num2}`
})
document.getElementById("btn4").addEventListener('click',()=>{
    let num1 = parseInt(document.getElementById("text1").value);
    let num2 = parseInt(document.getElementById("text2").value);
    document.getElementById("h3").textContent=`RESULT :${num1/num2}`
})
document.getElementById("btn5").addEventListener('click',()=>{
  document.getElementById("text1").value=``;
  document.getElementById("text2").value=``;
  document.getElementById("h3").textContent=``;
})