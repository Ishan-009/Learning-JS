(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  const body = document.querySelector("body");
  body.addEventListener("click", function () {
    const randomColor = ["red", "blue", "yellow", "pink"];
    const randomIndex = Math.floor(Math.random() * randomColor.length);

    header.style.color = randomColor[randomIndex];
  });
})();
