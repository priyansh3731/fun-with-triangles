const sides = document.querySelectorAll(".sides");
const button = document.querySelector("#area-of-triangle");
const outputEl = document.querySelector("#output");

function applyFormula(x, y) {
  const areaOfTriangle = x * y;
  return areaOfTriangle;
}

function calculateAreaOfTriangle() {
  const areaOfTriangle = applyFormula(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const finalArea = (areaOfTriangle / 2).toFixed(2);
  if (sides[0].value === "" || sides[1].value === "") {
    outputEl.innerText = "Please fill the required details!";
  } else if (sides[0].value > 0 || sides[1].value > 0) {
    outputEl.innerText = "The Area Of Triangle Is : " + finalArea;
  } else {
    outputEl.innerText = "The value can't be negative or zero!";
  }
}

button.addEventListener("click", calculateAreaOfTriangle);