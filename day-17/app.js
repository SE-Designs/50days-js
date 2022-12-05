const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

// Get Initial Movies
getMovie(API_URL);

async function getMovie(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovie(SEARCH_API + searchTerm);

    search.value = "";
  } else {
    window.location.reload();
  }
});

function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.innerHTML = `
    <div class="movie">
      <img
        src="${IMG_PATH + poster_path}"
        alt="${title}"
        loading="lazy"
      />
      <div class="movie-text">
        <div class="movie-info">
          <h2>${title}</h2>
          <span class="${getClassRate(vote_average)}">${parseFloat(
      vote_average
    ).toFixed(1)}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${
            overview.length <= 200
              ? overview.length > 0
                ? overview
                : "No Description"
              : overview.substr(0, 200) + "..."
          }
        </div>
      </div>
    </div>
    `;

    main.appendChild(movieEl);
  });
}

function getClassRate(score) {
  if (score >= 8) {
    return "green";
  } else if (score >= 5) {
    return "orange";
  } else {
    return "red";
  }
}
