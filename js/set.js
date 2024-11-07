// class Button{
//     constructor(name){
//         this.button=document.createElement("button")
//         this.button.innerHTML=name
//         document.body.appendChild(this.button)
//     }
    

//     setWidht(width){
//         this.button.style.width=width+"px"
//     }

//     setHeight(height){
//         this.button.style.height=height+"px"
//     }
// }


// btn1=new Button("Click")

// btn1.setWidht(100)
// btn1.setHeight(50)


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
}


btn1=new Button("Click")

btn1.widht=200
btn1.height=100