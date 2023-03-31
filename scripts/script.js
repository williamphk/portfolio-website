/* Toggle Menu for mobile */
let toggle = document.querySelector(".menu-toggle");
toggle.onclick = toggleMenu;

function toggleMenu() {
  let menu = document.querySelector(".nav-link-and-icon");
  menu.classList.toggle("show-menu");
}

/* Animation for projects */
let projectOne = document.querySelector(
  ".project-one .project-description-and-live-preview-button"
);

let projectTwo = document.querySelector(
  ".project-two .project-description-and-live-preview-button"
);

let projectThree = document.querySelector(
  ".project-three .project-description-and-live-preview-button"
);

projectOne.addEventListener("mouseenter", function () {
  let animation = document.querySelector(".project-one .animation-left");
  animation.classList.toggle("show-animation-left");
});

projectOne.addEventListener("mouseleave", function () {
  let animation = document.querySelector(".project-one .animation-left");
  animation.classList.toggle("show-animation-left");
});

projectTwo.addEventListener("mouseenter", function () {
  let animation = document.querySelector(".project-two .animation-right");
  animation.classList.toggle("show-animation-right");
});

projectTwo.addEventListener("mouseleave", function () {
  let animation = document.querySelector(".project-two .animation-right");
  animation.classList.toggle("show-animation-right");
});

projectThree.addEventListener("mouseenter", function () {
  let animation = document.querySelector(".project-three .animation-left");
  animation.classList.toggle("show-animation-left");
});

projectThree.addEventListener("mouseleave", function () {
  let animation = document.querySelector(".project-three .animation-left");
  animation.classList.toggle("show-animation-left");
});
