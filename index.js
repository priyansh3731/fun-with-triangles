const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn")
const outputE1 = document.querySelector("#output");

function isTriangle(){
    const sumOfAngle = Number(inputs[0].value)+Number(inputs[1].value)+Number(inputs[2].value);
    if(sumOfAngle===180){
        outputE1.innerText = "yay,the angles form a triangle";
    }else{
        outputE1.innerText = "oh oh! the angles don't form a triangle";
    }
}


isTriangleBtn.addEventListener("click", isTriangle);