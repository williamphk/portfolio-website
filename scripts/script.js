let video = document.createElement("video");

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
const videoTablet = document.querySelectorAll(".video-tablet");
const videoTabletSource = document.querySelectorAll(".video-tablet-source");
const materialSymbol = document.querySelectorAll(".material-symbols-outlined");

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

const mediaQueryTablet = window.matchMedia("(max-width: 1200px)");

for (let i = 0; i < imageElements.length; i++) {
  if (i == 0) {
    for (let j = 0; j < hover1.length; j++) {
      hover1[j].addEventListener("click", changeToVideo);

      function changeToVideo(e) {
        materialSymbol.forEach((el) => (el.innerHTML = "play_circle"));
        e.target.children[0]
          ? (e.target.children[0].innerHTML = "stop_circle")
          : (e.target.innerHTML = "stop_circle");
        imageElements[i].style.display = "none";
        video.style.display = "block";
        source.src = videoSrcArray1[j];
        video.load();
        video.play();
        video.width = window.innerWidth / 2 - 40;
        video.height = ((window.innerWidth / 2 - 40) * 9) / 16;
        imageWrapperElements[0].appendChild(video);
        video.addEventListener("ended", function () {
          e.target.children[0]
            ? (e.target.children[0].innerHTML = "play_circle")
            : (e.target.innerHTML = "play_circle");
        });

        imageElementsTablet[i].style.display = "none";
        videoTabletSource[i].src = videoSrcArray1[j];
        videoTablet[i].width = window.innerWidth;
        videoTablet[i].height = (window.innerWidth * 9) / 16;
        videoTablet[i].load();
        videoTablet[i].play();
        if (mediaQueryTablet.matches) videoTablet[i].style.display = "block";
        videoTablet[i].addEventListener("ended", function () {
          e.target.children[0]
            ? (e.target.children[0].innerHTML = "play_circle")
            : (e.target.innerHTML = "play_circle");
        });
      }
    }
  } else if (i == 2) {
    for (let j = 0; j < hover3.length; j++) {
      hover3[j].addEventListener("click", changeToVideo);

      function changeToVideo(e) {
        console.log(e.target);
        materialSymbol.forEach((el) => (el.innerHTML = "play_circle"));
        if (e.target.children[0])
          e.target.children[0].innerHTML = "stop_circle";
        imageElements[i].style.display = "none";
        video.style.display = "block";
        source.src = videoSrcArray3[j];
        video.load();
        video.play();
        video.width = window.innerWidth / 2 - 40;
        video.height = ((window.innerWidth / 2 - 40) * 9) / 16;
        imageWrapperElements[0].appendChild(video);
        video.addEventListener("ended", function () {
          e.target.children[0]
            ? (e.target.children[0].innerHTML = "play_circle")
            : (e.target.innerHTML = "play_circle");
        });

        imageElementsTablet[i].style.display = "none";
        videoTabletSource[i].src = videoSrcArray3[j];
        videoTablet[i].width = window.innerWidth;
        videoTablet[i].height = (window.innerWidth * 9) / 16;
        videoTablet[i].load();
        videoTablet[i].play();
        if (mediaQueryTablet.matches) videoTablet[i].style.display = "block";
        videoTablet[i].addEventListener("ended", function () {
          e.target.children[0]
            ? (e.target.children[0].innerHTML = "play_circle")
            : (e.target.innerHTML = "play_circle");
        });
      }
    }
  }
}

window.addEventListener("resize", function () {
  for (let i = 0; i < imageElements.length; i++) {
    if (!mediaQueryTablet.matches) videoTablet[i].style.display = "none";
    videoTablet[i].width = window.innerWidth;
    videoTablet[i].height = (window.innerWidth * 9) / 16;
  }
});
