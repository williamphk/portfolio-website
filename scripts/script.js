let video = document.createElement("video");

video.setAttribute("width", "800");
video.setAttribute("height", "500");
video.setAttribute("controls", "");

let source = document.createElement("source");
source.setAttribute("type", "video/mp4");
video.appendChild(source);

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
      video.style.display = "none";
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
const imageWrapperElements = document.querySelectorAll(".image-wrapper");
const imageElementsTablet = document.querySelectorAll(".project-image-tablet");
const hover1 = document.querySelectorAll(".hover1");
const hoverWrapper1 = document.querySelectorAll(".hover-wrapper1");
const hover3 = document.querySelectorAll(".hover3");
const hoverWrapper3 = document.querySelectorAll(".hover-wrapper3");

const videoSrcArray1 = [
  "videos/Project_1/Register.mp4",
  "videos/Project_1/OAuth.mp4",
  "videos/Project_1/Post.mp4",
  "videos/Project_1/Friend.mp4",
  "videos/Project_1/Profile.mp4",
];
const videoSrcArray3 = [
  "videos/Project_3/Drag-n-drop.mp4",
  "videos/Project_3/Click.mp4",
  "videos/Project_3/Restart.mp4",
];

for (let i = 0; i < imageElements.length; i++) {
  if (i == 0) {
    for (let j = 0; j < hover1.length; j++) {
      hover1[j].addEventListener("click", changeToVideo);

      function changeToVideo() {
        imageElements[i].style.display = "none";
        video.style.display = "block";
        source.src = videoSrcArray1[j];
        video.load(); // Load the new video source
        video.play(); // Play the video
        imageWrapperElements[0].appendChild(video);

        imageElementsTablet[i].style.display = "none";
      }
    }
  } else if (i == 2) {
    for (let j = 0; j < hover3.length; j++) {
      hover3[j].addEventListener("click", changeToVideo);

      function changeToVideo() {
        imageElements[i].style.display = "none";
        video.style.display = "block";
        source.src = videoSrcArray3[j];
        video.load(); // Load the new video source
        video.play(); // Play the video
        imageWrapperElements[0].appendChild(video);

        imageElementsTablet[i].style.display = "none";
      }
    }
  }
}
