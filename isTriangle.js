const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputE1 = document.querySelector("#output");


hypotenuseBtn.addEventListener("click",calculateHypotenuse);


function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
    console.log(sumOfSquares);
    outputE1.innerText = "the hypotenuse is "+Math.sqrt(sumOfSquares);
}

function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}