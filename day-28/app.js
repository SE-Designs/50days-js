const API_URL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  }
});

async function getUser(username) {
  try {
    const { data } = await axios(API_URL + username);
    createCard(data);
    getRepos(username);
  } catch (error) {
    if (error.response.status == 404) {
      createErrorCard("User not found");
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(API_URL + username + "/repos?sort=created");
    addRepos(data);
  } catch (error) {
    createErrorCard("Cannot fetch repositories");
  }
}

function addRepos(repos) {
  const reposElement = document.getElementById("repos");
  repos.slice(0, 12).forEach((repo) => {
    const repoElement = document.createElement("a");
    repoElement.classList.add("repo");
    repoElement.href = repo.html_url;
    repoElement.target = "_blank";
    repoElement.innerText = repo.name;

    reposElement.appendChild(repoElement);
  });
}

function createCard(user) {
  const cardHTML = `<a class="card" href="${user.html_url}">
  <div>
    <img
      class="avatar"
      src="${user.avatar_url}"
      alt="${user.name}"
    />
  </div>

  <div class="user-info">
    <h2>${user.login}</h2>
    <h3>${user.name || ""}</h3>
    <p>${user.bio || ""}</p>

    <ul>
      <li>${user.followers} <b>Followers</b></li>
      <li>${user.following} <b>Following</b></li>
      <li>${user.public_repos} <b>Repos</b></li>
    </ul>

    <div class="repos" id="repos"></div>
  </div>
</a>`;

  main.innerHTML = cardHTML;
}

function createErrorCard(err_msg) {
  const cardHTML = `
  <div class="card">
      <h1>${err_msg}</h1>
  </div>
`;

  main.innerHTML = cardHTML;
}
