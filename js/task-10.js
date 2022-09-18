function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector("#controls");
const boxContainer = document.querySelector("#boxes");
const refs = {
  input: controls.firstElementChild,
  create: controls.children[1],
  destroy: controls.lastElementChild,
};

refs.input.addEventListener("blur", () => {
  return refs.input.value;
});

refs.destroy.addEventListener("click", destroyBoxes);
refs.create.addEventListener("click", createBoxes);

function createBoxes() {
  let fragment = document.createDocumentFragment();

  for (let i = 0; i < refs.input.value; i += 1) {
    const boxEl = document.createElement("div");

    boxEl.style.backgroundColor += getRandomHexColor();
    boxEl.style.width = 30 + i * 10 + "px";
    boxEl.style.height = 30 + i * 10 + "px";
    fragment.appendChild(boxEl);
  }
  boxContainer.appendChild(fragment);
}

function destroyBoxes() {
  boxContainer.innerHTML = "";
}
