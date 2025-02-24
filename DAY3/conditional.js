

name = prompt(" enter")

if (name == "friday");
{
    console.log("happy friday")
}
elseif (name =="tuesday");
{
    console.log("happy t")
}
elseif (name =="wed");
{
    console.log("happy w")
}
elseif (name =="sat");
{
    console.log("happy sat")
}
elseif (name =="sun");
{
    console.log("happy sun")
}



var item=prompt("enter a item")
switch(item){
    case "biryani":
        console.log(item,"100")
    break
    case "panner":
        console.log(item,"200")
    break
    case "dal":
        console.log(item,"500")
        
}



light=prompt("enter a trafic colour")
if (light == "red")
{
    console.log("stop")
}
else if (light == "yellow")
{
    console.log("wait")
}
else if (light == "green")
{
    console.log("go")
}
else
{
    console.log("invalid")
}


price= +prompt("enter a price")

if(price>=200){
    result=(15/100)*price
    console.log(price-result)
}
else if (price>=101){
    result=(10/100)*price
    console.log(price-result)
}
else if(price>=50){
    result=(5/100)*price
    console.log(price-result)
}
else{
    console.log("no discount")
}



day=prompt("enter a day")

switch(day){
    case "monday":
        console.log("you can " ,day)
        break
    case "tuesday":
        console.log("you can ",day)
        break
    case "wed":
        console.log("you can ",day)
    
    break

    case "thurs":
        console.log("you can ",day)
        break
    case "friday":
        console.log("you can ",day)
        break
    case "sat":
        console.log("you can ",day)
        break

}