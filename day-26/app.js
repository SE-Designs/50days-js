let i = 0;
const arrowUp = document.getElementById("ArrowUp");
const arrowDown = document.getElementById("ArrowDown");
const leftSideContainer = document.getElementById("left-side-container");
const rightSideContainer = document.getElementById("right-side-container");

arrowUp.addEventListener("click", () => {
  i--;
  scrollTo();
});
arrowDown.addEventListener("click", () => {
  i++;
  scrollTo();
});

document.addEventListener("keyup", (e) => {
  if (e.code === "ArrowUp") {
    i--;
    scrollTo();
  }

  if (e.code === "ArrowDown" || e.code === "ArrowRight") {
    i++;
    scrollTo();
  }

  switch (e.code) {
    case "Digit1":
      i = 0;
      scrollTo();
      break;
    case "Digit2":
      i = 1;
      scrollTo();
      break;
    case "Digit3":
      i = 2;
      scrollTo();
      break;
    case "Digit4":
      i = 3;
      scrollTo();
      break;
    case "Digit5":
      i = 4;
      scrollTo();
      break;
  }
});

function scrollTo() {
  if (i < 0) {
    i = 4;
  } else if (i > 4) {
    i = 0;
  }

  rightSideContainer.style.top = -500 + i * 100 + "%";
  leftSideContainer.style.top = i * -100 + "%";
}
