const cards = document.querySelectorAll("#cards");

cards.forEach((cards) => {
  cards.addEventListener("click", () => {
    removeActive();
    cards.classList.add("active");
  });
});

function removeActive() {
  cards.forEach((cards) => {
    cards.classList.remove("active");
  });
}
