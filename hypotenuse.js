const sides = document.querySelectorAll(".side-length");
const button = document.querySelector("#hypotenues");
const outputEl = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenues() {
  const sumOfSquares = calculateSumOfSquares(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const lengtOfHypotenues = Math.sqrt(sumOfSquares).toFixed(2);
  if (sides[0].value === "" || sides[1].value === "") {
    outputEl.innerText = "Please fill the required details!";
  } else if (sides[0].value < 0 || sides[1].value < 0) {
    outputEl.innerText = "The value can't be negative or zero!";
  } else {
    outputEl.innerText = "The Length of Hypotenues is " + lengtOfHypotenues;
  }
}

button.addEventListener("click", calculateHypotenues);