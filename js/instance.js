class car{
    color="red";
    wheel=4;
    airbag(){
        console.log("car have airbag");
    }
    steering(){
        console.log("car have power steering");
    }
}

benz=new car()
benz.airbag();
console.log(benz.color);
console.log(benz.wheel);
benz.steering()