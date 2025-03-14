var a = document.createElement("header")
var nav = document.createElement("nav")
a.appendChild(nav)
document.body.append(a)

var div1 = document.createElement("div")
var div2 = document.createElement("div")
nav.appendChild(div1)
nav.appendChild(div2)


var p1 = document.createElement("span")
var p2 = document.createElement("span")
p1.innerText = "BR"
p2.innerText = "Architects"

div1.appendChild(p1)
div1.appendChild(p2)


var span1 = document.createElement("span")
var span2 = document.createElement("span")
var span3 = document.createElement("span")
span1.innerText = "Projects"
span2.innerText = "Abouts"
span3.innerText = "Contact"


div2.appendChild(span1)
div2.appendChild(span2)
div2.appendChild(span3)

nav.classList.add("first")
span3.classList.add("nav2")
span2.classList.add("nav2")
span1.classList.add("nav2")

p1.classList.add("nav1")
p1.style.fontWeight="bold"
p2.classList.add("nav1")

var img = document.createElement("img")

img.setAttribute("src","https://www.w3schools.com/w3images/architect.jpg")
document.body.appendChild(img)
img.classList.add("img1")

var h1 = document.createElement("h1")
h1.innerText="Projects"
document.body.appendChild(h1)


var imageUrls = [
    "https://www.w3schools.com/w3images/house5.jpg",
    "https://www.w3schools.com/w3images/house2.jpg",
    "https://www.w3schools.com/w3images/house3.jpg",
    "https://www.w3schools.com/w3images/house4.jpg",
    "https://www.w3schools.com/w3images/house2.jpg",
    "https://www.w3schools.com/w3images/house4.jpg",
    "https://www.w3schools.com/w3images/house4.jpg",
    "https://www.w3schools.com/w3images/house4.jpg"
  ];

  var img_div = document.createElement("div");
  document.body.appendChild(img_div); 
  img_div.classList.add("el")
  
  for (var i = 0; i < imageUrls.length; i++) {
    var img = document.createElement("img");
    img.src = imageUrls[i];
    img.style.width = "200px";   
    img.style.margin = "10px";   
    img_div.appendChild(img);
  }




  var para = document.createElement("p")
  para.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  document.body.appendChild(para)
 





  var imageUrls = [
    "https://www.w3schools.com/w3images/team2.jpg",
    "https://www.w3schools.com/w3images/team1.jpg",
    "https://www.w3schools.com/w3images/team3.jpg",
    "https://www.w3schools.com/w3images/team4.jpg"
  ];

  var div1= document.createElement("div")
  
  var names = ["Akhil", "Bhai", "Don", "John"];  
  for (var i = 0; i < imageUrls.length; i++) {
    var div_img = document.createElement("div");
    div_img.classList.add("card");
  
    var img = document.createElement("img");
    img.src = imageUrls[i];
  
    var p = document.createElement("p");
    p.innerText = names[i];
  
    div_img.appendChild(img);
    div_img.appendChild(p);
    img_div.appendChild(div1);
    Document.body.appendChild(img_div);
  }