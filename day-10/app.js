const joke = document.querySelector("#joke");
const btn = document.querySelector("#btn");

btn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const resp = await fetch("https://icanhazdadjoke.com", config);
  const data = await resp.json();

  joke.innerHTML = data.joke;
}
