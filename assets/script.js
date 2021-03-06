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
var scoreListEl = document.getElementById("scoreList");
var hSBtnEl = document.getElementById("clearScores");
var submitScore = document.getElementById("hSSubmit");
var timeEl = document.getElementById("timer");


var currentQuestion = 0;

//Question Array
var questionsObject = [
    {
      question:"A very useful tool used during development and debugging for printing content to the debugger is:",
      answers: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      correct: "console.log"
    },
    {
        question:"Commonly used data types DO NOT include:",
        answers: ["strings", "booleans", "alerts", "numbers"]
      },
    {
        question:"The condition in an if/else statement is enclosed within ___.",
        answers: ["quotes", "curly brackets", "parentheses", "square brackets"]
      },
    {
        question:"Arrays in JavaScript can be used to store ____.",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"]
      },
    {
        question:"String values must be enclosed within _____ when being assigned to variables.",
        answers: [ "commas", "curly brackets", "quotes", "parentheses"]
      },
      
    ]
// console.log(questionsObject[currentQuestion].question)
    
//Answers Array 
var correctAnswers = [ "console.log","booleans","parentheses","all of the above","quotes"];
// console.log(correctAnswers[1]);

// timer 

var secondsLeft = 100;

//score 
var score = 0;
//Functions 

function timer(){
    var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft; 

    if(secondsLeft === 0 ){
        clearInterval(timerInterval)
        quizEl.style.display = "none";
        formEl.style.display = "block";

        //create element 
        var h2 = document.createElement("h2");
        h2.textContent = "Game Over."
        var h3 = document.createElement("h3");
        h3.textContent = "Final Score: " + score;
        
        finalScoreEl.append(h2);
        h2.append(h3);
    }

    }, 1000)
};



// timer();

startQuizBtn.addEventListener("click", startQuiz());

function startQuiz(){
  //start time
  generateNextQuestion()
}


function generateNextQuestion() {
    //start timer 
    // timer();
    //toggle display 
    //take out intro 
    introEl.innerHTML = ""
    //bring in questions 
    quizEl.style.display = "block";
    answerChoiceEl.innerHTML = "";
    choiceEl.innerHTML = "";

    //add question 1 
    questEl.textContent = questionsObject[currentQuestion].question;
    // add the answer buttons 

    for (var i = 0; i < questionsObject[currentQuestion].answers.length; i++) {

        //create element 
        var li = document.createElement("li");
        //text content 
        li.setAttribute("id", i);
        li.setAttribute("class", "nextQ");

        var btn = document.createElement("button");
        btn.textContent = questionsObject[currentQuestion].answers[i];
        btn.setAttribute("id", i);
        btn.setAttribute("class","nextQ");
        btn.setAttribute('value', questionsObject[currentQuestion].answers[i] )
      btn.onclick = questionClicked

        //append element
        answerChoiceEl.append(li);
        li.append(btn);
        
    }
   // currentQuestion++
  //  score = secondsLeft;

};

//btn click event answer 
function questionClicked (){
  console.log(this.value);
  var val = this.value;
  if(val === correctAnswers[currentQuestion]){
    //choiceEl.setAttribute("style", "display: block")
    var p = document.createElement("p");
    p.textContent= 'Correct';
    choiceEl.append(p);
    score = score +1
  }else {
    var p = document.createElement("p");
    p.textContent= 'Incorrect';
    choiceEl.append(p);
    score = score - 1
    secondsLeft = secondsLeft - 10
  }

  currentQuestion ++

  if( currentQuestion === questionsObject.length || secondsLeft <= 0 ) {
      quizEnd();

  } else {
    generateNextQuestion();
  }

 


}

function quizEnd () {
  console.log("End of Quiz")
  quizEl.style.display = "none";
        formEl.style.display = "block";

        //create element 
        var h2 = document.createElement("h2");
        h2.textContent = "Game Over."
        var h3 = document.createElement("h3");
        h3.textContent = "Final Score: " + score;
        
        finalScoreEl.append(h2);
        h2.append(h3);
}


   //next question event listener 
   //answerChoiceEl.addEventListener("click",
  //  function nextQuestion(event) {
  //      //check answer 
  //     //  console.log(this);
  //     //  event.target.nodeValue
  //     //  for ( var i = 0; i < 4; i++ ){
  //     //    if (correctAnswers[i] === event.target.value  )
  //     //  };

  //      //clear the question and answer choices
  //      answerChoiceEl.innerHTML = "";
  //      questEl.innerHTML = "";

  //      //add new question 
  //      questEl.textContent = questionsObject[currentQuestion].question;

  //      //add new answers 
  //      for (var i = 0; i < questionsObject[currentQuestion].answers.length; i++) {

  //       //create element 
  //       var li = document.createElement("li");
  //       //text content 
  //       li.setAttribute("id", i);
  //       li.setAttribute("class", "nextQ");

  //       var btn = document.createElement("button");
  //       btn.textContent = questionsObject[currentQuestion].answers[i];
  //       btn.setAttribute("id", i);
  //       btn.setAttribute("class","nextQ");
  //       //btn.addEventListener("click",questionClicked() );
  //       btn.setAttribute('value', questionsObject[currentQuestion].answers[i] )
  //       btn.onclick = questionClicked

  //       //append element
  //       answerChoiceEl.append(li);
  //       li.append(btn);
        
  //       score = secondsLeft;
        
  //       if (i === questionsObject[currentQuestion].answers.length ){
  //           quizEl.style.display = "none";
  //           formEl.style.display = "block";

  //           //create element 
  //           var h2 = document.createElement("h2");
  //           h2.textContent = "Game Over."
  //           var h3 = document.createElement("h3");
  //           h3.textContent = "Final Score: " + score;
            
  //           finalScoreEl.append(h2);
  //           h2.append(h3);

  //       }
  //   }
    
  //   //check the answer 
    
  //   currentQuestion++;
    
  //  } )

//function 

// store highschore 
function highscoreForm (event) {
  event.preventDefault();
  console.log("clicked");
  var nameHighScore = document.getElementById("intials").value;
 console.log(nameHighScore);
  if (nameHighScore === ""){
    alert("High Score cannot be blank");
    return;
  }

  // localStorage.setItem("initals", nameHighScore);

  

}


function getScores () {
  //create element 
  li = document.createElement("li");
  var scoreList = localStorage.getItem("initals");
  //text content 
  li.textContent = scoreList;
  //append 
  scoreListEl.append(li);
}

function clearScore () {
  var highscore = localStorage.clear 
}
//onclick event listeners 

hSBtnEl.addEventListener("click", clearScore);
submitScore.addEventListener("click", highscoreForm);

answerChoiceEl.addEventListener("click", function (event) {
  event.preventDefault();

})





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
        