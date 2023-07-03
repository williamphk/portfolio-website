// Toggle Menu for mobile
let toggle = document.querySelector(".menu-toggle");
let links = document.querySelectorAll(".link");
toggle.onclick = toggleMenu;
links.forEach((el) => el.addEventListener("click", toggleMenu));

function toggleMenu() {
  let menu = document.querySelector(".nav-link");
  console.log(menu);
  menu.classList.toggle("show-menu");
}

// Scroll Animation
let intersectingImageArray = [];

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const projectWrapper =
      entry.target.parentElement.parentElement.parentElement.parentElement
        .parentElement;
    const imageWrapper = projectWrapper.querySelector(".image-wrapper");
    const imageElement = imageWrapper.querySelector("img");
    const imageUrl = entry.target.getAttribute("data-img");

    if (entry.isIntersecting) {
      if (!intersectingImageArray.includes(imageUrl)) {
        intersectingImageArray.push(imageUrl);
      }
      imageElement.src = imageUrl;
    } else {
      const index = intersectingImageArray.indexOf(imageUrl);
      if (index > -1) {
        intersectingImageArray.splice(index, 1);
      }
      if (intersectingImageArray.length > 0) {
        imageElement.src =
          intersectingImageArray[intersectingImageArray.length - 1];
      }
    }
  });
});

const observeElements = document.querySelectorAll(".intersecting-element");
observeElements.forEach((el) => observer.observe(el));
