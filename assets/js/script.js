document.getElementById("start-quiz").addEventListener("click", function () {
  document.getElementById("user-info").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
});

let currentQuestionIndex = 0;
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
    options: ["Mumbai", "Banglore", "Hyderabad", "Chennai"],
    answer: "Banglore",
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
    options: ["Maharashtra", "Gujrat", "Tamil Nadu", "Kerala"],
    answer: "Gujrat",
  },
];

function loadQuestion() {
  let questionObj = questions[currentQuestionIndex];
  let questionContainer = document.getElementById("question-container");
}
