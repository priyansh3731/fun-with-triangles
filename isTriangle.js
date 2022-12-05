const inputs = document.querySelectorAll(".input");
const isTriangleBtn = document.querySelector("#is-triangle");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function isTriangle() {
  const sumOfAngles = calculateSumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (inputs[0].value == "" || inputs[1].value == "" || inputs[2].value == "") {
    outputEl.innerText = "Please fill all the feilds!";
  } else if (
    inputs[0].value > 0 &&
    inputs[1].value > 0 &&
    inputs[2].value > 0
  ) {
    if (sumOfAngles === 180) {
      outputEl.innerText = "Yay! The angles form a triangle.";
    } else {
      outputEl.innerText = "Ohh No!! The angles don't form a triangle!";
    }
  } else {
    outputEl.innerText = "The values can't be negative or zero!";
  }
}
isTriangleBtn.addEventListener("click", isTriangle);