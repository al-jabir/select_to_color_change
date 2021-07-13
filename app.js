const colors = [
  "purple",
  "red",
  "gold",
  "yellow",
  "black",
  "silver",
  "green",
  "lime",
  "grey",
  "lightblue",
  "orange",
];
const container = document.querySelector("section");
const h1 = document.querySelector("h1");
const selectColor = document.querySelector("#selectColor");

for (let color of colors) {
  const box = document.createElement("div");
  box.classList.add("box");

  container.appendChild(box);
  box.style.backgroundColor = color;

  box.addEventListener("click", function () {
    h1.innerText = "You have selected : ";
    selectColor.innerText = box.style.backgroundColor;
    selectColor.style.backgroundColor = box.style.backgroundColor;
  });
}
