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

let boxEl;
function createBoxes() {
  let startSize = 30;
  for (let i = 0; i < refs.input.value; i += 1) {
    boxEl = document.createElement("div");
    boxContainer.appendChild(boxEl);

    boxEl.style.backgroundColor += getRandomHexColor();
    startSize += 10;

    boxEl.style.width = `${startSize}px`;
    boxEl.style.height = `${startSize}px`;
  }

  console.log(boxEl);
  console.log(refs.input.value);
}

function destroyBoxes() {
  boxContainer.innerHTML = "";
}
