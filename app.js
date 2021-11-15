// const hamburgerBtn = document.querySelector(".toggle-btn");
// const mainHeader = document.querySelector(".main-header");
// const overlay = document.querySelector(".overlay");

// hamburgerBtn.addEventListener("click", function () {
//   hamburgerBtn.classList.toggle("open");
//   overlay.classList.toggle("open");
//   mainHeader.classList.toggle("open");
// });

// all that glitters isn't gold

const hamburgerBtn = document.querySelector(".toggle-btn");
const mainHeader = document.querySelector(".main-header");
const overlay = document.querySelector(".overlay");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("open");
  overlay.classList.toggle("open");
  mainHeader.classList.toggle("open");
});
