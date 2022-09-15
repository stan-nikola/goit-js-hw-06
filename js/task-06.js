const inputCheck = document.querySelector("#validation-input");

inputCheck.addEventListener("blur", onInputSymbolCheck);

// const MIN_SYMBOLS = inputCheck.attributes[2].value;
const MIN_SYMBOLS = inputCheck.dataset.length;

function onInputSymbolCheck(event) {
  //   console.log(event.currentTarget.value.length);
  inputCheck.classList.add("invalid");

  if (event.currentTarget.value.length >= MIN_SYMBOLS) {
    inputCheck.classList.remove("invalid");
    return inputCheck.classList.add("valid");
  }
}

console.log(MIN_SYMBOLS);
