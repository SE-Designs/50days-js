const textElement = document.getElementById("text");
const speedElement = document.getElementById("speed");
const speedText = document.getElementById("speed-text");
const textValue = "We love programming";
let index = 1;
let speed = 500 / speedElement.value;

const typingText = () => {
  textElement.innerText = textValue.slice(0, index);

  index++;

  if (index > textValue.length) {
    index = 1;
  }

  setTimeout(typingText, speed);
};

typingText();

speedElement.addEventListener("input", (e) => {
  speed = 500 / e.target.value;
  speedText.innerText = `${e.target.value} - Speed`;
});
