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