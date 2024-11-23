document.getElementById("num").addEventListener('keyup',(e)=>{
   res= validate(e.target.value)
   document.getElementById("valid").textContent=res?"valid phone number":"invalid phone number"
   document.getElementById("valid").style=res?"color:green":"color:red"
})

function validate(data){
    const pattern=/^[6-9]\d{9}$/
    return pattern.test(data);
}