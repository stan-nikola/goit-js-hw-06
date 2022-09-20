function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorName = document.querySelector(".color");
const changColorBtn = document.querySelector(".change-color");

changColorBtn.addEventListener("click", onClickChangeColor);
colorName.textContent = "#ffffff";
function onClickChangeColor() {
  colorName.textContent = getRandomHexColor();
  document.body.style.backgroundColor = colorName.textContent;
}
