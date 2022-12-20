var plus_btns = document.querySelectorAll (".plus");
var minus_btns = document.querySelectorAll (".minus");
var prix = document.querySelectorAll(".price");
var total = document.getElementById("total");
var like_btns = document.querySelectorAll(".like");
var delete_btns = document.querySelectorAll (".delete");
console.log(like_btns)

function somme (){
     var sum = 0;
     var pnew=document.querySelectorAll(".price");
     console.log(sum)
     for (let i = 0; i < pnew.length; i++) {
        sum = sum + Number (pnew[i].innerHTML);
        total.innerHTML = sum
        
     }
    
}
function changeCol (event){
    var clikbtn = event.target;

    if (clikbtn.style.color!=="red")
    {clikbtn.style.color ="red"}
    else{ clikbtn.style.color = "gray"}
}
for (let i = 0; i < like_btns.length; i++) {
    like_btns[i].addEventListener("click",changeCol)}


function dlt(event){
    var clikk=event.target;
    clikk.parentElement.parentElement.parentElement.parentElement.remove()

    var sum = 0;
     var pnew=document.querySelectorAll(".price");
     
     for (let i = 0; i < pnew.length; i++) {
        sum = sum + Number (pnew[i].innerHTML);
        
     }
     total.innerHTML = sum

}
for (let i = 0; i < delete_btns.length; i++) {
    delete_btns[i].addEventListener("click",dlt)
    
}




function inc (event){
var clickedButton = event.target;
var divParent = clickedButton.parentElement;
var p = divParent.querySelector("p");
var value = Number(p.innerHTML);
value = value +1 ;
p.innerHTML = value;
var td = divParent.parentElement
var tr= td.parentElement
var unitPrice = tr.querySelector(".unitPrice");
var pricefin = tr.querySelector(".price")
console.log(unitPrice)
console.log(pricefin)
var multip = value * Number(unitPrice.innerHTML)
pricefin.innerHTML=multip
somme();
}

for (let i = 0; i < plus_btns.length; i++) {
    plus_btns[i].addEventListener("click",inc)
    
}
function inc1 (event){
    var clickedButton = event.target;
    var divParent = clickedButton.parentElement;
    var p = divParent.querySelector("p");
    if(p.innerHTML>0){
    var value = Number(p.innerHTML);
    value = value -1 ;
    p.innerHTML = value;
    var td = divParent.parentElement
    var tr= td.parentElement
    var unitPrice = tr.querySelector(".unitPrice");
    var pricefin = tr.querySelector(".price")
    console.log(unitPrice)
    console.log(pricefin)
    var multip = value * Number(unitPrice.innerHTML)
    pricefin.innerHTML=multip
    somme();
    }
}
    
    for (let i = 0; i < minus_btns.length; i++) {
        minus_btns[i].addEventListener("click",inc1)
        
    }
