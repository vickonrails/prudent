const hamburger = document.querySelector(".nav__hamburger");
const body = document.querySelector("body");
const mobileNavigation = document.querySelector(".nav__mobile-nav");

const toggleMobileNav = (e) => {
  console.log(body);
  body.classList.toggle("mobile-nav-open");
};

hamburger.addEventListener("click", toggleMobileNav);
