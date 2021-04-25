let colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
let button = document.querySelector("button");

button.addEventListener("click", () => {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  console.log(randomColor);
  document.body.style.backgroundColor = randomColor;
});
