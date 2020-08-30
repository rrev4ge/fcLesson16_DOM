"use strict";

const buttonElem = document.getElementById("btn");
const divElem = document.querySelector("div");
const bodyElem = document.querySelector("body");
//buttonElem.dispatchEvent(new MouseEvent("mouseenter"))
const first = document.getElementById("firstI");
function buttonClickHandler(event) {
 // console.log(event);
  console.log("you pressed the button!");
 // console.dir(event.currentTarget);
  document.getElementById("reset").setAttribute("value", "1234567");
  const first = document.getElementById("firstI");
  const second = document.getElementById("secondI")
  document.getElementById("firstI").setAttribute("value", second.value);
  document.getElementById("secondI").setAttribute("value", first.value);
  //buttonElem.removeEventListener("mouseenter", buttonClickHandler);
}


buttonElem.addEventListener("click", buttonClickHandler);
// divElem.addEventListener("click", buttonClickHandler);
// bodyElem.addEventListener("click", buttonClickHandler);

