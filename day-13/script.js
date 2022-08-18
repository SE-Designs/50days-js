const question = document.querySelector("#question");
const tagsElement = document.querySelector("#tags");
const textarea = document.querySelector("#textarea");
const result = document.querySelector("#result");
const lastResultsDiv = document.querySelector(".lastResults");

let lastResults = [];
textarea.focus();

function createTags(input) {
  const tags = input
    .split(" ")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsElement.innerHTML = "";

  tags.forEach((tag) => {
    const el = document.createElement("span");
    el.classList.add("tag");
    el.innerText = tag;
    tagsElement.appendChild(el);
  });
}

let count = 0;

function randomSelection() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
    }, 100);
  }, times * 100);

  setTimeout(() => {
    setResult();
  }, 3500);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}

function setResult() {
  const tag = document.querySelector(".highlight");
  const result = document.getElementById("result");
  result.innerHTML = tag.innerText;

  if (count === 0) {
    // lastResults.push(
    //   `Question: ${question.value}; All Choices: ${textarea.value}; Result: ${tag.innerText}`
    // );
    // lastResultsDiv.innerHTML = "";
    // lastResults.forEach((element) => {
    //   lastResultsDiv.innerHTML += element + `<br>`;
    // });
    createTable();
    fullfillTable();
  } else {
    fullfillTable();
  }
  count++;

  textarea.value = "";
  // lastResultsDiv.innerHTML = lastResults;
}

function createTable() {
  const table = document.querySelector(".table");
  table.classList.remove("display-none");
}

function fullfillTable() {
  const tag = document.querySelector(".highlight");
  const resultBody = document.querySelector(".result-tbody");
  const tr = `
  <tr>
    <td>${question.value}</td>
    <td>${textarea.value}</td>
    <td>${tag.innerText}</td>
  </tr>`;

  resultBody.innerHTML += tr;
}

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key === "Enter") {
    randomSelection();
  }
});
