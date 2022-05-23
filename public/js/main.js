console.log(window.location)

let nav = document.querySelector(".nav"),
    navHamIcon = document.querySelector(".nav__icon"),
    navClose = document.querySelector(".nav__close");

navHamIcon.addEventListener("click", toggleNav);

navClose.addEventListener("click", toggleNav);

function toggleNav() {
  nav.classList.toggle("nav--open");
}