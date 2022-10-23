    // Element selectors
const timerEl = document.getElementById('timer');
const questionEl = document.getElementById('question-text');
const ansOneEl = document.getElementById('opt-one');
const ansTwoEl = document.getElementById('opt-two');
const ansThreeEl = document.getElementById('opt-three');
const ansFourEl = document.getElementById('opt-four');
const feedbackEl = document.getElementById('feedback');
const ansAreaEl = document.getElementById('answer-area');


    // Global variables
let rightAnswers = 0;
let wrongAnswers = 0;
let isOver = false;
let timer;
let timerCount;

    // The quiz array; each question in an object, with the 'answers' key being an array of objects
        //the correct answer has a second key/value pair used to identify it
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


// functions and logic will go here
// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
// function startTimer() {
//     // Sets timer
//     timer = setInterval(function() {
//       timerCount--;
//       timerEl.textContent = timerCount;
//       if (timerCount >= 0) {
//         // Tests if win condition is met
//         if (isOver && timerCount > 0) {
//           // Clears interval and stops timer
//           clearInterval(timer);
//         //   winGame();
//         }
//       }
//       // Tests if time has run out
//       if (timerCount === 0) {
//         // Clears interval
//         clearInterval(timer);
//         timerEl.textContent = 0;
//         // loseGame();
//       }
//     }, 1000);
//   }

    // Given an index, puts its question/answers on the screen
function setQuestion(index) {
    questionEl.textContent = quiz[index].question;
    ansOneEl.textContent = quiz[index].answers[0].text;
    ansTwoEl.textContent = quiz[index].answers[1].text;
    ansThreeEl.textContent = quiz[index].answers[2].text;
    ansFourEl.textContent = quiz[index].answers[3].text;
}


function printEnd() {
    console.log(`game over`, rightAnswers, wrongAnswers);
}

// given the index of the quiz array, this will return the text of the correct answer (for matching)
function getCorrectAns(index) {
    const q = quiz[index];
    for (a of q.answers) {
        if (a.isCorrect) {
            return a.text;
        }
    }
}

// timerCount = 10
// startTimer();

let i = 0;
setQuestion(i);

ansAreaEl.addEventListener('click', function(event) {
    const selected = event.target;
    if (selected.matches("p") && !isOver) {
        if (selected.textContent === getCorrectAns(i)) {
            feedbackEl.textContent = `Correct!`;
            rightAnswers++;
        } else {
            feedbackEl.textContent = `Wrong`;
            // decerement timer
            wrongAnswers++;
        }
        i++;
        if (i < quiz.length) {
            setQuestion(i);
        } else {
            isOver = true;
            printEnd();
        }
        // setTimeout(feedbackEl.textContent = '', 1000);
    }
});


