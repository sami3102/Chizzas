
console.log("Hello world");
let txt = document.getElementsByClassName("chizza");
console.log(txt.innerText);
console.log(window)
let h1 = document.getElementsByTagName("h1");
console.dir(h1);
let h2= document.querySelector("li");
console.log(h2.innerText.children);

let str1 = document.querySelector("h2");
let prev = str1.innerText;
str1.innerText = prev + " " + "Append from Apna COllege";

let nav = document.getElementsByClassName("nav-list");
console.log(nav);
for (i=0;i<nav.length;i++){
    console.log(nav[i].innerText);
    nav[i].innerText = nav[i].innerText + " "+i;

}

let attr = document.querySelector("div");
console.log(attr.getAttribute("class"));

let bg = document.querySelector("body");
bg.style.backgroundColor = "white";

let newBtn = document.createElement("button");
newBtn.innerText = "click me";
newBtn.style.fontSize= "3rem";
newBtn.style.backgroundColor = "Red";
newBtn.style.color = "White";

let body = document.querySelector("body");

body.after(newBtn);

let p_cartvalue = document.querySelector(".cart_value");
let value=0;
let btn = document.querySelector("#btn");
btn.addEventListener("click",() => {
    console.log("Button clicked6");
});

function func1(){
    value = value+1;
    p_cartvalue.innerText = value;
    console.log(value);
    if(value>=10){
      let btn = document.getElementById("btn");
      btn.disabled = true;

    }
  }
  console.log(value);

let onmouse = document.querySelector(".mouse_over");

onmouse.onmouseover = ()=>{
    console.log("Yu are ")
}
if(value>5){
    console.log(value);
}

let mode = document.querySelector("#mode");
let mode1 = "white";
mode.addEventListener("click",()=>{
    if(mode1==="white"){
        mode1 = "black";
       body.classList.add("darkMode");
       body.ClassList.remove("whiteMode");
    }
    else{
        body.classList.add("whiteMode");
        body.classList.remove("darkMode");
    }
    
}
);