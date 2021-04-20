let inputWeight = document.getElementById("input-input");
let outputWeight = document.getElementById("output-input");
let button = document.getElementById("submit-button");
let inputDropdown = document.getElementById("input-select");
let outputDropdown = document.getElementById("output-select");

button.addEventListener("click", () => {
  // grams to ounces = grams / 28.34952
  if (inputDropdown.value === "grams" && outputDropdown.value === "ounces") {
    outputWeight.value = inputWeight.value / 28.34952;
    // grams to pounds = grams / 453.59237
  } else if (
    inputDropdown.value === "grams" &&
    outputDropdown.value === "pounds"
  ) {
    outputWeight.value = inputWeight.value / 453.59237;
    // ounces to grams = ounces * 28.34952
  } else if (
    inputDropdown.value === "ounces" &&
    outputDropdown.value === "grams"
  ) {
    outputWeight.value = inputWeight.value * 28.34952;
    // ounces to pounds = ounces / 16
  } else if (
    inputDropdown.value === "ounces" &&
    outputDropdown.value === "pounds"
  ) {
    outputWeight.value = inputWeight.value / 16;
    // pounds to grams = pounds * 453.59237
  } else if (
    inputDropdown.value === "pounds" &&
    outputDropdown.value === "grams"
  ) {
    outputWeight.value = inputWeight.value * 453.59237;
    // pounds to ounces = pounds * 16
  } else if (
    inputDropdown.value === "pounds" &&
    outputDropdown.value === "ounces"
  ) {
    outputWeight.value = inputWeight.value * 16;
  }
});
