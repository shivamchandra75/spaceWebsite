const nav = document.querySelector(".nav");
const header = document.querySelector("header");
const burger = document.querySelector(".burger");
const navList = document.querySelector(".nav-list");
const listItems = document.querySelector(".list-items");
const line = document.querySelector(".line");
// const rocketImg = document.querySelector(".rocket-img");
// const spaceportImg = document.querySelector(".spaceport-img");
// const capsuleImg = document.querySelector(".capsule-img");
let isnavOpen = false; //as initially nav will not be open.

//EventListners
burger.addEventListener("touchstart", burgerAnimation);

//Barba
barba.init({
  views: [
    {
      namespace: "home",
    },
    {
      namespace: "destination",
    },
  ],
  transitions: [
    {
      name: "allAnimations",
      leave(data) {
        let done = this.async(); //this is to tell barba when to start the enter animation.
        const tl = gsap.timeline({
          defaults: { duration: 1, ease: "power2.inOut" },
        });
        tl.fromTo(
          data.current.container,
          1,
          { opacity: 1 },
          { opacity: 0, onComplete: done }
        );
      },
      enter(data) {
        let done = this.async(); //this is to tell barba when to start the enter animation.
        window.scrollTo(0, 0);
        const tl = gsap.timeline();
        tl.fromTo(data.next.container, 1, { opacity: 0 }, { opacity: 1 });
        tl.fromTo(
          "header",
          1,
          { y: "-100%" },
          { y: "0%", ease: "power2.inOut", onComplete: done }
        );
      },
    },
  ],
});

// Functions
window.onbeforeunload = function () {
  removeUnderLine();
};

function removeUnderLine() {
  listItems.style.borderBottomColor = "transparent";
}
function burgerAnimation() {
  isnavOpen = !isnavOpen; // this just inverses the variable value.
  nav.classList.toggle("nav-animation");

  //look at scss to understand why we added open to burger and not to line element.
  if (isnavOpen) {
    burger.classList.add("open");
  } else {
    burger.classList.remove("open");
  }
}

// function navAnimation() {
//   const navTl = gsap.timeline({
//     defaults: {
//       duration: 1,
//       ease: "power2",
//     },
//   });

//   navTl.fromTo("header", { y: "-100%" }, { y: "0%" });
// }
