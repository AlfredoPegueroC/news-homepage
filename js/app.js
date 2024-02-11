const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");

const overlay = document.querySelector(".overlay");
const sidebar = document.querySelector(".sidebar");

btnOpen.addEventListener("click", (e) => {
  overlay.style.width = "100vw";
  sidebar.style.width = "70vw";
});

btnClose.addEventListener("click", (e) => {
  overlay.style.width = "0";
  sidebar.style.width = "0";
});
    