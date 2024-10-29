i=1
function asd(){
    const hrs=new Date()
    const min=new Date()
    const sec=new Date()
    const day=new Date()
    

    setTimeout(()=>{
        
        document.getElementById("minutes").textContent=min.getMinutes()
        document.getElementById("seconds").textContent=sec.getSeconds()
        x=day.getDay();
        switch(x){
            case 0:
                document.getElementById("day").textContent="Sun"
                break;
            case 1:
                document.getElementById("day").textContent="Mon"
                break;
            case 2:
                document.getElementById("day").textContent="Tue"
                break;
            case 3:
                document.getElementById("day").textContent="Wed"
                break;
            case 4:
                document.getElementById("day").textContent="Thu"
                break;
            case 5:
                document.getElementById("day").textContent="Fri"
                break;
            case 6:
                document.getElementById("day").textContent="Sat"
                break;

 
        }
        y=hrs.getHours()
        
        if (y>= 12) {
            document.getElementById("hour").textContent=y%12
            document.getElementById("am").textContent="PM"
        }
        else{
            document.getElementById("hour").textContent=y
            document.getElementById("am").textContent="AM"
        }
        asd()
    },1000)

}
asd()