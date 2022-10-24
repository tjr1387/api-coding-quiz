// Element selectors
const timerEl = document.getElementById('timer');
const questionEl = document.getElementById('question-text');
const ansOneEl = document.getElementById('opt-one');
const ansTwoEl = document.getElementById('opt-two');
const ansThreeEl = document.getElementById('opt-three');
const ansFourEl = document.getElementById('opt-four');
const feedbackEl = document.getElementById('feedback');
const ansAreaEl = document.getElementById('answer-area');
const startButton = document.getElementById('start-button');


// Global variables
let i = 0;

// For calculating final score
let rightAnswers = 0;
let finalScore = 0;

// Time related
let isOver = false;
let timer;
let timerCount;

// The quiz array; each question in an object, with the 'answers' key being an array of objects
    // The correct answer has a second key/value pair used to identify it
const quiz = [
    { question: "Which choice is NOT an HTML tag?",
      answers: [
        { text : "A) <h1>"},
        { text : "B) <script>"},
        { text : "C) <color>", isCorrect : true},
        { text : "D) <aside>"}
      ]
    },
    { question: "HTML stands for:",
      answers: [
        { text : "A) Hypertext Markup Language", isCorrect : true},
        { text : "B) Hypertext Main Language"},
        { text : "C) Hypermark Language"},
        { text : "D) Hypoterpene Myelin Labor"}
      ]
    },
    { question: "Which HTML element selector (tag) is used to create a link?",
      answers: [
        { text : "A) <link>"},
        { text : "B) <a>", isCorrect : true},
        { text : "C) <zelda>"},
        { text : "D) <input>"}
      ]
    },
    { question: "Which HTML element selector (tag) is 'self-closing' (doesn't have a closing tag)?",
      answers: [
        { text : "A) <script>"},
        { text : "B) <main>"},
        { text : "C) <h2>"},
        { text : "D) <img>", isCorrect : true}
      ]
    },
    { question: "Which CSS attribute is used to round corners of a box?",
      answers: [
        { text : "A) border-radius", isCorrect : true},
        { text : "B) box-shadow"},
        { text : "C) transform"},
        { text : "D) cursor"}
      ]
    },
    { question: "Pick the choice that is a CSS pseudo-class.",
      answers: [
        { text : "A) before"},
        { text : "B) hover", isCorrect : true},
        { text : "C) color"},
        { text : "D) margin"}
      ]
    },
    { question: "Which CSS selector is used to select everything?",
      answers: [
        { text : "A) all"},
        { text : "B) *", isCorrect : true},
        { text : "C) main"},
        { text : "D) meta"}
      ]
    },
    { question: "In JS, which keyword is used to set an immutable variable?",
      answers: [
        { text : "A) var"},
        { text : "B) let"},
        { text : "C) const", isCorrect : true},
        { text : "D) [no keyword needed]"}
      ]
    },
    { question: "In JS, what is the term for a set of key/value pairs?",
      answers: [
        { text : "A) dictionary"},
        { text : "B) array"},
        { text : "C) object", isCorrect : true},
        { text : "D) class"}
    ]
    },
    { question: "Given the array '[1, 2, 3, 4, 5]', which number is at index 3?",
      answers: [
        { text : "A) 1"},
        { text : "B) 2"},
        { text : "C) 3"},
        { text : "D) 4", isCorrect : true}
      ]
    }
];


// Function declarations

// Will trigger when start button is clicked; renders quiz and starts timer
function startGame() {
    isOver = false;
    timerCount = 45;
    startButton.disabled = true;
    document.getElementById('start-area').hidden = true;
    document.getElementById('quiz-game').hidden = false;
    setQuestion(i);
    startTimer();
}

// Starts the timer as well as ends the game in certain conditions
    // I yoinked this almost verbatim from the 'hangman' mini-project
function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount > 0) {
            if (isOver && timerCount > 0) {
                clearInterval(timer);
                endGame();
            }
        }
        // Has to factor in numbers below zero, in case there's a time decrement when the timer is already close to 0
        if (timerCount <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

// Two helper functions for the 'click' event listener (both will take the global 'i' variable as an argument):
    // Given an index, puts its question/answers on the into the appropriate elements
function setQuestion(index) {
    questionEl.textContent = quiz[index].question;
    ansOneEl.textContent = quiz[index].answers[0].text;
    ansTwoEl.textContent = quiz[index].answers[1].text;
    ansThreeEl.textContent = quiz[index].answers[2].text;
    ansFourEl.textContent = quiz[index].answers[3].text;
}

    // Given the index of the quiz array, this will return the text of the correct answer (for matching)
function getCorrectAns(index) {
    for (let ans of quiz[index].answers) {
        if (ans.isCorrect) {
            return ans.text;
        }
    }
}

// Ends the game by removing quiz elements and timer, tabulates final score, displays score submission form
function endGame() {
    document.getElementById('quiz-game').hidden = true;
    document.getElementById('game-over-form').hidden = false;
    finalScore = rightAnswers + timerCount;
    // The following is silly but it can happen in the case of a wrong answer (time decrement) when the timer is near 0
    if (finalScore < 0) {
        finalScore = 0;
    }
    document.getElementById('final-score').textContent = `Your final score is ${finalScore}.`
    timerEl.textContent = '';
}


// Event listeners

// Lots of logic here; I'm using the (targeted) click event to increment and loop through the quiz
ansAreaEl.addEventListener('click', function(event) {
    const selected = event.target;
    if (selected.matches("p") && !isOver) {
        if (selected.textContent === getCorrectAns(i)) {
            feedbackEl.textContent = `Correct!`;
            rightAnswers++;
        } else {
            feedbackEl.textContent = `Wrong`;
            timerCount = timerCount - 5;
        }
        i++;
        if (i < quiz.length) {
            setQuestion(i);
        } else {
            isOver = true;
        }
        // setTimeout(feedbackEl.textContent = '', 1000);
    }
});

// Starts the game (by calling the eponymous function) upon button click
startButton.addEventListener('click', startGame);

// Need a submit click event for the submit score form
document.querySelector('form').addEventListener('submit', function(event) {
    // event.preventDefault();
    storeEntry();
})

// This will grab the name from the input and the final score, and store it locally
function storeEntry() {
    // Build object for current score
    const scoreName = document.getElementById('name').value;
    const scoreObject = {name : scoreName, score: finalScore};
    // Grab your local storage item to see if theres anything in it (if it exists)
    const storedScores = JSON.parse(localStorage.getItem("scores"));
    if (!storedScores) {
        // If theres nothing in local storage, put the object you built in an array, then store it
        localStorage.setItem("scores", JSON.stringify([scoreObject]));
    } else {
        // If there are previous scores, append (push) the current score's object to the array, then store it
        storedScores.push(scoreObject);
        localStorage.setItem("scores", JSON.stringify(storedScores));
    }
}

