const btn = document.querySelector("#btn");
const toasts = document.querySelector("#toasts");

const messages = [
  "Hello, World!",
  "I am Notification",
  "by SE-Designs",
  "Just to test JS",
  "and seems I like it",
  "and Just another message",
];

btn.addEventListener("click", createNotification);

function createNotification() {
  const notification = document.createElement("div");
  notification.classList.add("toast");
  notification.innerText = getRandomNotification();

  const progress = document.createElement("div");
  progress.classList.add("toast-progress");

  notification.appendChild(progress);
  toasts.appendChild(notification);

  setTimeout(() => {
    progress.style.width = "0%";
  }, 100);

  setTimeout(() => {
    notification.style.opacity = 0;
    setTimeout(() => {
      notification.remove();
    }, 500);
  }, 3000);
}

function getRandomNotification() {
  return messages[Math.floor(Math.random() * messages.length)];
}
