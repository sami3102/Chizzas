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
