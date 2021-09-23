//var testButton = document.getElementById('test-button');
//var h1 = document.getElementById('cap');

//testButton.addEventListener('click', buttonClick)

//function buttonClick() {
//    console.log("you clicked me eww")
//    h1.textContent = "we both know this is cap!!"
//}

//var testButtonEl = $('#test-button');
//var h1 = $('#cap');

//testButtonEl.on('click', buttonClick);

//function buttonClick() {
//    console.log('how dare u click me');
//    h1.text('how could click on me like that?!');
//}

var quizGame = document.querySelector('.quiz-game');
var quizGameQuestions = document.querySelector('.quiz-game-questions');
var gameResults = document.querySelector('.game-results');
var quizScoreCounter = document.querySelector('.quiz-score-counter');
var initials = document.querySelector('initials');
var score = document.querySelector('.score');
var resetButton = document.querySelector('.reset-button');
var timer = document.querySelector('.timer');
var timerText = document.querySelector('.timer-text');
var timerCount = document.querySelector('.timer-count');
var startButton = document.querySelector('.start-button');

var quizGameQuestions = [];


var quizGame = [ {
    question: "This is a value that deals with true or false.",
    
    option1: "A." + "boolean",
    option2: "B." + "string",
    option3: "C." + "function",
    option4: "D." + "method",

    rightAns: "A."
},

{
    question: "This value has something to do with quotations.",
   
    option1: "A." + "boolean",
    option2: "B." + "string",
    option3: "C." + "function",
    option4: "D." + "method",
    
    rightAns: "B."

},

{
    question: "This value has a lot to do with numbers.",
    
    option1: "A." + "boolean",
    option2: "B." + "string",
    option3: "C." + "numbers",
    option4: "D." + "method",

    rightAns: "C."

},

{
    question: "This value can be used to make lists.",
    
    option1: "A." + "boolean",
    option2: "B." + "string",
    option3: "C." + "numbers",
    option4: "D." + "array",
    
    rightAns: "D."

}
];

var questionNumber = 1
var score = 100
var indexNumber = 0


//when the button clicks the game starts
startButton.addEventListener('click', startGame())
resetButton.addEventListener('click', startGame())

//the function that starts the game
function startGame() {

    
    startTimer()
    

}

//the function for the timer
function startTimer() {
    var time = 10;
    var timer = setInterval(function() {
        timerCount.innerHTML='00'+time;
        time--;
        if (time < 0) {
            clearInterval(timer);
        }
    }, 1000);
    
  
}

//the function that handles the questions and answers
function randomQuestions() {

    if (quizGameQuestions.length <= 3) {
        
        if (quizGameQuestions.length <= 3) {
            var random = quizGame[Math.floor(Math.random() * quizGame.length)]
            if (!quizGameQuestions.includes(random)) {
                quizGameQuestions.push(random)
            }
        }
    }

}

function newQuestion(index) {
    randomQuestions()
    var currentQuestion = quizGameQuestions[index]
}



//the function that displays the score
function finalScore() {

}

function gameOver () {
    if ( timer === 0) {
        window.alert('game over');
    }
}

// resetting the game at the end 
function resetGame() {
    startGame()
}

