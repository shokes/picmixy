"use strict";

const nav = document.querySelector(".main-nav-list");
const headerBox = document.querySelector(".header-box");
const header = document.querySelector(".header");
const section1 = document.querySelector(".section-home");
const navHeight = header.getBoundingClientRect().height;
const main = document.querySelector(".main-content");
const btnMenu = document.querySelector(".btn-mobile-nav");
const preloader = document.querySelector(".preloader");

// implementing smooth scroling for Navigation

nav.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(e.target);
  if (e.target.classList.contains("main-nav-link")) {
    const id = e.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    header.classList.toggle("nav-open");
  }
});

// implementing smooth scrolling for buttons in hero section

headerBox.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("btn")) {
    const id = e.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// implementing sticky navigation

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    header.classList.add("sticky");
  }

  if (entry.isIntersecting) {
    header.classList.remove("sticky");
  }
};

const section1Observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-100px",
});

section1Observer.observe(section1);

// implementing functionality for the menu bar

btnMenu.addEventListener("click", function (e) {
  e.preventDefault();

  header.classList.toggle("nav-open");
});

// Fixing flexbox gap property missing in some Safari versions

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}

checkFlexGap();

// preloader functionality
