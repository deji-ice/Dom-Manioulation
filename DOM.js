
let digitEl = document.getElementById('digitEl');
let digitEl2 = document.getElementById('digitEl2');
let digitEl3 = document.getElementById('digitEl3');
let digitEl4 = document.getElementById('digitEl4');
let digit = 1;



let price1 = document.getElementById('price1')
let price = 144
let price2 = document.getElementById('price2')
let price2el = 120
let price3 = document.getElementById('price3')
let price3el = 230
let price4 = document.getElementById('price4')
let price4el = 200

let totalel = document.getElementById('totalEl')
let total = 694
totalel.innerText = "Total: "+ "$" +  total
console.log(totalel)

let delet = document.getElementsByTagName('div')
console.log(delet)
let deletedstring = " Deleted"

function increment()
{
  digit += 1;
  digitEl.innerText =  digit;
  price1.innerText= "$" + digit * price 
  total = total + price
  totalel.innerText = "Total:"+ "$" + total 

}
console.log(price1)
function decrement()
{
  if (digit>=2) {
    digit -= 1;
    digitEl.innerText =  digit;
    price1.innerText= "$" + digit * price 
    total = total - price
    totalel.innerText = "Total:"+ "$" + total 
  }
  else{
    const digit = 1;
      digitEl.innerText= digit;
  } 

}

function increment2()
{
  digit += 1;
  digitEl2.innerText =  digit;
  price2.innerText= "$" + digit * price2el 
  total = total + price2el
  totalel.innerText = "Total:"+ "$" + total 
}
function decrement2()
{
  if (digit>=2) {
    digit -= 1;
    digitEl2.innerText =  digit;
    price2.innerText= "$" + digit * price2el 
    total = total - price2el
    totalel.innerText = "Total:"+ "$" + total 
  }
  else{
    const digit = 1;
      digitEl2.innerText= digit;
  }
}

function increment3()
{
  digit += 1;
  digitEl3.innerText =  digit;
  price3.innerText= "$" + digit * price3el 
  total = total + price3el
  totalel.innerText = "Total:"+ "$" + total 

}
function decrement3()
{ 
  if (digit>=2) {
    digit -= 1;
    digitEl3.innerText =  digit;
    price3.innerText= "$" + digit * price3el 
    total = total - price3el
    totalel.innerText = "Total:"+ "$" + total 
  }
  else{
    const digit = 1;
      digitEl3.innerText= digit;
  }

}
function increment4()
{
  digit += 1;
  digitEl4.innerText =  digit;
  price4.innerText= "$" + digit * price4el 
  total = total + price4el
  totalel.innerText = "Total:"+ "$" + total 

}
function decrement4()
{
  if (digit>=2) {
    digit -= 1;
    digitEl4.innerText =  digit;
    price4.innerText= "$" + digit * price4el 
    total = total - price4el
    totalel.innerText = "Total:"+ "$" + total 
  }
  else{
    const digit = 1;
      digitEl4.innerText= digit;
  }
}
var heartel = document.getElementById("heart");
var heartel2 = document.getElementById("heart2");
var heartel3= document.getElementById("heart3");
var heartel4= document.getElementById("heart4");

heartel.addEventListener("click",function(){
  heartel.style.color = "#e7113f";
}
)
heartel2.addEventListener("click",function(){
  heartel2.style.color = "#e7173f";
}
)
heartel3.addEventListener("click",function(){
  heartel3.style.color = "#e7113f";
}
)
heartel4.addEventListener("click",function(){
  heartel4.style.color = "#e7113f";
}
)

// functions that hides or shows a selected element
function delete1() {
	var w = document.getElementById("img1");
  if (w.style.display === "none") {
    w.style.display = "block";
  } else {
    w.style.display = "none";
  }
}
function delete4(){
var y = document.getElementById("img4");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}
function delete3() {
  var x = document.getElementById("img3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function delete2() {
let z = document.getElementById("img2");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

}

/*function deleteI()
{
 delet.innerText =deletedstring;
}
console.log(deletedstring)

var div = document.getElementById('cart_item');
while(div.firstChild){
    div.removeChild(div.firstChild);
}

*/