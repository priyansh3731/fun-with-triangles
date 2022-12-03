const sideInput = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const outputE1 = document.querySelector("#output");

areaBtn.addEventListener("click" , areaCheck);


function areaCheck(){
    console.log("here");
    const area = (Number(sideInput[0].value) * Number(sideInput[1].value))/2;
    outputE1.innerText = "the area is : "+area;
}