function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorName = document.querySelector(".color");
const changColorBtn = document.querySelector(".change-color");

changColorBtn.addEventListener("click", onChangeColorClick);
colorName.textContent = "#ffffff";

function onChangeColorClick() {
  colorName.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
}
