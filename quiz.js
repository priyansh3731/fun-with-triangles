const quizform = document.querySelector(".quiz-form");
const submitAnserBtn = document.querySelector("#submit-answer-btn");
const outputE1 = document.querySelector("#output");

const correctAnswer = ["90°","right angled"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizform);
    for(let value of formResults.values()){
        if(value === correctAnswer[index]){
            score++;
        }
        index++;
    }
    outputE1.innerText = "your score is "+score;
}

submitAnserBtn.addEventListener("click", calculateScore)