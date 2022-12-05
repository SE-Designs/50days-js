const header = document.getElementById("header");
const title = document.getElementById("title");
const description = document.getElementById("description");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animatedBg = document.querySelectorAll(".animated-bg");
const animatedBgText = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>';
  title.innerHTML = "Lorem ipsum dolor";
  description.innerHTML =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit accusamus eum deserunt odit rerum ab!";
  profile_img.innerHTML =
    '<img src="https:randomuser.me/api/portraits/men/52.jpg" alt="" />';
  name.innerHTML = "John Doe";
  date.innerHTML = "Oct 08, 2012";

  animatedBg.forEach((bg) => bg.classList.remove("animated-bg"));
  animatedBgText.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
