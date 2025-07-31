"use strict";

const product = document.querySelector(".products");
const slides = document.querySelectorAll(".product");
let currentIndex = 0;

setInterval(function () {
  slides[currentIndex].classList.remove("active");
  currentIndex++;
  if(currentIndex >= slides.length) {
    currentIndex = 0;
  }
  slides[currentIndex].classList.add("active");
}, 3000);