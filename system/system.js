// Grape element
let settingIcon = document.querySelector(".setting-controller-icon i");
let settingPopup = document.querySelector(".setting-controller-sidebar");
let overlayClick = document.querySelector(".setting-ui-overlay");

let body = document.querySelector("body");

settingIcon.addEventListener("click", () => {
  if (settingPopup.classList.contains("d-none")) {
    settingPopup.classList.remove("d-none");
    overlayClick.classList.remove("d-none");
    body.style.overflow = "hidden"; // add this line
  } else {
    settingPopup.classList.add("d-none");
    overlayClick.classList.add("d-none");
    body.style.overflow = "auto"; // add this line
  }
});

let closeSetting = document.querySelector(".close-setting i");

closeSetting.addEventListener("click", closeSideBar);
overlayClick.addEventListener("click", closeSideBar);

function closeSideBar() {
  overlayClick.classList.add("d-none");
  settingPopup.classList.add("d-none");
  body.style.overflow = "auto"; // add this line
}
