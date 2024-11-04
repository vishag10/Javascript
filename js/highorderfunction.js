 let list=[10,20,30,40,50,60]
// list.forEach((element,index)=>{
//     console.log(element)
// })

// const x=list.map((element,index)=>{
//     return element
// })
// console.log(x);

// const x=list.find((el,ind)=>{
//     return el==60
// })
// console.log(x);

// const x=list.filter((el,index)=>{
//     return el==50
// })
// console.log(x)
const x=list.reduce((pre,curr)=>{
    return pre+curr
},0)
console.log(x);

