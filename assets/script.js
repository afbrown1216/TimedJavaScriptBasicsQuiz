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



//Question Arrays 
questionsObject = {
    questions : [
        "A very useful tool used during development and debugging for printing content to the debugger is:",
        "Commonly used data types DO NOT include:",
        "The condition in an if I else statement is enclosed within ___.",
        "Arrays in JavaScript can be used to store ____.",
        "String values must be enclosed within _____ when being assigned to variables.",
    ],
    answers: {
        q1: [
            "JavaScript",
            "terminal / bash",
            "for loops",
            "console.log"
        ],
        q2 :[
            "strings",
            "booleans",
            "alerts",
            "numbers"
        ],
        q3: [
            "quotes",
            "curly brackets",
            "parentheses",
            "square brackets"
        ],
        q4: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the abover"
        ],
        q5: [
            "commas",
            "curly brackets",
            "quotes",
            "parentheses"
        ],
    }
};



// timer 
var timeEl = document.getElementById("timer");



var secondsLeft = 75;
// function timer(){
//     var timerInterval = setInterval(function () {
//     secondsLeft--;
//     timeEl.textContent = "Time: " + secondsLeft; 
    
//     if(secondsLeft === 0 ){
//         clearInterval(timerInterval)
//         sendMessage();
//     }
    
//     }, 1000)
// }

function sendMessage() {
    alert("Sorry you do not know your JavaScript")
}

// timer();

startQuizBtn.addEventListener("click",function startQuiz(){
    console.log("clicked")
    var display = introEl.getAttribute("display")
        //toggle display 
        //take out intro 
        introEl.setAttribute("display","none");
        //bring in questions 
        quizEl.setAttribute("display","block");
    
   
    //add question 1 
    questEl.textContent = questionsObject.questions[0];
    // add the answer buttons 
    
    for( var i = 0; i < questionsObject.answers.q1.length; i++ ){
    
        //create element 
        var li = document.createElement("li");
        //text content 
        li.setAttribute("id", i);

        var btn = document.createElement("button");
        btn.textContent = questionsObject.answers.q1[i];
        btn.setAttribute("id", i);
        
        //append element
        answerChoiceEl.append(li);
        li.append(btn);

       
    }

    

   console.log("done for now")

} );




//onclick event listeners 


// toggle the intro,quiz, form and highscore table in and out of view 
// 1. Create an element 
// 2. Add content 
// 3. Append it to an existing element 

