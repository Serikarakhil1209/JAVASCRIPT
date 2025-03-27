// arr1=[1,2,3,4,5,6]
// // let newarr= arr1.reduce((acu,val)=>{
// //    acu=acu+val
// //    return acu
// // })
// // console.log(newarr)


// arr1=[1,2,3,4,5,6]

// let newarr= arr1.reduce((acu,val)=>{
//    acu=acu+val
//    return acu
// })
// avg=newarr / 2
// console.log(avg)

const people =[{
    name:"akhil",
    age:22
},
{
    name:"kann",
    age:20
},
{
    name:"ammu",
    age:17
}
]

let newarr = people.filter((val)=>{
    return val.age >= 18
})
console.log(newarr)