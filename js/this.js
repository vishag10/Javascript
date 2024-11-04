let obj={
    a:10,
    b:50,
    c:function() {
        console.log(this.a+this.b);
    }
    

    
}
obj.c()
console.log(obj.c);

