let toggle = document.querySelector(".menu-toggle");
toggle.onclick = toggleMenu;

function toggleMenu() {
  let menu = document.querySelector(".nav-link-and-icon");
  menu.classList.toggle("show-menu");
}
