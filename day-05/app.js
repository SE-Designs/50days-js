const back = document.querySelector(".bg");
const box = document.querySelector(".box");
const text = document.querySelector("#loading-text");

let load = 0;

let int = setInterval(blurring, 22);

function blurring() {
  load++;

  if (load == 100) {
    clearInterval(int);
  }

  text.innerHTML = `${load}%`;
  text.style.opacity = scale(load, 0, 100, 1, 0);
  back.style.filter = `blur(${scale(load, 0, 100, 5, 0)}px)`;
  box.style.opacity = scale(load, 0, 100, 1, 0);
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
