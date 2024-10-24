n=parseInt(prompt("enter the limit "))

x=(n)=>{
  a=0
  b=1
  for(var i=1;i<=n;i++){
    console.log(b)
    c=a+b
    a=b
    b=c
    
  }
}
x(n)