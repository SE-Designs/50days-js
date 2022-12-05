const open = document.querySelector("#open");
const close = document.querySelector("#close");
const container = document.querySelector(".container");

open.addEventListener("click", () => {
  container.classList.add("show-nav");
  // document.body.style.overflowY = 'hidden';
});

close.addEventListener("click", () => {
  container.classList.remove("show-nav");
  // document.body.style.overflowY = 'auto';
});
