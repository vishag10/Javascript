function fetchData(){
    return new Promise((res,rej)=>{
        if (true) {
            res("hai");            
        }
        else{
            rej("helo");
        }
    })
}

fetchData().then((data)=>{console.log(data);}).catch((data)=>{console.log(data);})