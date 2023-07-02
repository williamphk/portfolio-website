// Toggle Menu for mobile
// let toggle = document.querySelector(".menu-toggle");
// toggle.onclick = toggleMenu;

// function toggleMenu() {
//   let menu = document.querySelector(".nav-link-and-icon");
//   menu.classList.toggle("show-menu");
// }

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      const projectWrapper =
        entry.target.parentElement.parentElement.parentElement;
      const imageWrapper = projectWrapper.querySelector(".image-wrapper");
      console.log(imageWrapper);
      const imageElement = imageWrapper.querySelector("img");
      const imageUrl = entry.target.getAttribute("data-img");
      imageElement.src = imageUrl;
    }
  });
});

const observeElements = document.querySelectorAll(".project-introduction");
observeElements.forEach((el) => observer.observe(el));
