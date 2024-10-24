a=parseInt(prompt("enter the limit"))

function even(a){
  for(i=2;i<=a;i++){
    if(i%2==0){
      console.log(i);
    }
  }
}

even(a);

num1=parseInt(prompt("enter the  first number"))
num2=parseInt(prompt("enter the second number"))

function sum(num1,num2){
  return num1+num2;
}
 x=sum(num1,num2);
 console.log("sum of two numbers is :",x);