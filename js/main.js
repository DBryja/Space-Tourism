const linkHome = document.querySelector(".linkHome");
const linkDestination = document.querySelector(".linkDestination");
const linkCrew = document.querySelector(".linkCrew");
const linkTechnology = document.querySelector(".linkTechnology");

function mobileMenu() {
  document.querySelector(".menu").classList.toggle("active");
}

document.querySelector(".burger").addEventListener("click", mobileMenu);
document.querySelector(".close").addEventListener("click", mobileMenu);
