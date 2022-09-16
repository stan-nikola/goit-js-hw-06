const inputRange = document.querySelector("#font-size-control");
const textLabel = document.querySelector("#text");

inputRange.addEventListener("input", onInputChange);

function onInputChange(value) {
  textLabel.style.fontSize = `${inputRange.value}px`;
  textLabel.style.color = `hsl(${inputRange.value}deg 100% 41%)`;
}
