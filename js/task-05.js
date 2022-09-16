const refs = {
  input: document.querySelector("#name-input"),
  outputText: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onOutputTextChange);

const DEFAULT_NAME = "Anonymous";

function onOutputTextChange(event) {
  if (event.currentTarget.value === "") {
    return (refs.outputText.textContent = DEFAULT_NAME);
  }
  refs.outputText.textContent = event.currentTarget.value;
}

// function onOutputTextChange(event) {
//   event.currentTarget.value === ""
//     ? (refs.outputText.textContent = DEFAULT_NAME)
//     : (refs.outputText.textContent = event.currentTarget.value);
// }

// function onOutputTextChange(event) {
//   if (event.currentTarget.value === "") {
//     refs.outputText.textContent = DEFAULT_NAME;
//   } else {
//     refs.outputText.textContent = event.currentTarget.value;
//   }
// }
