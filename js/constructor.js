class car{

    wheel;
    color;

    constructor(wheel,color){
        console.log("constructor");
        this.wheel=wheel;
        this.color=color;
    }


    properties(){
        console.log(`wheel:${this.wheel},color:${this.color}`);
    }
}

swift=new car(4,"blue")
swift.properties()


fortuener=new car(6,"black")
fortuener.properties()