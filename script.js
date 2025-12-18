const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            {text: "Madrid", correct: false},
            {text: "Berlin", correct: false},
            {text: "Paris", correct: true},
            {text: "Lisbon", correct: false}

        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            {text: "Earth", correct: false},
            {text: "Mars", correct: true},
            {text: "Jupiter", correct: false},
            {text: "Saturn", correct: false}    
        ]
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            {text: "Harper Lee", correct: true},
            {text: "Mark Twain", correct: false},
            {text: "F. Scott Fitzgerald", correct: false},
            {text: "Ernest Hemingway", correct: false}    
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            {text: "Atlantic Ocean", correct: false},
            {text: "Indian Ocean", correct: false},
            {text: "Arctic Ocean", correct: false},
            {text: "Pacific Ocean", correct: true}    
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            {text: "Au", correct: true},
            {text: "Ag", correct: false},
            {text: "Gd", correct: false},
            {text: "Go", correct: false}    
        ]
    },
      {
        question: "Which country hosted the 2016 Summer Olympics?",
        answers: [
            {text: "China", correct: false},    
            {text: "Brazil", correct: true},
            {text: "UK", correct: false},
            {text: "Russia", correct: false}    
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            {text: "Gold", correct: false},
            {text: "Iron", correct: false},
            {text: "Diamond", correct: true},
            {text: "Silver", correct: false}    
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            {text: "Vincent van Gogh", correct: false},
            {text: "Pablo Picasso", correct: false},
            {text: "Leonardo da Vinci", correct: true},
            {text: "Claude Monet", correct: false}    
        ]
    },
    {
        question: "What is the smallest prime number?",
        answers: [
            {text: "0", correct: false},
            {text: "1", correct: false},
            {text: "2", correct: true},
            {text: "3", correct: false}    
        ]
    },
    {
        question: "Which element has the atomic number 1?",
        answers: [
            {text: "Oxygen", correct: false},
            {text: "Hydrogen", correct: true},
            {text: "Helium", correct: false},
            {text: "Carbon", correct: false}    
        ]
    },
    {
        question: "In which year did the Titanic sink?",
        answers: [
            {text: "1912", correct: true},
            {text: "1905", correct: false},
            {text: "1918", correct: false},
            {text: "1920", correct: false}    
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            {text: "Elephant", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Giraffe", correct: false},
            {text: "Hippopotamus", correct: false}    
        ]
    },
    {
        question: "Who is known as the 'Father of Computers'?",
        answers: [
            {text: "Alan Turing", correct: false},
            {text: "Charles Babbage", correct: true},
            {text: "John von Neumann", correct: false},
            {text: "Steve Jobs", correct: false}    
        ]
    },
    {
        question: "What is the main ingredient in traditional Japanese miso soup?",
        answers: [
            {text: "Tofu", correct: false},
            {text: "Miso paste", correct: true},
            {text: "Seaweed", correct: false},
            {text: "Rice", correct: false}    
        ]
    },
    {   
        question: "Which gas is most abundant in the Earth's atmosphere?",
        answers: [
            {text: "Oxygen", correct: false},
            {text: "Nitrogen", correct: true},
            {text: "Carbon Dioxide", correct: false},
            {text: "Hydrogen", correct: false}    
        ]
    }
       
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    resetState();
  
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
       
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
      
    nextButton.style.display = "block";
}
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    if (score === questions.length) {
        questionElement.innerHTML = "<br>Perfect Score! 🎉";
    }
    else if (score >= questions.length / 2) {
        questionElement.innerHTML += "<br>Well done! 👍you qualify the exam";
}
    else {
        questionElement.innerHTML += "<br>Better luck next time! 👎";
    }
}
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length ) {
        handleNextButton();
    } else {
        startQuiz();
    }
});
startQuiz() ;