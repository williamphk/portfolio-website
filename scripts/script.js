// Toggle Menu for mobile
let toggle = document.querySelector(".menu-toggle");
let links = document.querySelectorAll(".link");
toggle.addEventListener("click", toggleMenu);
links.forEach((el) => el.addEventListener("click", toggleMenu));

function toggleMenu() {
  let menu = document.querySelector(".nav-link");
  menu.classList.toggle("show-menu");
}

// Scroll Animation
let intersectingImageArray = [];

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const projectWrapper =
      entry.target.parentElement.parentElement.parentElement.parentElement
        .parentElement;
    const projectIntroduction = entry.target.parentElement.parentElement;
    entry.target.parentElement.parentElement.parentElement;
    const imageWrapper = projectWrapper.querySelector(".image-wrapper");
    const imageElements = imageWrapper.querySelectorAll("img");
    const imageID = entry.target.getAttribute("data-img");

    if (entry.isIntersecting) {
      projectIntroduction.classList.add("show");
      if (!intersectingImageArray.includes(imageID)) {
        intersectingImageArray.push(imageID);
      }
      imageElements.forEach((el, index) => {
        if (index == imageID) {
          el.style.display = "block";
        } else {
          el.style.display = "none";
        }
      });
    } else {
      const index = intersectingImageArray.indexOf(imageID);
      if (index > -1) {
        intersectingImageArray.splice(index, 1);
      }
      if (intersectingImageArray.length > 0) {
        imageElements.forEach((el, index) => {
          if (
            index == intersectingImageArray[intersectingImageArray.length - 1]
          ) {
            el.style.display = "block";
          } else {
            el.style.display = "none";
          }
        });
      }
    }
  });
});

const observeElements = document.querySelectorAll(".intersecting-element");
observeElements.forEach((el) => observer.observe(el));

const imageElements = document.querySelectorAll(".project-image");
const imageElementsTablet = document.querySelectorAll(".project-image-tablet");
const hover1 = document.querySelectorAll(".hover1");
const hoverWrapper1 = document.querySelectorAll(".hover-wrapper1");
const hover3 = document.querySelectorAll(".hover3");
const hoverWrapper3 = document.querySelectorAll(".hover-wrapper3");

const imageSrcArray1 = [
  "images/Register.gif",
  "images/OAuth.gif",
  "images/Post.gif",
  "images/Friend.gif",
  "images/Profile.gif",
];
const imageSrcArray3 = [
  "images/Drag-n-drop.gif",
  "images/Click.gif",
  "images/Restart.gif",
];

for (let i = 0; i < imageElements.length; i++) {
  if (i == 0) {
    for (let j = 0; j < hover1.length; j++) {
      const originalSrc = imageElements[i].src;

      hover1[j].addEventListener("mouseover", changeSource);
      hoverWrapper1[0].addEventListener("mouseleave", changeSource);
      hover1[j].addEventListener("click", changeSource);

      function changeSource(e) {
        e.type === "mouseover"
          ? (imageElements[i].src = imageSrcArray1[j])
          : (imageElements[i].src = originalSrc);
        imageElementsTablet[i].src = imageSrcArray1[j];
      }
    }
  } else if (i == 2) {
    for (let j = 0; j < hover3.length; j++) {
      const originalSrc = imageElements[i].src;

      hover3[j].addEventListener("mouseover", changeSource);
      hoverWrapper3[0].addEventListener("mouseleave", changeSource);
      hover3[j].addEventListener("click", changeSource);

      function changeSource(e) {
        e.type === "mouseover"
          ? (imageElements[i].src = imageSrcArray3[j])
          : (imageElements[i].src = originalSrc);
        imageElementsTablet[i].src = imageSrcArray3[j];
      }
    }
  }
}
