function asd(){
    const date=new Date();
    ampm=date.getHours() >=12 ? "PM" : "AM";
    document.getElementById("hour").textContent=putZero(date.getHours()%12)
    document.getElementById("").textContent=putZero(date.getHours()%12)
}