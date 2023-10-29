const questions = [
    {
        question: "What is the capital of the United States?",
        answers: ["New York", "Los Angeles", "Chicago", "Washington, D.C."],
        correct: 3
    },
    {
        question: "Which state is known as the Sunshine State?",
        answers: ["Texas", "California", "Florida", "Nevada"],
        correct: 2
    },
    {
        question: "Who was the first President of the United States?",
        answers: ["Benjamin Franklin", "Thomas Jefferson", "George Washington", "John Adams"],
        correct: 2
    },
    {
        question: "Which river is the longest in the United States?",
        answers: ["Mississippi River", "Missouri River", "Colorado River", "Amazon River"],
        correct: 0
    },
    {
        question: "What year did the United States declare independence?",
        answers: ["1776", "1789", "1801", "1812"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const scoreElement = document.getElementById("scoreValue");
const nextButton = document.getElementById("next");

function loadQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    answersElement.innerHTML = "";

    for (let i = 0; i < current.answers.length; i++) {
        const answer = document.createElement("div");
        answer.textContent = current.answers[i];
        answer.addEventListener("click", () => checkAnswer(i));
        answersElement.appendChild(answer);
    }
}

function checkAnswer(selected) {
    const current = questions[currentQuestion];
    if (selected === current.correct) {
        score += 20;
    }

    // Highlight correct and incorrect answers
    for (let i = 0; i < current.answers.length; i++) {
        const answer = answersElement.children[i];
        if (i === current.correct) {
            answer.classList.add("correct");
        } else {
            answer.classList.add("incorrect");
        }
    }

    // Disable answers
    for (let i = 0; i < current.answers.length; i++) {
        answersElement.children[i].removeEventListener("click", () => checkAnswer(i));
    }

    scoreElement.textContent = score;
    nextButton.style.display = "block";
}

function nextQuestion() {
    nextButton.style.display = "none";
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        // Display final score and restart button
        questionElement.textContent = "Game Over";
        answersElement.innerHTML = "";
        nextButton.style.display = "none";

        const restartButton = document.createElement("button");
        restartButton.textContent = "Restart";
        restartButton.addEventListener("click", () => restartGame());
        answersElement.appendChild(restartButton);
    }
}

function restartGame() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

loadQuestion();
nextButton.addEventListener("click", nextQuestion);
