"use strict"; function bounceArrow() { var t = window.innerHeight, e = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), n = /Mobi/.test(navigator.userAgent); e && !n && (window.outerHeight, window.innerHeight), n && (t = window.screen.availHeight, window.screen.availHeight, window.innerHeight); var i = document.getElementById("arrow"); window.addEventListener("scroll", function () { var e = i.parentElement.parentElement.getBoundingClientRect(); 0 <= e.top + e.height && e.top <= t && (i.getBoundingClientRect().top < e.height / 2 ? i.classList.add("arrow--hide") : i.classList.remove("arrow--hide")) }) } bounceArrow();
function imgSlider(anything) {
  document.querySelector('.imgpep').src = anything;
}
function changeBgColor(color) {
  const sec = document.querySelector('.secpep');
  sec.style.background = color;
}
function menuToggle() {
  const toggleMenu = document.querySelector('.toggleMenu');
  const navigation = document.querySelector('.navigation');
  toggleMenu.classList.toggle('active');
  navigation.classList.toggle('active');
}

const position = document.documentElement;

position.addEventListener("mousemove", e => {
  position.style.setProperty('--x', e.clientX + 'px');
})

VanillaTilt.init(document.querySelectorAll(".boxsh"), {
  max: 25,
  speed: 400
});

VanillaTilt.init(document.querySelectorAll(".boxsh"), {
  max: 25,
  speed: 400
});

VanillaTilt.init(document.querySelectorAll(".your-element"));
