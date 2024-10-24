function asd(a,b){
    function MyFunction(){
        c=a+b
        return c
    }
    return MyFunction

}

let x=asd(5,3)
let y=x()
console.dir(x);