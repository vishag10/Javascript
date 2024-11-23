document.getElementById("date").addEventListener("keyup",(e)=>{
 res=validate(e.target.value)
 document.getElementById("span").textContent=res?"valid":"invalid"
 document.getElementById("span").style=res?"color:green":"color:red"
})


 function validate(data){
    const pattern=/^([0-2]\d||3[0-1])-([0]\d||1[0-2])-(\d{4})$/
    return pattern.test(data)
 }                                                                                                                                                                          