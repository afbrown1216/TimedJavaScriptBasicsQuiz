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
var btnEl = document.getElementById("nextQ");

var currentQuestion = 0;

//Question Arrays 
questionsObject = {
    questions: [
        "A very useful tool used during development and debugging for printing content to the debugger is:",
        "Commonly used data types DO NOT include:",
        "The condition in an if/else statement is enclosed within ___.",
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
        q2: [
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
            "all of the above"
        ],
        q5: [
            "commas",
            "curly brackets",
            "quotes",
            "parentheses"
        ],
    }
};

//Answers Array 
var correctAnswers = [ 4,2,3,4,3 ];

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

startQuizBtn.addEventListener("click", function startQuiz() {
    //toggle display 
    //take out intro 
    introEl.innerHTML = ""
    //bring in questions 
    quizEl.style.display = "block";


    //add question 1 
    questEl.textContent = questionsObject.questions[currentQuestion];
    // add the answer buttons 

    for (var i = 0; i < questionsObject.answers.q1.length; i++) {

        //create element 
        var li = document.createElement("li");
        //text content 
        li.setAttribute("id", i);
        li.setAttribute("class", "nextQ");

        var btn = document.createElement("button");
        btn.textContent = questionsObject.answers.q1[i];
        btn.setAttribute("id", i);
        btn.setAttribute("class","nextQ");

        //append element
        answerChoiceEl.append(li);
        li.append(btn);
    }
    currentQuestion++

});

   //next question event listener 
   answerChoiceEl.addEventListener("click",function nextQuestion() {
       //clear the question and answer choices
       answerChoiceEl.innerHTML = "";
       questEl.innerHTML = "";

       //add new question 
       questEl.textContent = questionsObject.questions[currentQuestion];

       //add new answers 
       for (var i = 0; i < questionsObject.answers.q2.length; i++) {

        //create element 
        var li = document.createElement("li");
        //text content 
        li.setAttribute("id", i);
        li.setAttribute("class", "nextQ");

        var btn = document.createElement("button");
        btn.textContent = questionsObject.answers.q2[i];
        btn.setAttribute("id", i);
        btn.setAttribute("class","nextQ");

        //append element
        answerChoiceEl.append(li);
        li.append(btn);
    }
    currentQuestion++;
    
   } )



//onclick event listeners 


// toggle the intro,quiz, form and highscore table in and out of view 
// 1. Create an element 
// 2. Add content 
// 3. Append it to an existing element 


//for answers 
/* get attribute index of li/btn compare to array of correct answer choices 
if correct then make correct appear if not make wrong appear
*/


// currentquestionIndex = 
// var element = event.target;
 // if (element.matches("button") === true) {
        //     // Get its id and compare to the correct answer if correct Right Appears 
        //     var index = element.parentElement.getAttribute("id");
        //     if (index === correctAnswers[0]){
        //         var correct = document.createElement("p");
        //         correct.textContent = "Correct";
        //         correct.setAttribute("font-style", "italic");
        //         document.getElementById("rightWrong").append(correct);
        //     }else {
        //         var wrong = document.createElement("p");
        //         wrong.textContent = "Wrong";
        //         wrong.setAttribute("font-style", "italic");
        //         document.getElementById("rightWrong").append(wrong);
        //     }

        //     questEl.textContent = "";
        //     answerChoiceEl.innerHTMLn = "";
        //     questEl.textContent = questionsObject.questions[1];
           

           

        //     for (var i = 0; i < questionsObject.answers.q2.length; i++) {
        //         console.log(questionsObject.answers.q2[i]);
        //         btnEl.textContent = questionsObject.answers.q2[i];
        //     }


        // }
        