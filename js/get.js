class Button{
    constructor(name){
        this.button=document.createElement("button")
        this.button.innerHTML=name
        document.body.appendChild(this.button)
    }
    

    set widht(width){
        this.button.style.width=width+"px"
    }

    set height(height){
        this.button.style.height=height+"px"
    }

    get widht(){
        return parseInt(this.button.style.width)
    }
    get height(){
        return parseInt(this.button.style.height)
    }
}


btn1=new Button("Click")

btn1.widht=150
btn1.height=100

console.log(btn1.widht,btn1.height);

