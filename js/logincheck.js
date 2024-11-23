document.getElementById("username").addEventListener("keyup",(e)=>{
    res=validate(e.target.value)
    document.getElementById("sname").textContent=res?"valid":"invalid"
    document.getElementById("sname").style=res?"color:green":"color:red"
   })
   
   
    function validate(data){
       const pattern=/^[a-z].{5}/
       return pattern.test(data)
    } 
    document.getElementById("email").addEventListener("keyup",(e)=>{
        res=email(e.target.value)
        document.getElementById("smail").textContent=res?"valid":"invalid"
        document.getElementById("smail").style=res?"color:green":"color:red"
       })
       
       
        function email(data){
           const pattern=/.{4}(@gmail\.com)$/
           return pattern.test(data)
        } 


        document.getElementById("pass").addEventListener("keyup",(e)=>{
            res=pass(e.target.value)
            document.getElementById("spass").textContent=res?"valid":"invalid"
            document.getElementById("spass").style=res?"color:green":"color:red"
           })
           
           
            function pass(data){
               const pattern=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/
               return pattern.test(data)
            } 