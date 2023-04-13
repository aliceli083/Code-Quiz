var timer;
var questionIndex = 0;
var score = 0;
var timeLeft = 90;

// DOM

var startBtn = document.getElementById("startBtn");
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var timeEl = document.getElementById("timer");
var resultsEl = document.getElementById("result");
var initialsEl = document.getElementById("initials");
var saveBtn = document.getElementById("saveBtn");
var totalTime = document.getElementById("totalTime");
var questions = [
    {
        question: "add later",
        choices: ["add later","more", "stuff"],
        answer: "add later"
    },
    {
        question: "add later",
        choices: ["add later","more", "stuff"],
        answer: "add later"
    },
    {
        question: "add later",
        choices: ["add later" ,"more", "stuff"],
        answer: "add later"
    },
    {
        question: "add later",
        choices: ["add later","more", "stuff"],
        answer: "add later"
    }
];
var timerID;
var index = 0;
function startQuiz() {
    timerID = setInterval(countdown, 1000);
    startBtn.style.display = "none";
    displayQuestion()
};
function countdown() {
    timeLeft--
    if (timeLeft < 0) {
        timeLeft = 0;
        clearInterval (timerID);
    }
    
    totalTime.textContent = timeLeft;
   
}


function displayQuestion() {
    questionEl.textContent = questions[index].question;
    
    choicesEl.innterHTML = "";
    questions[index].choices.forEach(function (choices) {
        var choiceBtn = document.createElement("checkbox");
        var brk= document.createElement("br");
        choiceBtn.textContent= choices;
        choiceBtn.addEventListener("click", checkAnswer);
        choicesEl.appendChild(choiceBtn);
        choicesEl.appendChild(brk);
    })
};

function checkAnswer(event) {
    var selectedChoice = event.textContent;
    var Answer = questions.answer;
    if (selectedChoice === Answer) {
        resultsEl.textContent = "Correct";
    }
    else {
        resultsEl.textContent = "Incorrect";
        timeLeft = -10;
        if (timeLeft < 0) {
            timeLeft = 0;
            clearInterval (timerID);
        }
    }
}

startBtn.addEventListener("click", startQuiz);


