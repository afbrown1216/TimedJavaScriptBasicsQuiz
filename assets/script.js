// variables 
var introEl = document.getElementById("intro");
var quizEl = document.getElementById("quiz");
var questEl = document.getElementById("question");
var answerChoiceEl = document.getElementById("answers");
var choiceEl = document.getElementById("rightWrong");
var finalScoreEl = document.getElementById("finalScore");
var formEl = document.getElementById("form");
var scoreEL = document.getElementById("scores");
var startQuizBtn = document.getElementById("startBtn");


// timer 
var timeEl = document.getElementById("timer");



var secondsLeft = 5;
function timer(){
    var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft; 
    
    if(secondsLeft === 0 ){
        clearInterval(timerInterval)
        sendMessage();
    }
    
    }, 1000)
}

function sendMessage() {
    alert("Sorry you do not know your JavaScript")
}

timer();

startQuizBtn.addEventListener("click", startQuiz());

function startQuiz(){
    var display = introEl.getAttribute("display")
    if (display === "block"){
        introEl.setAttribute("display","none")

    }
   

}

// toggle the intro,quiz, form and highscore table in and out of view 
// 1. Create an element 
// 2. Add content 
// 3. Append it to an existing element 