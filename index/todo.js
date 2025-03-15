
let btn = document.querySelector("button")
let ul = document.querySelector("ul")
let input = document.querySelector("input")

btn.addEventListener("click",()=>{
    if(input.value !=""){
        
    let li = document.createElement('li')
    let span = document.createElement("span")
    span.textContent = input.value

    let updatebtn = document.createElement("button")
    updatebtn.innerText="update"
    updatebtn.classList.add("update")
    let removebtn = document.createElement("button")
    removebtn.innerText="remove"
    removebtn.classList.add("delete")


   removebtn.addEventListener("click",()=>{
    li.remove();
   })

   updatebtn.addEventListener("click",()=>{
    input.value = span.textContent
    li.remove();
   })

    let div = document.createElement("div")
    div.classList.add("buttons")
    div.appendChild(updatebtn)
    div.appendChild(removebtn)

    li.appendChild(span)
    li.appendChild(div)
    ul.appendChild(li)

    input.value=""


    }
})