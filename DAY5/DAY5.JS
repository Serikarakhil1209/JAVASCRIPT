// for (let i=1;i<=50;i++){
//     if(i % 5 == 0)
//     {
//         console.log(i)
//     }
// }

// sum=0
// for (let i=1;i<=100;i++){
//     sum+=i
// }
// console.log(sum)

//factorial
// fact=1
// for(let i=1 ; i<=5;i++){
//   fact*=i
// }
// console.log(fact)

// let str=""
// for(let i=65 ; i<=90;i++){
//      str = String.fromCharCode(i);
//      console.log(str)
//   }
// console.log(str)

number=+prompt("starting point")
end=+prompt("ending point")
while(number<=end){
  for(let i=1;i<=10;i++){
    console.log(number,"*",i ,"=", number*i)
  }
  console.log("next")
  number++
}