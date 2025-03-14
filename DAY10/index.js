var div = document.createElement("div")
document.body.append(div)

div.classList.add("div1")

var img = document.createElement("img")


div.appendChild(img)

var btn1 = document.createElement("button")
var btn2 = document.createElement("button")
var btn3 = document.createElement("button")
var btn4 = document.createElement("button")

var div1 = document.createElement("div")
div.appendChild(div1)

div1.appendChild(btn1)
div1.appendChild(btn2)
div1.appendChild(btn3)
div1.appendChild(btn4)

btn1.innerText="html"
btn2.innerText="css"
btn3.innerText="js"
btn4.innerText="react"




btn1.classList.add("el1")
btn2.classList.add("el1")
btn4.classList.add("el1")
btn3.classList.add("el1")

btn1.addEventListener("click",function(){
img.src="https://tse2.mm.bing.net/th?id=OIP.pVIQFwfacf4NqfOOZYpexQHaEH&pid=Api&P=0&h=180"
})
btn2.addEventListener("click",function(){
    img.src="https://tse4.mm.bing.net/th?id=OIP.tAvAD5lCtDJSjywplxd37QHaEo&pid=Api&P=0&h=180"
    })
btn3.addEventListener("click",function(){
        img.src="https://tse3.mm.bing.net/th?id=OIP.DEt_TbohHcb6KhpldP6vMwHaEK&pid=Api&P=0&h=180"
        })
btn4.addEventListener("click",function(){
            img.src="https://tse4.mm.bing.net/th?id=OIP.pPxPFzA9b_pgQp9MkauUKwHaE8&pid=Api&P=0&h=180"
})


