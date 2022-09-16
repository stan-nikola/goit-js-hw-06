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

refs.input.addEventListener("blur", createBoxes);
refs.destroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let startSize = 30;
  for (let i = 0; i < amount.currentTarget.value; i += 1) {
    const boxEl = document.createElement("div");
    refs.create.addEventListener("click", () => {
      boxContainer.appendChild(boxEl);
      boxEl.style.backgroundColor += getRandomHexColor();
      startSize += 10;

      boxEl.style.width = `${startSize}px`;
      boxEl.style.height = `${startSize}px`;

      console.log();
    });
  }
}

function destroyBoxes() {
  boxContainer.remove();
}

console.log(boxContainer);

// refs.create.addEventListener("click", createBoxes);
// refs.destroy.addEventListener("click", destroyBoxes);

// function createBoxes(amount) {
//   let startSize = 30;
//   for (let i = 0; i < amount.currentTarget.value; i += 1) {
//     const boxEl = document.createElement("div");
//     boxContainer.appendChild(boxEl);
//     boxEl.style.backgroundColor += getRandomHexColor();
//     startSize += 10;

//     boxEl.style.width = `${startSize}px`;
//     boxEl.style.height = `${startSize}px`;
//   }
// }

// function destroyBoxes() {
//   boxContainer.remove();
// }
