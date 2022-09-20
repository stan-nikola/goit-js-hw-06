const inputCheck = document.querySelector("#validation-input");

inputCheck.addEventListener("blur", onInputSymbolCheck);

// const MIN_SYMBOLS = inputCheck.attributes[2].value;
const SYMBOLS_LENGTH = Number(inputCheck.dataset.length);

function onInputSymbolCheck(event) {
  //   console.log(event.currentTarget.value.length);

  if (event.currentTarget.value.length === SYMBOLS_LENGTH) {
    inputCheck.classList.remove("invalid");
    return inputCheck.classList.add("valid");
  }
  inputCheck.classList.remove("valid");
  inputCheck.classList.add("invalid");
}
