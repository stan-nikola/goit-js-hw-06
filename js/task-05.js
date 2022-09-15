const refs = {
  input: document.querySelector("#name-input"),
  outputText: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", outputTextChange);

const DEFAULT_NAME = "Anonymous";

function outputTextChange(event) {
  if (event.currentTarget.value === "") {
    return (refs.outputText.textContent = DEFAULT_NAME);
  }
  refs.outputText.textContent = event.currentTarget.value;
}

// function outputTextChange(event) {
//   event.currentTarget.value === ""
//     ? (refs.outputText.textContent = DEFAULT_NAME)
//     : (refs.outputText.textContent = event.currentTarget.value);
// }

// function outputTextChange(event) {
//   if (event.currentTarget.value === "") {
//     refs.outputText.textContent = DEFAULT_NAME;
//   } else {
//     refs.outputText.textContent = event.currentTarget.value;
//   }
// }
