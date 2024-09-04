//Event listener to start quiz
document.getElementById("start-quiz").addEventListener("click", function () {
  document.getElementById("user-info").style.display = "none";
  document.getElementById("quiz-content").style.display = "block";
  loadQuestion();
});

let currentQuestionIndex = 0; //Track the current question
let score = 0; //To track the correct answers
// List quiz questions, options, and correct answers
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
    answer: "8",
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

//functions to load and display current questions
function loadQuestion() {
  let questionObj = questions[currentQuestionIndex];
  let questionContainer = document.getElementById("question-container");
  let feedbackDiv = document.getElementById("feedback");
  let feedbackText = document.getElementById("feedback-text");
  let correctAnswerText = document.getElementById("correct-answer");

  //To hide the feedback before the game starts
  if (feedbackDiv) {
    feedbackDiv.style.display = "none";
  }
  feedbackText.textContent = "";
  correctAnswerText.textContent = "";

  //Display questions and the optiona
  questionContainer.innerHTML = `
    <p>${questionObj.question}</p>
    ${questionObj.options
      .map(
        (option, index) =>
          `<button class="option" data-option="${option}">${option}</button>`
      )
      .join("")}
  `;

  //add event listeners to the options
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

      document.querySelectorAll(".option").forEach((option) => {
        option.disabled = true;
      });

      //Show end quiz button if it is he last question
      if (currentQuestionIndex === questions.length - 1) {
        document.getElementById("end-quiz").style.display = "block";
        //hide next question button at the end of the quiz
        document.getElementById("next-question").style.display = "none";
      }
    });
  });
}

//event listener for next-question button
document.getElementById("next-question").addEventListener("click", function () {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    this.style.display = "none";
  } else {
    document.getElementById("end-quiz").style.display = "block";
  }
});

//event listener for end-quiz button
document.getElementById("end-quiz").addEventListener("click", function () {
  if (
    confirm(
      "Quiz Completed! Your score is " +
        score +
        "/" +
        questions.length +
        "! Play again?"
    )
  ) {
    location.reload();
  }
});
