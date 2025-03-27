let user = document.getElementById("text")
let email = document.getElementById("email")
let submit = document.querySelector("button")


let arr = JSON.parse(localStorage.getItem("users")) || [];

submit.addEventListener("click",()=>{
    
    let obj = {
        name : user.value,
        email : email.value
    }
   console.log(obj)
    arr.push(obj)
   console.log(arr)

   localStorage.setItem("users" ,JSON.stringify(arr))

})