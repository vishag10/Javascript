function options(limit,n,id){
    str=``
    for(i=n;i<=limit;i++){
        str+=`<option value="${i}">${i}</option>`
    }
    document.getElementById(id).innerHTML=str
}
options(59,0,"min")
options(24,0,"hrs")
options(31,1,"date")
options(12,1,"mon")
options(6,0,"day")

function select(id){ 
    var e = document.getElementById(id);
   var text = e.options[e.selectedIndex].text;
   console.log(text);  
}