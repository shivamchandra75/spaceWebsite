const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");
const navList = document.querySelector(".nav-list");
const listItems = document.querySelector(".list-items");
const line = document.querySelector(".line");
// const rocketImg = document.querySelector(".rocket-img");
// const spaceportImg = document.querySelector(".spaceport-img");
// const capsuleImg = document.querySelector(".capsule-img");
let isnavOpen = false; //as initially nav will not be open.
//EventListners

burger.addEventListener("touchstart", navAnimation);
// burger.addEventListener("click", navAnimation);

// Functions

window.onbeforeunload = function () {
  removeUnderLine();
};

function removeUnderLine() {
  listItems.style.borderBottomColor = "transparent";
}
function navAnimation() {
  isnavOpen = !isnavOpen; // this just inverses the variable value.
  nav.classList.toggle("nav-animation");

  //look at scss to understand why we added open to burger and not to line element.
  if (isnavOpen) {
    burger.classList.add("open");
  } else {
    burger.classList.remove("open");
  }
}
