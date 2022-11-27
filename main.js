let bodyEl = document.querySelector("body");
let box1El = document.querySelector(".box-1");
let box2El = document.querySelector(".box-2");
let box3El = document.querySelector(".box-3");
let box4El = document.querySelector(".box-4");
let box5El = document.querySelector(".box-5");
let box6El = document.querySelector(".box-6");

box1El.addEventListener("click", function () {
  bodyEl.style.backgroundColor = "aqua";
});
box2El.addEventListener("click", function () {
  bodyEl.style.backgroundColor = "red";
});
box3El.addEventListener("click", function () {
  bodyEl.style.backgroundColor = "green";
});
box4El.addEventListener("click", function () {
  bodyEl.style.backgroundColor = "yellow";
});
box5El.addEventListener("click", function () {
  bodyEl.style.backgroundColor = "pink";
});
box6El.addEventListener("click", function () {
  bodyEl.style.backgroundColor = "brown";
});
