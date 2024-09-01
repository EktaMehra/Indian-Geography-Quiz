document.getElementById("start-quiz").addEventListener("click", function () {
  document.getElementById("user-info").style.display = "none";
  document.getElementById("quiz-content").style.display = "block";
  loadQuestion();
});

let currentQuestionIndex = 0;
let score = 0;
let questions = [
  {
    question: "1. What is the Capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Delhi",
  },
  {
    question: "2. Which is the largest state in India by area?",
    options: ["Maharashtra", "Madhya Pradesh", "Rajasthan", "Uttar Pradesh"],
    answer: "Rajasthan",
  },
  {
    question:
      "3. The tropic of Cancer passes through how many states in India? ",
    options: ["5", "6", "7", "8"],
    answer: "6",
  },
  {
    question: "4. Which river is also known as the 'Sorrow of Bengal'?",
    options: ["Ganges", "Yamuna", "Brahmaputra", "Damodar"],
    answer: "Damodar",
  },
  {
    question: "5. Which Indian state is known as the 'Spice Garden of India'",
    options: ["Karnataka", "Andhra Pradesh", "Tamil Nadu", "Kerala"],
    answer: "Kerala",
  },
  {
    question: "6. What is the highest peak in India?",
    options: ["Kanchenjunga", "K2", "Nanda Devi", "Mount Everest"],
    answer: "Kanchenjunga",
  },
  {
    question: "7.  Which city is known as the Sillicon Valley of India?",
    options: ["Mumbai", "Bangalore", "Hyderabad", "Chennai"],
    answer: "Bangalore",
  },
  {
    question: "8. What is the name of the longest river in India?",
    options: ["Brahmaputra", "Ganges", "Yamuna", "Godavari"],
    answer: "Ganges",
  },
  {
    question: "9. Which of these deserts are located in India?",
    options: ["Gobi", "Atacama", "Sahara", "Thar"],
    answer: "Thar",
  },
  {
    question: "10. Which Indian state has the longest coastline?",
    options: ["Maharashtra", "Gujarat", "Tamil Nadu", "Kerala"],
    answer: "Gujarat",
  },
];

function loadQuestion() {
  let questionObj = questions[currentQuestionIndex];
  let questionContainer = document.getElementById("question-container");
  let feedbackDiv = document.getElementById("feedback");
  let feedbackText = document.getElementById("feedback-text");
  let correctAnswerText = document.getElementById("correct-answer");

  if (feedbackDiv) {
    feedbackDiv.style.display = "none";
  }
  feedbackText.textContent = "";
  correctAnswerText.textContent = "";

  questionContainer.innerHTML = `
    <p>${questionObj.question}</p>
    ${questionObj.options
      .map(
        (option, index) =>
          `<div class="option" data-option="${option}">${option}</div>`
      )
      .join("")}
  `;

  document.querySelectorAll(".option").forEach((option) => {
    option.addEventListener("click", function () {
      let selectedOption = this.getAttribute("data-option");
      if (selectedOption === questionObj.answer) {
        score++;
        feedbackText.textContent = "Amazing, this is correct!";
        feedbackText.style.color = "green";
      } else {
        feedbackText.textContent = "Incorrect!";
        feedbackText.style.color = "red";
        correctAnswerText.textContent = `The correct answer is: ${questionObj.answer}`;
      }

      if (feedbackDiv) {
        feedbackDiv.style.display = "block";
      }
      document.getElementById("next-question").style.display = "block";
    });
  });
}

document.getElementById("next-question").addEventListener("click", function () {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    this.style.display = "none";
  } else {
    alert("Quiz Completed! Your score is " + score + "/" + questions.length);
  }
});
