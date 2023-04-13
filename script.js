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
        question: "what is 10 + 10?",
        choices: ["10", "20", "30", "40"],
        answer: "20"
    },
    {
        question: "How many legs are on a spider?",
        choices: ["2", "4", "6", "8"],
        answer: "8"
    },
    {
        question: "Is JavaScript confusing?",
        choices: ["no", "kind of", "a little", "yes"],
        answer: "yes"
    },
    {
        question: "Was this assignment hard?",
        choices: ["yes", "no", "very time consuming", "very hard"],
        answer: "very hard"
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
        clearInterval(timerID);
    }

    totalTime.textContent = timeLeft;

}


function displayQuestion() {
    questionEl.textContent = questions[questionIndex].question;

    choicesEl.innterHTML = "";
    questions[questionIndex].choices.forEach(function (choices) {
        var choiceBtn = document.createElement("button");
        var brk = document.createElement("br");
        choiceBtn.textContent = choices;
        choiceBtn.addEventListener("click", checkAnswer);
        choicesEl.appendChild(choiceBtn);
        choicesEl.appendChild(brk);
    })
};


function checkAnswer(event) {
    var selectedChoice = event.target.textContent;
    var Answer = questions[questionIndex].answer;
    if (selectedChoice === Answer) {
        resultsEl.textContent = "Correct";
    }
    else {
        resultsEl.textContent = "Incorrect";
        timeLeft -= 10;
        if (timeLeft < 0) {
            timeLeft = 0;
            clearInterval(timerID);
        }
    }
}

startBtn.addEventListener("click", startQuiz);

// questionIndex++
// if (questionIndex < questions.length) {
//    showQuestion();
// }
// else {
//     endQuiz();
// }
