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
const hover = document.querySelectorAll(".hover");
const hoverWrapper = document.querySelectorAll(".hover-wrapper");

const imageSrcArray = [
  "images/Register.gif",
  "images/OAuth.gif",
  "images/Post.gif",
  "images/Friend.gif",
  "images/Profile.gif",
];

for (let i = 0; i < imageElements.length; i++) {
  for (let j = 0; j < hover.length; j++) {
    const originalSrc1 = imageElements[i].src;

    hover[j].addEventListener("mouseover", changeSource);
    hoverWrapper[j].addEventListener("mouseleave", changeSource);
    hover[j].addEventListener("click", changeSource);

    function changeSource(e) {
      e.type === "mouseover"
        ? (imageElements[i].src = imageSrcArray[j])
        : (imageElements[i].src = originalSrc1);
      imageElementsTablet[i].src = imageSrcArray[j];
    }
  }
}
