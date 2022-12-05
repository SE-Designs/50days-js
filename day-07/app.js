const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

let timer = setInterval(() => {
  if (container.classList.contains("hover-left")) {
    container.classList.remove("hover-left");
    container.classList.add("hover-right");
  } else if (container.classList.contains("hover-right")) {
    container.classList.remove("hover-right");
    container.classList.add("hover-left");
  }
}, 3000);

left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
});
