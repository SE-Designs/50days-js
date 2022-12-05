const btn = document.querySelectorAll("#btn");

btn.forEach((button) => {
  button.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;
    // console.log(x, y);
    const btnTop = e.target.offsetTop;
    const btnLeft = e.target.offsetLeft;
    // console.log(btnLeft, btnTop);
    const xInside = x - btnLeft;
    const yInside = y - btnTop;
    // console.log(xInside, yInside);
    const ripple = document.createElement("span");
    ripple.classList.add("circle");
    ripple.style.left = xInside + "px";
    ripple.style.top = yInside + "px";

    this.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 500);
  });
});
